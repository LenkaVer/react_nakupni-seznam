import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "./style.css";

import { ShoppingItem } from "./components/ShoppingItem";

/*

  Data z api http://traja.cz/react/nakupni-seznam.json odpovídají původnímu:
  const nakup = [
    {nazev: "hrušky", mnozstvi: 1},
    {nazev: "jablko", mnozstvi: 4},
    {nazev: "limonáda", mnozstvi: 5}
  ];

*/

const App = () => {
  const [nakup, setNakup] = useState([]);

  useEffect(() => {
    fetch("http://traja.cz/react/nakupni-seznam.json")
      .then((response) => response.json())
      .then((data) => {
        setNakup(data);
      });
  }, []);

  return (
    <div className="container">
      <header>
        <div className="logo"></div>
        <h1>Nákupní seznam</h1>
      </header>
      <main>
        <div className="seznam">
          <div className="seznam__polozky">
            {nakup.map((item) => {
              return (
                <ShoppingItem
                  key={item.nazev}
                  nazev={item.nazev}
                  mnozstvi={item.mnozstvi}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

// const App = () => (
//   <div className="container">
//     <header>
//       <div className="logo"></div>
//       <h1>Nákupní seznam</h1>
//     </header>
//     <main>
//     <div className="seznam">
//       <div className="seznam__polozky">
//       <div className="polozka">
//         <div className="polozka__nazev">máslo</div>
//         <div className="polozka__mnozstvi">1ks</div>
//       </div>
//       <div className="polozka">
//         <div className="polozka__nazev">sýr</div>
//         <div className="polozka__mnozstvi">200g</div>
//       </div>
//       <div className="polozka">
//         <div className="polozka__nazev">banány</div>
//         <div className="polozka__mnozstvi">8ks</div>
//       </div>
//       <div className="polozka">
//         <div className="polozka__nazev">chleba</div>
//         <div className="polozka__mnozstvi">1ks</div>
//       </div>
//       <div className="polozka">
//         <div className="polozka__nazev">pivo</div>
//         <div className="polozka__mnozstvi">1ks</div>
//       </div></div>
//     </div>
//     </main>
//   </div>
// );

render(<App />, document.querySelector("#app"));
