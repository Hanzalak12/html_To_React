import React from 'react';
import logo from './logo.svg';
import './App.css';

import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap.min-min.css';
import './assets/css/style.css.map';
import './assets/css/default.css';
import './assets/css/default-min.css';
import './assets/css/LineIcons.css';
import './assets/css/magnific-popup.css';
import './assets/css/magnific-popup-min.css';
import './assets/css/slick.css';
// import './assets/css/slick.min-min.css';
import './assets/css/style.css';
// import './assets/css/style.css';


function App() {
  return (
          <div>
            {/*====== PRELOADER PART START ======*/}

            {/*====== PRELOADER PART ENDS ======*/}
            {/*====== NAVBAR PART START ======*/}
            <section className="header-area">
              <div className="navbar-area">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="#">
                          <img src={require('./assets/images/logo.png')} alt="Logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarEight" aria-controls="navbarEight" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="toggler-icon" />
                          <span className="toggler-icon" />
                          <span className="toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse sub-menu-bar" id="navbarEight">
                          <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                              <a className="page-scroll" href="#home">HOME</a>
                            </li>
                            <li className="nav-item">
                              <a className="page-scroll" href="#about">ABOUT</a>
                            </li>
                            <li className="nav-item">
                              <a className="page-scroll" href="#portfolio">PORTFOLIO</a>
                            </li>
                            <li className="nav-item">
                              <a className="page-scroll" href="#pricing">PRICING</a>
                            </li>
                            <li className="nav-item">
                              <a className="page-scroll" href="#testimonial">CLIENTS</a>
                            </li>
                            <li className="nav-item">
                              <a className="page-scroll" href="#contact">CONTACT</a>
                            </li>
                          </ul>
                        </div>
                        <div className="navbar-btn d-none mt-15 d-lg-inline-block">
                          <a className="menu-bar" href="#side-menu-right"><i className="lni-menu" /></a>
                        </div>
                      </nav> {/* navbar */}
                    </div>
                  </div> {/* row */}
                </div> {/* container */}
              </div> {/* navbar area */}
              <div id="home" className="slider-area">
                <div className="bd-example">
                  <div id="carouselOne" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#carouselOne" data-slide-to={0} className="active" />
                      <li data-target="#carouselOne" data-slide-to={1} />
                      <li data-target="#carouselOne" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item bg_cover active" style={{backgroundImage: 'url(assets/images/slider-1.jpg)'}}>
                        <div className="carousel-caption">
                          <div className="container">
                            <div className="row justify-content-center">
                              <div className="col-xl-6 col-lg-7 col-sm-10">
                                <h2 className="carousel-title">Refreshing Design &amp; Easy to Customize</h2>
                                <ul className="carousel-btn rounded-buttons">
                                  <li><a className="main-btn rounded-three" href="#">GET STARTED</a></li>
                                  <li><a className="main-btn rounded-one" href="#">DOWNLOAD</a></li>
                                </ul>
                              </div>
                            </div> {/* row */}
                          </div> {/* container */}
                        </div> {/* carousel caption */}
                      </div> {/* carousel-item */}
                      <div className="carousel-item bg_cover" style={{backgroundImage: 'url(assets/images/slider-2.jpg)'}}>
                        <div className="carousel-caption">
                          <div className="container">
                            <div className="row justify-content-center">
                              <div className="col-xl-6 col-lg-7 col-sm-10">
                                <h2 className="carousel-title">Based on Latest Bootstrap &amp; HTML5</h2>
                                <ul className="carousel-btn rounded-buttons">
                                  <li><a className="main-btn rounded-three" href="#">GET STARTED</a></li>
                                  <li><a className="main-btn rounded-one" href="#">DOWNLOAD</a></li>
                                </ul>
                              </div>
                            </div> {/* row */}
                          </div> {/* container */}
                        </div> {/* carousel caption */}
                      </div> {/* carousel-item */}
                      <div className="carousel-item bg_cover" style={{backgroundImage: 'url(assets/images/slider-3.jpg)'}}>
                        <div className="carousel-caption">
                          <div className="container">
                            <div className="row justify-content-center">
                              <div className="col-xl-6 col-lg-7 col-sm-10">
                                <h2 className="carousel-title">Multi-purpose Landing Page Template</h2>
                                <ul className="carousel-btn rounded-buttons">
                                  <li><a className="main-btn rounded-three" href="#">GET STARTED</a></li>
                                  <li><a className="main-btn rounded-one" href="#">DOWNLOAD</a></li>
                                </ul>
                              </div>
                            </div> {/* row */}
                          </div> {/* container */}
                        </div> {/* carousel caption */}
                      </div> {/* carousel-item */}
                    </div> {/* carousel-inner */}
                    <a className="carousel-control-prev" href="#carouselOne" role="button" data-slide="prev">
                      <i className="lni-arrow-left-circle" />
                    </a>
                    <a className="carousel-control-next" href="#carouselOne" role="button" data-slide="next">
                      <i className="lni-arrow-right-circle" />
                    </a>
                  </div> {/* carousel */}
                </div> {/* bd-example */}
              </div>
            </section>
            {/*====== NAVBAR PART ENDS ======*/}
            {/*====== SAIDEBAR PART START ======*/}
            <div className="sidebar-right">
              <div className="sidebar-close">
                <a className="close" href="#close"><i className="lni-close" /></a>
              </div>
              <div className="sidebar-content">
                <div className="sidebar-logo text-center">
                  <a href="#"><img src={require("././assets/images/logo-alt.png" )}alt="Logo" /></a>
                </div> {/* logo */}
                <div className="sidebar-menu">
                  <ul>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">RESOURCES</a></li>
                    <li><a href="#">CONTACT</a></li>
                  </ul>
                </div> {/* menu */}
                <div className="sidebar-social d-flex align-items-center justify-content-center">
                  <span>FOLLOW US</span>
                  <ul>
                    <li><a href="#"><i className="lni-twitter-original" /></a></li>
                    <li><a href="#"><i className="lni-facebook-filled" /></a></li>
                  </ul>
                </div> {/* sidebar social */}
              </div> {/* content */}
            </div>
            <div className="overlay-right" />
            {/*====== SAIDEBAR PART ENDS ======*/}
            {/*====== ABOUT PART START ======*/}
            <section id="about" className="about-area">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-8">
                    <div className="about-image text-center wow fadeInUp" data-wow-duration="1.5s" data-wow-offset={100}>
                      <img src={require("././assets/images/services.png")} alt="services" />
                    </div>
                    <div className="section-title text-center mt-30 pb-40">
                      <h4 className="title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.6s">The future of designing starts here</h4>
                      <p className="text wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">An open platform for presentations and content collaboration. Sign up to get early access.</p>
                    </div> {/* section title */}
                  </div>
                </div> {/* row */}
                <div className="row">
                  <div className="col-lg-6">
                    <div className="single-about d-sm-flex mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.2s">
                      <div className="about-icon">
                        <img src={require("././assets/images/icon-1.png")} alt="Icon" />
                      </div>
                      <div className="about-content media-body">
                        <h4 className="about-title">Powerful templates</h4>
                        <p className="text">Poorly designed presentations are a thing of the past. Create beautiful and high-quality content that is aligned.</p>
                      </div>
                    </div> {/* single about */}
                  </div>
                  <div className="col-lg-6">
                    <div className="single-about d-sm-flex mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.4s">
                      <div className="about-icon">
                        <img src={require("././assets/images/icon-2.png" )}alt="Icon" />
                      </div>
                      <div className="about-content media-body">
                        <h4 className="about-title">Designed for everyone</h4>
                        <p className="text">Poorly designed presentations are a thing of the past. Create beautiful and high-quality content that is aligned.</p>
                      </div>
                    </div> {/* single about */}
                  </div>
                  <div className="col-lg-6">
                    <div className="single-about d-sm-flex mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.6s">
                      <div className="about-icon">
                        <img src={require("././assets/images/icon-3.png" )}alt="Icon" />
                      </div>
                      <div className="about-content media-body">
                        <h4 className="about-title">Work anywhere</h4>
                        <p className="text">Poorly designed presentations are a thing of the past. Create beautiful and high-quality content that is aligned.</p>
                      </div>
                    </div> {/* single about */}
                  </div>
                  <div className="col-lg-6">
                    <div className="single-about d-sm-flex mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.8s">
                      <div className="about-icon">
                        <img src={require("././assets/images/icon-4.png" )}alt="Icon" />
                      </div>
                      <div className="about-content media-body">
                        <h4 className="about-title">Updated in real time</h4>
                        <p className="text">Poorly designed presentations are a thing of the past. Create beautiful and high-quality content that is aligned.</p>
                      </div>
                    </div> {/* single about */}
                  </div>
                </div> {/* row */}
              </div> {/* container */}
            </section>
            {/*====== ABOUT PART ENDS ======*/}
            {/*====== portfolio PART START ======*/}
            <section id="portfolio" className="portfolio-area">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="section-title text-center pb-20">
                      <h3 className="title">Our Portfolio</h3>
                      <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                    </div> {/* row */}
                  </div>
                </div> {/* row */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="portfolio-menu pt-30 text-center">
                      <ul>
                        <li data-filter="*" className="active">ALL WORK</li>
                        <li data-filter=".branding-3">BRANDING</li>
                        <li data-filter=".marketing-3">MARKETING</li>
                        <li data-filter=".planning-3">PLANNING</li>
                        <li data-filter=".research-3">RESEARCH</li>
                      </ul>
                    </div> {/* portfolio menu */}
                  </div>
                </div> {/* row */}
                <div className="row grid">
                  <div className="col-lg-4 col-sm-6 branding-3 planning-3">
                    <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
                      <div className="portfolio-image">
                        <img src={require("./assets/images/portfolio-1.png" )}alt="" />
                        <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                          <div className="portfolio-content">
                            <div className="portfolio-icon">
                              <a className="image-popup" href="assets/images/portfolio-1.png"><i className="lni-zoom-in" /></a>
                            </div>
                            <div className="portfolio-icon">
                              <a href="#"><i className="lni-link" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio-text">
                        <h4 className="portfolio-title"><a href="#">Graphics Design</a></h4>
                        <p className="text">Short description for the ones who look for something new. Awesome!</p>
                      </div>
                    </div> {/* single portfolio */}
                  </div>
                  <div className="col-lg-4 col-sm-6 marketing-3 research-3">
                    <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                      <div className="portfolio-image">
                        <img src={require("./assets/images/portfolio-2.png" )}alt="" />
                        <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                          <div className="portfolio-content">
                            <div className="portfolio-icon">
                              <a className="image-popup" href="assets/images/portfolio-2.png"><i className="lni-zoom-in" /></a>
                            </div>
                            <div className="portfolio-icon">
                              <a href="#"><i className="lni-link" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio-text">
                        <h4 className="portfolio-title"><a href="#">Graphics Design</a></h4>
                        <p className="text">Short description for the ones who look for something new. Awesome!</p>
                      </div>
                    </div> {/* single portfolio */}
                  </div>
                  <div className="col-lg-4 col-sm-6 branding-3 marketing-3">
                    <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.7s">
                      <div className="portfolio-image">
                        <img src={require("./assets/images/portfolio-3.png" )}alt="" />
                        <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                          <div className="portfolio-content">
                            <div className="portfolio-icon">
                              <a className="image-popup" href="assets/images/portfolio-3.png"><i className="lni-zoom-in" /></a>
                            </div>
                            <div className="portfolio-icon">
                              <a href="#"><i className="lni-link" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio-text">
                        <h4 className="portfolio-title"><a href="#">Graphics Design</a></h4>
                        <p className="text">Short description for the ones who look for something new. Awesome!</p>
                      </div>
                    </div> {/* single portfolio */}
                  </div>
                  <div className="col-lg-4 col-sm-6 planning-3 research-3">
                    <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
                      <div className="portfolio-image">
                        <img src={require("./assets/images/portfolio-4.png" )}alt="" />
                        <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                          <div className="portfolio-content">
                            <div className="portfolio-icon">
                              <a className="image-popup" href="assets/images/portfolio-4.png"><i className="lni-zoom-in" /></a>
                            </div>
                            <div className="portfolio-icon">
                              <a href="#"><i className="lni-link" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio-text">
                        <h4 className="portfolio-title"><a href="#">Graphics Design</a></h4>
                        <p className="text">Short description for the ones who look for something new. Awesome!</p>
                      </div>
                    </div> {/* single portfolio */}
                  </div>
                  <div className="col-lg-4 col-sm-6 marketing-3">
                    <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                      <div className="portfolio-image">
                        <img src={require("./assets/images/portfolio-5.png" )}alt="" />
                        <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                          <div className="portfolio-content">
                            <div className="portfolio-icon">
                              <a className="image-popup" href="assets/images/portfolio-5.png"><i className="lni-zoom-in" /></a>
                            </div>
                            <div className="portfolio-icon">
                              <a href="#"><i className="lni-link" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio-text">
                        <h4 className="portfolio-title"><a href="#">Graphics Design</a></h4>
                        <p className="text">Short description for the ones who look for something new. Awesome!</p>
                      </div>
                    </div> {/* single portfolio */}
                  </div>
                  <div className="col-lg-4 col-sm-6 planning-3">
                    <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.7s">
                      <div className="portfolio-image">
                        <img src={require("./assets/images/portfolio-6.png" )}alt="" />
                        <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                          <div className="portfolio-content">
                            <div className="portfolio-icon">
                              <a className="image-popup" href="assets/images/portfolio-6.png"><i className="lni-zoom-in" /></a>
                            </div>
                            <div className="portfolio-icon">
                              <a href="#"><i className="lni-link" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio-text">
                        <h4 className="portfolio-title"><a href="#">Graphics Design</a></h4>
                        <p className="text">Short description for the ones who look for something new. Awesome!</p>
                      </div>
                    </div> {/* single portfolio */}
                  </div>
                </div> {/* row */}
              </div> {/* container */}
            </section>
            {/*====== portfolio PART ENDS ======*/}
            {/*====== PRINICNG STYLE EIGHT START ======*/}
            <section id="pricing" className="pricing-area">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="section-title text-center pb-20">
                      <h3 className="title">Pricing Plan</h3>
                      <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                    </div> {/* section title */}
                  </div>
                </div> {/* row */}
                <div className="row justify-content-center">                
                  <div className="col-lg-4 col-md-7 col-sm-9">
                    <div className="pricing-style-one mt-40 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.2s">
                      <div className="pricing-icon text-center">
                        <img src={require("./assets/images/wman.svg" )}alt="" />
                      </div>
                      <div className="pricing-header text-center">
                        <h5 className="sub-title">Basic</h5>
                        <p className="month"><span className="price">$ 199</span>/month</p>
                      </div>
                      <div className="pricing-list">
                        <ul>
                          <li><i className="lni-check-mark-circle" /> Carefully crafted components</li>
                          <li><i className="lni-check-mark-circle" /> Amazing page examples</li>
                        </ul>
                      </div>
                      <div className="pricing-btn rounded-buttons text-center">
                        <a className="main-btn rounded-three" href="#">GET STARTED</a>
                      </div>
                    </div> {/* pricing style one */}
                  </div>
                  <div className="col-lg-4 col-md-7 col-sm-9">
                    <div className="pricing-style-one mt-40 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.5s">
                      <div className="pricing-icon text-center">
                        <img src={require("./assets/images/wman.svg" )}alt="" />
                      </div>
                      <div className="pricing-header text-center">
                        <h5 className="sub-title">Pro</h5>
                        <p className="month"><span className="price">$ 399</span>/month</p>
                      </div>
                      <div className="pricing-list">
                        <ul>
                          <li><i className="lni-check-mark-circle" /> Carefully crafted components</li>
                          <li><i className="lni-check-mark-circle" /> Amazing page examples</li>
                        </ul>
                      </div>
                      <div className="pricing-btn rounded-buttons text-center">
                        <a className="main-btn rounded-three" href="#">GET STARTED</a>
                      </div>
                    </div> {/* pricing style one */}
                  </div>
                  <div className="col-lg-4 col-md-7 col-sm-9">
                    <div className="pricing-style-one mt-40 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.8s">
                      <div className="pricing-icon text-center">
                        <img src={require("./assets/images/wman.svg" )}alt="" />
                      </div>
                      <div className="pricing-header text-center">
                        <h5 className="sub-title">Enterprise</h5>
                        <p className="month"><span className="price">$ 699</span>/month</p>
                      </div>
                      <div className="pricing-list">
                        <ul>
                          <li><i className="lni-check-mark-circle" /> Carefully crafted components</li>
                          <li><i className="lni-check-mark-circle" /> Amazing page examples</li>
                        </ul>
                      </div>
                      <div className="pricing-btn rounded-buttons text-center">
                        <a className="main-btn rounded-three" href="#">GET STARTED</a>
                      </div>
                    </div> {/* pricing style one */}
                  </div>
                </div> {/* row */}
              </div> {/* container */}
            </section>
            {/*====== PRINICNG STYLE EIGHT ENDS ======*/}
            {/*====== CALL TO ACTION TWO PART START ======*/}
            <section id="call-action" className="call-action-area">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="call-action-content mt-45">
                      <h3 className="action-title">Get latest updates!</h3>
                      <p className="text">We never spam your email</p>
                    </div> {/* call action content */}
                  </div>
                  <div className="col-lg-7">
                    <div className="call-action-form mt-50">
                      <form action="#">
                        <input type="text" placeholder="Enter your email" />
                        <div className="action-btn rounded-buttons">
                          <button className="main-btn rounded-three">subscribe</button>
                        </div>
                      </form>
                    </div> {/* call action form */}
                  </div>
                </div> {/* row */}
              </div> {/* container */}
            </section>
            {/*====== CALL TO ACTION TWO PART ENDS ======*/}
            {/*====== TESTIMONIAL THREE PART START ======*/}
            <section id="testimonial" className="testimonial-area">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="section-title text-center pb-20">
                      <h3 className="title">Testimonial</h3>
                      <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                    </div> {/* section title */}
                  </div>
                </div> {/* row */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row testimonial-active">
                      <div className="col-lg-4">
                        <div className="single-testimonial mt-30 mb-30 text-center">
                          <div className="testimonial-image">
                            <img src={require("./assets/images/author-3.jpg" )}alt="Author" />
                          </div>
                          <div className="testimonial-content">
                            <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                            <h6 className="author-name">Isabela Moreira</h6>
                            <span className="sub-title">CEO, GrayGrids</span>
                          </div>
                        </div> {/* single testimonial */}
                      </div>
                      <div className="col-lg-4">
                        <div className="single-testimonial mt-30 mb-30 text-center">
                          <div className="testimonial-image">
                            <img src={require("./assets/images/author-1.jpg" )}alt="Author" />
                          </div>
                          <div className="testimonial-content">
                            <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                            <h6 className="author-name">Fiona</h6>
                            <span className="sub-title">Lead Designer, UIdeck</span>
                          </div>
                        </div> {/* single testimonial */}
                      </div>
                      <div className="col-lg-4">
                        <div className="single-testimonial mt-30 mb-30 text-center">
                          <div className="testimonial-image">
                            <img src={require("./assets/images/author-2.jpg" )}alt="Author" />
                          </div>
                          <div className="testimonial-content">
                            <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                            <h6 className="author-name">Elon Musk</h6>
                            <span className="sub-title">CEO, SpaceX</span>
                          </div>
                        </div> {/* single testimonial */}
                      </div>
                      <div className="col-lg-4">
                        <div className="single-testimonial mt-30 mb-30 text-center">
                          <div className="testimonial-image">
                            <img src={require("./assets/images/author-4.jpg" )}alt="Author" />
                          </div>
                          <div className="testimonial-content">
                            <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                            <h6 className="author-name">Fajar Siddiq</h6>
                            <span className="sub-title">CEO, MakerFlix</span>
                          </div>
                        </div> {/* single testimonial */}
                      </div>
                    </div> {/* row */}
                  </div>
                </div> {/* row */}
              </div> {/* container */}
            </section>
            {/*====== TESTIMONIAL THREE PART ENDS ======*/}
            {/*====== CLIENT LOGO PART START ======*/}
            <section id="client" className="client-logo-area">
              <div className="container">
                <div className="row client-active">
                  <div className="col-lg-3">
                    <div className="single-client text-center">
                      <img src={require("./assets/images/client_logo_01.png" )}alt="Logo" />
                    </div> {/* single client */}
                  </div>
                  <div className="col-lg-3">
                    <div className="single-client text-center">
                      <img src={require("./assets/images/client_logo_02.png" )}alt="Logo" />
                    </div> {/* single client */}
                  </div>
                  <div className="col-lg-3">
                    <div className="single-client text-center">
                      <img src={require("./assets/images/client_logo_03.png" )}alt="Logo" />
                    </div> {/* single client */}
                  </div>
                  <div className="col-lg-3">
                    <div className="single-client text-center">
                      <img src={require("./assets/images/client_logo_04.png" )}alt="Logo" />
                    </div> {/* single client */}
                  </div>
                  <div className="col-lg-3">
                    <div className="single-client text-center">
                      <img src={require("./assets/images/client_logo_05.png" )}alt="Logo" />
                    </div> {/* single client */}
                  </div>
                  <div className="col-lg-3">
                    <div className="single-client text-center">
                      <img src={require("./assets/images/client_logo_06.png" )}alt="Logo" />
                    </div> {/* single client */}
                  </div>
                  <div className="col-lg-3">
                    <div className="single-client text-center">
                      <img src={require("./assets/images/client_logo_07.png" )}alt="Logo" />
                    </div> {/* single client */}
                  </div>
                  <div className="col-lg-3">
                    <div className="single-client text-center">
                      <img src={require("./assets/images/client_logo_08.png" )}alt="Logo" />
                    </div> {/* single client */}
                  </div>
                </div> {/* row */}
              </div> {/* container */}
            </section>
            {/*====== CLIENT LOGO PART ENDS ======*/}
            {/*====== CONTACT TWO PART START ======*/}
            <section id="contact" className="contact-area">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="section-title text-center pb-20">
                      <h3 className="title">Get in touch</h3>
                      <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                    </div> {/* section title */}
                  </div>
                </div> {/* row */}
                <div className="row">
                  <div className="col-lg-6">
                    <div className="contact-two mt-50 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.2s">
                      <h4 className="contact-title">Lets talk about the project</h4>
                      <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam unde repellendus delectus facilis quia consequatur maxime perferendis! Sequi, modi consequatur.</p>
                      <ul className="contact-info">
                        <li><i className="lni-money-location" /> Elizabeth St, Melbourne, Australia</li>
                        <li><i className="lni-phone-handset" /> +333 789-321-654</li>
                        <li><i className="lni-envelope" /> hello@ayroui.com</li>
                      </ul>
                    </div> {/* contact two */}
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-form form-style-one mt-35 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.5s">
                      <form id="contact-form" action="assets/contact.php" method="post">
                        <div className="form-input mt-15">
                          <label>Name</label>
                          <div className="input-items default">
                            <input type="text" placeholder="Name" name="name" />
                            <i className="lni-user" />
                          </div>
                        </div> {/* form input */}
                        <div className="form-input mt-15">
                          <label>Email</label>
                          <div className="input-items default">
                            <input type="email" placeholder="Email" name="email" />
                            <i className="lni-envelope" />
                          </div>
                        </div> {/* form input */}
                        <div className="form-input mt-15">
                          <label>Massage</label>
                          <div className="input-items default">
                            <textarea placeholder="Massage" name="massage" defaultValue={""} />
                            <i className="lni-pencil-alt" />
                          </div>
                        </div> {/* form input */}
                        <p className="form-message" />
                        <div className="form-input rounded-buttons mt-20">
                          <button type="submit" className="main-btn rounded-three">Submit</button>
                        </div> {/* form input */}
                      </form>
                    </div> {/* contact form */}
                  </div>
                </div> {/* row */}
              </div> {/* container */}
            </section>
            {/*====== CONTACT TWO PART ENDS ======*/}
            {/*====== FOOTER FOUR PART START ======*/}
            <footer id="footer" className="footer-area">
              <div className="footer-widget">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-sm-6">
                      <div className="footer-link">
                        <h6 className="footer-title">Company</h6>
                        <ul>
                          <li><a href="#">About</a></li>
                          <li><a href="#">Contact</a></li>
                          <li><a href="#">Profile</a></li>
                        </ul>
                      </div> {/* footer link */}
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="footer-link">
                        <h6 className="footer-title">Solutions</h6>
                        <ul>
                          <li><a href="#">Facilities Services</a></li>
                          <li><a href="#">Workplace Staffing</a></li>
                          <li><a href="#">Project Management</a></li>
                        </ul>
                      </div> {/* footer link */}
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="footer-link">
                        <h6 className="footer-title">Product &amp; Services</h6>
                        <ul>
                          <li><a href="#">Products</a></li>
                          <li><a href="#">Business</a></li>
                          <li><a href="#">Developer</a></li>
                        </ul>
                      </div> {/* footer link */}
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="footer-link">
                        <h6 className="footer-title">Help &amp; Suuport</h6>
                        <ul>
                          <li><a href="#">Support Center</a></li>
                          <li><a href="#">FAQ</a></li>
                          <li><a href="#">Terms &amp; Conditions</a></li>
                        </ul>
                      </div> {/* footer link */}
                    </div>
                  </div> {/* row */}
                </div> {/* container */}
              </div> {/* footer widget */}
              <div className="footer-copyright">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <div className="copyright text-center text-lg-left mt-10">
                        <p className="text">Crafted by <a style={{color: '#38f9d7'}} rel="nofollow" href="https://uideck.con">UIdeck</a> and UI Elements from <a style={{color: '#38f9d7'}} rel="nofollow" href="https://ayroui.com">Ayro UI</a></p>
                      </div> {/*  copyright */}
                    </div>
                    <div className="col-lg-2">
                      <div className="footer-logo text-center mt-10">
                        <a href="index.html"><img src={require("./assets/images/logo-2.svg" )}alt="Logo" /></a>
                      </div> {/* footer logo */}
                    </div>
                    <div className="col-lg-5">
                      <ul className="social text-center text-lg-right mt-10">
                        <li><a href="https://facebook.com/uideckHQ"><i className="lni-facebook-filled" /></a></li>
                        <li><a href="https://twitter.com/uideckHQ"><i className="lni-twitter-original" /></a></li>
                        <li><a href="https://instagram.com/uideckHQ"><i className="lni-instagram-original" /></a></li>
                        <li><a href="#"><i className="lni-linkedin-original" /></a></li>
                      </ul> {/* social */}
                    </div>
                  </div> {/* row */}
                </div> {/* container */}
              </div> {/* footer copyright */}
            </footer>
            {/*====== FOOTER FOUR PART ENDS ======*/}
            {/*====== BACK TOP TOP PART START ======*/}
            <a href="#" className="back-to-top"><i className="lni-chevron-up" /></a>
            {/*====== BACK TOP TOP PART ENDS ======*/}  
            {/*====== PART START ======*/}
            {/*====== PART ENDS ======*/}
          </div>
  )
}

export default App;
