import React from "react";

/*
  @todo:
  ke komponentě patří css, které můžeme vložit do src/components/ShoppingItem.css a zde importovat ;-)
*/

export const ShoppingItem = (props) => {
  return (
    <div className="polozka">
      <div className="polozka__nazev">{props.nazev}</div>
      <div className="polozka__mnozstvi">{props.mnozstvi} ks</div>
    </div>
  );
};
