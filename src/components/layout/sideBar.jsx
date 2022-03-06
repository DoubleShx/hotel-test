import { CBadge, CNavItem, CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from "@coreui/react";

export default function SideBar(props) {
    return ( 
        <CSidebar>
  <CSidebarBrand></CSidebarBrand>
  <CSidebarNav>
    <CNavItem href="#">
      <img src="assets/icons/layout/active.png" alt="active"/>
      <span>Active</span>
    </CNavItem>
    <CNavItem href="#">
      <img src="assets/icons/layout/inactive.png" alt="inactive"/>
      <span>Inactive</span>
    </CNavItem>
      <CNavItem href="/pushnotifications" >
      <img className="pushnotifications_link" src="assets/icons/layout/push_notifications.png" alt="notyf"/>
      <span>Push Notifications</span>
      </CNavItem>
      <CNavItem href="#">
      <img src="assets/icons/layout/blocked.png" alt="blocked"/>
      <span>Blocked</span>
      </CNavItem>
      <CNavItem href="#" className="active">
      <img src="assets/icons/layout/events.png" alt="events"/>
      <span>Events</span>
      </CNavItem>
  </CSidebarNav>
  <CSidebarToggler/>
</CSidebar>
    );
  }
  