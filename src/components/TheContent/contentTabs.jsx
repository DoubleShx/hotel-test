import { CNavItem, CNavLink } from "@coreui/react";

export const ContentTabs = ({ id, callbackFunction, activeTab, linkName }) => {
  return (
    <CNavItem>
      <CNavLink
        href="javascript:void(0);"
        active={activeTab === id+1}
        onClick={() => callbackFunction(id+1)}
      >
        {linkName}
      </CNavLink>
    </CNavItem>
  );
};
