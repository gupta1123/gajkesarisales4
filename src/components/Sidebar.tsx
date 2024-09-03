import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Sidebar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, resetState, AppDispatch, RootState } from '../store';
import { FiLogOut, FiHome, FiUsers, FiMap, FiUser, FiClipboard, FiDollarSign, FiSettings, FiBarChart2, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

const sidebarItems = [
  { href: '/Dashboard', icon: FiHome, label: 'Dashboard', roles: ['ADMIN', 'MANAGER', 'FIELD OFFICER'] },
  { href: '/VisitsList', icon: FiMap, label: 'Visits', roles: ['ADMIN', 'MANAGER', 'FIELD OFFICER'] },
  { href: '/Expense', icon: FiDollarSign, label: 'Expenses', roles: ['ADMIN', 'FIELD OFFICER'] },
  { href: '/Attendance', icon: FiClipboard, label: 'Attendance', roles: ['ADMIN'] },
  { href: '/Requirements', icon: FiClipboard, label: 'Requirements', roles: ['ADMIN', 'MANAGER', 'FIELD OFFICER'] },
  { href: '/Complaints', icon: FiClipboard, label: 'Complaints', roles: ['ADMIN', 'MANAGER', 'FIELD OFFICER'] },
  { href: '/DailyPricing', icon: FiDollarSign, label: 'Pricing', roles: ['ADMIN', 'MANAGER'] },
  { href: '/Reports', icon: FiBarChart2, label: 'Reports', roles: ['ADMIN'] },
  { href: '/CustomerListPage', icon: FiUsers, label: 'Customers', roles: ['ADMIN', 'MANAGER', 'FIELD OFFICER'] },
  { href: '/Employeelist', icon: FiUser, label: 'Employees', roles: ['ADMIN'] },
  { href: '/Settings', icon: FiSettings, label: 'Settings', roles: ['ADMIN'] },
];

const BottomBar: React.FC<{ role: string | null }> = ({ role }) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('/Dashboard');
  const [showMore, setShowMore] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setActiveTab(router.pathname);
  }, [router.pathname]);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsNavigating(true);
    };

    const handleRouteChangeComplete = () => {
      setIsNavigating(false);
      setShowMore(false);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setShowMore(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredItems = sidebarItems.filter(item => role && item.roles.includes(role));

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      dispatch(resetState());
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      localStorage.removeItem('authToken');
      localStorage.removeItem('userRole');
      router.push('/');
    } catch (error: any) {
      console.error('Error logging out:', error);
    }
  };

  const mainItems = filteredItems.slice(0, 4);
  const moreItems = filteredItems.slice(4);

  const handleMoreItemClick = (href: string) => {
    router.push(href);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.y > 50) {
      setShowMore(false);
    }
  };

  return (
    <>
      <motion.div
        className={styles.bottomBar}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {mainItems.map((item) => (
          <Link href={item.href} key={item.href}>
            <motion.div
              className={`${styles.bottomTab} ${activeTab === item.href ? styles.activeBottomTab : ''}`}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className={styles.bottomIcon} />
              <span className={styles.bottomLabel}>{item.label}</span>
            </motion.div>
          </Link>
        ))}
        <motion.div
          className={`${styles.bottomTab} ${showMore ? styles.activeBottomTab : ''}`}
          onClick={() => setShowMore(!showMore)}
          whileTap={{ scale: 0.95 }}
        >
          {showMore ? <FiX className={styles.bottomIcon} /> : <FiMenu className={styles.bottomIcon} />}
          <span className={styles.bottomLabel}>{showMore ? 'Close' : 'More'}</span>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {showMore && (
          <motion.div
            ref={moreMenuRef}
            className={styles.moreMenu}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={handleDragEnd}
          >
            {moreItems.map((item) => (
              <motion.div
                key={item.href}
                className={`${styles.moreMenuItem} ${activeTab === item.href ? styles.activeMoreMenuItem : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleMoreItemClick(item.href)}
              >
                <item.icon className={styles.moreMenuIcon} />
                <span>{item.label}</span>
              </motion.div>
            ))}
            <motion.div
              className={`${styles.moreMenuItem} ${styles.logoutMenuItem}`}
              onClick={handleLogout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLogOut className={styles.moreMenuIcon} />
              <span>Logout</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Sidebar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const role = useSelector((state: RootState) => state.auth.role);

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      dispatch(resetState());
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      localStorage.removeItem('authToken');
      localStorage.removeItem('userRole');
      router.push('/');
    } catch (error: any) {
      console.error('Error logging out:', error);
    }
  };

  const filteredItems = sidebarItems.filter(item => role && item.roles.includes(role));

  return (
    <>
      <motion.div
        className={styles.sidebar}
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <div className={styles.sidebarHeader}>
          <motion.h2
            className={styles.brand}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Gajkesari
          </motion.h2>
        </div>
        <div className={styles.sidebarContent}>
          <ul className={styles.sidebarList}>
            {filteredItems.map((item, index) => (
              <motion.li
                key={item.href}
                className={styles.sidebarItem}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={item.href}>
                  <div className={`${styles.sidebarLink} ${router.pathname === item.href ? styles.active : ''}`}>
                    <item.icon className={styles.sidebarIcon} />
                    <span>{item.label}</span>
                  </div>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div
          className={styles.sidebarFooter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button onClick={handleLogout} className={styles.logoutButton}>
            <FiLogOut className={styles.sidebarIcon} />
            <span>Logout</span>
          </button>
        </motion.div>
      </motion.div>
      <BottomBar role={role} />
    </>
  );
};

export default Sidebar;