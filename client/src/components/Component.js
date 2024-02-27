import { Tabs } from 'flowbite-react';
import {HiUserCircle } from 'react-icons/hi';
import EditableTable from './EditableTable';
import { FaPlaceOfWorship } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { FcDepartment } from "react-icons/fc";
import { FaBlog } from "react-icons/fa";
import { GiPrayer } from "react-icons/gi";


import EditableEventsTable from './EditableEventsTable';
import { FaInfoCircle } from "react-icons/fa";
import EditableDepartmentsTable from './EditableDepartmentsTable';
import EditableChurchInfoTable from './EditableChurchInfoTable';
import EditableUsersTable from './EditableUsersTable';
import UserDetails from './UserDetails';
import Header from './Header'
import EditableBlogsTable from './EditableBlogsTable';



export default function Component() {
  return (
    <>
    <Header/>
    <Tabs aria-label="Default tabs" >
      <Tabs.Item active title="My Profile" icon={HiUserCircle}>
      <UserDetails/>
      </Tabs.Item>
      <Tabs.Item active title="Users" icon={HiUserCircle}>
      <EditableUsersTable/>
      </Tabs.Item>
      <Tabs.Item title="Prayer Requests" icon={GiPrayer}>
        
        </Tabs.Item>
      <Tabs.Item title="Church info" icon={FaInfoCircle}>
        <EditableChurchInfoTable/>
        </Tabs.Item>
      <Tabs.Item active title="Services" icon={FaPlaceOfWorship}>
        <EditableTable/>
      </Tabs.Item>
      <Tabs.Item title="Events" icon={GiPartyPopper}>
        <EditableEventsTable/>
      </Tabs.Item>
      <Tabs.Item title="Blogs" icon={FaBlog}>
        <EditableBlogsTable/>
      </Tabs.Item>
      <Tabs.Item title="Departments" icon={FcDepartment}>
        <EditableDepartmentsTable/>
      </Tabs.Item>
      <Tabs.Item disabled title="Disabled">
        Disabled content
      </Tabs.Item>
    </Tabs>
    </>
  );
}
