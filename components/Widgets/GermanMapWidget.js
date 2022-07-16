// выводит список разделов виджета "Карта Германии"
import React from "react";
import Title from "./common/Title";
import List from "./common/List";
function GermanMapWidget({ title, items }) {
  return (
    <div className="German-map-widget">
      <Title title={title} />
      <List items={items} />
    </div>
  );
}

export default  GermanMapWidget