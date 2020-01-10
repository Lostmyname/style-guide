import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import { Tabs as RTabs, TabList as RTabList, Tab as RTab, TabPanel as RTabPanel } from 'react-tabs';
import TabBase from './Tabs.styled';

const Tabs = ({ tabTitles, tabItems }) => {
  if (!tabTitles || !tabItems || isEmpty(tabTitles) || isEmpty(tabItems)) {
    return null;
  }
  return (
    <TabBase>
      <RTabs>
        <TabBase.TabListWrapper>
          <RTabList>
            {tabTitles.map((tabTitle, idx) => (
              <RTab key={idx}>
                {tabTitle}
              </RTab>
            ))}
          </RTabList>
        </TabBase.TabListWrapper>
        {tabItems.map((tabItem, idx) => (
          <RTabPanel key={idx}>
            {tabItem}
          </RTabPanel>
        ))}
      </RTabs>
    </TabBase>
  );
};

Tabs.propTypes = {
  tabTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  tabItems: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Tabs;
