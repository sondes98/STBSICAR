import React from "react";
import "./style.css";
import { FiUsers } from "react-icons/fi";
import { GiStumpRegrowth } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { RiExchangeFundsLine } from "react-icons/ri";
import { MdTransitEnterexit } from "react-icons/md";
import { BiMapPin } from "react-icons/bi";
import { MdOutlineWork } from "react-icons/md";
import { FcNext } from "react-icons/fc";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaBalanceScale } from "react-icons/fa";
import vect2 from "./hp-vect2.png";
import Tooltip from "@mui/material/Tooltip";

const Homepage = () => {
  return (
    <div className="hp">
      {/* <div class="background"></div>
      <div class="background-texture"></div>
      <header class="header">
        <div class="left-content">
          <p class="stay-home">Stay Home!!</p>
          <h1>Be a good Easter egg.</h1>
          <p></p>
          <p class="para">
            That's what we need right now. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Aliquam, corporis.
          </p>
        </div>
        <img src={vector} alt="" />
      </header> */}
      <section className="section-1">
        <div className="banner">
          <span className="banner-title">
            <h1>Societe d'Investissement a Capital Risque</h1>

            <span>
              Fondée en 1998. Filiale du groupe STB. Spécialisée dans le private
              equity.
            </span>
          </span>
        </div>
      </section>
      <div class="sb sb-5">
        {/* <small>section break 5</small> */}
        <hr class="section-break-5" />
      </div>
      <section className="section-2">
        <div className="about-hp">
          <div className="about-hp-content">
            <h1>BIENVENUE SUR STB SICAR</h1>
            <p className="desc ">
              La STB SICAR, filiale de la STB BANK, a été créée le 23 mars 1998.
              C'est une société d’investissement à capital risque qui a pour
              objectif la participation, pour son propre compte ou pour le
              compte de bailleurs de fonds au renforcement des opportunités
              d’investissement et des fonds propres des entreprises. Elle permet
              de procurer aux entreprises les fonds nécessaires à leur
              développement et à leur croissance avec obligation de sortie.
            </p>
            <a href="about.html" className="btn btn-primary">
              Learn More
            </a>
          </div>
          <img src={vect2} alt="" className="img1-hp" />
        </div>
      </section>
      {/* SEPERATOR */}
      <div class="sb sb-5">
        {/* <small>section break 5</small> */}
        <hr class="section-break-5" />
      </div>
      <section class="section-3">
        <h1 style={{ textAlign: "center" }}>Nos chiffres clés</h1>
        <div className="box-container">
          <div className="card-service shadow">
            <div className="inside-service-card circle ">
              <GiStumpRegrowth />
            </div>

            <span>
              {" "}
              <b>23 Ans </b>d'experiences
            </span>
          </div>
          <div className="card-service shadow">
            <div className="inside-service-card circle">
              <MdManageAccounts />
            </div>
            <span>
              {" "}
              <b>128 MDT</b> Sous Gestion
            </span>
          </div>
          <div className="card-service shadow">
            <div className="inside-service-card circle">
              <GiMoneyStack />
            </div>
            <span>Investissement en Portefeuille</span>
          </div>
          <div className="card-service shadow">
            <div className="inside-service-card circle">
              <RiExchangeFundsLine />
            </div>
            <span>
              <b>58 Fond </b>Gérés
            </span>
          </div>
          <div className="card-service shadow">
            <div className="inside-service-card circle">
              <MdTransitEnterexit />
            </div>
            <span>
              <b>91 Sorties</b> Intégrales réalisees
            </span>
          </div>
          <div className="card-service shadow">
            <div className="inside-service-card circle">
              <BiMapPin />
            </div>
            <span>
              <b>24 Régions</b>
            </span>
          </div>
          <div className="card-service shadow">
            <div className="inside-service-card circle">
              <MdOutlineWork />
            </div>
            <span>
              <b>1750 Emploies</b> Crées 5 Derniers Années
            </span>
          </div>
        </div>
      </section>
      <div class="sb sb-5">
        {/* <small>section break 5</small> */}
        <hr class="section-break-5" style={{ margin: "3rem auto 3rem" }} />
      </div>
      <section className="section-4">
        <h1 style={{ textAlign: "center", margin: "60px" }}>
          Principes d’investissement
        </h1>
        {/* <h2>A clean timeline design, with animated links</h2> */}
        <div class="timeline">
          <div className="card-content shadow-2">
            <div className="left">
              <p>Investir dans des projets viables</p>
            </div>
            <div className="right">
              <AiOutlineFundProjectionScreen />
            </div>
          </div>
          <div
            className="card-content shadow-2"
            style={{ marginLeft: "200px" }}
          >
            <div className="left">
              <p>Investir dans l’equity ou quasi equity</p>
            </div>
            <div className="right shadow-2">
              <FaBalanceScale />
            </div>
          </div>
          <div
            className="card-content shadow-2"
            style={{ marginLeft: "400px" }}
          >
            <div className="left">
              <p>Investir minoritairement</p>
            </div>
            <div className="right shadow-2">
              <FiUsers />
            </div>
          </div>
          <div
            className="card-content shadow-2"
            style={{ marginLeft: "600px" }}
          >
            <div className="left">
              <p>Investir en respect des ratios règlementaires</p>
            </div>
            <div className="right shadow-2">
              <FiUsers />
            </div>
          </div>
          {/* <Tooltip title="Delete"> */}
          <FcNext className="next-icon" />
          {/* </Tooltip> */}
        </div>
      </section>
      {/* SEPERATOR */}
      <div class="sb sb-5">
        {/* <small>section break 5</small> */}
        <hr class="section-break-5" />
      </div>
      <section className="section-5"></section>
    </div>
  );
};

export default Homepage;
