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
  checkoutTime: string;
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
      const employeeId = visits.find(v => `${v.employeeFirstName} ${v.employeeLastName}`.toLowerCase() === employeeName.toLowerCase())?.employeeId;

      if (!employeeId) {
        throw new Error("Employee not found");
      }

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
  }, [token, visits]);

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
  }, [fetchEmployeeDetails, router, selectedState, startDate, endDate]);

  const handleDateRangeChange = useCallback((start: string, end: string, option: string) => {
    setStartDate(start);
    setEndDate(end);
    setSelectedOption(option);

    if (selectedEmployee) {
      fetchEmployeeDetails(selectedEmployee, start, end);
    } else {
      fetchVisits(start, end);
    }
  }, [fetchEmployeeDetails, fetchVisits, selectedEmployee]);

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
    fetchAllEmployeeLocations();
    router.push('/Dashboard', undefined, { shallow: true });
  }, [router]);

  const fetchAllEmployeeLocations = useCallback(async () => {
    setIsMapLoading(true);
    setMapError(null);

    try {
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
        const locations = locationResponses
          .filter((response): response is AxiosResponse<EmployeeLocation> => response !== null && response.data)
          .map((response) => response.data)
          .filter(location => location.latitude && location.longitude);

        setEmployeeLocations(locations);

        if (locations.length > 0 && accessToken) {
          await initializeMap(locations);
        } else {
          setMapError("No employee locations available");
        }
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
        const locations = locationResponses
          .filter((response): response is AxiosResponse<EmployeeLocation> => response !== null && response.data)
          .map((response) => response.data)
          .filter(location => location.latitude && location.longitude);

        setEmployeeLocations(locations);

        if (locations.length > 0 && accessToken) {
          await initializeMap(locations);
        } else {
          setMapError("No employee locations available");
        }
      }
    } catch (error) {
      console.error('Error fetching employee locations:', error);
      setMapError("Failed to fetch employee locations");
    } finally {
      setIsMapLoading(false);
    }
  }, [token, accessToken, role, teamMembers]);

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

  const initializeMap = useCallback(async (locations: EmployeeLocation[]) => {
    if (mapContainer.current && accessToken) {
      if (map.current) {
        map.current.remove();
      }

      try {
        const styleResponse = await axios.get(MAP_STYLE_URL, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        const style = styleResponse.data;

        style.layers = style.layers.filter((layer: any) =>
          !['poi-vectordata', 'poi'].includes(layer.id)
        );

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

        let currentPopup: Popup | null = null;

        map.current.on('load', () => {
          map.current!.addControl(new NavigationControl(), 'top-left');

          locations.forEach(async (location, index) => {
            const color = `hsl(${(index * 137.508) % 360}, 70%, 50%)`;
            const marker = new Marker({ color: color })
              .setLngLat([location.longitude, location.latitude])
              .addTo(map.current!);

            const updatedDateTime = parseISO(`${location.updatedAt}T${location.updatedTime}`);
            const formattedDateTime = format(updatedDateTime, "d MMM ''yy h:mm a");

            marker.getElement().addEventListener('mouseenter', async () => {
              if (currentPopup) {
                currentPopup.remove();
                currentPopup = null;
              }

              try {
                const [employeeResponse, checkinsResponse] = await Promise.all([
                  axios.get(`${API_BASE_URL}/employee/getById?id=${location.empId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                  }),
                  axios.get(`${API_BASE_URL}/visit/getByDateRangeAndEmployeeStats`, {
                    headers: { Authorization: `Bearer ${token}` },
                    params: {
                      id: location.empId,
                      start: format(new Date(), 'yyyy-MM-dd'),
                      end: format(new Date(), 'yyyy-MM-dd')
                    }
                  })
                ]);

                const employeeData = employeeResponse.data;
                const checkinsData = checkinsResponse.data;
                const visits = checkinsData.visitDto || [];
                
                const sortedVisits = visits.sort((a: any, b: any) => {
                  const timeA = a.checkinTime ? new Date(`${a.visit_date}T${a.checkinTime}`).getTime() : 0;
                  const timeB = b.checkinTime ? new Date(`${b.visit_date}T${b.checkinTime}`).getTime() : 0;
                  return timeA - timeB;
                });

                const visitsContent = `
                  <div class="tab-content visits-tab" data-tab="visits">
                    <div class="visits-header">
                      <span class="visits-title">Today's Journey</span>
                      <span class="visits-count">${sortedVisits.length} visits</span>
                    </div>
                    <div class="visits-container">
                      ${sortedVisits.length > 0 ? 
                        `<div class="visits-list">
                          ${sortedVisits.map((visit: any, index: number) => `
                            <div class="visit-item">
                              <div class="visit-marker">
                                <div class="time-badge">
                                  ${format(parseISO(`${visit.visit_date}T${visit.checkinTime}`), 'h:mm a')}
                                </div>
                                <div class="visit-line"></div>
                              </div>
                              <div class="visit-details">
                                <div class="visit-primary">
                                  <span class="store-name">${visit.storeName}</span>
                                  <span class="visit-number">${index + 1}</span>
                                </div>
                                <div class="visit-secondary">
                                  <span class="purpose-tag">${visit.purpose || 'N/A'}</span>
                                </div>
                              </div>
                            </div>
                          `).join('')}
                        </div>`
                        : '<div class="no-visits">No visits recorded today</div>'
                      }
                    </div>
                  </div>
                `;

                const popupContent = `
                  <div class="map-popup">
                    <div class="popup-tabs">
                      <button class="tab-button active" data-tab="info">Info</button>
                      <button class="tab-button" data-tab="visits">Visits (${visits.length})</button>
                    </div>

                    <div class="tab-content info-tab active" data-tab="info">
                      <div class="employee-info">
                        <div class="employee-header">
                          <h3>${employeeData.firstName} ${employeeData.lastName}</h3>
                          <span class="employee-role">${employeeData.role}</span>
                        </div>
                        <div class="location-info">
                          <div class="info-item">
                            <span class="info-label">Current Location</span>
                            <span class="info-value">Last seen at ${formattedDateTime}</span>
                          </div>
                          ${employeeData.houseLatitude ? `
                            <div class="info-item">
                              <span class="info-label">Home Location</span>
                              <span class="info-value">${employeeData.addressLine1}, ${employeeData.city}</span>
                            </div>
                          ` : ''}
                          <div class="info-item">
                            <span class="info-label">Contact</span>
                            <span class="info-value">${employeeData.primaryContact}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="tab-content visits-tab" data-tab="visits">
                      <div class="visits-wrapper">
                        ${sortedVisits.length > 0 ? 
                          `<div class="visits-list">
                            ${sortedVisits.map((visit: any, index: number) => `
                              <div class="visit-item">
                                <div class="visit-time">
                                  ${format(parseISO(`${visit.visit_date}T${visit.checkinTime}`), 'h:mm a')}
                                </div>
                                <div class="visit-content">
                                  <div class="visit-main-info">
                                    <div class="visit-store-name">${visit.storeName}</div>
                                    <div class="visit-badge">#${index + 1}</div>
                                  </div>
                                  <div class="visit-sub-info">
                                    <span class="visit-purpose">${visit.purpose || 'N/A'}</span>
                                    ${visit.checkinLatitude ? `
                                      <span class="visit-location-dot">•</span>
                                      <span class="visit-coords">
                                        ${visit.checkinLatitude.toFixed(6)}, ${visit.checkinLongitude.toFixed(6)}
                                      </span>
                                    ` : ''}
                                  </div>
                                </div>
                              </div>
                            `).join('')}
                          </div>`
                          : '<p class="no-visits">No visits recorded today</p>'
                        }
                      </div>
                    </div>
                  </div>
                `;

                const popup = new Popup({ 
                  offset: 25,
                  maxWidth: '350px',
                  anchor: 'bottom',
                }).setHTML(popupContent);
                
                const mapHeight = map.current!.getContainer().offsetHeight;
                const markerPoint = map.current!.project(marker.getLngLat());

                if (markerPoint.y > (mapHeight * 0.7)) {
                  popup.setOffset([0, -10]);
                  popup.options.anchor = 'top';
                }

                popup.setLngLat(marker.getLngLat());
                popup.addTo(map.current!);
                currentPopup = popup;

                const popupElement = popup.getElement();
                if (popupElement) {
                  const bounds = new maplibregl.LngLatBounds()
                    .extend(marker.getLngLat());
                  
                  map.current!.fitBounds(bounds, {
                    padding: { top: 150, bottom: 150, left: 50, right: 50 },
                    maxZoom: map.current!.getZoom()
                  });
                }

                const tabButtons = popupElement.querySelectorAll('.tab-button');
                tabButtons.forEach(button => {
                  button.addEventListener('click', (e) => {
                    const target = e.target as HTMLElement;
                    const tabName = target.dataset.tab;
                    
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    target.classList.add('active');
                    
                    const tabContents = popupElement.querySelectorAll('.tab-content');
                    tabContents.forEach(content => {
                      content.classList.remove('active');
                      if (content.getAttribute('data-tab') === tabName) {
                        content.classList.add('active');
                      }
                    });
                  });
                });

              } catch (error) {
                console.error('Error fetching data:', error);
              }
            });
          });

          const bounds = new maplibregl.LngLatBounds();
          locations.forEach(location => {
            bounds.extend([location.longitude, location.latitude]);
          });
          map.current!.fitBounds(bounds, { padding: 50 });
        });

        map.current.on('mousemove', () => {
          if (currentPopup && !currentPopup.isOpen()) {
            currentPopup.remove();
            currentPopup = null;
          }
        });

        map.current.on('error', (e) => {
          console.error('Map error:', e);
          setMapError(`Map error: ${e.error.message}`);
        });

      } catch (error) {
        console.error('Error initializing map:', error);
        setMapError("Failed to initialize map");
      }
    }
  }, [accessToken, fetchLatestVisit, employeeInfo]);

  const handleEmployeeLocationClick = useCallback((location: EmployeeLocation) => {
    if (map.current) {
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
            start: format(new Date(), 'yyyy-MM-dd'),
            end: format(new Date(), 'yyyy-MM-dd')
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

        // Add visit location pins
        visits.forEach((visit, index) => {
          if (visit.checkinLatitude && visit.checkinLongitude) {
            const visitMarker = new Marker({ color: '#3B82F6' })
              .setLngLat([visit.checkinLongitude!, visit.checkinLatitude!])
              .addTo(map.current!);
            
            visitMarker.getElement().addEventListener('mouseenter', () => {
              new Popup({
                offset: 25,
                closeButton: false,
                className: 'map-popup'
              })
              .setLngLat([visit.checkinLongitude!, visit.checkinLatitude!])
              .setHTML(`
                <div class="popup-card">
                  <div class="popup-header">
                    <div class="popup-title-wrapper">
                      <div class="popup-title">${employeeName}</div>
                      <div class="popup-badge visit">Visit #${index + 1}</div>
                    </div>
                    <button class="popup-close" aria-label="Close popup">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 6L6 18M6 6l12 12"/>
                      </svg>
                    </button>
                  </div>
                  <div class="popup-body">
                    <div class="popup-info">
                      <div class="store-name">${visit.storeName}</div>
                      <div class="time-info">
                        <div>Check-in: ${format(parseISO(`${visit.visit_date}T${visit.checkinTime}`), 'h:mm a')}</div>
                        ${visit.checkoutTime ? 
                          `<div>Check-out: ${format(parseISO(`${visit.visit_date}T${visit.checkoutTime}`), 'h:mm a')}</div>` 
                          : '<div>Not checked out yet</div>'
                        }
                      </div>
                      ${visit.purpose ? `<div class="visit-purpose">Purpose: ${visit.purpose}</div>` : ''}
                      <div class="visit-location">${visit.city}, ${visit.state}</div>
                    </div>
                  </div>
                </div>
              `)
              .addTo(map.current!);

              // Add click handler for close button
              const popup = document.querySelector('.maplibregl-popup:last-child');
              if (popup) {
                const closeButton = popup.querySelector('.popup-close');
                closeButton?.addEventListener('click', () => {
                  popup.remove();
                });
              }
            });
          }
        });

        // Add current location pin
        const currentMarker = new Marker({ color: '#22C55E' })
          .setLngLat([location.longitude, location.latitude])
          .addTo(map.current!);
        
        currentMarker.getElement().addEventListener('mouseenter', () => {
          new Popup({
            offset: 25,
            closeButton: false,
            className: 'map-popup'
          })
          .setLngLat([location.longitude, location.latitude])
          .setHTML(`
            <div class="popup-card">
              <div class="popup-header">
                <div class="popup-title-wrapper">
                  <div class="popup-title">${employeeName}</div>
                  <div class="popup-badge current">Current Location</div>
                </div>
                <button class="popup-close" aria-label="Close popup">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>
              </div>
              <div class="popup-body">
                <div class="popup-info">
                  Last seen at ${format(parseISO(`${location.updatedAt}T${location.updatedTime}`), 'h:mm a')}
                </div>
              </div>
            </div>
          `)
          .addTo(map.current!);

          // Add click handler for close button
          const popup = document.querySelector('.maplibregl-popup:last-child');
          if (popup) {
            const closeButton = popup.querySelector('.popup-close');
            closeButton?.addEventListener('click', () => {
              popup.remove();
            });
          }
        });

        // Add home location pin
        if (employeeData.houseLatitude && employeeData.houseLongitude) {
          const homeMarker = new Marker({ color: '#EF4444' })
            .setLngLat([employeeData.houseLongitude, employeeData.houseLatitude])
            .addTo(map.current!);
          
          homeMarker.getElement().addEventListener('mouseenter', () => {
            new Popup({
              offset: 25,
              closeButton: false,
              className: 'map-popup'
            })
            .setLngLat([employeeData.houseLongitude, employeeData.houseLatitude])
            .setHTML(`
              <div class="popup-card">
                <div class="popup-header">
                  <div class="popup-title-wrapper">
                    <div class="popup-title">${employeeName}</div>
                    <div class="popup-badge home">Home Location</div>
                  </div>
                  <button class="popup-close" aria-label="Close popup">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </button>
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

            // Add click handler for close button
            const popup = document.querySelector('.maplibregl-popup:last-child');
            if (popup) {
              const closeButton = popup.querySelector('.popup-close');
              closeButton?.addEventListener('click', () => {
                popup.remove();
              });
            }
          });
        }
      });
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