import { Tabs } from 'flowbite-react';
import { HiUserCircle } from 'react-icons/hi';
import EditableTable from './EditableTable';
import { FaPlaceOfWorship } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { FcDepartment } from "react-icons/fc";
import { FaBlog } from "react-icons/fa";
import { GiPrayer } from "react-icons/gi";
import { TbProgressHelp } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";

import EditableEventsTable from './EditableEventsTable';
import { FaInfoCircle } from "react-icons/fa";
import EditableDepartmentsTable from './EditableDepartmentsTable';
import EditableChurchInfoTable from './EditableChurchInfoTable';
import EditableUsersTable from './EditableUsersTable';
import UserDetails from './UserDetails';
import Header from './Header';
import EditableBlogsTable from './EditableBlogsTable';
import PrayerRequestsAdmin from './PrayerRequestsAdmin';
import InquiriesTable from './InquiriesTable';
import Subscriptions from './Subscriptions';

export default function AdminPanel() {
  const role = localStorage.getItem('role') || '';
  
  const renderAdminContent = () => {
    switch (role) {
      case 'superadmin':
        return (
          <Tabs aria-label="Default tabs">
            <Tabs.Item title="Users" icon={HiUserCircle}>
              <EditableUsersTable />
            </Tabs.Item>
            <Tabs.Item title="Prayer Requests" icon={GiPrayer}>
              <PrayerRequestsAdmin />
            </Tabs.Item>
            <Tabs.Item title="Inquiries" icon={TbProgressHelp}>
              <InquiriesTable />
            </Tabs.Item>
            <Tabs.Item title="Subscribers" icon={MdOutlineMailOutline}>
              <Subscriptions/>
            </Tabs.Item>
            <Tabs.Item title="Church info" icon={FaInfoCircle}>
              <EditableChurchInfoTable />
            </Tabs.Item>
            <Tabs.Item title="Services" icon={FaPlaceOfWorship}>
              <EditableTable />
            </Tabs.Item>
            <Tabs.Item title="Events" icon={GiPartyPopper}>
              <EditableEventsTable />
            </Tabs.Item>
            <Tabs.Item title="Blogs" icon={FaBlog}>
              <EditableBlogsTable />
            </Tabs.Item>
            <Tabs.Item title="Departments" icon={FcDepartment}>
              <EditableDepartmentsTable />
            </Tabs.Item>
          </Tabs>
        );
      case 'admin':
        return (
          <Tabs aria-label="Default tabs">
            <Tabs.Item title="Users" icon={HiUserCircle}>
              <EditableUsersTable />
            </Tabs.Item>
            <Tabs.Item title="Prayer Requests" icon={GiPrayer}>
              <PrayerRequestsAdmin />
            </Tabs.Item>
            <Tabs.Item title="Events" icon={GiPartyPopper}>
              <EditableEventsTable />
            </Tabs.Item>
            <Tabs.Item title="Blogs" icon={FaBlog}>
              <EditableBlogsTable />
            </Tabs.Item>
          </Tabs>
        );
      case 'member':
        return (
          <Tabs aria-label="Default tabs">
            <Tabs.Item title="My Profile" icon={HiUserCircle}>
              <UserDetails />
            </Tabs.Item>
            <Tabs.Item title="My Prayer Requests" icon={GiPrayer}>
              <PrayerRequestsAdmin />
            </Tabs.Item>
          </Tabs>
        );
      default:
        return(
          <h1>Your are not allowed to view This Page</h1>
        );
    }
  };

  return (
    <div>
      <Header />
      <div className="admin-tabs-container">
        {renderAdminContent()}
      </div>
    </div>
  );
}
