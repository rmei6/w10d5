import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

const Main = () => {
  return (
    <div className="main">
      <Clock />
      <Tabs array={[{title:"one",content:"I am first"},{title:"two",content:"Second Pane Here"}, {title: 'three', content: "Third Pane Here"}]}/>
    </div>
  )
};
export default Main;