// выводит программу "Эфира"
import React from "react";
import Title from "./common/Title";
import TVProgramsList from "./common/TVProgramsList";
function EtherWidget({ title, items }) {
  return (
    <div className="Ether-widget">
      <Title title={title} />
      <TVProgramsList items={items} />
    </div>
  );
}

export default  EtherWidget