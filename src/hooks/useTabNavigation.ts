import { useState, useCallback } from 'react';
import type { TabId } from '../types/common';

export const useTabNavigation = (initialTab: TabId = 'overview') => {
  const [activeTab, setActiveTab] = useState<TabId>(initialTab);

  const changeTab = useCallback((tabId: TabId) => {
    setActiveTab(tabId);
  }, []);

  const isActive = useCallback((tabId: TabId) => {
    return activeTab === tabId;
  }, [activeTab]);

  return {
    activeTab,
    changeTab,
    isActive
  };
};