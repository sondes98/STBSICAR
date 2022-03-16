import React from "react";
import "./invest.css";

const Investisseur = () => {
  return (
    <div class="investisseur">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <h3>
                Nos <span class="alternate">Investisseurs</span>
              </h3>
              <p>
                STB SICAR dispose de fonds apportés par des investisseurs
                institutionnels de premier plan.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="block text-center">
              <ul class="list-inline sponsors-list">
                <li class="list-inline-item">
                  <div class="image-block text-center">
                    <a href="#"></a>
                  </div>
                </li>
                <li class="list-inline-item">
                  <div class="image-block text-center">
                    <a href="#">
                      <img
                        src="img/logo-stb-invest.jpg"
                        alt="logo d'investisseur"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </li>
                <li class="list-inline-item">
                  <div class="image-block text-center">
                    <a href="#">
                      <img
                        src="img/logo-boi.png"
                        alt="logo d'investisseur"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </li>
                <li class="list-inline-item">
                  <div class="image-block text-center">
                    <a href="#">
                      <img
                        src="img/logo4.png"
                        alt="logo d'investisseur"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investisseur;
