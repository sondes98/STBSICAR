import React from "react";
import esprit from "../../images/esprit.png";
import "./esprit.css";
import background from "../../images/Background.png";
import background1 from "../../images/Background1.png";
import background3 from "../../images/Background3.png";
import background2 from "../../images/Background2.png";

const Esprit = () => {
  return (
    <div className="esprit">
      <section className="section1">
        <h2>UN ÉTAT D'ESPRIT</h2>

        {/*  */}
        <div className="about-hp">
          <div className="about-hp-content">
            <h1>BIENVENU SUR STB SICAR</h1>
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
          <img src={esprit} alt="" />
        </div>
      </section>
      <section className="Par-in">
        <div className="img-desc">
          <div className="desc-">
            <h1 className="title-1">UN ACCOMPAGNEMENT</h1>
            <p>
              {" "}
              Nous permettons à nos collaborateurs de grandir au sein de STB
              SICAR, aussi bien professionnellement que personnellement. Nous
              veillons à l’égalité entre tous et à l’accomplissement de chacun.
            </p>
          </div>
          <img src={background} alt="loading" width="422px" className="img--" />
        </div>
      </section>

      <section className="Par-in">
        <div className="img-desc">
          <img
            src={background1}
            alt="loading"
            width="422px"
            className="img--"
          />

          <div className="desc-">
            <h1 className="title-1">LES VALEURS QUI SE PARTAGENT</h1>
            <p>
              {" "}
              Partager les valeurs de respect, de loyauté et de transparence
              pour poser ensemble les fondations d’un partenariat durable et
              constructif. Notre philosophie d'investissement est résolument «
              non-intrusive », pour préserver la liberté d’action des dirigeants
              de l’entreprise. Ainsi, tous nos investissements s’effectuent
              en mode minoritaire, en fonds propres et quasi-fonds propres. Nous
              privilégions une durée moyenne de participation « raisonnable »,
              comprise entre 5 et 7 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="Par-in">
        <div className="img-desc">
          <div className="desc-">
            <h1 className="title-1">UNE AVENTURE HUMAINE</h1>
            <p>
              {" "}
              Chaque partenariat est une aventure riche d’expériences partagées
              et d’ambitions assumées. Nous permettons à nos collaborateurs de
              grandir au sein de STB SICAR, aussi bien professionnellement que
              personnellement. Nous veillons à l’égalité entre tous et à
              l’accomplissement de chacun.
            </p>
          </div>
          <img
            src={background3}
            alt="loading"
            width="422px"
            className="img--"
          />
        </div>
      </section>

      <section className="Par-in">
        <div className="img-desc">
          <img
            src={background2}
            alt="loading"
            width="422px"
            className="img--"
          />

          <div className="desc-">
            <h1 className="title-1">NOTRE VALEUR AJOUTÉE</h1>
            <p>
              {" "}
              L’accompagnement des participations est une pierre angulaire du
              positionnement de la STB SICAR et un marqueur fort de sa
              stratégie. Notre expérience montre qu’en apportant des ressources
              et des compétences complémentaires à celles des équipes
              dirigeantes, nous pouvons contribuer significativement à la
              création de valeur stratégique de l’entreprise, tant sur le plan
              économique que social.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Esprit;
