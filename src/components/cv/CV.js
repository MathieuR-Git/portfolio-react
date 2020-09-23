import React, { Component } from "react";
import "./CV.css";
import pdf from "./MathieuReversez-CV.pdf";

export default class CV extends Component {
  render() {
    return (
      <div>
        <h2>- MON CV -</h2>
        <p class="download">
          Télécharger le{" "}
          <a href={pdf} download>
            PDF
          </a>
        </p>
        <div class="container-cv">
          <div class="resume-wrapper text-center position-relative">
            <div class="text-left bg-white shadow-lg main">
              <header class="resume-header pt-4 pt-md-0">
                <div class="media flex-column flex-md-row">
                  <img
                    class="mr-3 img-fluid picture mx-auto"
                    src={process.env.PUBLIC_URL + "/profile.jpg"}
                    alt=""
                  />
                  <div class="media-body p-4 mx-auto mx-lg-0">
                    <div class="primary-info text-center">
                      <h1 class="name mt-0 mb-1 text-white text-uppercase">
                        Mathieu REVERSEZ
                      </h1>
                      <div class="title mb-3">
                        Développeur Full Stack (React / Node.JS)
                      </div>
                    </div>
                    <hr />
                    {/* <hr style="background: white" /> */}
                    <div class="space-between">
                      <a
                        href="mailto:mathieu.reversez@gmail.com"
                        class="aligner-item"
                      >
                        <span class="fa-container text-center mr-2">
                          <i
                            class="far fa-envelope fa-fw "
                            // data-fa-transform="grow-3"
                          ></i>
                        </span>
                        mathieu.reversez@gmail.com
                      </a>

                      <a
                        href="https://linkedin.com/in/mathieu-reversez"
                        class="aligner-item"
                      >
                        <span class="fa-container text-center mr-2">
                          <i class="fab fa-linkedin-in fa-fw"></i>
                        </span>
                        https://linkedin.com/in/mathieu-reversez
                      </a>

                      <a
                        href="https://github.com/MathieuR-Git"
                        class="aligner-item"
                      >
                        <span class="fa-container text-center mr-2">
                          <i class="fab fa-github-alt fa-fw"></i>
                        </span>
                        https://github.com/MathieuR-Git
                      </a>
                    </div>
                    {/* <div class="row d-flex flex-column flex-md-row">
                      {" "}
                      <div class="col">
                        <ul class="list-unstyled">
                          <li class="mb-2">
                            <a href="mailto:mathieu.reversez@gmail.com">
                              <i
                                class="far fa-envelope fa-fw mr-2"
                                data-fa-transform="grow-3"
                              ></i>
                              mathieu.reversez@gmail.com
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col">
                        <div class="secondary-info ml-md-auto mt-2">
                          <ul class="resume-social list-unstyled">
                            <li class="mb-3">
                              <a href="https://linkedin.com/in/mathieu-reversez">
                                <span class="fa-container text-center mr-2">
                                  <i class="fab fa-linkedin-in fa-fw"></i>
                                </span>
                                https://linkedin.com/in/mathieu-reversez
                              </a>
                            </li>
                            <li class="mb-3">
                              <a href="https://github.com/MathieuR-Git">
                                <span class="fa-container text-center mr-2">
                                  <i class="fab fa-github-alt fa-fw"></i>
                                </span>
                                https://github.com/MathieuR-Git
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </header>

              <div class="resume-body p-5">
                <section class="resume-section summary-section mb-5">
                  <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3 text-center">
                    Présentation
                  </h2>

                  <div class="resume-section-content">
                    <p class="mb-0">
                      Après avoir travaillé dix ans dans la grande distribution,
                      j'ai décidé de faire de mon attrait pour l'informatique un
                      métier. En tant que développeur Full Stack, je souhaite
                      aujourd’hui mettre à profit mes compétences en
                      développement web et en gestion de projet. Rigoureux et
                      orienté résultat, ma capacité d'intégration dans une
                      équipe me permet d'atteindre mes objectifs.
                    </p>
                  </div>
                </section>

                <div class="row">
                  <div class="col-lg-8">
                    <section class="resume-section experience-section mb-5">
                      <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                        Experience professionnelle
                      </h2>
                      <div class="resume-section-content">
                        <div class="resume-timeline position-relative">
                          <article class="resume-timeline-item position-relative pb-5">
                            <div class="resume-timeline-item-header mb-2">
                              <div class="d-flex flex-column flex-md-row">
                                <h3 class="resume-position-title font-weight-bold mb-1">
                                  Développeur Full Stack
                                </h3>
                              </div>

                              <div class="resume-company-name ml-auto">
                                Insy2s
                              </div>
                              <div class="resume-position-time">
                                Novembre 2019 à Décembre 2019
                              </div>
                            </div>

                            <div class="resume-timeline-item-desc">
                              <p>
                                Projet SynerHome (plateforme de gestion de
                                stock).
                              </p>
                              <p>
                                Création d'une Application Métier ELM
                                (Enterprise Learning Management).
                              </p>
                              <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                                <ins>Tâches réalisées</ins> :
                              </h4>

                              <ul>
                                <li>
                                  Développement d'une interface de gestion de
                                  stock.
                                </li>
                                <li>
                                  Interface de gestion de catalogues de
                                  formations, de sessions, et de demandes.
                                </li>
                                <li>Développement de Web Services.</li>
                              </ul>
                              <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                                <ins>Technologies utilisées</ins> :
                              </h4>
                              <ul class="list-inline">
                                <li class="list-inline-item">
                                  <span class="badge badge-primary badge-pill">
                                    React
                                  </span>
                                </li>
                                <li class="list-inline-item">
                                  <span class="badge badge-primary badge-pill">
                                    Redux
                                  </span>
                                </li>
                                <li class="list-inline-item">
                                  <span class="badge badge-primary badge-pill">
                                    MDBootstrap
                                  </span>
                                </li>
                                <li class="list-inline-item">
                                  <span class="badge badge-primary badge-pill">
                                    GitLab
                                  </span>
                                </li>
                                <li class="list-inline-item">
                                  <span class="badge badge-primary badge-pill">
                                    Java
                                  </span>
                                </li>
                                <li class="list-inline-item">
                                  <span class="badge badge-primary badge-pill">
                                    Jhipster
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </article>

                          <article class="resume-timeline-item position-relative pb-5">
                            <div class="resume-timeline-item-header mb-2">
                              <div class="d-flex flex-column flex-md-row">
                                <h3 class="resume-position-title font-weight-bold mb-1">
                                  Préparateur de commandes
                                </h3>
                              </div>

                              <div class="resume-company-name ml-auto">
                                E.Leclerc Drive
                              </div>
                              <div class="resume-position-time">
                                2012 - 2019
                              </div>
                            </div>

                            <div class="resume-timeline-item-desc">
                              <div>
                                <p>
                                  Réception et vérification de la marchandise
                                </p>
                                <p>Réapprovisionnement du stock</p>
                                <p>Préparation de commandes</p>
                                <p>
                                  Maîtrise du logiciel de gestion de commandes
                                </p>
                                <p>Fidélisation de la clientèle</p>
                                <p>Gestion de stock</p>
                              </div>
                              <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                                <ins>Mission supplémentaire</ins> :
                              </h4>
                              <p>
                                Pilotage d'une équipe de 5 personnes (2015 -
                                2019)
                              </p>
                              <ul>
                                <li>Anticiper et gérer les conflits</li>
                                <li>Encourager la cohésion d'équipe</li>
                                <li>Motiver l'équipe et l'impliquer</li>
                                <li>Prioriser les tâches</li>
                                <li>
                                  Gestion du temps, planification des tâches
                                </li>
                              </ul>
                            </div>
                          </article>

                          <article class="resume-timeline-item position-relative pb-5">
                            <div class="resume-timeline-item-header mb-2">
                              <div class="d-flex flex-column flex-md-row">
                                <h3 class="resume-position-title font-weight-bold mb-1">
                                  Hôte de caisse
                                </h3>
                              </div>

                              <div class="resume-company-name ml-auto">
                                Carrefour Market
                              </div>
                              <div class="resume-position-time">
                                2009 - 2011
                              </div>
                            </div>

                            <div class="resume-timeline-item-desc">
                              <p>Accueillir les clients</p>
                              <p>Enregistrer les articles</p>
                              <p>
                                Encaisser, rendre la monnaie ainsi qu’un
                                justificatif (ticket de caisse)
                              </p>
                              <p>
                                Contrôler et vérifier les articles (dans le
                                cadre d’une démarque par exemple)
                              </p>
                              <p>
                                Effectuer le retrait d’un antivol si nécessaire
                              </p>
                              <p>
                                Gérer les attentes et les litiges à sa caisse
                              </p>
                              <p>
                                Promouvoir la carte de fidélité et les
                                différents services de la marque
                              </p>
                            </div>
                          </article>

                          <article class="resume-timeline-item position-relative">
                            <div class="resume-timeline-item-header mb-2">
                              <div class="d-flex flex-column flex-md-row">
                                <h3 class="resume-position-title font-weight-bold mb-1">
                                  Employé Libre Service
                                </h3>
                              </div>

                              <div class="resume-company-name ml-auto">
                                Carrefour Market
                              </div>
                              <div class="resume-position-time">
                                2008 - 2009
                              </div>
                            </div>

                            <div class="resume-timeline-item-desc">
                              <p>
                                Réception des marchandises, et veille à la
                                conformité de la livraison
                              </p>
                              <p>Réapprovisionnement des rayons</p>
                              <p>
                                Vérification du balisage et l'étiquetage des
                                produits en rayon
                              </p>
                              <p>Vérification de l'état des stocks</p>
                              <p>
                                Surveiller la conservation des produits
                                périssables et enlever les produits impropres à
                                la vente
                                <span class="text-muted">
                                  (Date Limite de Consommation, Date Limite
                                  d'Utilisation Optimale)
                                </span>
                              </p>
                              <p>
                                Surveiller la température des chambres froides,
                                des réfrigérateurs, en rayon et en réserve
                              </p>
                              <p>Relation client</p>
                              <p>Inventaire</p>
                            </div>
                          </article>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div class="col-lg-4">
                    <section class="resume-section skills-section mb-5">
                      <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                        Compétences &amp; Outils
                      </h2>
                      <div class="resume-section-content">
                        <div class="resume-skill-item">
                          <h3 class="resume-skills-cat font-weight-bold">
                            Frontend
                          </h3>
                          <ul class="list-unstyled mb-4">
                            <li class="mb-2">
                              <div class="resume-skill-name">React</div>
                              <div class="progress resume-progress">
                                <div
                                  class="progress-bar theme-progress-bar-dark"
                                  role="progressbar"
                                  style={{ width: "80%" }}
                                  // style="width: 80%"
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </li>
                            <li class="mb-2">
                              <div class="resume-skill-name">VueJS</div>
                              <div class="progress resume-progress">
                                <div
                                  class="progress-bar theme-progress-bar-dark"
                                  role="progressbar"
                                  style={{ width: "70%" }}
                                  // style="width: 70%"
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </li>
                            <li class="mb-2">
                              <div class="resume-skill-name">AngularJS</div>
                              <div class="progress resume-progress">
                                <div
                                  class="progress-bar theme-progress-bar-dark"
                                  role="progressbar"
                                  style={{ width: "45%" }}
                                  // style="width: 45%"
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </li>

                            <li class="mb-2">
                              <div class="resume-skill-name">JavaScript</div>
                              <div class="progress resume-progress">
                                <div
                                  class="progress-bar theme-progress-bar-dark"
                                  role="progressbar"
                                  style={{ width: "80%" }}
                                  // style="width: 80%"
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </li>
                            <li class="mb-2">
                              <div class="resume-skill-name">PHP</div>
                              <div class="progress resume-progress">
                                <div
                                  class="progress-bar theme-progress-bar-dark"
                                  role="progressbar"
                                  style={{ width: "30%" }}
                                  // style="width: 30%"
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </li>
                            <li class="mb-2">
                              <div class="resume-skill-name">HTML/CSS</div>
                              <div class="progress resume-progress">
                                <div
                                  class="progress-bar theme-progress-bar-dark"
                                  role="progressbar"
                                  style={{ width: "80%" }}
                                  // style="width: 80%"
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </li>
                            <li class="mb-2">
                              <div class="resume-skill-name">
                                Bootstrap / MDBoostrap
                              </div>
                              <div class="progress resume-progress">
                                <div
                                  class="progress-bar theme-progress-bar-dark"
                                  role="progressbar"
                                  style={{ width: "70%" }}
                                  // style="width: 70%"
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div class="resume-skill-item">
                          <h4 class="resume-skills-cat font-weight-bold">
                            Backend
                          </h4>
                          <ul class="list-unstyled">
                            <li class="mb-2">
                              <div class="resume-skill-name">Node.js</div>
                              <div class="progress resume-progress">
                                <div
                                  class="progress-bar theme-progress-bar-dark"
                                  role="progressbar"
                                  style={{ width: "70%" }}
                                  // style="width: 70%"
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </li>
                            <li class="mb-2">
                              <div class="resume-skill-name">PHP</div>
                              <div class="progress resume-progress">
                                <div
                                  class="progress-bar theme-progress-bar-dark"
                                  role="progressbar"
                                  style={{ width: "20%" }}
                                  // style="width: 20%"
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div class="resume-skill-item">
                          <h4 class="resume-skills-cat font-weight-bold">
                            Autres
                          </h4>
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <span class="badge-other">
                                Intégration continue
                              </span>
                              <small class="text-muted font-weight-normal">
                                (GitHub, GitLab)
                              </small>
                            </li>
                            <li class="list-inline-item">
                              <span class="badge-other">Base de données</span>
                              <small class="text-muted font-weight-normal">
                                (SQL, NoSQL)
                              </small>
                            </li>
                            <li class="list-inline-item">
                              <span class="badge-other">Authentification</span>
                              <small class="text-muted font-weight-normal">
                                (Firebase)
                              </small>
                            </li>
                            <li class="list-inline-item">
                              <span class="badge-other">Hébergement</span>
                              <small class="text-muted font-weight-normal">
                                (Heroku)
                              </small>
                            </li>
                            <br />
                            <li class="list-inline-item">
                              <span class="badge-other">Méthode AGILE</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    <section class="resume-section education-section mb-5">
                      <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                        Formations
                      </h2>
                      <div class="resume-section-content">
                        <ul class="list-unstyled">
                          <li class="mb-2">
                            <div class="resume-degree font-weight-bold">
                              Développeur Full Stack
                            </div>
                            <small class="text-muted font-weight-normal">
                              (HTML, CSS, Javascript, Bootstrap, JQuery, React,
                              AngularJS, Vue.JS, MySQL, MongoDB, NodeJS, API)
                            </small>
                            <div class="resume-degree-org">AFPA - Lille</div>
                            <div class="resume-degree-time">2019</div>
                          </li>
                          <li>
                            <div class="resume-degree font-weight-bold">
                              Baccalauréat Technologique Informatique et Gestion
                            </div>
                            <div class="resume-degree-org">
                              Lycée Jean Moulin - Roubaix
                            </div>
                            <div class="resume-degree-time">2006</div>
                          </li>
                        </ul>
                      </div>
                    </section>

                    <section class="resume-section language-section mb-5">
                      <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                        Langues
                      </h2>
                      <div class="resume-section-content">
                        <ul class="list-unstyled resume-lang-list">
                          <li class="mb-2">
                            <span class="resume-lang-name font-weight-bold">
                              Français
                            </span>
                            <small class="text-muted font-weight-normal">
                              (langue maternelle)
                            </small>
                          </li>
                          <li class="mb-2 align-middle">
                            <span class="resume-lang-name font-weight-bold">
                              Anglais
                            </span>
                            <small class="text-muted font-weight-normal">
                              (technique)
                            </small>
                          </li>
                          <li>
                            <span class="resume-lang-name font-weight-bold">
                              Espagnol
                            </span>
                            <small class="text-muted font-weight-normal">
                              (notions)
                            </small>
                          </li>
                        </ul>
                      </div>
                    </section>

                    <section class="resume-section interests-section mb-5">
                      <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                        Centres d'intérêt
                      </h2>
                      <div class="resume-section-content">
                        <ul class="list-unstyled">
                          <li class="mb-1">Fitness</li>
                          <li class="mb-1">Comics</li>
                          <li class="mb-1">Bricolage</li>
                          <li class="mb-1">High-Tech</li>
                        </ul>
                      </div>
                    </section>
                    <section class="resume-section others-section mb-5">
                      <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                        Autre
                      </h2>
                      <div class="resume-section-content">
                        <ul class="list-unstyled">
                          <li class="mb-1">Permis B</li>
                          <li class="mb-1">Véhiculé</li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
