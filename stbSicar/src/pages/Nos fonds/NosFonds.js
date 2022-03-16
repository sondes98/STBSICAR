import React from "react";
import "./style.css";
import "./flipCard.css";

import AlignItemsList from "../../components/MUI/List/List";
const NosFonds = () => {
  return (
    <div className="nos-fonds">
      <div className="NF-section-1">
        <div className="investiseurs">
          <div class="section-title">
            <h3>
              Nos <span class="alternate">Investisseurs</span>
            </h3>
            <p>
              STB SICAR dispose de fonds apportés par des investisseurs
              institutionnels de premier plan.
            </p>
          </div>
          <div className="invest-logos">
            <div class="row">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/06/Logo_STB.png?20210526075747"
                alt="Snow"
              />
              <img src="img/logo-stb-invest.jpg" alt="Forest" />
              <img src="img/logo-boi.png" alt="Mountains" />
              <img src="img/logo4.png" alt="Mountains" />
            </div>
          </div>
        </div>
      </div>
      {/* SEPERATOR */}
      <div class="sb sb-5">
        {/* <small>section break 5</small> */}
        <hr class="section-break-5" />
      </div>
      <div class="NF-section-2">
        <h3>OPTIMISEZ VOTRE FISCALITE</h3>
        <p>
          Les investisseurs qui désirent optimiser leur fiscalité peuvent
          confier tout ou partie de leurs bénéfices imposables à la STB SICAR
          sous forme de fonds géré. La règlementation en vigueur leur permet
          d’opter pour l’un des schémas suivants :{" "}
        </p>
        <div
          style={{
            display: "flex",
            flexDirectio: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <img
            src="img/saving.svg"
            alt="loading"
            className="img"
            width="500px"
          />
          <div class="card-wrapper flip-right">
            <div class="card">
              <div class="front">
                100% des revenus ou bénéfices imposables sans minimum d'impôt
              </div>
              <div class="back">
                Déduction totale sur la base d'un engagement de la STB SICAR
                d’employer 75% de montant déposés dans des ZDR ou agricole.
              </div>
            </div>
          </div>
          <div class="card-wrapper flip-right">
            <div class="card">
              <div class="front">flip right</div>
              <div class="back">
                {" "}
                Déduction des revenus ou bénéfices réinvestis auprès de la STB
                SICAR , sur la base d’un engagement d’emploi de 65% dans des
                projets définis par la règlementation*
              </div>
            </div>
          </div>
        </div>
        {/* SEPERATOR */}
        <div class="sb sb-5">
          {/* <small>section break 5</small> */}
          <hr class="section-break-5" />
        </div>
      </div>
      <div class="NF-section-3">
        <AlignItemsList />
      </div>
    </div>
  );
};

export default NosFonds;
