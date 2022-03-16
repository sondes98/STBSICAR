import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carousel.css";
import odd04 from "../images/04.png";
import odd05 from "../images/05.png";
import odd07 from "../images/07.png";
import odd08 from "../images/08.png";
import odd09 from "../images/09.png";
import odd12 from "../images/12.png";
import odd16 from "../images/16.png";
import un from "../images/un.jpg";
import "./odds.css";



const odd = () => {
  
  return (
    <div className="logoCarousel">
      
        <Swiper
          spaceBetween={100}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          slidesPerView={3}
        >
          <SwiperSlide>
            <div className="card--">
              <div className="card__side card__side--front card__side--front-1">
                <div className="card__description">
                  <img src={odd04} alt="" width="100%" />
                </div>
              </div>
              <div className="card__side card__side--back card__side--back">
                <div className="card__description">
                  <p className="desc">
                    En 2021 et malgré la crise sanitaire, la STB SICAR, qui
                    compte 12 collaborateurs, a assuré la formation de 4
                    stagiaires aux métiers du capital investissement. Également
                    et en application de sa politique d’ouverture sur
                    l’université, la STB SICAR et dans le cadre du partenariat
                    avec l’école supérieure des sciences et technologies du
                    design, un challenge pour la rénovation de son siège social
                    a été lancé et a concerné 40 étudiants.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card--">
              <div className="card__side card__side--front card__side--front">
                <div className="card__description">
                  <img src={odd05} alt="" width="100%" />
                </div>
              </div>
              <div className="card__side card__side--back card__side--back">
                <div className="card__description">
                  {" "}
                  <p className="desc">
                    L’effectif de STB SICAR est composé de 70% de femmes contre
                    30% d’hommes. La femme est représentée à hauteur de 20% dans
                    son conseil d’administration. STB SICAR suit également la
                    politique mise en œuvre auprès des entreprises qu’elle
                    accompagne en ce qui concerne l’emploi des femmes et leur
                    participation aux postes de responsabilité.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card--">
              <div className="card__side card__side--front card__side--front">
                <div className="card__description">
                  <img src={odd07} alt="" width="100%" />
                </div>
              </div>
              <div className="card__side card__side--back card__side--back">
                <div className="card__description">
                  {" "}
                  <p className="desc">
                    En 2020, sur 7 projets financés 2 ont concerné des projets
                    industriels d’énergies renouvelables.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card--">
              <div className="card__side card__side--front card__side--front">
                <div className="card__description">
                  <img src={odd08} alt="" width="100%" />
                </div>
              </div>
              <div className="card__side card__side--back card__side--back">
                <div className="card__description">
                  {" "}
                  <p className="desc">
                    Entre 2016 et 2020, la STB SICAR a contribué à la création
                    voire maintien de plus de 1700 postes. Entre 2018 et 2020,
                    plus de 20 projets de création et e développement de PME ont
                    été approuvés. Pour la période 2016-2020, et si l’on se
                    réfère au calcul du levier (Coût total des projets
                    investis/Montant investi), un dinar investi par la STB SICAR
                    en draine en moyenne 8 en termes d’investissement.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card--">
              <div className="card__side card__side--front card__side--front">
                <div className="card__description">
                  <img src={odd09} alt="" width="100%" />
                </div>
              </div>
              <div className="card__side card__side--back card__side--back">
                <div className="card__description">
                  {" "}
                  <p className="desc">
                    La STB SICAR a réalisé 297 investissements répartis sur tout
                    le territoire dont 53% dans l’industrie. Voire carte
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card--">
              <div className="card__side card__side--front card__side--front">
                <div className="card__description">
                  <img src={odd12} alt="" width="100%" />
                </div>
              </div>
              <div className="card__side card__side--back card__side--back">
                <div className="card__description">
                  {" "}
                  <p className="desc">
                    La STB SICAR a fait un don du matériel informatique usagé à
                    l’association «sharek» au profit d’étudiants tunisiens qui
                    en ont besoin afin de poursuivre les programmes à distance.
                    La STB SICAR a signé une convention de partenariat avec El
                    Moraskal pour le recyclage du papier
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card--">
              <div className="card__side card__side--front card__side--front">
                <div className="card__description">
                  <img src={odd16} alt="" width="100%" />
                </div>
              </div>
              <div className="card__side card__side--back card__side--back">
                <div className="card__description">
                  {" "}
                  <p className="desc">
                    La STB SICAR promeut une gouvernance responsable auprès des
                    entreprises en portefeuille et veille à la mise en place des
                    comités d’audit, de rémunération, de risques, …etc lorsque
                    la taille le permet. .
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card--">
              <div className="card__side ">
                <div className="card__description">
                  <img src={un} alt="" width="100%" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
    </div>
  );
};

export default odd;
