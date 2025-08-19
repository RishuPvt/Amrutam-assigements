// src/components/Sidebar.tsx
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Stethoscope,
  User,
  Calendar,
  Star,
  FlaskConical,
  Ticket,
  HeartPulse,
  Users,
  Wallet,
  RefreshCw,
  Settings,
} from 'lucide-react';

// Define the structure for a navigation item
interface NavItem {
  path: string;
  name: string;
  icon: React.ElementType;
  subItems?: { path: string; name: string }[]; // Optional sub-menu items
}

// Array of navigation links. This structure prevents "undefined" errors.
const navItems: NavItem[] = [
  { path: '/dashboard', name: 'Dashboard', icon: LayoutDashboard },
  { path: '/doctors', name: 'Doctors', icon: Stethoscope },
  { path: '/patients', name: 'Patients', icon: User },
  { path: '/appointments', name: 'Appointments', icon: Calendar },
  { path: '/specialties', name: 'Specialties', icon: Star },
  {
    path: '/', // Main path for ingredients
    name: 'Ingredients',
    icon: FlaskConical,
    subItems: [
      { path: '/', name: 'Ingredients List' },
      { path: '/add-ingredient', name: 'Add Ingredients' },
    ],
  },
  { path: '/coupons', name: 'Coupons', icon: Ticket },
  { path: '/concerns', name: 'Concerns', icon: HeartPulse },
  { path: '/referral', name: 'Referral', icon: Users },
  { path: '/customization', name: 'Customization', icon: Settings },
  { path: '/wallet', name: 'Wallet', icon: Wallet },
  { path: '/refund', name: 'Refund', icon: RefreshCw },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="w-64 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">AMRUTAM</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Menu</p>
        {navItems.map((item) => {
          // Check if the current URL matches the item's path or any of its sub-item paths
          const isActive = item.subItems
            ? item.subItems.some(sub => location.pathname === sub.path)
            : location.pathname === item.path;

          return (
            <div key={item.name}>
              <NavLink
                to={item.subItems ? item.subItems[0].path : item.path}
                className={({ isActive: navIsActive }) =>
                  `flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`
                }
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.name}</span>
              </NavLink>
              {/* Render sub-menu if it exists and the parent is active */}
              {isActive && item.subItems && (
                <div className="pl-8 pt-2 space-y-2">
                  {item.subItems.map((subItem) => (
                    <NavLink
                      key={subItem.name}
                      to={subItem.path}
                      end // Use 'end' to match the exact path for sub-items
                      className={({ isActive: subIsActive }) =>
                        `block text-sm py-1 rounded-md ${
                          subIsActive
                            ? 'text-green-700 font-semibold'
                            : 'text-gray-500 hover:text-gray-700'
                        }`
                      }
                    >
                      {subItem.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
