import React from 'react';
import { Tabs } from '@byte-design/ui';

export default function Header(): JSX.Element {
  const handleChange = (id: string): void => {
    console.log('click tab:' + id);
  };

  return (
    <Tabs
      type="basic"
      onChange={handleChange}
      tabPosition="top"
      activeId="2"
      renderTabBar={(props) => <span>{`标签 ${props.id}`}</span>}
    >
      <Tabs.Item tab="Tab 1" id="1">
        <div style={{ paddingTop: '10px' }}>Tab 1</div>
      </Tabs.Item>
      <Tabs.Item tab="Tab 2" id="2">
        <div style={{ paddingTop: '10px' }}>Tab 2</div>
      </Tabs.Item>
      <Tabs.Item tab="Tab 3" id="3">
        <div style={{ paddingTop: '10px' }}>Tab 3</div>
      </Tabs.Item>
    </Tabs>
  );
}