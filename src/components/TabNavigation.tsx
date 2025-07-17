import React from 'react';
import type { NavigationTab, TabId } from '../types/common';

interface TabNavigationProps {
  tabs: NavigationTab[];
  activeTab: TabId;
  onTabChange: (tabId: TabId) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ 
  tabs, 
  activeTab, 
  onTabChange 
}) => {
  return (
    <nav className="detail-nav-tabs">
      <div className="detail-nav-content">
        <div className="detail-nav-tabs-list">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`detail-nav-tab ${
                  activeTab === tab.id
                    ? 'detail-nav-tab-active'
                    : 'detail-nav-tab-inactive'
                }`}
              >
                <Icon className="detail-nav-tab-icon" />
                <span className="detail-nav-tab-label">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default TabNavigation;