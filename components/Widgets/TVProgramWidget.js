// выводит список ТВ программ
import React from "react";
import Title from "./common/Title";
import TVProgramsList from "./common/TVProgramsList";
function TVProgramWidget({ title, items }) {
  return (
    <div className="TV-program-widget">
      <Title title={title} />
      <TVProgramsList items={items} />
    </div>
  );
}
 export default TVProgramWidget