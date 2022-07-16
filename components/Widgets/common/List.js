// выводит простой список
import React from "react";
function List({ items }) {
  return (
    <ul className="Widget-list">
      {items.map(({ content }, index) => {
        return (
          <li className="Widget-list__item" key={index}>
            {content}
          </li>
        );
      })}
    </ul>
  );
}

export default List