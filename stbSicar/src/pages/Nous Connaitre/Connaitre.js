import React from "react";
import Esprit from "../Esprits/Esprit";
import "./style.css";
const Connaitre = () => {
  return (
    <div>
      {/* BANNER */}
      <div>
        {" "}
        <div className="connaitre-banner">
          <span className="connaitre-banner-title">
            <span>TOUT CE QUE TU AS BESOIN DE SAVOIR</span>
            <h1>Nous Connaître</h1>
          </span>
        </div>
      </div>
      <Esprit />
    </div>
  );
};

export default Connaitre;
