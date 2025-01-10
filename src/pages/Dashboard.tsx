import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { format, subDays, parseISO } from 'date-fns';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch, fetchUserInfo, fetchTeamInfo } from '../store';
import { ArrowLeftIcon, ChartBarIcon, MapIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { ClipLoader } from 'react-spinners';
import { Skeleton } from '@/components/ui/skeleton';
import EmployeeCard1 from './EmployeeCard1';
import EmployeeDetails from './EmployeeDetails';
import DateRangeDropdown from './DateRangeDropdown';
import maplibregl, { Map as MapLibreMap, NavigationControl, Marker, Popup } from 'maplibre-gl';
import axios, { AxiosResponse } from 'axios';
import 'maplibre-gl/dist/maplibre-gl.css';
import EmployeeLocationList from './EmployeeLocationList';
import './Dashboard.css';

const API_BASE_URL = 'https://api.gajkesaristeels.in';
const MAP_STYLE_URL = 'https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json';
const OLA_CLIENT_ID = '7ba2810b-f481-4e31-a0c6-d436b0c7c1eb';
const OLA_CLIENT_SECRET = 'klymi04gaquWCnpa57hBEpMXR7YPhkLD';

type EmployeeLocation = {
  id: number;
  empId: number;
  empName: string;
  latitude: number;
  longitude: number;
  updatedAt: string;
  updatedTime: string;
};

type Visit = {
  id: number;
  employeeId: number;
  employeeFirstName: string;
  employeeLastName: string;
  employeeState: string;
  storeId: number;
  employeeName: string;
  purpose: string;
  storeName: string;
  visit_date: string;
  checkinTime: string;
  checkoutTime: string | null;
  statsDto: {
    completedVisitCount: number;
    fullDays: number;
    halfDays: number;
    absences: number;
  };
};

type StateCardProps = {
  state: string;
  totalEmployees: number;
  onClick: () => void;
};

const StateCard: React.FC<StateCardProps> = ({ state, totalEmployees, onClick }) => {
  return (
    <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" onClick={onClick}>
      <CardHeader>
        <CardTitle className="capitalize">{state || 'Unknown State'}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{totalEmployees}</p>
        <p className="text-sm text-muted-foreground">Total Employees</p>
      </CardContent>
    </Card>
  );
};

interface VisitResponse {
  statsDto: {
    visitCount: number;
    fullDays: number;
    halfDays: number;
    absences: number;
  };
  visitDto: Array<{
    id: number;
    storeName: string;
    checkinLatitude: number | null;
    checkinLongitude: number | null;
    visit_date: string;
    checkinTime: string;
    checkoutTime: string | null;
    purpose: string;
    city: string;
    state: string;
  }>;
}

const Dashboard: React.FC = () => {
  const [visits, setVisits] = useState<Visit[]>([]);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null);
  const [startDate, setStartDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [endDate, setEndDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [selectedOption, setSelectedOption] = useState('Today');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState<{
    statsDto: { completedVisitCount: number, fullDays: number, halfDays: number, absences: number } | null,
    visitDto: Visit[] | null
  } | null>(null);
  const [isMainDashboard, setIsMainDashboard] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);
  const [employeeInfo, setEmployeeInfo] = useState<any[]>([]);
  const [teamMembers, setTeamMembers] = useState<number[]>([]);
  const [employeeLocations, setEmployeeLocations] = useState<EmployeeLocation[]>([]);
  const [isMapLoading, setIsMapLoading] = useState(true);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [showMapLegend, setShowMapLegend] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);
  const role = useSelector((state: RootState) => state.auth.role);
  const teamId = useSelector((state: RootState) => state.auth.teamId);
  const username = useSelector((state: RootState) => state.auth.username);
  const router = useRouter();
  const { view, state, employee, startDate: queryStartDate, endDate: queryEndDate } = router.query;
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<MapLibreMap | null>(null);

  useEffect(() => {
    if (token && username && !role) {
      dispatch(fetchUserInfo(username));
    }
  }, [dispatch, token, username, role]);

  useEffect(() => {
    if (token) {
      getAccessToken();
      fetchEmployeeInfo();
    }
  }, [token]);

  useEffect(() => {
    if (token && role === 'MANAGER') {
      dispatch(fetchTeamInfo()).then((action) => {
        if (fetchTeamInfo.fulfilled.match(action) && action.payload) {
          const teamMemberIds = action.payload.fieldOfficers.map((officer: any) => officer.id);
          setTeamMembers(teamMemberIds);
        }
      });
    }
  }, [token, role, dispatch]);

  const fetchEmployeeInfo = useCallback(async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/employee/getAll`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setEmployeeInfo(response.data);
    } catch (error) {
      console.error('Error fetching employee info:', error);
    }
  }, [token]);

  const fetchVisits = useCallback(async (start: string, end: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/report/getCounts?startDate=${start}&endDate=${end}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch visits: ${response.statusText}`);
      }

      const data = await response.json();
      if (role === 'MANAGER') {
        const filteredData = data.filter((visit: Visit) => teamMembers.includes(visit.employeeId));
        setVisits(filteredData);
      } else {
        setVisits(data);
      }
    } catch (error) {
      console.error('Error fetching visits:', error);
      setVisits([]);
    } finally {
      setIsLoading(false);
    }
  }, [token, role, teamMembers]);

  const fetchEmployeeDetails = useCallback(async (employeeName: string, start: string, end: string) => {
    setIsLoading(true);
    try {
      // First try to find employee in employeeInfo
      const employee = employeeInfo.find(emp => 
        `${emp.firstName} ${emp.lastName}`.toLowerCase() === employeeName.toLowerCase()
      );

      // If not found in employeeInfo, try to find in visits
      const visitEmployee = visits.find(v => 
        `${v.employeeFirstName} ${v.employeeLastName}`.toLowerCase() === employeeName.toLowerCase()
      );

      const employeeId = employee?.id || visitEmployee?.employeeId;

      if (!employeeId) {
        console.error("Employee not found:", employeeName);
        throw new Error("Employee not found");
      }

      console.log("Fetching details for employee:", employeeName, "with ID:", employeeId);

      const response = await fetch(`${API_BASE_URL}/visit/getByDateRangeAndEmployeeStats?id=${employeeId}&start=${start}&end=${end}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch employee details: ${response.statusText}`);
      }

      const data = await response.json();
      setEmployeeDetails(data);
    } catch (error) {
      console.error('Error fetching employee details:', error);
      setEmployeeDetails(null);
    } finally {
      setIsLoading(false);
    }
  }, [token, visits, employeeInfo]);

  useEffect(() => {
    if (view === 'employeeDetails' && employee && queryStartDate && queryEndDate) {
      setSelectedEmployee(employee as string);
      setStartDate(queryStartDate as string);
      setEndDate(queryEndDate as string);
      fetchEmployeeDetails(employee as string, queryStartDate as string, queryEndDate as string);
    }
  }, [view, employee, queryStartDate, queryEndDate, fetchEmployeeDetails]);

  useEffect(() => {
    if (token && role) {
      fetchVisits(startDate, endDate);
    }
  }, [token, role, startDate, endDate, fetchVisits]);

  useEffect(() => {
    const { reset } = router.query;
    if (reset === 'true') {
      setSelectedState(null);
      setSelectedEmployee(null);
      setCurrentPage(1);
      router.replace('/Dashboard', undefined, { shallow: true });
    }
  }, [router.query, router]);

  const handleEmployeeLocationClick = useCallback((location: EmployeeLocation) => {
    if (map.current) {
      setShowMapLegend(true);
      // Clear existing markers
      map.current.getCanvasContainer().querySelectorAll('.maplibregl-marker').forEach((marker) => {
        marker.remove();
      });

      Promise.all([
        axios.get(`${API_BASE_URL}/employee/getById?id=${location.empId}`, {
          headers: { Authorization: `Bearer ${token}` }
        }),
        axios.get<VisitResponse>(`${API_BASE_URL}/visit/getByDateRangeAndEmployeeStats`, {
          headers: { Authorization: `Bearer ${token}` },
          params: {
            id: location.empId,
            start: startDate,
            end: endDate
          }
        })
      ]).then(([employeeResponse, visitsResponse]) => {
        const employeeData = employeeResponse.data;
        const employeeName = `${employeeData.firstName} ${employeeData.lastName}`;
        const visits = visitsResponse.data.visitDto;
        const bounds = new maplibregl.LngLatBounds();

        // Calculate bounds first
        bounds.extend([location.longitude, location.latitude]);
        if (employeeData.houseLatitude && employeeData.houseLongitude) {
          bounds.extend([employeeData.houseLongitude, employeeData.houseLatitude]);
        }
        visits.forEach(visit => {
          if (visit.checkinLatitude && visit.checkinLongitude) {
            bounds.extend([visit.checkinLongitude!, visit.checkinLatitude!]);
          }
        });

        // Fit map immediately
        if (!bounds.isEmpty()) {
          map.current!.fitBounds(bounds, {
            padding: { top: 100, bottom: 100, left: 100, right: 100 },
            duration: 0
          });
        }

        // Add visit location pins with click popups
        visits.forEach((visit, index) => {
          if (visit.checkinLatitude && visit.checkinLongitude) {
            const visitMarker = new Marker({ color: '#3B82F6' })
              .setLngLat([visit.checkinLongitude!, visit.checkinLatitude!])
              .addTo(map.current!);
            
            const visitPopup = new Popup({
              closeButton: false,
              closeOnClick: false,
              className: 'map-popup',
              offset: [0, -10]
            });

            visitMarker.getElement().addEventListener('click', () => {
              // Remove any existing popups first
              map.current!.getCanvasContainer().querySelectorAll('.maplibregl-popup').forEach((popup) => {
                popup.remove();
              });

              visitPopup
                .setLngLat([visit.checkinLongitude!, visit.checkinLatitude!])
                .setHTML(`
                  <div class="popup-card">
                    <div class="popup-header">
                      <div class="popup-title-wrapper">
                        <div class="popup-title">
                          ${employeeName}
                          <div class="popup-badge visit">Visit #${index + 1}</div>
                        </div>
                      </div>
                    </div>
                    <div class="popup-body">
                      <div class="popup-info">
                        <div class="info-group">
                          <div class="store-name">${visit.storeName}</div>
                        </div>
                        <div class="time-info">
                          <div>Check-in Date: ${format(parseISO(visit.visit_date), 'MMM dd, yyyy')}</div>
                          <div>Check-in Time: ${format(parseISO(`${visit.visit_date}T${visit.checkinTime}`), 'h:mm a')}</div>
                          ${visit.checkoutTime ? 
                            `<div>Check-out: ${format(parseISO(`${visit.visit_date}T${visit.checkoutTime}`), 'h:mm a')}</div>` 
                            : '<div>Not checked out yet</div>'
                          }
                        </div>
                        ${visit.purpose ? `<div class="visit-purpose">${visit.purpose}</div>` : ''}
                        <div class="visit-location">${visit.city}, ${visit.state}</div>
                      </div>
                    </div>
                  </div>
                `)
                .addTo(map.current!);
            });
          }
        });

        // Add current location pin with click popup
        const currentMarker = new Marker({ color: '#22C55E' })
          .setLngLat([location.longitude, location.latitude])
          .addTo(map.current!);
        
        const currentPopup = new Popup({
          closeButton: false,
          closeOnClick: false,
          className: 'map-popup',
          offset: [0, -10]
        });

        currentMarker.getElement().addEventListener('click', () => {
          // Remove any existing popups first
          map.current!.getCanvasContainer().querySelectorAll('.maplibregl-popup').forEach((popup) => {
            popup.remove();
          });

          currentPopup
            .setLngLat([location.longitude, location.latitude])
            .setHTML(`
              <div class="popup-card">
                <div class="popup-header">
                  <div class="popup-title-wrapper">
                    <div class="popup-title">
                      ${employeeName}
                      <div class="popup-badge current">Current Location</div>
                    </div>
                  </div>
                </div>
                <div class="popup-body">
                  <div class="popup-info">
                    <div class="time-info">
                      <div>Last seen at ${format(parseISO(`${location.updatedAt}T${location.updatedTime}`), 'h:mm a')}</div>
                    </div>
                  </div>
                </div>
              </div>
            `)
            .addTo(map.current!);
        });

        // Add home location pin with click popup
        if (employeeData.houseLatitude && employeeData.houseLongitude) {
          const homeMarker = new Marker({ color: '#EF4444' })
            .setLngLat([employeeData.houseLongitude, employeeData.houseLatitude])
            .addTo(map.current!);
          
          const homePopup = new Popup({
            closeButton: false,
            closeOnClick: false,
            className: 'map-popup',
            offset: [0, -10]
          });

          homeMarker.getElement().addEventListener('click', () => {
            // Remove any existing popups first
            map.current!.getCanvasContainer().querySelectorAll('.maplibregl-popup').forEach((popup) => {
              popup.remove();
            });

            homePopup
              .setLngLat([employeeData.houseLongitude, employeeData.houseLatitude])
              .setHTML(`
                <div class="popup-card">
                  <div class="popup-header">
                    <div class="popup-title-wrapper">
                      <div class="popup-title">
                        ${employeeName}
                        <div class="popup-badge home">Home Location</div>
                      </div>
                    </div>
                  </div>
                  <div class="popup-body">
                    <div class="popup-info">
                      <div class="address">${employeeData.addressLine1 || 'Address not available'}</div>
                      <div class="location">${employeeData.city}, ${employeeData.state}</div>
                    </div>
                  </div>
                </div>
              `)
              .addTo(map.current!);
          });
        }
      });
    }
  }, [token, startDate, endDate]);

  const handleEmployeeClick = useCallback(async (employeeName: string) => {
    setSelectedEmployee(employeeName.trim().toLowerCase());
    router.push({
      pathname: '/Dashboard',
      query: {
        state: selectedState,
        employee: employeeName.trim().toLowerCase(),
      },
    }, undefined, { shallow: true });

    fetchEmployeeDetails(employeeName, startDate, endDate);
    
    const selectedLocation = employeeLocations.find(loc => 
      loc.empName.toLowerCase() === employeeName.trim().toLowerCase()
    );
    
    if (selectedLocation) {
      handleEmployeeLocationClick(selectedLocation);
    }
  }, [
    fetchEmployeeDetails, 
    router, 
    selectedState, 
    startDate, 
    endDate, 
    employeeLocations, 
    handleEmployeeLocationClick
  ]);

  const handleDateRangeChange = useCallback((start: string, end: string, option: string) => {
    setStartDate(start);
    setEndDate(end);
    setSelectedOption(option);

    if (selectedEmployee) {
      fetchEmployeeDetails(selectedEmployee, start, end);
      
      const selectedLocation = employeeLocations.find(loc => 
        loc.empName.toLowerCase() === selectedEmployee.toLowerCase()
      );
      
      if (selectedLocation) {
        handleEmployeeLocationClick(selectedLocation);
      }
    } else {
      fetchVisits(start, end);
    }
  }, [
    fetchEmployeeDetails, 
    fetchVisits, 
    selectedEmployee, 
    employeeLocations, 
    handleEmployeeLocationClick
  ]);

  const handleViewDetails = useCallback((visitId: number) => {
    router.push({
      pathname: `/VisitDetailPage/${visitId}`,
      query: {
        returnTo: 'employeeDetails',
        employeeId: selectedEmployee,
        startDate: startDate,
        endDate: endDate,
      },
    });
  }, [router, selectedEmployee, startDate, endDate]);

  const getAccessToken = useCallback(async () => {
    try {
      const response = await axios.post(
        'https://account.olamaps.io/realms/olamaps/protocol/openid-connect/token',
        new URLSearchParams({
          grant_type: 'client_credentials',
          scope: 'openid',
          client_id: OLA_CLIENT_ID,
          client_secret: OLA_CLIENT_SECRET
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
      setAccessToken(response.data.access_token);
    } catch (error) {
      console.error('Error getting access token:', error);
    }
  }, []);

  const handleStateClick = useCallback((state: string) => {
    setSelectedState(state.trim().toLowerCase() || 'unknown');
    setSelectedEmployee(null);
    setIsMainDashboard(false);
    router.push({
      pathname: '/Dashboard',
      query: { state: state.trim().toLowerCase() || 'unknown' },
    }, undefined, { shallow: true });
  }, [router]);

  const handleBackToMainDashboard = useCallback(() => {
    setSelectedState(null);
    setSelectedEmployee(null);
    setIsMainDashboard(true);
    setMapError(null);
    setShowMapLegend(false);
    fetchAllEmployeeLocations();
    router.push('/Dashboard', undefined, { shallow: true });
  }, [router]);

  const initializeMap = useCallback(async (locations: EmployeeLocation[]) => {
    if (!mapContainer.current || !accessToken) return;

    try {
      // Clear existing map
      if (map.current) {
        map.current.remove();
        map.current = null;
      }

      const styleResponse = await axios.get(MAP_STYLE_URL, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      const style = styleResponse.data;

      style.layers = style.layers.filter((layer: any) =>
        !['poi-vectordata', 'poi'].includes(layer.id)
      );

      // Create new map instance
      map.current = new MapLibreMap({
        container: mapContainer.current,
        style: style,
        center: [78.9629, 20.5937],
        zoom: 4,
        transformRequest: (url, resourceType) => {
          if (url.startsWith('https://api.olamaps.io')) {
            return {
              url: url,
              headers: {
                'Authorization': `Bearer ${accessToken}`
              },
            };
          }
        },
      });

      // Wait for map to load before adding markers
      await new Promise<void>((resolve) => {
        map.current!.on('load', () => {
          resolve();
        });
      });

      // Add navigation control
      map.current.addControl(new NavigationControl(), 'top-left');

      // Add markers for all locations
      locations.forEach(async (location, index) => {
        const color = `hsl(${(index * 137.508) % 360}, 70%, 50%)`;
        const marker = new Marker({ color: color })
          .setLngLat([location.longitude, location.latitude])
          .addTo(map.current!);

        // Create a popup but don't add it to the map yet
        const popup = new Popup({
          closeButton: false,
          closeOnClick: false,
          className: 'map-popup'
        });

        // Add click event to marker
        marker.getElement().addEventListener('click', async () => {
          try {
            const employeeResponse = await axios.get(`${API_BASE_URL}/employee/getById?id=${location.empId}`, {
              headers: { Authorization: `Bearer ${token}` }
            });
            const employeeData = employeeResponse.data;
            const employeeName = `${employeeData.firstName} ${employeeData.lastName}`;
            const lastUpdate = format(parseISO(`${location.updatedAt}T${location.updatedTime}`), 'MMM dd, yyyy');
            const lastUpdateTime = format(parseISO(`${location.updatedAt}T${location.updatedTime}`), 'h:mm a');

            popup
              .setLngLat([location.longitude, location.latitude])
              .setHTML(`
                <div class="popup-card">
                  <div class="popup-header">
                    <div class="popup-title-wrapper">
                      <div class="popup-title">
                        ${employeeName}
                        <div class="popup-badge current">Live Location</div>
                      </div>
                    </div>
                    <button class="popup-close" aria-label="Close popup">×</button>
                  </div>
                  <div class="popup-body">
                    <div class="popup-info">
                      <div class="info-section">
                        <div class="info-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                            <circle cx="12" cy="9" r="2.5"/>
                          </svg>
                        </div>
                        <div class="info-content">
                          <div class="info-label">Location Updated</div>
                          <div class="info-value">${lastUpdate} at ${lastUpdateTime}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              `)
              .addTo(map.current!);

            // Add click handler for close button
            const closeButton = popup.getElement().querySelector('.popup-close');
            if (closeButton) {
              closeButton.addEventListener('click', () => popup.remove());
            }

            // Add mouseout handler to the popup
            popup.getElement().addEventListener('mouseout', (e) => {
              if (!popup.getElement().contains(e.relatedTarget as Node)) {
                popup.remove();
              }
            });
          } catch (error) {
            console.error('Error fetching employee details:', error);
          }
        });

        // Remove the mouseenter and mouseleave events
        // marker.getElement().addEventListener('mouseleave', () => {
        //   popup.remove();
        // });
      });

      // Fit bounds to show all markers
      if (locations.length > 0) {
        const bounds = new maplibregl.LngLatBounds();
        locations.forEach(location => {
          bounds.extend([location.longitude, location.latitude]);
        });
        map.current.fitBounds(bounds, { 
          padding: 50,
          maxZoom: 15 
        });
      }

    } catch (error) {
      console.error('Error initializing map:', error);
      setMapError("Failed to initialize map");
    }
  }, [accessToken, token]);

  const fetchAllEmployeeLocations = useCallback(async () => {
    setIsMapLoading(true);
    setMapError(null);
    setShowMapLegend(false);

    try {
      // Clear existing map instance
      if (map.current) {
        map.current.remove();
        map.current = null;
      }

      let locations: EmployeeLocation[] = [];

      if (role === 'MANAGER') {
        if (!teamMembers.length) {
          setEmployeeLocations([]);
          return;
        }

        const locationPromises = teamMembers.map((employeeId) =>
          axios.get(`${API_BASE_URL}/employee/getLiveLocation?id=${employeeId}`, {
            headers: { Authorization: `Bearer ${token}` }
          }).catch(error => {
            console.log(`No live location for employee ${employeeId}`);
            return null;
          })
        );

        const locationResponses = await Promise.all(locationPromises);
        locations = locationResponses
          .filter((response): response is AxiosResponse<EmployeeLocation> => response !== null && response.data)
          .map((response) => response.data)
          .filter(location => location.latitude && location.longitude);

      } else {
        const employeesResponse = await axios.get(`${API_BASE_URL}/employee/getAll`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        const locationPromises = employeesResponse.data.map((employee: any) =>
          axios.get(`${API_BASE_URL}/employee/getLiveLocation?id=${employee.id}`, {
            headers: { Authorization: `Bearer ${token}` }
          }).catch(error => {
            console.log(`No live location for employee ${employee.id}`);
            return null;
          })
        );

        const locationResponses = await Promise.all(locationPromises);
        locations = locationResponses
          .filter((response): response is AxiosResponse<EmployeeLocation> => response !== null && response.data)
          .map((response) => response.data)
          .filter(location => location.latitude && location.longitude);
      }

      setEmployeeLocations(locations);

      if (locations.length > 0 && accessToken) {
        // Wait for the DOM to update
        await new Promise(resolve => setTimeout(resolve, 0));
        
        // Initialize new map
        await initializeMap(locations);
      } else {
        setMapError("No employee locations available");
      }
    } catch (error) {
      console.error('Error fetching employee locations:', error);
      setMapError("Failed to fetch employee locations");
    } finally {
      setIsMapLoading(false);
    }
  }, [token, accessToken, role, teamMembers, initializeMap]);

  const fetchLatestVisit = useCallback(async (employeeName: string) => {
    const today = new Date();
    const startDate = today.getDate() <= 7 ? format(subDays(today, today.getDate() + 23), 'yyyy-MM-dd') : format(subDays(today, 30), 'yyyy-MM-dd');
    const endDate = format(today, 'yyyy-MM-dd');

    try {
      const response = await axios.get(`${API_BASE_URL}/visit/getByDateSorted`, {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          startDate: startDate,
          endDate: endDate,
          page: 0,
          size: 1,
          sort: 'visitDate,desc',
          employeeName: employeeName
        }
      });

      const visitData = response.data.content[0];
      return visitData;
    } catch (error) {
      console.error('Error fetching latest visit:', error);
      return null;
    }
  }, [token]);

  useEffect(() => {
    if (token && username && !role) {
      dispatch(fetchUserInfo(username));
    }
  }, [dispatch, token, username, role]);

  useEffect(() => {
    if (token) {
      getAccessToken();
    }
  }, [token, getAccessToken]);

  useEffect(() => {
    if (accessToken && isMainDashboard) {
      fetchAllEmployeeLocations();
    }
  }, [accessToken, fetchAllEmployeeLocations, isMainDashboard]);

  useEffect(() => {
    if (token && role) {
      fetchVisits(startDate, endDate);
    }
  }, [token, role, startDate, endDate, fetchVisits]);

  const stateCards = useMemo(() => {
    const stateData = visits.reduce((acc: { [key: string]: { employees: Set<string>, visits: number } }, visit) => {
      const state = (visit.employeeState || 'unknown').trim().toLowerCase();
      if (!acc[state]) {
        acc[state] = { employees: new Set(), visits: 0 };
      }
      if (visit.statsDto && visit.statsDto.completedVisitCount > 0) {
        acc[state].employees.add(`${visit.employeeFirstName || 'Unknown'} ${visit.employeeLastName || ''}`);
        acc[state].visits += visit.statsDto.completedVisitCount;
      }
      return acc;
    }, {});

    return Object.entries(stateData)
      .filter(([_, data]) => data.employees.size > 0)
      .map(([state, data]) => (
        <StateCard
          key={state}
          state={state.charAt(0).toUpperCase() + state.slice(1) || 'Unknown State'}
          totalEmployees={data.employees.size}
          onClick={() => handleStateClick(state)}
        />
      ));
  }, [visits, handleStateClick]);

  const employeeCards = useMemo(() => {
    if (!selectedState) return [];

    const stateVisits = visits.filter((visit) => (visit.employeeState.trim().toLowerCase() || 'unknown') === selectedState);
    const employeeVisits = stateVisits.reduce((acc: { [key: string]: any }, visit) => {
      const employeeName = visit.employeeFirstName + ' ' + visit.employeeLastName;
      if (!acc[employeeName] && visit.statsDto && visit.statsDto.completedVisitCount > 0) {
        acc[employeeName] = {
          ...visit,
          completedVisitCount: visit.statsDto.completedVisitCount
        };
      }
      return acc;
    }, {});

    return Object.entries(employeeVisits).map(([employeeName, employeeData]: [string, any]) => (
      <EmployeeCard1
        key={employeeName}
        employeeName={employeeName.charAt(0).toUpperCase() + employeeName.slice(1)}
        totalVisits={employeeData.completedVisitCount}
        onClick={() => handleEmployeeClick(employeeName)}
      />
    ));
  }, [selectedState, visits, handleEmployeeClick]);

  const renderSkeletonCards = () => (
    <>
      {[...Array(6)].map((_, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <Skeleton className="h-4 w-[250px] mb-4" />
            <Skeleton className="h-4 w-[200px]" />
          </CardContent>
        </Card>
      ))}
    </>
  );

  const renderDashboardOverview = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Visits</CardTitle>
          <ChartBarIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{visits.reduce((sum, visit) => sum + (visit.statsDto?.completedVisitCount || 0), 0)}</div>
          <p className="text-xs text-muted-foreground">
            +{visits.filter(v => new Date(v.visit_date) >= subDays(new Date(), 7)).length} from last week
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Employees</CardTitle>
          <UserGroupIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{new Set(visits.map(v => v.employeeId)).size}</div>
          <p className="text-xs text-muted-foreground">
            Across {new Set(visits.map(v => v.employeeState)).size} states
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Live Locations</CardTitle>
          <MapIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{employeeLocations.length}</div>
          <p className="text-xs text-muted-foreground">
            Employees currently tracked
          </p>
        </CardContent>
      </Card>
    </div>
  );

  const handleResetMap = useCallback(async () => {
    setIsMapLoading(true);
    try {
      // Clear existing map
      if (map.current) {
        map.current.remove();
        map.current = null;
      }

      // Get fresh access token
      await getAccessToken();
      
      // Reset all states to initial values
      setSelectedState(null);
      setSelectedEmployee(null);
      setIsMainDashboard(true);
      setMapError(null);
      setShowMapLegend(false);

      // Fetch fresh data
      await Promise.all([
        fetchVisits(startDate, endDate),
        fetchAllEmployeeLocations()
      ]);

    } catch (error) {
      console.error('Error resetting map:', error);
      setMapError("Failed to reset map view");
    } finally {
      setIsMapLoading(false);
    }
  }, [getAccessToken, fetchVisits, fetchAllEmployeeLocations, startDate, endDate]);

  return (
    <div className="container-dashboard mx-auto py-8 px-4">
      {selectedState && !selectedEmployee ? (
        <>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold capitalize">{selectedState === 'unknown' ? 'Unknown State' : selectedState}</h1>
            <Button variant="outline" size="sm" onClick={handleBackToMainDashboard}>
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
          <div className="mb-8">
            <DateRangeDropdown selectedOption={selectedOption} onDateRangeChange={handleDateRangeChange} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? renderSkeletonCards() : (
              employeeCards.length > 0 ? employeeCards : <p className="col-span-full text-center text-muted-foreground">No employees with completed visits in this date range.</p>
            )}
          </div>
        </>
      ) : selectedEmployee && employeeDetails ? (
        <EmployeeDetails
          employeeDetails={employeeDetails}
          selectedEmployee={selectedEmployee}
          setSelectedEmployee={setSelectedEmployee}
          handleDateRangeChange={handleDateRangeChange}
          selectedOption={selectedOption}
          handleViewDetails={handleViewDetails}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isLoading={isLoading}
          onBackClick={handleBackToMainDashboard}
        />
      ) : (
        <>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h1 className="text-3xl font-bold mb-4 md:mb-0">Sales Dashboard</h1>
            <DateRangeDropdown selectedOption={selectedOption} onDateRangeChange={handleDateRangeChange} />
          </div>
          {renderDashboardOverview()}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">States Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? renderSkeletonCards() : (
                stateCards.length > 0 ? stateCards : <p className="col-span-full text-center text-muted-foreground">No states with active employees in this date range.</p>
              )}
            </div>
          </div>
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Live Employee Locations</CardTitle>
              </CardHeader>
              <CardContent>
                {isMapLoading ? (
                  <div className="flex justify-center items-center h-[600px]">
                    <ClipLoader color="#4A90E2" size={50} />
                  </div>
                ) : (
                  <>
                    {employeeLocations.length > 0 ? (
                      <>
                        <div className="relative">
                          <div ref={mapContainer} className="rounded-lg border-2 border-gray-300 shadow-lg mb-4" style={{ width: '100%', height: '600px' }} />
                          <div className="absolute top-4 right-4 z-10">
                            <Button 
                              variant="secondary" 
                              size="sm" 
                              onClick={handleResetMap}
                              className="bg-white shadow-md hover:bg-gray-100 flex items-center gap-2"
                            >
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="16" 
                                height="16" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                              >
                                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                                <path d="M3 3v5h5"/>
                              </svg>
                              Reset Map View
                            </Button>
                          </div>
                          {showMapLegend && (
                            <div className="absolute bottom-6 left-6 bg-white p-3 rounded-lg shadow-md">
                              <div className="text-sm font-semibold mb-2">Map Legend</div>
                              <div className="space-y-2">
                                <div className="flex items-center">
                                  <div className="w-4 h-4 rounded-full bg-[#22C55E] mr-2"></div>
                                  <span>Current Location</span>
                                </div>
                                <div className="flex items-center">
                                  <div className="w-4 h-4 rounded-full bg-[#EF4444] mr-2"></div>
                                  <span>Home Location</span>
                                </div>
                                <div className="flex items-center">
                                  <div className="w-4 h-4 rounded-full bg-[#3B82F6] mr-2"></div>
                                  <span>Visits</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        <EmployeeLocationList employeeLocations={employeeLocations} onEmployeeClick={handleEmployeeLocationClick} />
                      </>
                    ) : (
                      <div className="flex justify-center items-center h-[600px]">
                        <p className="text-muted-foreground">No live location data available</p>
                      </div>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;