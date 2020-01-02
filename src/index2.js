import React from 'react';
import logo from './logo.svg';
import './App.css';

import './assets/css/bootstrap-theme.css';
import './assets/css/bootstrap.min.css';
import './assets/css/default.css';
import './assets/css/default-min.css';
// import './assets/css/flexslider.css';
// import './assets/css/jplayer.blue.monday.min.css';
// import './assets/css/owl.carousel.css';
// import './assets/css/owl.theme.css';
// import './assets/css/prettyPhoto.css';
import './assets/css/smoothslides.theme.css';


function App() {
 return(
    <div>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content />
    <meta name="author" content />
    <title>Couple - HTML5 Boostrap Wedding Event template</title>
    {/* Favicons */}
    <link rel="shortcut icon" href="img/fav.png" />
    {/* Custom Fonts */}
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet" type="text/css" />
    <link href="http://fonts.googleapis.com/css?family=Great+Vibes" rel="stylesheet" type="text/css" />
    {/* Bootstrap Core CSS */}
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
    <link href="css/bootstrap.css" rel="stylesheet" />
    <link href="css/owl.theme.css" rel="stylesheet" />
    <link href="css/owl.carousel.css" rel="stylesheet" />
    {/* Pretty Photo CSS */}
    <link href="css/prettyPhoto.css" rel="stylesheet" />
    <link rel="stylesheet" href="css/smoothslides.theme.css" />
    <link rel="stylesheet" href="style.css" />
    <link href="css/responsive.css" rel="stylesheet" />
    {/* Navigation */}
    <nav id="header_nav" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="navbar-header page-scroll">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="index.html">Couple</a>
        </div>
        {/* Collect the nav links, forms, and other content for toggling */}
        <div className="Main_Menu navbar-example collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right main_nav">
            <li> <a href="#page-top">Home</a> </li>
            <li> <a href="#bride_groom_sec">Bride &amp; Groom</a> </li>
            <li> <a href="#family">Our Family</a> </li>
            <li> <a href="#photo_gallery">Photo Gallery</a> </li>
            <li> <a href="#events">Events</a> </li>
            <li> <a href="#blog">Blog</a> </li>
            <li> <a href="#rsvp">RSVP</a> </li>
          </ul>
        </div>{/* /.navbar-collapse */}
        {/* /.navbar-collapse */}
      </div>
      {/* /.container-fluid */}
    </nav>
    <div id="preloader">
      <div id="status">
        <div id="bowlG">
          <div id="bowl_ringG">
            <div className="ball_holderG">
              <div className="ballG"><div id="heart" /></div>
            </div>
          </div>
        </div>{/* #bowlG */}
        <img id="logo_n" src="img/logo.png" width={160} alt="Couple Logo" />
      </div>{/* #status */}
    </div> {/* #preloader */}
    {/* Header */}
    <header>
      <div className="container-fluid">
        <div className="row">
          <section id="main-slider" className="main-slider">
            <div className="ss-slides slides">
              <div className="ss-slide">
                <img src="img/placehold/slider.png" alt="Couple" />
                <div className="slide_text_wrap">
                  <div className="slider-text">
                    <h2 className="slider-head">Jane &amp; John</h2>
                    <p className>Are getting married on 15 June 2015,NewYork </p>
                  </div>
                </div>
              </div>
              <div className="ss-slide">
                <img src="img/placehold/slider.png" alt="Couple" />
                <div className="slide_text_wrap">
                  <div className="slider-text">
                    <h2 className="slider-head">Jane &amp; John</h2>
                    <p className>Are getting married on 15 June 2015,NewYork </p>
                  </div>
                </div>
              </div>
              <div className="ss-slide">
                <img src="img/placehold/slider.png" alt="Couple" />
                <div className="slide_text_wrap">
                  <div className="slider-text">
                    <h2 className="slider-head">Jane &amp; John</h2>
                    <p className>Are getting married on 15 June 2015,NewYork </p>
                  </div>
                </div>
              </div>{/* ss-slide */}
            </div>{/* ss-slides slides */}
            <div className="countdown-wrap new_slide">
              <div className="countdown" />
            </div>
          </section>{/*/#main-slider*/}
        </div>{/* row */}
      </div>{/* container-fluid */}
    </header>
    {/*Bride Groom Section*/}
    <section id="bride_groom_sec" className="wedding-sec bride_groom_sec bride_groom_sec_2 round">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-head">
              <h2 className="section-heading">Bride &amp; Groom</h2>
              <div className="bottom-dash" />
              <p className="section-subheading text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>{/* section-head */}
          </div>{/* col-lg-12 */}
        </div>{/* row */}
      </div>{/* container */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="br_grm">
              <div className="brd_grm_wrap">
                <div className="brd_grm_img">
                  <img src="img/placehold/bride-grm4.png" className="img-circle" alt="Bride" />
                  <div className="brgm_overlay">
                    <a className="br_gr_zoom" href="#myModal1" data-toggle="modal">
                      <img src="img/zoom.png" alt="zoom img" />
                    </a>	 
                  </div>{/* brgm_overlay */}
                </div>{/* brd_grm_img */}
              </div>{/* brd_grm_wrap */}
              <h3>Jane doe</h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. Sed ut 
                perspiciatis.</p>
              <p className="social_icons">
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-linkedin" /></a>
                <a href="#"><i className="fa fa-facebook" /></a>
              </p>
            </div>{/* br_grm */}
          </div>{/* col-md-6 */}
          <div className="col-md-6">
            <div className="br_grm">
              <div className="brd_grm_wrap">
                <div className="brd_grm_img">
                  <img src="img/placehold/bride-grm4.png" className="img-circle" alt="Groom" />
                  <div className="brgm_overlay">
                    <a className="br_gr_zoom" href="#myModal2" data-toggle="modal">
                      <img src="img/zoom.png" alt="" />
                    </a>
                  </div>{/* brgm_overlay */}
                </div>{/* brd_grm_img */}
              </div>{/* brd_grm_wrap */}
              <h3>Jhon doe</h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. Sed ut perspiciatis.</p>
              <p className="social_icons">
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-linkedin" /></a>
                <a href="#"><i className="fa fa-facebook" /></a>
              </p>
            </div>{/* br_grm */}
          </div>{/* col-md-6 */}
        </div>{/* row */}
      </div>{/* container */} 
    </section>
    {/*Bride Groom Section End*/}
    {/*Parallex Section One*/}
    <div className="img-holder" data-image="img/placehold/parallex1.png" data-width={1400} data-height={1122} />
    {/*Parallex Section One End*/}
    {/* timeline section */}
    {/* lovestory Section */}
    <section id="lovestory" className="wedding-sec lovestory_sec lovestory_timeline_sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-head">
              <h2 className="section-heading">Love Story</h2>
              <div className="bottom-dash" />
              <p className="section-subheading text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>{/* section-head */}
          </div>{/* col-lg-12 */}
        </div>{/* row */}	
      </div>{/* container */}
      <div id="timeline" className="timeline_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li className="timeline-inverted right">
                  <div className="timeline-image">
                    <img className="img-circle img-responsive" src="img/timeline/meet.png" alt="Couple first meet" />
                  </div>
                  <div className="timeline-panel right-panel">
                    <div className="timeline-heading">
                      <p className="posting_date">December 19,2012</p> 
                      <h3>Day we meet each other</h3>
                    </div>
                    <div className="timeline-body">
                      <div className="timeline_img">
                        <img src="img/placehold/timeline.png" alt="Couple first meet" />
                        <div className="overlay_tml">
                          <div className="overlay_text">
                            <div className="inner-extra">
                              <a href="img/two/image1.png" data-gal="prettyPhoto"><img src="img/zoom.png" alt="" /></a>
                              <p>Day we meet each other</p>
                            </div>
                          </div>
                        </div>{/* .overlay_tml */}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="left">
                  <div className="timeline-image">
                    <img className="img-circle img-responsive" src="img/timeline/kiss.png" alt="Couple first kiss" />
                  </div>
                  <div className="timeline-panel left-panel">
                    <div className="timeline-heading">
                      <p className="posting_date">february 19,2013</p> 
                      <h3>Our first kiss</h3>
                    </div>
                    <div className="timeline-body">
                      <div className="timeline_img">
                        <img src="img/placehold/timeline.png" alt="" />
                        <div className="overlay_tml">
                          <div className="overlay_text">
                            <div className="inner-extra">
                              <a href="img/two/image2.png" data-gal="prettyPhoto"><img src="img/zoom.png" alt="Couple first kiss" /></a>
                              <p>Our first kiss</p>
                            </div>
                          </div>
                        </div>{/* .overlay_tml */}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted right">
                  <div className="timeline-image">
                    <img className="img-circle img-responsive" src="img/timeline/trip.png" alt="Couple first holiday trip" />
                  </div>
                  <div className="timeline-panel right-panel">
                    <div className="timeline-heading">
                      <p className="posting_date">july 19,2013</p> 
                      <h3>our holiday trip</h3>
                    </div>
                    <div className="timeline-body">
                      <div className="timeline_img">
                        <img src="img/placehold/timeline.png" alt="Couple first holiday trip" />
                        <div className="overlay_tml">
                          <div className="overlay_text">
                            <div className="inner-extra">
                              <a href="img/two/image3.png" data-gal="prettyPhoto"><img src="img/zoom.png" alt="" /></a>
                              <p>our holiday trip</p>
                            </div>
                          </div>
                        </div>{/* .overlay_tml */}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="left">
                  <div className="timeline-image">
                    <img className="img-circle img-responsive" src="img/timeline/engage.png" alt="Couple get engaged" />
                  </div>
                  <div className="timeline-panel left-panel">
                    <div className="timeline-heading">
                      <p className="posting_date">january 19,2013</p>  
                      <h3>get engaged</h3>
                    </div>
                    <div className="timeline-body">
                      <div className="timeline_img">
                        <img src="img/placehold/timeline.png" alt="Couple get engaged" />	
                        <div className="overlay_tml">
                          <div className="overlay_text">
                            <div className="inner-extra">
                              <a href="img/two/image4.png" data-gal="prettyPhoto"><img src="img/zoom.png" alt="" /></a>
                              <p>get engaged</p>
                            </div>
                          </div>
                        </div>{/* .overlay_tml */}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted right">
                  <div className="timeline-image">
                    <img className="img-circle img-responsive" src="img/timeline/pregnant.png" alt="" />
                  </div>
                  <div className="timeline-panel right-panel">
                    <div className="timeline-heading">
                      <p className="posting_date"> january 19,2015</p> 
                      <h3>Baby coming soon</h3>
                    </div>
                    <div className="timeline-body">
                      <div className="timeline_img">
                        <img src="img/placehold/timeline.png" alt="Baby coming soon" />
                        <div className="overlay_tml">
                          <div className="overlay_text">
                            <div className="inner-extra">
                              <a href="img/two/image5.png" data-gal="prettyPhoto"><img src="img/zoom.png" alt="" /></a>
                              <p>Baby coming soon</p>
                            </div>
                          </div>
                        </div>{/* .overlay_tml */}
                      </div>
                    </div>
                  </div>
                </li>	
                <li className="timeline-inverted">
                  <div className="timeline-image more">
                    <a href="#">
                      <div className="inner-more">
                        <p>More</p>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>{/* .timeline */}
            </div>{/* .col-lg-12 */}
          </div>{/* .row */}
        </div>{/* .container */}
      </div>{/* .timeline_sec */}
    </section>
    {/* timeline section end*/}
    {/*Parallex section 2*/}
    <div className="img-holder" data-image="img/placehold/parallex2.png" data-width={2616} data-height={1553} />
    {/*Parallex section 2 End*/}
    {/*Our Family section*/}
    <section id="family" className="wedding-sec family_sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-head">
              <h2 className="section-heading">Our Family </h2>
              <div className="bottom-dash" />
              <p className="section-subheading text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>{/* .section-head */}
          </div>{/* .col-lg-12 */}
        </div>{/* .row */}
      </div>{/* .container */}
      <div className="family_member_wrap four">
        <div className="container">
          <div className="row">
            {/* col-lg-12 */}
            <div role="tabpanel" className="family_tab_4">
              {/* Nav tabs */}
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active"><a href="#family1" aria-controls="home" role="tab" data-toggle="tab">Bride Family</a></li>
                <li role="presentation"><a href="#family2" aria-controls="profile" role="tab" data-toggle="tab">Groom Family</a></li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane fade in active" id="family1">
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="family_mem_wrap">
                      <div className="family_mem_img">
                        <img src="img/placehold/family-mem-4.png" className="img-circle" alt="Father" />
                        <div className="brgm_overlay">
                          <p className="social_icons">
                            <a href="#"><i className="fa fa-twitter" /></a>
                            <a href="#"><i className="fa fa-linkedin" /></a>
                            <a href="#"><i className="fa fa-facebook" /></a>
                          </p> 	 
                        </div>{/* .brgm_overlay */}
                      </div>{/* .family_mem_img */}
                      <h3>John Connor</h3>
                      <p className="relation">father</p>
                      <p className="family_txt_details">Nemo enim ipsam voluptatem quia voluptas sit.</p>
                    </div>{/* .family_mem_wrap */}
                  </div>{/* .col-lg-3 .col-md-3 .col-sm-6 */} 
                  <div className="col-lg-3 col-md-3  col-sm-6">
                    <div className="family_mem_wrap">
                      <div className="family_mem_img">
                        <img src="img/placehold/family-mem-4.png" className="img-circle" alt="Mother" />
                        <div className="brgm_overlay">
                          <p className="social_icons">
                            <a href="#"><i className="fa fa-twitter" /></a>
                            <a href="#"><i className="fa fa-linkedin" /></a>
                            <a href="#"><i className="fa fa-facebook" /></a>
                          </p> 	 
                        </div>{/* .brgm_overlay */}
                      </div>{/* .family_mem_img */}
                      <h3>john Connor</h3>
                      <p className="relation">mother</p>
                      <p className="family_txt_details">Nemo enim ipsam voluptatem quia voluptas sit.</p>
                    </div>{/* .family_mem_wrap */}
                  </div>{/* .col-lg-3 .col-md-3 .col-sm-6 */} 
                  <div className="col-lg-3 col-md-3  col-sm-6">
                    <div className="family_mem_wrap">
                      <div className="family_mem_img">
                        <img src="img/placehold/family-mem-4.png" className="img-circle" alt="Brother" />
                        <div className="brgm_overlay">
                          <p className="social_icons">
                            <a href="#"><i className="fa fa-twitter" /></a>
                            <a href="#"><i className="fa fa-linkedin" /></a>
                            <a href="#"><i className="fa fa-facebook" /></a>
                          </p> 	 
                        </div>{/* .brgm_overlay */}
                      </div>{/* .family_mem_img */}
                      <h3>John Connor</h3>
                      <p className="relation">brother</p>
                      <p className="family_txt_details">Nemo enim ipsam voluptatem quia voluptas sit.</p>
                    </div>{/* .family_mem_wrap */}
                  </div>{/* .col-lg-3 .col-md-3 .col-sm-6 */} 
                  <div className="col-lg-3 col-md-3  col-sm-6">
                    <div className="family_mem_wrap">
                      <div className="family_mem_img">
                        <img src="img/placehold/family-mem-4.png" className="img-circle" alt="Sister" />
                        <div className="brgm_overlay">
                          <p className="social_icons">
                            <a href="#"><i className="fa fa-twitter" /></a>
                            <a href="#"><i className="fa fa-linkedin" /></a>
                            <a href="#"><i className="fa fa-facebook" /></a>
                          </p> 	 
                        </div>{/* .brgm_overlay */}
                      </div>{/* .family_mem_img */}
                      <h3>John Connor</h3>
                      <p className="relation">sister</p>
                      <p className="family_txt_details">Nemo enim ipsam voluptatem quia voluptas sit.</p>
                    </div>{/* .family_mem_wrap */}
                  </div>{/* .col-lg-3 .col-md-3 .col-sm-6 */} 	
                </div>
                <div role="tabpanel" className="tab-pane fade" id="family2">
                  <div className="col-lg-3 col-md-3  col-sm-6">
                    <div className="family_mem_wrap">
                      <div className="family_mem_img">
                        <img src="img/placehold/family-mem-4.png" className="img-circle" alt="Father" />
                        <div className="brgm_overlay">
                          <p className="social_icons">
                            <a href="#"><i className="fa fa-twitter" /></a>
                            <a href="#"><i className="fa fa-linkedin" /></a>
                            <a href="#"><i className="fa fa-facebook" /></a>
                          </p> 	 
                        </div>{/* .brgm_overlay */}
                      </div>{/* .family_mem_img */}
                      <h3>John Connor</h3>
                      <p className="relation">father</p>
                      <p className="family_txt_details">Nemo enim ipsam voluptatem quia voluptas sit.</p>
                    </div>{/* .family_mem_wrap */}
                  </div>{/* .col-lg-3 .col-md-3 .col-sm-6 */} 
                  <div className="col-lg-3 col-md-3  col-sm-6">
                    <div className="family_mem_wrap">
                      <div className="family_mem_img">
                        <img src="img/placehold/family-mem-4.png" className="img-circle" alt="" />
                        <div className="brgm_overlay">
                          <p className="social_icons">
                            <a href="#"><i className="fa fa-twitter" /></a>
                            <a href="#"><i className="fa fa-linkedin" /></a>
                            <a href="#"><i className="fa fa-facebook" /></a>
                          </p> 	 
                        </div>{/* .brgm_overlay */}
                      </div>{/* .family_mem_img */}
                      <h3>John Connor</h3>
                      <p className="relation">mother</p>
                      <p className="family_txt_details">Nemo enim ipsam voluptatem quia voluptas sit.</p>
                    </div>{/* .family_mem_wrap */}
                  </div>{/* .col-lg-3 .col-md-3 .col-sm-6 */} 
                  <div className="col-lg-3 col-md-3  col-sm-6">
                    <div className="family_mem_wrap">
                      <div className="family_mem_img">
                        <img src="img/placehold/family-mem-4.png" className="img-circle" alt="" />
                        <div className="brgm_overlay">
                          <p className="social_icons">
                            <a href="#"><i className="fa fa-twitter" /></a>
                            <a href="#"><i className="fa fa-linkedin" /></a>
                            <a href="#"><i className="fa fa-facebook" /></a>
                          </p> 	 
                        </div>{/* .brgm_overlay */}
                      </div>{/* .family_mem_img */}
                      <h3>John Connor</h3>
                      <p className="relation">brother</p>
                      <p className="family_txt_details">Nemo enim ipsam voluptatem quia voluptas sit.</p>
                    </div>{/* .family_mem_wrap */}
                  </div>{/* .col-lg-3 .col-md-3 .col-sm-6 */} 
                  <div className="col-lg-3 col-md-3  col-sm-6">
                    <div className="family_mem_wrap">
                      <div className="family_mem_img">
                        <img src="img/placehold/family-mem-4.png" className="img-circle" alt="" />
                        <div className="brgm_overlay">
                          <p className="social_icons">
                            <a href="#"><i className="fa fa-twitter" /></a>
                            <a href="#"><i className="fa fa-linkedin" /></a>
                            <a href="#"><i className="fa fa-facebook" /></a>
                          </p> 	 
                        </div>{/* .brgm_overlay */}
                      </div>{/* .family_mem_img */}
                      <h3>John Connor</h3>
                      <p className="relation">sister</p>
                      <p className="family_txt_details">Nemo enim ipsam voluptatem quia voluptas sit.</p>
                    </div>{/* .family_mem_wrap */}
                  </div>{/* .col-lg-3 .col-md-3 .col-sm-6 */} 
                </div>{/* #family2 .tab-pane */}
              </div>{/* .tab-content */}
            </div>{/* .family_tab_4 */}
          </div>{/* .row */}
        </div>{/* .container */}
      </div>{/*.family_member_wrap.four*/}
    </section>
    {/*Our Family section End*/}
    {/*Our Photo Gallery section*/}
    <section id="photo_gallery" className="wedding-sec photo_gallery_sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-head">
              <h2 className="section-heading">Photo Gallery</h2>
              <div className="bottom-dash" />
              <p className="section-subheading text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>   
          </div>{/* .col-lg-12 */}
        </div>{/* .row */}	 
      </div>{/* .container */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">   
            <div className="controls">
              <div className="control-group gallery-nav two">
                <button className="filter" data-filter="all">All</button>
                <button className="filter" data-filter=".wday">Wedding Day</button>
                <button className="filter" data-filter=".trip">Trip to Greece</button>
                <button className="filter" data-filter=".sydney">Summer in Sydney</button>
              </div>
            </div>		
          </div>
        </div>	
        <div id="photo-container" className="row photo-container">
          <div className="mix wday Graphics">
            <img src="img/placehold/gallery-img-sml.png" alt="" />
            <div className="overlay">
              <div className="overlay_text">
                <div className="inner-extra">
                  <a href="img/placehold/zoom.png" data-gal="prettyPhoto[pp_gal]"><img src="img/zoom.png" alt="Couple" /></a>
                  <p>Some content goes here</p>
                </div>
              </div>
            </div>{/* .overlay */}
          </div>{/* .mix */}
          <div className="mix trip Graphics">
            <img src="img/placehold/gallery-img-sml.png" alt="" />
            <div className="overlay">
              <div className="overlay_text">
                <div className="inner-extra">
                  <a href="img/placehold/zoom.png" data-gal="prettyPhoto[pp_gal]"><img src="img/zoom.png" alt="Couple" /></a>
                  <p>Some content goes here</p>
                </div>
              </div>
            </div>{/* .overlay */}
          </div>{/* .mix */}
          <div className="mix mix_big sydney Graphics">
            <img src="img/placehold/gallery-img-big.png" alt="" />
            <div className="overlay">
              <div className="overlay_text">
                <div className="inner-extra">
                  <a href="img/placehold/zoom.png" data-gal="prettyPhoto[pp_gal]"><img src="img/zoom.png" alt="Couple" /></a>
                  <p>Some content goes here</p>
                </div>
              </div>
            </div>{/* .overlay */}
          </div>{/* .mix */}
          <div className="mix wday Graphics">
            <img src="img/placehold/gallery-img-sml.png" alt="" />
            <div className="overlay">
              <div className="overlay_text">
                <div className="inner-extra">
                  <a href="img/placehold/zoom.png" data-gal="prettyPhoto[pp_gal]"><img src="img/zoom.png" alt="Couple" /></a>
                  <p>Some content goes here</p>
                </div>
              </div>
            </div>{/* .overlay */}
          </div>{/* .mix */}
          <div className="mix wday Graphics">
            <img src="img/placehold/gallery-img-sml.png" alt="" />
            <div className="overlay">
              <div className="overlay_text">
                <div className="inner-extra">
                  <a href="img/placehold/zoom.png" data-gal="prettyPhoto[pp_gal]"><img src="img/zoom.png" alt="Couple" /></a>
                  <p>Some content goes here</p>
                </div>
              </div>
            </div>{/* .overlay */}
          </div>{/* .mix */}
          <div className="mix mix_big trip Graphics">
            <img src="img/placehold/gallery-img-big.png" alt="" />
            <div className="overlay">
              <div className="overlay_text">
                <div className="inner-extra">
                  <a href="img/placehold/zoom.png" data-gal="prettyPhoto[pp_gal]"><img src="img/zoom.png" alt="Couple" /></a>
                  <p>Some content goes here</p>
                </div>
              </div>
            </div>{/* .overlay */}
          </div>{/* .mix */}
          <div className="mix sydney Graphics">
            <img src="img/placehold/gallery-img-sml.png" alt="" />
            <div className="overlay">
              <div className="overlay_text">
                <div className="inner-extra">
                  <a href="img/placehold/zoom.png" data-gal="prettyPhoto[pp_gal]"><img src="img/zoom.png" alt="Couple" /></a>
                  <p>Some content goes here</p>
                </div>
              </div>
            </div>{/* .overlay */}
          </div>{/* .mix */}
          <div className="mix wday Graphics">
            <img src="img/placehold/gallery-img-sml.png" alt="" />
            <div className="overlay">
              <div className="overlay_text">
                <div className="inner-extra">
                  <a href="img/placehold/zoom.png" data-gal="prettyPhoto[pp_gal]"><img src="img/zoom.png" alt="Couple" /></a>
                  <p>Some content goes here</p>
                </div>
              </div>
            </div>{/* .overlay */}
          </div>{/* .mix */}
        </div>{/* .row .photo-container */}
      </div>{/* .container-fluid */}
    </section>
    {/*Our Photo Gallery section End*/}
    {/*Events ans Parties section*/}
    <section id="events" className="wedding-sec event_party_sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-head">
              <h2 className="section-heading">Events &amp; Parties </h2>
              <div className="bottom-dash" />
              <p className="section-subheading text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem. </p>
            </div>{/*.section-head*/}
          </div>{/*.col-lg-12*/}
        </div>{/*.row*/}
        <div className="row two">
          <div className="col-md-4">
            <div className="evnt_card_container">
              <div className="containers">
                <div className="cards">
                  <div className="card front evnt_prt evnt_prt_1">
                    <h2>Wedding Ceremony</h2>
                    <img src="img/event_icon1.png" alt="" />
                    <p>LONDON.UK</p>
                    <button className="btn btn-primary btn_evnt">4:30PM</button>
                  </div>{/*.card .front .evnt_prt .evnt_prt_1*/}
                  <div className="card back evnt_prt_back evnt_prt_back_1">
                    <h2>Wedding Ceremony</h2>
                    <div className="evnt_addres">
                      <p>Hotel Radisson</p>
                      <p>4th Street,DOHS MIRPUR</p>
                      <p>Saturday, 20 july 2015</p>
                      <p>4:30PM - 6:15PM</p>
                    </div>
                  </div>{/*.card .back .evnt_prt_back .evnt_prt_back_1*/}
                </div>{/* .cards*/}
              </div>{/*.containers*/}
            </div>{/* .evnt_card_container*/}
          </div>{/* .col-md-4*/}
          <div className="col-md-4">
            <div className="evnt_card_container">
              <div className="containers">
                <div className="cards">
                  <div className="card front evnt_prt evnt_prt_2">
                    <h2>Wedding Party</h2>
                    <img src="img/event_icon2.png" alt="" />
                    <p>LONDON.UK</p>
                    <button className="btn btn-primary btn_evnt">6:30PM</button>
                  </div>{/*.card .front .evnt_prt .evnt_prt_2*/}
                  <div className="card back evnt_prt_back evnt_prt_back_2">
                    <h2>Wedding Party</h2>
                    <div className="evnt_addres">
                      <p>Hotel Radisson</p>
                      <p>4th Street,DOHS MIRPUR</p>
                      <p>Saturday, 20 july 2015</p>
                      <p>4:30PM - 6:15PM</p>
                    </div>
                  </div>{/*.card .back .evnt_prt_back .evnt_prt_back_2*/}
                </div>{/* .cards*/}
              </div>{/*.containers*/}
            </div>{/* .evnt_card_container*/}
          </div>{/* .col-md-4*/}
          <div className="col-md-4">
            <div className="evnt_card_container">
              <div className="containers">
                <div className="cards">
                  <div className="card front evnt_prt evnt_prt_3">
                    <h2>Dinner</h2>
                    <img src="img/event_icon3.png" alt="" />
                    <p>LONDON.UK</p>
                    <button className="btn btn-primary btn_evnt">7:45PM</button>
                  </div>{/*.card .front .evnt_prt .evnt_prt_3*/}
                  <div className="card back evnt_prt_back evnt_prt_back_3">
                    <h2>Dinner</h2>
                    <div className="evnt_addres">
                      <p>Hotel Radisson</p>
                      <p>4th Street,DOHS MIRPUR</p>
                      <p>Saturday, 20 july 2015</p>
                      <p>4:30PM - 6:15PM</p>
                    </div>
                  </div>{/*.card .back .evnt_prt_back .evnt_prt_back_3*/}
                </div>{/* .cards*/}
              </div>{/*.containers*/}
            </div>{/* .evnt_card_container*/}
          </div>{/* .col-md-4*/}
        </div>{/*Parallex section 3*/}
      </div>{/*Parallex section 3*/}  	
    </section>
    {/*Events ans Parties section End*/}
    {/*Parallex section 3*/}
    <div className="img-holder" data-image="img/placehold/parallex3.png" data-width={3888} data-height={2592} />
    {/*parallex section 3 End*/}
    {/* Bridesmaid and Groomsmen sec*/}
    <section id="bmaid_gmen" className="wedding-sec bmaid_gmen_sec four">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-head">
              <h2 className="section-heading">Bridesmaid &amp; Groomsmen</h2>
              <div className="bottom-dash Down" />
              <p className="section-subheading text-muted Down" data-wow-delay=".25s">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>{/* .section-head */}
          </div>{/* .col-lg-12 */}
        </div>{/* .row */}
        <div className="row">
          <div className="col-lg-6 col-md-6 bmaid_sec">
            <div className="bmaid_nav" role="tabpanel">
              {/* Nav tabs */}
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation">
                  <a href="#home" className aria-controls="home" role="tab" data-toggle="tab"><img src="img/placehold/br-grm.png" alt="Bridemaid" /></a>
                </li>
                <li role="presentation">
                  <a href="#profile" className aria-controls="profile" role="tab" data-toggle="tab"><img src="img/placehold/br-grm.png" alt="Bridemaid" /></a>
                </li>
                <li role="presentation" className="active">
                  <a href="#messages" aria-controls="messages" role="tab" className data-toggle="tab"><img src="img/placehold/br-grm.png" alt="Bridemaid" /></a>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content bridemaid_tab_content">
                <div role="tabpanel" className="tab-pane fade in active" id="home">
                  <div className="bridemaid">
                    <h3 className="#">Natalie Jones</h3>
                    <p className="#">
                      Excepteur sint occaecat cupidatat non proident, sunt  culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
                      explicabo. Nemo enim ipsam voluptatem quia voluptas.  
                    </p>
                    <p className="social_icons">
                      <a href="#" className><i className="fa fa-twitter" /></a>
                      <a href="#" className><i className="fa fa-linkedin" /></a>
                      <a href="#" className><i className="fa fa-facebook" /></a>
                    </p>
                  </div>{/* .bridemaid */}	
                </div>{/* .tab-pane  */}
                <div role="tabpanel" className="tab-pane fade" id="profile">
                  <div className="bridemaid">
                    <h3 className="#">Angle Cyrus</h3>
                    <p className="#">
                      Excepteur sint occaecat cupidatat non proident, sunt  culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
                      explicabo. Nemo enim ipsam voluptatem quia voluptas.  
                    </p>
                    <p className="social_icons">
                      <a href="#" className><i className="fa fa-twitter" /></a>
                      <a href="#" className><i className="fa fa-linkedin" /></a>
                      <a href="#" className><i className="fa fa-facebook" /></a>
                    </p>
                  </div>{/* .bridemaid */}	
                </div>{/* .tab-pane  */}
                <div role="tabpanel" className="tab-pane fade" id="messages">
                  <div className="bridemaid">
                    <h3 className>Lady Teramera</h3>
                    <p className>
                      Excepteur sint occaecat cupidatat non proident, sunt  culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
                      explicabo. Nemo enim ipsam voluptatem quia voluptas.  
                    </p>
                    <p className="social_icons">
                      <a href="#" className><i className="fa fa-twitter" /></a>
                      <a href="#" className><i className="fa fa-linkedin" /></a>
                      <a href="#" className><i className="fa fa-facebook" /></a>
                    </p>
                  </div>{/* .bridemaid */}	
                </div>{/* .tab-pane  */}
              </div>{/* .tab-content .bridemaid_tab_content */}
            </div>{/* .bmaid_nav */}	 
          </div>{/* .col-lg-6 .col-md-6 .bmaid_sec */}
          <div className="col-lg-6 col-md-6 gmen_sec">
            <div className="gmen_nav" role="tabpanel">
              {/* Nav tabs */}
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active"><a href="#groom1" className aria-controls="home" role="tab" data-toggle="tab"><img src="img/placehold/br-grm.png" alt="Groomsmen" /></a></li>
                <li role="presentation"><a href="#groom2" className aria-controls="profile" role="tab" data-toggle="tab"><img src="img/placehold/br-grm.png" alt="Groomsmen" /></a></li>
                <li role="presentation"><a href="#groom3" className aria-controls="messages" role="tab" data-toggle="tab"><img src="img/placehold/br-grm.png" alt="Groomsmen" /></a></li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content groomsmen_tab_content">
                <div role="tabpanel" className="tab-pane fade in active" id="groom1">
                  <div className="groomsmen">
                    <h3 className="#">Joseph Connor</h3>
                    <p className="#">
                      Excepteur sint occaecat cupidatat non proident, sunt  culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
                      explicabo. Nemo enim ipsam voluptatem quia voluptas.  
                    </p>
                    <p className="social_icons">
                      <a href="#" className><i className="fa fa-twitter" /></a>
                      <a href="#" className><i className="fa fa-linkedin" /></a>
                      <a href="#" className><i className="fa fa-facebook" /></a>
                    </p>
                  </div>{/* .groomsmen */}	
                </div>{/* .tab-pane #groom2*/}
                <div role="tabpanel" className="tab-pane fade" id="groom2">
                  <div className="groomsmen">
                    <h3 className="#">Albert telesamad</h3>
                    <p className="#">
                      Excepteur sint occaecat cupidatat non proident, sunt  culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
                      explicabo. Nemo enim ipsam voluptatem quia voluptas.  
                    </p>
                    <p className="social_icons">
                      <a href="#" className><i className="fa fa-twitter" /></a>
                      <a href="#" className><i className="fa fa-linkedin" /></a>
                      <a href="#" className><i className="fa fa-facebook" /></a>
                    </p>
                  </div>{/* .groomsmen */}	
                </div>{/* .tab-pane #groom2*/}
                <div role="tabpanel" className="tab-pane fade" id="groom3">
                  <div className="groomsmen">
                    <h3 className="#">John Kawsar</h3>
                    <p className="#">
                      Excepteur sint occaecat cupidatat non proident, sunt  culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
                      explicabo. Nemo enim ipsam voluptatem quia voluptas.  
                    </p>
                    <p className="social_icons">
                      <a href="#" className><i className="fa fa-twitter" /></a>
                      <a href="#" className><i className="fa fa-linkedin" /></a>
                      <a href="#" className><i className="fa fa-facebook" /></a>
                    </p>
                  </div>{/* .groomsmen */}	
                </div>{/* .tab-pane #groom2*/}
              </div>{/* .tab-content .groomsmen_tab_content */}
            </div>{/* .gmen_nav */}	
          </div>{/* .col-lg-6 .col-md-6 .gmen_sec  */}	
        </div>{/* .row */}
      </div>{/* .container */}  	
    </section>
    {/* Bridesmaid and Groomsmen sec End*/}
    <section id="video-background" className="video_background_sec">
      {/*Hidden header for w3c validation only*/}
      <h2 className="hidden">Hidden header for w3c validation only</h2>
      {/*Hidden header for w3c validation only*/}
      <div className="video-bg-self" /> 
    </section>
    {/* Blog section*/}
    <section id="blog" className="wedding-sec blog_sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-head">
              <h2 className="section-heading">Our Blog</h2>
              <div className="bottom-dash" />
              <p className="section-subheading text-muted Down" data-wow-delay=".25s">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>{/* .section-head*/} 
          </div>{/* .col-lg-12 */}
        </div>{/* .row */}
      </div>{/* .container*/}
      <div className="blog_wide_wrap two">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog_post">
                <p className="posting_date">December 19,2014</p> 
                <h3><a href="blog-single.html">Some title goes here</a></h3>
                <div className="blog_img">
                  <a data-gal="prettyPhoto" href="img/placehold/zoom.png" className="hov"><img src="img/placehold/blog.png" alt="Couple blog image" /></a>	
                </div>
                <p className="blog_text">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident.
                </p>
                <p className="blog_bottom_line">
                  <span><i className="fa fa-user" /><a href="#">Jason Richard </a></span><span>|</span>
                  <span><i className="fa fa-comment-o" /><a href="#">12</a></span>
                  <span><a href="blog-single.html" className="read_more">Read More <img className="arrow" src="img/arrow.png" alt="" /><img className="arrow-hov" src="img/arrow-hov.png" alt="" /></a></span>
                </p>
              </div>{/* .blog_post*/}
            </div>{/* .col-lg-4 .col-md-4 .col-sm-6*/}	
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog_post">
                <p className="posting_date"> December 19,2014</p> 
                <h3><a href="blog-single.html">Some title goes here</a></h3>
                <div className="blog_img">
                  <a data-gal="prettyPhoto" href="img/placehold/zoom.png" className="hov"><img src="img/placehold/blog.png" alt="Couple blog image" /></a>	
                </div>
                <p className="blog_text">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident.
                </p>
                <p className="blog_bottom_line">
                  <span><i className="fa fa-user" /> <a href="#">Jason Richard </a> </span><span>|</span>
                  <span><i className="fa fa-comment-o" /><a href="#">12</a></span>
                  <span><a href="blog-single.html" className="read_more">Read More <img className="arrow" src="img/arrow.png" alt="" /><img className="arrow-hov" src="img/arrow-hov.png" alt="" /></a></span>
                </p>
              </div>{/* .blog_post*/}
            </div>{/* .col-lg-4 .col-md-4 .col-sm-6*/}	
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog_post">
                <p className="posting_date">December 19,2014</p> 
                <h3><a href="blog-single.html">Some title goes here</a></h3>
                <div className="blog_img">
                  <a data-gal="prettyPhoto" href="img/placehold/zoom.png" className="hov"><img src="img/placehold/blog.png" alt="Couple blog image" /></a>	
                </div>
                <p className="blog_text">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident.
                </p>
                <p className="blog_bottom_line">
                  <span><i className="fa fa-user" /> <a href="#">Jason Richard </a> </span><span>|</span>
                  <span><i className="fa fa-comment-o" /><a href="#">12</a></span>
                  <span><a href="blog-single.html" className="read_more">Read More <img className="arrow" src="img/arrow.png" alt="" /><img className="arrow-hov" src="img/arrow-hov.png" alt="" /></a></span>
                </p>
              </div>{/* .blog_post*/}
            </div>{/* .col-lg-4 .col-md-4 .col-sm-6*/}	
          </div>{/* .row*/}
        </div>{/* .container */}
      </div>{/* .blog_wide_wrap .two*/}
    </section>
    {/* Blog section End*/}
    {/*RSVP Section*/}
    <section id="rsvp" className="rsvp_sec">
      <h2 className="hidden"> Text hidden heading for validation</h2> 
      <div className="map-holder">
        <div id="map" className="map" />
      </div>
    </section>
    {/*RSVP Section end*/}
    <div className="container rsvp_form">
      <div className="row">
        <div className="col-lg-12">
          <div className="form_wrapper two new">
            <div className="section-head">
              <h2 className="section-heading">RSVP</h2>
              <div className="bottom-dash" />
              <p className="section-subheading text-muted">Duis aute irure dolor in reprehenderit in voluptate. </p>
            </div>
            <form method="post" action="contact.php" id="forms">
              <div className="form-group">
                <input name="name" type="text" className="form-control" id="name" required placeholder="Name" />
              </div>
              <div className="form-group">
                <input name="email" type="email" className="form-control" id="email" required placeholder="Email" />
              </div>
              <div className="form-group select_group select_guest">
                <select name="numguest" className="form-control select_frm" id="numguest">
                  <option>No Of Guest</option>
                  <option value="1-Person">01</option>
                  <option value="2-Persons">02</option>
                  <option value="3-Persons">03</option>
                  <option value="4-Persons">04</option>
                  <option value="5-Persons">05</option>
                </select>
              </div>
              <div className="form-group select_group select_attend">
                <select name="allevents" className="form-control selectpicker select_frm" id="allevents">
                  <option>All Events</option>
                  <option value="Wedding-Ceremony">Wedding Ceremony</option>
                  <option value="Wedding-Party">Wedding Party</option>
                  <option value="Dinner">Dinner</option>
                </select>
              </div>
              <div className="form-group select_group">
                <select name="attending" className="form-control selectpicker select_frm" id="attending">
                  <option value="Yes">Yes, Absolutely</option>
                  <option value="No">Sorry, Great Miss</option>
                </select>
              </div>
              <button type="submit" className="btn btn-default btn_attend" value="Send">submit</button>
            </form>
          </div>{/* .form_wrapper .two .new */}		
        </div>{/* .col-lg-12	 */}
      </div>{/* .row	 */}
    </div>{/* .container .rsvp_form */}
    {/*Phone mail addres section*/}
    <section className="footer_top_sec footer_top_sec_2">
      {/*Hidden header for w3c validation only*/}
      <h2 className="hidden">Hidden header for w3c validation only</h2>
      {/*Hidden header for w3c validation only*/}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p className="phone"><img src="img/phone-icon.png" alt="" />239-842-3433</p>	
          </div>
          <div className="col-md-4">
            <p className="mail"><img src="img/mail-icon.png" alt="" />name@domain.com</p>	
          </div>
          <div className="col-md-4">
            <p className="address"><img src="img/location-icon.png" alt="" />Home Address,City Name Country</p>
          </div>
        </div>{/* .row */}
      </div>{/* .container .rsvp_form */}	
    </section>
    {/*Go Top */}
    <div id="toTop" className="scrollup two"><a href="#"><i className="fa fa-angle-double-up fa-lg" /></a></div>
    {/*Phone mail address section End*/}
    <footer id="footer" className="footer_sec">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <span id="copyright" className="copyright">{/* &copy; 2015 Themeonlab.com . All rights reserved. */}</span>
          </div>
          <div className="col-md-6 col-xs-12">
            <ul className="list-inline social_icons wow flash">
              <li><a href="#"><i className="fa fa-twitter" /></a>
              </li>
              <li><a href="#"><i className="fa fa-facebook" /></a>
              </li>
              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
              <li><a href="#"><i className="fa fa-tumblr" /></a></li>
              <li><a href="#"><i className="fa fa-google-plus" /></a></li>
            </ul>
          </div>{/* .col-md-6 col-xs-12 */}
        </div>{/* .row */}
      </div>{/* .container .rsvp_form */}
    </footer>
    {/* Modal */}
    <div className="modal fade wed" id="myModal1" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          </div>
          <div className="modal-body">
            <div className="modal-img">
              <img src="img/placehold/zoom.png" alt="" />  
            </div>
            <div className="modal-txt">
              <h4 className="modal-title">Jane doe</h4> 
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. Sed ut 
                perspiciatis.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
          <div className="modal-footer">
            {/* <button type="button" class="btn btn-default cls-wed" data-dismiss="modal">Close</button> */}
            <p className="social_icons">
              <a href="#" className><i className="fa fa-twitter" /></a>
              <a href="#" className><i className="fa fa-linkedin" /></a>
              <a href="#" className><i className="fa fa-facebook" /></a>
            </p>
          </div>{/* .modal-footer */}
        </div>{/* .modal-content */}
      </div>{/* .modal-dialog */}
    </div> {/* .modal .wed */}
    <div className="modal fade wed" id="myModal2" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          </div>
          <div className="modal-body">
            <div className="modal-img">
              <img src="img/placehold/zoom.png" alt="" />  
            </div>
            <div className="modal-txt">
              <h4 className="modal-title">Jhon doe</h4> 
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. Sed ut 
                perspiciatis.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
          <div className="modal-footer">
            {/* <button type="button" class="btn btn-default cls-wed" data-dismiss="modal">Close</button> */}
            <p className="social_icons">
              <a href="#" className><i className="fa fa-twitter" /></a>
              <a href="#" className><i className="fa fa-linkedin" /></a>
              <a href="#" className><i className="fa fa-facebook" /></a>
            </p>
          </div>{/* .modal-footer */}
        </div>{/* .modal-content */}
      </div>{/* .modal-dialog */}
    </div> {/* .modal .wed */}
    {/* Modal End*/}
    {/* jQuery */}
    {/* Bootstrap Core JavaScript */}
    {/* Plugin JavaScript */}
    {/* PrettyPhoto */}
    {/* Nicescroll JavaScript */}
    {/* Video Background JavaScript */}
    {/* Custom Theme JavaScript */}
  </div>
 )
}

export default App;
