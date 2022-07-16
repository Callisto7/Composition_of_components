// выводит часто посещаемые страницы
import React from "react";
import DefinitionsList from "./common/DefinitionsList";
import Title from "./common/Title";
function FavoritesWidget({ title, items }) {
  return (
    <div className="Favorites-widget">
      <Title title={title} />
      <DefinitionsList items={items} />
    </div>
  );
}

export default FavoritesWidget