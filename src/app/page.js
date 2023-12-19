"use client"
import React, { useState } from 'react';
import { useEffect } from "react"
import 'aos/dist/aos.css';
import Aos from "aos";
import TeamSlider from "../../components/TeamSlider";
import { FaEnvelope } from "react-icons/fa";
import { FaExpand } from "react-icons/fa";
import { MdClose } from "react-icons/md";




export default function Home() {

  useEffect(() => {
    function s(t) { return y(t) || T(t) || m(t) || f() } function f() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
  In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    } function m(t, e) { if (t) { if (typeof t == "string") return u(t, e); var r = Object.prototype.toString.call(t).slice(8, -1); if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t); if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(t, e) } } function T(t) { if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t) } function y(t) { if (Array.isArray(t)) return u(t) } function u(t, e) { (e == null || e > t.length) && (e = t.length); for (var r = 0, a = new Array(e); r < e; r++)a[r] = t[r]; return a } var L = "digitalbutlers-webflow-site", A = "cdn.digitalbutlers.me", I = "projects", l = "https://".concat(A, "/").concat(I, "/").concat(L), S = { DEVELOPMENT: "development", PRODUCTION: "production", WEBFLOW: "webflow" }, b = { ROOT: "src", BUILD: "dist", COMPONENTS: "components", ASSETS: "assets", SCRIPTS: "scripts", STYLES: "styles", IMAGES: "images", FONTS: "fonts", WEBFLOW: "webflow" }, d = { BUILD: { SCRIPTS: "js", STYLES: "css" } }, E = { COMPONENT_ROOT: "index", GLOBAL: "main", WEBFLOW: "webflow" }, O = { COMPONENT_ID: "data-component-id" }, h = { FILES_LOAD: "customFilesLoad" }, p = window.location.origin.includes("webflow.io") ? S.DEVELOPMENT : S.PRODUCTION, P = function () { var e = ["".concat(l, "/").concat(p, "/").concat(E.GLOBAL, ".").concat(d.BUILD.SCRIPTS)]; return document.querySelectorAll("[".concat(O.COMPONENT_ID, "]")).forEach(function (r) { var a = r.getAttribute(O.COMPONENT_ID); e.push("".concat(l, "/").concat(p, "/").concat(b.COMPONENTS, "/").concat(a, "/").concat(E.COMPONENT_ROOT, ".").concat(d.BUILD.SCRIPTS)) }), s(new Set(e)) }, N = function () { return ["".concat(l, "/").concat(p, "/").concat(E.GLOBAL, ".").concat(d.BUILD.STYLES)] }, C = function () { var e = new Event(h.FILES_LOAD); window.dispatchEvent(e) }, w = function () { console.error("Custom files failed to load. Check errors above.") }, D = function (e) { var r = e.parent, a = r === void 0 ? document.body : r, c = e.path; return new Promise(function (o, i) { var n = document.createElement("script"); n.addEventListener("load", o), n.addEventListener("error", i), n.setAttribute("type", "module"), n.setAttribute("src", c), a.append(n) }) }, M = function (e) { var r = e.parent, a = r === void 0 ? document.head : r, c = e.path; return new Promise(function (o, i) { var n = document.createElement("link"); n.addEventListener("load", o), n.addEventListener("error", i), n.setAttribute("rel", "stylesheet"), n.setAttribute("href", c), a.append(n) }) }, v = function () { var e = P(), r = N(), a = e.map(function (o) { return D({ path: o }) }), c = r.map(function (o) { return M({ path: o }) }); Promise.all([].concat(s(a), s(c))).then(C).catch(w) }; document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", v) : v();

    Aos.init();

    // Close

    const closeButton = document.querySelector('.introduction__close');
    const introductionDiv = document.querySelector('.introduction');
    const introVideo = document.querySelector('.introduction__video');

    closeButton.addEventListener('click', (event) => {
      event.preventDefault();
      introductionDiv.remove();
    });



    // Expand

    const openButton = document.querySelector('.introduction__open-btn');
    const thereText = document.querySelector('.introduction__hello');
    const introductionQuote = document.querySelector('.introduction__quote');
    const introductionMute = document.querySelector('.introduction__mute');

    openButton.addEventListener('click', () => {
      introductionDiv.style.width = '210px';
      introductionDiv.style.height = '380px';
      openButton.style.display = 'none';
      thereText.style.display = 'none';
      introductionQuote.style.display = 'flex';
      introductionQuote.style.opacity = '1';
      introductionQuote.style.zIndex = '1';
      introductionQuote.style.color = '#FFF';
      introductionMute.style.opacity = '1';
      introductionMute.style.zIndex = '1';
    });



    // Mute

    const muteIconUnmute = document.querySelector('.introduction__mute-icon--unmute');
    const muteIconMute = document.querySelector('.introduction__mute-icon--mute');
    const introductionVideo = document.querySelector('.introduction__video');

    muteIconMute.addEventListener('click', () => {
      muteIconMute.style.display = 'none';
      muteIconUnmute.style.display = 'block';
      introductionVideo.muted = false;
    });

    muteIconUnmute.addEventListener('click', () => {
      muteIconUnmute.style.display = 'none';
      muteIconMute.style.display = 'block';
      introductionVideo.muted = true;
    });

  }, []);


  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <>

      {/* Loader */}

      <div className="the-preloader">
        <div className="hidden w-embed"></div>
        <div className="hidden w-embed"></div>
        <div className="container container--accent container--accent-2 the-preloader__container">
          <div className="container-inner">
            <div className="the-preloader__images">
              <div data-role="the-preloader-image" className="the-preloader__image the-preloader__image--team"></div>
              <div data-role="the-preloader-image"
                className="the-preloader__image the-preloader__image--competencies"></div>
              <div data-role="the-preloader-image" id="w-node-_4591c017-0774-2222-334e-603eb8e9d819-b8e9d812"
                className="the-preloader__image the-preloader__image--time"></div>
              <div data-role="the-preloader-image" className="the-preloader__image the-preloader__image--experience">
              </div>
              <div data-role="the-preloader-image" className="the-preloader__image the-preloader__image--metab">
              </div>
              <div data-role="the-preloader-image" className="the-preloader__image the-preloader__image--metaba">
              </div>
              <div data-role="the-preloader-image" className="the-preloader__image the-preloader__image--metabar">
              </div>
              <div data-role="the-preloader-image" className="the-preloader__image the-preloader__image--metabarc">
              </div>
            </div>
          </div>
        </div>
      </div>


      <main id="main" className="main">

        {/* Header */}

        <section className="section hero">
          <div className="container container--accent container--accent-2 home-page-hero__container">
            <div className="container-inner home-page-hero__container-inner">
              <header id="w-node-ce13f49d-690c-8f8e-240d-012510e89d66-191b2f6f"
                className="header header--align-center">
                <h1 className="heading heading--xl home-page-hero__heading">Web developers
                  with <span className="nowrap">a reputation</span> <span data-content="clutch-reviews-rating"
                    className="color-accent-1">4.9</span> <span className="color-accent-1">out</span> <span
                      className="nowrap color-accent-1">of 5</span> <span className="nowrap">based on</span> <span
                        data-content="clutch-reviews-count">22</span> Clutch reviews</h1>
                <p data-role="header-paragraph"
                  className="paragraph paragraph--lg home-page-hero__header-paragraph hidden">...for your
                  project development and outstaffing needs, starting at a rate of $35 per hour</p>
              </header>
              <div id="w-node-ce13f49d-690c-8f8e-240d-012510e89d71-191b2f6f">
                <div data-component-id="buttons-group" className="buttons-group">
                  <a role="button" href=""
                    className="button button--lg buttons-group__main-button w-button">Let&#x27;s discuss
                    your project</a>
                  <a href="#" role="button" data-a11y-dialog-show="get-quote-dialog"
                    className="button button--lg w-button">Get quote</a>
                  <a href="" target="_blank" className="button button--lg w-button">Telegram</a>
                  <a href="" target="_blank" className="button button--lg w-button">Whatsapp</a>
                  <a href="" className="button button--lg w-button">Email</a>
                  <a href="" target="_blank" className="button button--lg w-button">Get a call</a>
                </div>
              </div>
              <a data-role="clutch-card" id="w-node-ce13f49d-690c-8f8e-240d-012510e89d73-191b2f6f" href=""
                className="cluth-card home-page-hero__clutch-card variant-2 w-inline-block">
                <img src="/clutch.svg" alt="" />
                <div className="stars">
                  <img src="/star.svg" alt="Star" className="star" />
                  <img src="/star.svg" alt="Star" className="star" />
                  <img src="/star.svg" alt="Star" className="star" />
                  <img src="/star.svg" alt="Star" className="star" />
                  <img src="/star.svg" alt="Star" className="star" />
                </div>
                <p className="paragraph paragraph--sm"><span data-content="clutch-reviews-rating">00</span> of 5
                  based on <span data-content="clutch-reviews-count">00</span> Clutch reviews</p>
              </a>
              <div id="w-node-ce13f49d-690c-8f8e-240d-012510e89d7d-191b2f6f" className="subheading">We are Digital
                Butlers</div>
              <p id="w-node-ce13f49d-690c-8f8e-240d-012510e89d7f-191b2f6f" className="paragraph">Like Alfred to
                Batman, we empower our
                employers&#x27; digital success by managing valuable resources such as Team, Time,
                Competencies and Experience.</p>
              <div className="home-page-hero__decoration w-embed">
                <img src="/zigzag.svg" alt="" />
              </div>
            </div>
          </div>
        </section>


        {/* Services */}

        <section id="services" className="section our-services">
          <div className="container">
            <div className="container-inner">
              <header className="header our-services__header">
                <div id="w-node-_5f45d501-a03c-4b6d-469b-9cef7d11e2b0-191b2f6f"
                  className="subheading subheading--accent-2-extra-high-brightness" data-aos="fade-up" data-aos-duration='2000'>Here is how we can be
                  helpful</div>
                <h2 id="w-node-_5f45d501-a03c-4b6d-469b-9cef7d11e2b2-191b2f6f"
                  className="heading heading--lg" data-aos="fade-up" data-aos-duration='2000'>Web development <br />and outstaffing</h2>
                <p data-role="paragraph" id="w-node-_5f45d501-a03c-4b6d-469b-9cef7d11e2b8-191b2f6f"
                  className="paragraph paragraph--margin-bottom-0" data-aos="fade-up" data-aos-duration='2000'>Among our employers: startups like
                  torchsensors.com with incredible Early
                  Fire Detection Sensors, innovators like hedgehoghealth.com
                  changing the way autism is diagnosed, Kia and Chevrolet in Kazakhstan, London-based
                  car-sharing breathecar.com, and US mortgage companies
                  like Prosperity and Fairway</p>
              </header>
              <div className="our-services__list-wrapper w-dyn-list">
                <div className="our-services__list w-dyn-items">
                  <div data-aos="fade-up" data-aos-duration='2000' id="w-node-_5f45d501-a03c-4b6d-469b-9cef7d11e2d0-191b2f6f"
                    role="listitem" className="our-service w-dyn-item">
                    <div className="dot-decoration"></div>
                    <h3 className="heading heading--sm our-service__heading">Webflow custom websites</h3>
                    <div className="rich-text rich-text--secondary our-service__rich-text w-richtext">
                      <p>Having completed over 300 sites since 2016, our extensive experience with
                        Webflow has given us confidence to tackle any task, no matter how complex it
                        may be.</p>
                    </div><a data-a11y-dialog-show="get-quote-dialog" role="button" href="#"
                      className="link w-inline-block">
                      <div className="link__text">Get quote</div>
                    </a>
                  </div>
                  <div data-aos="fade-up" data-aos-duration='2000' id="w-node-_5f45d501-a03c-4b6d-469b-9cef7d11e2d0-191b2f6f" className="our-service w-dyn-item">
                    <div className="dot-decoration"></div>
                    <h3 className="heading heading--sm our-service__heading">Corp. websites &amp; E-commerce
                    </h3>
                    <div className="rich-text rich-text--secondary our-service__rich-text w-richtext">
                      <p>We&#x27;re experts in Webflow and in creating custom PHP solutions with Yii2,
                        Laravel, and Symfony frameworks for stable, high-speed large websites.
                        Proficient in WordPress, Shopify, MODX, and OpenCart too.</p>
                    </div><a data-a11y-dialog-show="get-quote-dialog" role="button" href="#"
                      className="link w-inline-block">
                      <div className="link__text">Get quote</div>
                    </a>
                  </div>
                  <div data-aos="fade-up" data-aos-duration='2000' id="w-node-_5f45d501-a03c-4b6d-469b-9cef7d11e2d0-191b2f6f" className="our-service w-dyn-item">
                    <div className="dot-decoration"></div>
                    <h3 className="heading heading--sm our-service__heading">Landing pages &amp; Promo
                      websites</h3>
                    <div className="rich-text rich-text--secondary our-service__rich-text w-richtext">
                      <p>Our forte: landing pages with &gt;50% conversion, sales funnels with ROMI of
                        247%-438%, and award-winning websites recognized by Awwwards, CSS, and FWA.
                      </p>
                    </div><a data-a11y-dialog-show="get-quote-dialog" role="button" href="#"
                      className="link w-inline-block">
                      <div className="link__text">Get quote</div>
                    </a>
                  </div>
                  <div data-aos="fade-up" data-aos-duration='2000' id="w-node-_5f45d501-a03c-4b6d-469b-9cef7d11e2d0-191b2f6f" className="our-service w-dyn-item">
                    <div className="dot-decoration"></div>
                    <h3 className="heading heading--sm our-service__heading">Web applications &amp;
                      interfaces</h3>
                    <div className="rich-text rich-text--secondary our-service__rich-text w-richtext">
                      <p>We have extensive expertise in React.js, Vue, PHP (Yii2, Laravel, Symfony),
                        and are highly skilled at tackling complex projects.</p>
                    </div><a data-a11y-dialog-show="get-quote-dialog" role="button" href="#"
                      className="link w-inline-block">
                      <div className="link__text">Get quote</div>
                    </a>
                  </div>
                  <div data-aos="fade-up" data-aos-duration='2000' id="w-node-_5f45d501-a03c-4b6d-469b-9cef7d11e2d0-191b2f6f" className="our-service w-dyn-item">
                    <div className="dot-decoration"></div>
                    <h3 className="heading heading--sm our-service__heading">Outstaffing</h3>
                    <div className="rich-text rich-text--secondary our-service__rich-text w-richtext">
                      <p>We seamlessly supplement your team, working collaboratively to solve specific
                        issues and achieve success in short-term or long-term projects.</p>
                    </div><a data-a11y-dialog-show="get-quote-dialog" role="button" href="#"
                      className="link w-inline-block">
                      <div className="link__text">Get quote</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Clients Section */}

        <article data-component-id="our-employers-banner" className="our-employers-banner">
          <div className="our-employers-banner__track">
            <div className="our-employers-banner__list-wrapper w-dyn-list">
              <div role="list" className="our-employers-banner__list w-dyn-items">
                <div role="listitem" className="our-employers-banner__item w-dyn-item"><img height="34" alt=""
                  src="/client-1.webp" className="our-employers-banner__logo" /></div>
                <div role="listitem" className="our-employers-banner__item w-dyn-item"><img height="34" alt=""
                  src="/client-2.webp" className="our-employers-banner__logo" /></div>
                <div role="listitem" className="our-employers-banner__item w-dyn-item"><img height="34" alt=""
                  src="/client-3.svg" className="our-employers-banner__logo" /></div>
                <div role="listitem" className="our-employers-banner__item w-dyn-item"><img height="34" alt=""
                  src="/client-4.svg" className="our-employers-banner__logo" /></div>
                <div role="listitem" className="our-employers-banner__item w-dyn-item"><img height="34" alt=""
                  src="/client-5.webp" className="our-employers-banner__logo" /></div>
                <div role="listitem" className="our-employers-banner__item w-dyn-item"><img height="34" alt=""
                  src="/client-6.svg" className="our-employers-banner__logo" /></div>
                <div role="listitem" className="our-employers-banner__item w-dyn-item"><img height="34" alt=""
                  src="/client-7.svg" className="our-employers-banner__logo" /></div>
                <div role="listitem" className="our-employers-banner__item w-dyn-item"><img height="34" alt=""
                  src="/client-8.svg" className="our-employers-banner__logo" /></div>
                <div role="listitem" className="our-employers-banner__item w-dyn-item"><img height="34" alt=""
                  src="/client-9.svg" className="our-employers-banner__logo" /></div>
                <div role="listitem" className="our-employers-banner__item w-dyn-item"><img height="34" alt=""
                  src="/client-10.webp" className="our-employers-banner__logo" /></div>
              </div>
            </div>
            <div className="our-employers-banner__list-wrapper w-dyn-list">
              <div role="list" className="our-employers-banner__list w-dyn-items">
                <div role="listitem" className="our-employers-banner__item w-dyn-item"><img height="34" alt=""
                  src="/client-1.webp" className="our-employers-banner__logo" /></div>
                <div role="listitem" className="our-employers-banner__item w-dyn-item"><img height="34" alt=""
                  src="/client-2.webp" className="our-employers-banner__logo" /></div>
                <div role="listitem" className="our-employers-banner__item w-dyn-item"><img height="34" alt=""
                  src="/client-3.svg" className="our-employers-banner__logo" /></div>
                <div role="listitem" className="our-employers-banner__item w-dyn-item"><img height="34" alt=""
                  src="/client-4.svg" className="our-employers-banner__logo" /></div>
                <div role="listitem" className="our-employers-banner__item w-dyn-item"><img height="34" alt=""
                  src="/client-5.webp" className="our-employers-banner__logo" /></div>
                <div role="listitem" className="our-employers-banner__item w-dyn-item"><img height="34" alt=""
                  src="/client-6.svg" className="our-employers-banner__logo" /></div>
                <div role="listitem" className="our-employers-banner__item w-dyn-item"><img height="34" alt=""
                  src="/client-7.svg" className="our-employers-banner__logo" /></div>
                <div role="listitem" className="our-employers-banner__item w-dyn-item"><img height="34" alt=""
                  src="/client-8.svg" className="our-employers-banner__logo" /></div>
                <div role="listitem" className="our-employers-banner__item w-dyn-item"><img height="34" alt=""
                  src="/client-9.svg" className="our-employers-banner__logo" /></div>
                <div role="listitem" className="our-employers-banner__item w-dyn-item"><img height="34" alt=""
                  src="/client-10.webp" className="our-employers-banner__logo" /></div>
              </div>
            </div>
          </div>
        </article>



        {/* Cards Section */}


        <section className="section our-works section--margin-top-lg">
          <div className="container">
            <div className="container-inner">
              <div className="header header--align-center">
                <div data-aos="fade-up" data-aos-duration='2000' className="subheading subheading--accent-2-extra-high-brightness">
                  Designed with Loyalty and Passion</div>
                <h2 data-aos="fade-up" data-aos-duration='2000' className="heading heading--lg our-works__heading">Some of the works our
                  employers are <span className="nowrap">proud of</span></h2>
              </div>
              <div className="works-cards">
                <div className="works-cards__list-wrapper w-dyn-list">
                  <div className="works-cards__list w-dyn-items">
                    <div data-aos="fade-up" data-aos-duration='2000' className="card work-card w-dyn-item">
                      <div className="card__chips">
                        <div data-role="card-index" className="chip chip--counter"></div>
                        <div className="card__tags-wrapper">
                          <ul data-role="tags" role="list" className="card__tags work-card__tags js--visible">
                            <li data-role="tag-wrapper" className="card__tag-wrapper work-card__tag-wrapper"><a data-role="tag" href="" className="chip">Tag</a></li>
                            <li data-role="tag-wrapper" className="card__tag-wrapper work-card__tag-wrapper js--initialised"><a data-role="tag" href="" className="chip" role="button" data-target-tab-id="Corporate" style={{ backgroundColor: 'rgb(157, 255, 0)' }}>Corporate</a></li><li className="card__tag-wrapper work-card__tag-wrapper js--initialised"><a href="" className="chip" style={{ backgroundColor: 'rgb(236, 199, 255)' }}>Promo</a></li><li className="card__tag-wrapper work-card__tag-wrapper js--initialised"><a href="" className="chip" style={{ backgroundColor: 'rgb(235, 240, 255)' }}>E-commerce</a></li><li className="card__tag-wrapper work-card__tag-wrapper js--initialised"><a href="" className="chip" style={{ backgroundColor: 'rgb(237, 242, 255)' }}>Webflow</a></li>
                          </ul>
                        </div>
                      </div>
                      <ul data-role="awards" role="list" className="work-card__awards js--visible">
                        <li data-role="award" className="work-card__award"><a data-role="award-link" href="" target="_blank" className="work-card__award-link w-inline-block" style={{ color: 'rgb(157, 255, 0)', backgroundColor: 'rgb(157, 255, 0)' }}><img src="/fwa-logo.webp" alt="Loading..." className="work-card__award-icon" />
                        </a></li><li data-role="award" className="work-card__award"><a data-role="award-link" href="" target="_blank" className="work-card__award-link w-inline-block" style={{ color: 'rgb(130, 46, 255)', backgroundColor: 'rgb(130, 46, 255)' }}><img src="/awards.svg" alt="Loading..." className="work-card__award-icon" />
                        </a></li><li data-role="award" className="work-card__award"><a data-role="award-link" href="" target="_blank" className="work-card__award-link w-inline-block" style={{ color: 'rgb(249, 103, 93)', backgroundColor: 'rgb(249, 103, 93)' }}><img src="/design-awards.svg" alt="Loading..." className="work-card__award-icon" />
                        </a></li>
                      </ul>
                      <header className="card__header">
                        <h3 className="heading heading--md card__heading">TorchSensors.com</h3>
                        <div className="rich-text rich-text--secondary card__rich-text w-richtext">
                          <p>We built a site for a marketing campaign to accept pre-orders for a
                            fire prevention sensor in a 1.5 month. And within the 1st day of its
                            launch, we received an overwhelming number of pre-orders for the
                            product.</p>
                        </div>
                      </header>
                      <div data-role="canvas-wrapper"
                        className="card__canvas-wrapper work-card__canvas-wrapper">
                        <img src="/icon-2.png" alt="" className="workImg-2" />
                      </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration='2000' className="card work-card w-dyn-item">
                      <div className="card__chips">
                        <div data-role="card-index" className="chip chip--counter"></div>
                        <div className="card__tags-wrapper">
                          <ul data-role="tags" role="list" className="card__tags work-card__tags js--visible">
                            <li data-role="tag-wrapper" className="card__tag-wrapper work-card__tag-wrapper"><a data-role="tag" href="#" className="chip">Tag</a></li>
                            <li data-role="tag-wrapper" className="card__tag-wrapper work-card__tag-wrapper js--initialised"><a data-role="tag" href="#" className="chip" role="button" data-target-tab-id="Corporate" style={{ backgroundColor: 'rgb(157, 255, 0)' }}>Corporate</a></li><li data-role="tag-wrapper" className="card__tag-wrapper work-card__tag-wrapper js--initialised"><a data-role="tag" href="#" className="chip" role="button" data-target-tab-id="Promo" style={{ backgroundColor: 'rgb(236, 199, 255)' }}>Promo</a></li><li data-role="tag-wrapper" className="card__tag-wrapper work-card__tag-wrapper js--initialised"><a data-role="tag" href="#" className="chip" role="button" data-target-tab-id="Webflow" style={{ backgroundColor: 'rgb(237, 242, 255)' }}>Webflow</a></li></ul>
                        </div>
                      </div>
                      <ul data-role="awards" role="list" className="work-card__awards js--visible">
                        <li data-role="award" className="work-card__award"><a data-role="award-link" href="" target="_blank" className="work-card__award-link w-inline-block" style={{ color: 'rgb(130, 46, 255)', backgroundColor: 'rgb(130, 46, 255)' }}><img src="/awards.svg" alt="Loading..." className="work-card__award-icon" />
                        </a></li><li data-role="award" className="work-card__award"><a data-role="award-link" href="" target="_blank" className="work-card__award-link w-inline-block" style={{ color: 'rgb(249, 103, 93)', backgroundColor: 'rgb(249, 103, 93)' }}><img src="/design-awards.svg" alt="Loading..." className="work-card__award-icon" />
                        </a></li>
                      </ul>
                      <header className="card__header">
                        <h3 className="heading heading--md card__heading">Ockom.co</h3>
                        <div className="rich-text rich-text--secondary card__rich-text w-richtext">
                          <p>We designed a cybersecurity company&#x27;s website with effective
                            mood-setting features like immersive 3D, animations and clean UI.
                            The result was positive reviews and Awwwards recognition.</p>
                        </div>
                      </header>
                      <div data-role="canvas-wrapper"
                        className="card__canvas-wrapper work-card__canvas-wrapper">
                        <img src="/icon-1.png" alt="" className="workImg-1" />
                      </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration='2000' className="card work-card w-dyn-item">
                      <div className="card__chips">
                        <div data-role="card-index" className="chip chip--counter"></div>
                        <div className="card__tags-wrapper">
                          <ul data-role="tags" role="list" className="card__tags work-card__tags js--visible">
                            <li data-role="tag-wrapper" className="card__tag-wrapper work-card__tag-wrapper"><a data-role="tag" href="#" className="chip">Tag</a></li>
                            <li data-role="tag-wrapper" className="card__tag-wrapper work-card__tag-wrapper js--initialised"><a data-role="tag" href="#" className="chip" role="button" data-target-tab-id="Corporate" style={{ backgroundColor: 'rgb(157, 255, 0)' }}>Corporate</a></li><li data-role="tag-wrapper" className="card__tag-wrapper work-card__tag-wrapper js--initialised"><a data-role="tag" href="#" className="chip" role="button" data-target-tab-id="Webflow" style={{ backgroundColor: 'rgb(237, 242, 255)' }}>Webflow</a></li><li data-role="tag-wrapper" className="card__tag-wrapper work-card__tag-wrapper js--initialised"><a data-role="tag" href="#" className="chip" role="button" data-target-tab-id="Saas" style={{ backgroundColor: 'rgb(236, 199, 255)' }}>Saas</a></li></ul>
                        </div>
                      </div>
                      <ul data-role="awards" role="list" className="work-card__awards">
                        <li data-role="award" className="work-card__award"><a data-role="award-link"
                          href="#" target="_blank"
                          className="work-card__award-link w-inline-block"><img src=""
                            alt="Loading..."
                            className="work-card__award-icon" />
                        </a></li>
                      </ul>
                      <header className="card__header">
                        <h3 className="heading heading--md card__heading">Calculum.ai</h3>
                        <div className="rich-text rich-text--secondary card__rich-text w-richtext">
                          <p>Web Development Design for Fintech Company</p>
                          <p>Employer review: We were impressed by their design language,
                            technical skills, and project management.</p>
                        </div>
                      </header>
                      <div data-role="canvas-wrapper"
                        className="card__canvas-wrapper work-card__canvas-wrapper">
                        <img src="/icon-4.png" alt="" className="workImg-4" />
                      </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration='2000' className="card work-card w-dyn-item">
                      <div className="card__chips">
                        <div data-role="card-index" className="chip chip--counter"></div>
                        <div className="card__tags-wrapper">
                          <ul data-role="tags" role="list" className="card__tags work-card__tags js--visible">
                            <li data-role="tag-wrapper" className="card__tag-wrapper work-card__tag-wrapper"><a data-role="tag" href="#" className="chip">Tag</a></li>
                            <li data-role="tag-wrapper" className="card__tag-wrapper work-card__tag-wrapper js--initialised"><a data-role="tag" href="#" className="chip" role="button" data-target-tab-id="Corporate" style={{ backgroundColor: 'rgb(157, 255, 0)' }}>Corporate</a></li><li data-role="tag-wrapper" className="card__tag-wrapper work-card__tag-wrapper js--initialised"><a data-role="tag" href="#" className="chip" role="button" data-target-tab-id="Webflow" style={{ backgroundColor: 'rgb(237, 242, 255)' }}>Webflow</a></li><li data-role="tag-wrapper" className="card__tag-wrapper work-card__tag-wrapper js--initialised"><a data-role="tag" href="#" className="chip" role="button" data-target-tab-id="Education" style={{ backgroundColor: 'rgb(255, 209, 209)' }}>Education</a></li><li data-role="tag-wrapper" className="card__tag-wrapper work-card__tag-wrapper js--initialised"><a data-role="tag" href="#" className="chip" role="button" data-target-tab-id="Promo" style={{ backgroundColor: 'rgb(236, 199, 255)' }}>Promo</a></li></ul>
                        </div>
                      </div>
                      <ul data-role="awards" role="list" className="work-card__awards js--visible">
                        <li data-role="award" className="work-card__award"><a data-role="award-link" href="" target="_blank" className="work-card__award-link w-inline-block" style={{ color: 'rgb(249, 103, 93)', backgroundColor: 'rgb(249, 103, 93)' }}><img src="/design-awards.svg" alt="Loading..." className="work-card__award-icon" />
                        </a></li>
                        <li data-role="award" className="work-card__award"><a data-role="award-link" href="" target="_blank" className="work-card__award-link w-inline-block" style={{ color: 'rgb(38, 87, 232)', backgroundColor: 'rgb(38, 87, 232)' }}><img src="/WDA.svg" alt="Loading..." className="work-card__award-icon" />
                        </a></li>
                        <li data-role="award" className="work-card__award"><a data-role="award-link" href="" target="_blank" className="work-card__award-link w-inline-block" style={{ color: 'rgb(130, 46, 255)', backgroundColor: 'rgb(130, 46, 255)' }}><img src="/awards.svg" alt="Loading..." className="work-card__award-icon" />
                        </a></li>
                      </ul>
                      <header className="card__header">
                        <h3 className="heading heading--md card__heading">Fairway</h3>
                        <div className="rich-text rich-text--secondary card__rich-text w-richtext">
                          <p>A site for Fairway Mortgage Corp. with fun Easter eggs, such as a
                            meowing cat, and useful functionality, such as a mortgage calculator
                            that includes down payment and privileges.</p>
                        </div>
                      </header>
                      <div data-role="canvas-wrapper" className="card__canvas-wrapper work-card__canvas-wrapper">
                        <img src="/icon-3.png" alt="" className="workImg-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section data-component-id="problems" className="section problems">
          <div className="container container--accent container--accent-4">
            <div className="container-inner problems__container-inner">
              <header className="header header--align-center problems__header">
                <div data-role="subheading" className="subheading">Experienced in Mission Impossible projects</div>
                <h2 data-role="heading" className="heading heading--lg problems__heading">Our employers rely on
                  us, <span className="color-accent-4-extra-high-brightness">like Batman relies on
                    Alfred,</span> to develop projects <span className="nowrap">like these:</span></h2>
              </header>
              <div className="problems__slider-wrapper">
                <div data-role="pagination" className="chip chip--lg chip--counter problems__pagination"><span
                  data-role="problems-active-slide-index">01</span>/<span
                    data-role="problems-slides-number" className="color-tertiary">00</span></div><a
                      data-role="prev-slide-button" role="button" aria-label="Go to previous slide" href="#"
                      className="slider-navigation-button problems__slider-navigation-button problems__slider-navigation-button--prev w-inline-block">
                  <div className="slider-navigation-button__icon-wrapper w-embed">
                    <img src="/left-arrow.svg" alt="" />
                  </div>
                </a><a data-role="next-slide-button" role="button" aria-label="Go to next slide" href="#"
                  className="slider-navigation-button problems__slider-navigation-button problems__slider-navigation-button--next w-inline-block">
                  <div className="slider-navigation-button__icon-wrapper w-embed">
                    <img src="/right-arrow.svg" alt="" />
                  </div>
                </a>
                <div data-role="slider" className="problems__list-wrapper w-dyn-list">
                  <div role="list" className="problems__list swiper-wrapper w-dyn-items">
                    <div role="listitem" className="problem swiper-slide w-dyn-item">
                      <h3 data-role="cms-item-name" className="visually-hidden">SAAS system</h3>
                      <div className="dot-decoration"></div>
                      <div className="rich-text w-richtext">
                        <p><strong>SAAS system.</strong> Created a SAAS system for buying new
                          Chevrolet via the trade-in system. Developed a used car evaluation and
                          buyout chain with a trade hall administrator, sales managers, car
                          appraisers, and supervisors. And personally traveled to Uzbekistan to
                          test and set up everything.</p>
                      </div>
                      <div className="banner problem__banner">
                        <section className="banner__section">
                          <h4 className="heading heading--xs banner__heading">Used technologies &amp;
                            apps</h4>
                          <ul data-role="technologies-list" role="list" className="technologies-list">
                            <li data-role="technology-template" className="technology"><img src=""
                              width="28" height="28" alt="Loading..."
                              data-role="technology-icon" className="technology__icon" /></li>
                          </ul>
                        </section>
                        <section className="banner__section">
                          <h4 className="heading heading--xs banner__heading">Hours spent</h4>
                          <div className="banner__number">1890.15</div>
                        </section>
                      </div><a href="" target="_blank" className="link problem__link w-inline-block">
                        <div className="link__text">Schedule the case presentation</div>
                        <div className="link__icon-wrapper w-embed">
                          <img src="/arrow.svg" alt="" />
                        </div>
                      </a>
                    </div>
                    <div role="listitem" className="problem swiper-slide w-dyn-item">
                      <h3 data-role="cms-item-name" className="visually-hidden">Website builder</h3>
                      <div className="dot-decoration"></div>
                      <div className="rich-text w-richtext">
                        <p><strong>Website builder.</strong> Created a website builder for WOWMI
                          startup, enabling them to migrate hundreds of Webflow sites to their own
                          ecosystem and save $29 per site. Moreover, we cut down the time required
                          to create a new site using their template from 16 business hours on
                          Webflow to just 0.5 of an hour.</p>
                      </div>
                      <div className="banner problem__banner">
                        <section className="banner__section">
                          <h4 className="heading heading--xs banner__heading">Used technologies apps</h4>
                          <ul data-role="technologies-list" role="list" className="technologies-list">
                            <li data-role="technology-template" className="technology"><img src=""
                              width="28" height="28" alt="Loading..."
                              data-role="technology-icon" className="technology__icon" /></li>
                          </ul>
                        </section>
                        <section className="banner__section">
                          <h4 className="heading heading--xs banner__heading">Hours spent</h4>
                          <div className="banner__number">2310.13</div>
                        </section>
                      </div><a href="" target="_blank" className="link problem__link w-inline-block">
                        <div className="link__text">Schedule the case presentation</div>
                        <div className="link__icon-wrapper w-embed">
                          <img src="/arrow.svg" alt="" />
                        </div>
                      </a>
                    </div>
                    <div role="listitem" className="problem swiper-slide w-dyn-item">
                      <h3 data-role="cms-item-name" className="visually-hidden">Bridal platform</h3>
                      <div className="dot-decoration"></div>
                      <div className="rich-text w-richtext">
                        <p><strong>Bridal platform</strong>. We&#x27;re developing a new luxury
                          bridal platform to compete with established global brands. This
                          exclusive service will provide bespoke planning, access to top-tier
                          vendors, and stress-free experience. While we cant share the details
                          publicly, we&#x27;d love to to showcase our work to you in private.</p>
                      </div>
                      <div className="banner problem__banner">
                        <section className="banner__section">
                          <h4 className="heading heading--xs banner__heading">Used technologies &amp;
                            apps</h4>
                          <ul data-role="technologies-list" role="list" className="technologies-list">
                            <li data-role="technology-template" className="technology"><img src=""
                              width="28" height="28" alt="Loading..."
                              data-role="technology-icon" className="technology__icon" /></li>
                          </ul>
                        </section>
                        <section className="banner__section">
                          <h4 className="heading heading--xs banner__heading">Hours spent</h4>
                          <div className="banner__number">7043.11</div>
                        </section>
                      </div><a href="" target="_blank" className="link problem__link w-inline-block">
                        <div className="link__text">Schedule the case presentation</div>
                        <div className="link__icon-wrapper w-embed">
                          <img src="/arrow.svg" alt="" />
                        </div>
                      </a>
                    </div>
                    <div role="listitem" className="problem swiper-slide w-dyn-item">
                      <h3 data-role="cms-item-name" className="visually-hidden">Awwwards-winning site</h3>
                      <div className="dot-decoration"></div>
                      <div className="rich-text w-richtext">
                        <p><strong>Awwwards-winning site. </strong>We made an Awwwards-winning site
                          for Fairway Mortgage Corp. with fun Easter eggs, such as a meowing cat,
                          and useful functionality, such as a mortgage calculator that includes
                          down payment and privileges, and generates a PDF report with
                          calculations.</p>
                      </div>
                      <div className="banner problem__banner">
                        <section className="banner__section">
                          <h4 className="heading heading--xs banner__heading">Used technologies &amp;
                            apps</h4>
                          <ul data-role="technologies-list" role="list" className="technologies-list">
                            <li data-role="technology-template" className="technology"><img src=""
                              width="28" height="28" alt="Loading..."
                              data-role="technology-icon" className="technology__icon" /></li>
                          </ul>
                        </section>
                        <section className="banner__section">
                          <h4 className="heading heading--xs banner__heading">Hours spent</h4>
                          <div className="banner__number">568.47</div>
                        </section>
                      </div><a href="" target="_blank" className="link problem__link w-inline-block">
                        <div className="link__text">Schedule the case presentation</div>
                        <div className="link__icon-wrapper w-embed">
                          <img src="/arrow.svg" alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>





        {/* Goal Section */}

        <section className="section ask-your-butler">
          <div className="container">
            <div className="container-inner ask-your-butler__container-inner">
              <div className="header header--align-center ask-your-butler__header">
                <div data-role="subheading" className="subheading subheading--accent-2-high-brightness">11Set a
                  goal, we&#x27;ll achieve it</div>
                <h2 data-role="heading" className="heading heading--lg ask-your-butler__heading">Need a
                  trustworthy team for your project? Summon loyal Digital Butlers.</h2>
              </div>
              <div data-role="buttons-group-wrapper"
                className="ask-your-butler__contact-us-buttons-group-wrapper">
                <div data-role="buttons-group-wrapper" data-component-id="buttons-group"
                  className="buttons-group"><a role="button" href="#"
                    className="button button--lg buttons-group__main-button w-button">Summon Digital
                    Butlers</a><a href="#" role="button" data-a11y-dialog-show="get-quote-dialog"
                      className="button button--lg w-button">Get quote</a><a href="" target="_blank"
                        className="button button--lg w-button">Telegram</a><a href="" target="_blank"
                          className="button button--lg w-button">Whatsapp</a><a href=""
                            className="button button--lg w-button">Email</a><a href="" target="_blank"
                              className="button button--lg w-button">Get a call</a></div>
              </div>
              <ul role="list" className="ask-your-butler__animoji-list">
                <li className="ask-your-butler__animoji-wrapper ask-your-butler__animoji-wrapper--1">
                  <div className="animoji animoji--accent-1"><img
                    src="/user-1.webp" alt="" className="animoji__image" /></div>
                </li>
                <li className="ask-your-butler__animoji-wrapper ask-your-butler__animoji-wrapper--2">
                  <div className="animoji animoji--accent-4">
                    <img src="/user-2.webp" alt="" className="animoji__image" />
                  </div>
                </li>
                <li className="ask-your-butler__animoji-wrapper ask-your-butler__animoji-wrapper--3">
                  <div className="animoji animoji--accent-3"><img
                    src="/user-3.webp" alt="" className="animoji__image" /></div>
                </li>
                <li className="ask-your-butler__animoji-wrapper ask-your-butler__animoji-wrapper--4">
                  <div className="animoji animoji--accent-2"><img
                    src="/user-4.webp" alt="" className="animoji__image" /></div>
                </li>
              </ul>
            </div>
          </div>
        </section>




        {/* FAQ Section */}


        <section className="section works-types">
          <div className="container container--accent container--accent-3">
            <div className="container-inner">
              <div className="header works-types__header">
                <div className="subheading subheading--accent-1">Reliable team at your service</div>
                <h2 className="heading heading--lg works-types__heading">Experienced in
                  scratch projects and equally skilled at outstaffing <span
                    className="color-accent-1">starting at $35/hour</span></h2>
                <p className="paragraph">Our loyal Digital Butlers are ready to join your
                  team or assist with specific tasks.</p>
              </div>
              <div className="works-types__list-wrapper w-dyn-list">
                <div className="accordion w-dyn-items">
                  <div className="accordion__item w-dyn-item"><a
                    role="button" href="#"
                    className="accordion__summary w-inline-block">
                    <div className="accordion__chips">
                      <div data-role="accordion-index" className="chip chip--counter"></div>
                      <h3 data-role="cms-item-name"
                        style={{ backgroundColor: 'hsla(223.3333333333334, 100.00%, 96.47%, 1.00)' }}
                        className="chip">Webflow</h3>
                    </div>
                    <div id="w-node-a05d12f0-86e2-6d14-484f-4ad5588fc7a5-191b2f6f"
                      className="heading heading--sm">We have been working with Webflow since 2016...
                    </div>
                    <div id="w-node-_17b1ceef-2bb8-1a34-999b-ca5e209521c4-191b2f6f"
                      className="accordion__switch-wrapper w-embed">
                      <img src="/plus.png" className="img-fluid" alt="" />
                    </div>
                  </a>
                    <div data-role="accordion-details" className="details-wrapper">
                      <article id="w-node-_7001ee2d-9351-bf35-b9b0-3b20cd59fe6c-191b2f6f"
                        className="details">
                        <header className="details__header">
                          <div data-role="richtext" className="details__heading-rich-text w-richtext">
                            <h4>We’ve been working with Webflow since 2016. Have built over 300
                              sites and earned expert status on the platform. We work
                              and with.</h4>
                            <p>Thanks to our experience and library of ready-made solutions for
                              commonly used website elements, we don&#x27;t have to create
                              everything from scratch. This speeds up development and reduces
                              the number of bugs.</p>
                            <p>Thanks to the work of our tester and internal standards and
                              technical processes, which you can view here: DB Frontend Wiki,
                              we ensure high-quality
                              development and thorough testing.</p>
                          </div>
                        </header>
                        <div className="details__main">
                          <div className="details__column">
                            <h4 className="heading heading--xs details__subheading">What do you get
                              as the result?</h4>
                            <div data-role="richtext"
                              className="details__list-rich-text w-richtext">
                              <ul role="list">
                                <li>Our minimum quality level includes:<br />- Responsive design,
                                  including iPad PRO and 4K screens<br />- Support for all
                                  modern browsers, including Safari on MacBook and
                                  iPhone<br />- Accessibility for people with special
                                  needs and advanced users<br />- Optimization of page
                                  speed and media files<br />- Basic SEO
                                  optimization<br />- Disabling indexing on the test
                                  version<br />- Testing and bringing the project to a
                                  100% working state.</li>
                                <li>We use cutting-edge tools such as
                                  Webflow components, BEM methodology, modular JS, SASS,
                                  Git, linters, and formatters. That&#x27;s why our
                                  websites are easy to maintain and scale, whether you
                                  handle them yourself or have a dedicated team in place.
                                </li>
                                <li>This includes sliders and animations of any
                                  kind, filtering and pagination without page reloading,
                                  displaying 3D models and their animations, and dozens of
                                  other details that you may not even think about, such as
                                  integrating third-party payment systems.</li>
                                <li>Convenient CMS, allowing you to manage content on your
                                  own.</li>
                                <li>It may seem like a minor detail, but when
                                  you share your website with a potential client, the
                                  first impression can make all the difference.</li>
                              </ul>
                            </div>
                          </div>
                          <div className="details__column">
                            <h4 className="heading heading--xs details__subheading">Used
                              technologies &amp; apps</h4>
                            <ul data-role="technologies-list" role="list"
                              className="technologies-list">
                              <li data-role="technology-template" className="technology"><img
                                src="" width="28" height="28" alt="Loading..."
                                data-role="technology-icon" className="technology__icon" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div data-role="accordion-item" role="listitem" className="accordion__item w-dyn-item"><a
                    data-role="accordion-summary" role="button" href="#"
                    className="accordion__summary w-inline-block">
                    <div className="accordion__chips">
                      <div data-role="accordion-index" className="chip chip--counter"></div>
                      <h3 data-role="cms-item-name"
                        style={{ backgroundColor: 'hsla(83.05882352941175, 100.00%, 50.00%, 1.00)' }}
                        className="chip">Frontend dev</h3>
                    </div>
                    <div id="w-node-a05d12f0-86e2-6d14-484f-4ad5588fc7a5-191b2f6f"
                      className="heading heading--sm">We can bring your design to life...</div>
                    <div id="w-node-_17b1ceef-2bb8-1a34-999b-ca5e209521c4-191b2f6f"
                      className="accordion__switch-wrapper w-embed">
                      <img src="/plus.png" className="img-fluid" alt="" />
                    </div>
                  </a>
                    <div data-role="accordion-details" className="details-wrapper">
                      <article id="w-node-_7001ee2d-9351-bf35-b9b0-3b20cd59fe6c-191b2f6f"
                        className="details">
                        <header className="details__header">
                          <div data-role="richtext" className="details__heading-rich-text w-richtext">
                            <h4>We can bring your design to life with vanilla HTML/CSS/JS or
                              frameworks like React and Vue.</h4>
                          </div>
                        </header>
                        <div className="details__main">
                          <div className="details__column">
                            <h4 className="heading heading--xs details__subheading">What do you get
                              as the result?</h4>
                            <div data-role="richtext"
                              className="details__list-rich-text w-richtext">
                              <ul role="list">
                                <li>Our minimum
                                  quality level includes:<br />- Responsive design,
                                  including iPad PRO and 4K screens<br />- Support for all
                                  modern browsers, including Safari on MacBook and
                                  iPhone<br />- Accessibility for people with special
                                  needs and advanced users<br />- Optimization of page
                                  speed and media files<br />- Basic SEO
                                  optimization<br />- Disabling indexing on the test
                                  version<br />- Testing and bringing the project to a
                                  100% working state.</li>
                                <li>Accessibility for people with special needs and advanced
                                  users</li>
                                <li>We use cutting-edge tools such as BEM
                                  methodology, modular JS, SASS, Git, linters, and
                                  formatters. That&#x27;s why our websites are easy to
                                  maintain and scale, whether you handle them yourself or
                                  have a dedicated team in place.</li>
                                <li>Technical support and assistance in the development of
                                  long-term projects</li>
                                <li>Guarantee of free fixes of any of our mistakes</li>
                              </ul>
                            </div>
                          </div>
                          <div className="details__column">
                            <h4 className="heading heading--xs details__subheading">Used
                              technologies &amp; apps</h4>
                            <ul data-role="technologies-list" role="list"
                              className="technologies-list">
                              <li data-role="technology-template" className="technology"><img
                                src="" width="28" height="28" alt="Loading..."
                                data-role="technology-icon" className="technology__icon" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div data-role="accordion-item" role="listitem" className="accordion__item w-dyn-item"><a
                    data-role="accordion-summary" role="button" href="#"
                    className="accordion__summary w-inline-block">
                    <div className="accordion__chips">
                      <div data-role="accordion-index" className="chip chip--counter"></div>
                      <h3 data-role="cms-item-name"
                        style={{ backgroundColor: 'hsla(279.64285714285717, 100.00%, 89.02%, 1.00)' }}
                        className="chip">Web design</h3>
                    </div>
                    <div id="w-node-a05d12f0-86e2-6d14-484f-4ad5588fc7a5-191b2f6f"
                      className="heading heading--sm">To crystallize your ideas, we develop...</div>
                    <div id="w-node-_17b1ceef-2bb8-1a34-999b-ca5e209521c4-191b2f6f"
                      className="accordion__switch-wrapper w-embed">
                      <img src="/plus.png" className="img-fluid" alt="" />
                    </div>
                  </a>
                    <div data-role="accordion-details" className="details-wrapper">
                      <article id="w-node-_7001ee2d-9351-bf35-b9b0-3b20cd59fe6c-191b2f6f"
                        className="details">
                        <header className="details__header">
                          <div data-role="richtext" className="details__heading-rich-text w-richtext">
                            <h4>To crystallize your ideas, we develop the business logic. To
                              help you showcase and sell them we create realistic interactive
                              prototypes. And when you need a WOW effect, we design
                              Awwwards-winning site. Our design is a tool for achieving your
                              goals</h4>
                          </div>
                        </header>
                        <div className="details__main">
                          <div className="details__column">
                            <h4 className="heading heading--xs details__subheading">What do you get
                              as the result?</h4>
                            <div data-role="richtext"
                              className="details__list-rich-text w-richtext">
                              <ul role="list">
                                <li>We regularly browse references and
                                  analyze top works on platforms like Behance, Dribbble,
                                  Awwwards, and others. We learn and test new solutions by
                                  creating shots for Dribbble. We continuously attend paid
                                  courses in UI or UX design and exchange experience at
                                  weekly meetings with designers on our team.<br />Thanks
                                  to all of this, we know how to make your website achieve
                                  its set goal: be memorable, convert, highlight the
                                  advantages of your product or service, or become a
                                  worthy continuation of your brand.</li>
                                <li>To create a unique style for your
                                  website, we follow these steps:<br />1. Research your
                                  competitors to understand how to stand out from
                                  them<br />2. Create a mood board to determine the style
                                  and tone<br />3. Gather references to understand your
                                  taste and design expectations<br />4. Sketch and discuss
                                  2-3 main screen concepts to confirm the style<br />5.
                                  Create several additional design blocks in the approved
                                  style to finally agree on the style</li>
                                <li>During the design process, we use an
                                  atomic design approach to create components with
                                  auto-layout, styles, and a UI kit. We then structure
                                  project files and prepare them for development to ensure
                                  that developers can save time and effort.</li>
                                <li>An interactive prototype to &quot;feel&quot; the project
                                  before development</li>
                              </ul>
                            </div>
                          </div>
                          <div className="details__column">
                            <h4 className="heading heading--xs details__subheading">Used
                              technologies &amp; apps</h4>
                            <ul data-role="technologies-list" role="list"
                              className="technologies-list">
                              <li data-role="technology-template" className="technology"><img
                                src="" width="28" height="28" alt="Loading..."
                                data-role="technology-icon" className="technology__icon" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div data-role="accordion-item" role="listitem" className="accordion__item w-dyn-item"><a
                    data-role="accordion-summary" role="button" href="#"
                    className="accordion__summary w-inline-block">
                    <div className="accordion__chips">
                      <div data-role="accordion-index" className="chip chip--counter"></div>
                      <h3 data-role="cms-item-name"
                        style={{ backgroundColor: 'hsla(0, 100.00%, 90.98%, 1.00)' }} className="chip">
                        Backend dev</h3>
                    </div>
                    <div id="w-node-a05d12f0-86e2-6d14-484f-4ad5588fc7a5-191b2f6f"
                      className="heading heading--sm">We guarantee successful completion of complex...
                    </div>
                    <div id="w-node-_17b1ceef-2bb8-1a34-999b-ca5e209521c4-191b2f6f"
                      className="accordion__switch-wrapper w-embed">
                      <img src="/plus.png" className="img-fluid" alt="" />
                    </div>
                  </a>
                    <div data-role="accordion-details" className="details-wrapper">
                      <article id="w-node-_7001ee2d-9351-bf35-b9b0-3b20cd59fe6c-191b2f6f"
                        className="details">
                        <header className="details__header">
                          <div data-role="richtext" className="details__heading-rich-text w-richtext">
                            <h4>We guarantee successful completion of complex tasks, including
                              challenging goals such as creating a 3-month in
                              just 1 month. And not only with code from scratch. We&#x27;re
                              experienced in integrating 3d-party code with a focus on clean
                              and maintainable solutions for functional, scalable, and
                              adaptable projects.</h4>
                            <p>Once, one of our employers needed a working version of the
                              product to present to shareholders in just 1 month, despite our
                              original estimate of at least 90 days. We developed a kludge
                              solution within 27 days and tested it for an additional 3 days
                              to ensure a smooth presentation. It was a success, and we spent
                              another 3 months on refactoring. But despite the extra time
                              invested, the result was worth it, as failure was not an
                              option.</p>
                          </div>
                        </header>
                        <div className="details__main">
                          <div className="details__column">
                            <h4 className="heading heading--xs details__subheading">What do you get
                              as the result?</h4>
                            <div data-role="richtext"
                              className="details__list-rich-text w-richtext">
                              <ul role="list">
                                <li>We always document what we
                                  write and give functions meaningful names, adding
                                  attributes or annotations to ensure maintainability and
                                  understanding for any developer who works with
                                  it.<br /><br />Upon completion, we perform refactoring
                                  and submit the code to our team lead for review and to
                                  the tester for testing.</li>
                                <li>We use up-to-date versions of PHP and its
                                  frameworks like Yii2, Laravel, and Symfony, as well as
                                  technologies like Docker, AWS, and
                                  Jenkins.<br /><br />Have extensive experience working
                                  with popular content management systems such as
                                  WordPress, MoDx, OpenCart, and Shopify.<br /><br />Our
                                  development approach includes modern design patterns and
                                  object-oriented programming, and we regularly exchange
                                  knowledge among our team of back-end developers.</li>
                                <li>We work with both SQL and
                                  NoSQL databases and strive to optimize our queries for
                                  efficiency, avoiding unnecessary multiple queries where
                                  possible.</li>
                                <li>Guarantee of free fixes of any of our mistakes</li>
                              </ul>
                            </div>
                          </div>
                          <div className="details__column">
                            <h4 className="heading heading--xs details__subheading">Used
                              technologies &amp; apps</h4>
                            <ul data-role="technologies-list" role="list"
                              className="technologies-list">
                              <li data-role="technology-template" className="technology"><img
                                src="" width="28" height="28" alt="Loading..."
                                data-role="technology-icon" className="technology__icon" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div role="listitem" className="accordion__item w-dyn-item"><a
                    data-role="accordion-summary" role="button" href="#"
                    className="accordion__summary w-inline-block">
                    <div className="accordion__chips">
                      <div data-role="accordion-index" className="chip chip--counter"></div>
                      <h3 data-role="cms-item-name"
                        style={{ backgroundColor: 'hsla(83.05882352941175, 100.00%, 50.00%, 1.00)' }}
                        className="chip">Management</h3>
                    </div>
                    <div id="w-node-a05d12f0-86e2-6d14-484f-4ad5588fc7a5-191b2f6f"
                      className="heading heading--sm">We use the Kanban method...</div>
                    <div id="w-node-_17b1ceef-2bb8-1a34-999b-ca5e209521c4-191b2f6f"
                      className="accordion__switch-wrapper w-embed">
                      <img src="/plus.png" className="img-fluid" alt="" />
                    </div>
                  </a>
                    <div className="details-wrapper">
                      <article id="w-node-_7001ee2d-9351-bf35-b9b0-3b20cd59fe6c-191b2f6f"
                        className="details">
                        <header className="details__header">
                          <div data-role="richtext" className="details__heading-rich-text w-richtext">
                            <h4>We use the Kanban method to help developers meet their
                              commitments. This includes conducting daily meetings, breaking
                              down project epics and stories into two-day tasks, monitoring
                              workflow, removing obstacles, and facilitating communication
                              among all team members.</h4>
                          </div>
                        </header>
                        <div className="details__main">
                          <div className="details__column">
                            <h4 className="heading heading--xs details__subheading">What do you get
                              as the result?</h4>
                            <div data-role="richtext"
                              className="details__list-rich-text w-richtext">
                              <ul role="list">
                                <li>When our employer needs to keep within a budget, we create
                                  documentation and design the project&#x27;s
                                  architecture. We then break down the project into
                                  manageable and predictable tasks, estimate their
                                  completion, and guarantee to deliver the project on time
                                  and within budget.</li>
                                <li>The smooth workflow through timely communication among
                                  all project participants</li>
                                <li>Weekly reports with completed tasks and progress update
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details__column">
                            <h4 className="heading heading--xs details__subheading">Used
                              technologies &amp; apps</h4>
                            <ul data-role="technologies-list" role="list"
                              className="technologies-list">
                              <li data-role="technology-template" className="technology"><img
                                src="" width="28" height="28" alt="Loading..."
                                data-role="technology-icon" className="technology__icon" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* Resource Section */}


        <section className="section resources">
          <div className="container">
            <div className="container-inner">
              <header className="header header--align-center">
                <div data-role="subheading" className="subheading subheading--accent-4-extra-high-brightness">
                  Taking micro-level tasks to let you focus on macro ones</div>
                <h2 data-role="heading" className="heading heading--lg resources__heading">Digital Butlers:
                  providing and managing <span className="color-accent-4">valuable resources</span></h2>
              </header>
              <div data-role="cards-wrapper" className="resources__list-wrapper w-dyn-list">
                <div role="list" className="resources__list w-dyn-items">
                  <div data-model-name="team" data-role="card" role="listitem" className="card w-dyn-item">
                    <div className="card__chips">
                      <div data-role="card-index" className="chip chip--counter">
                      </div>
                    </div>
                    <header className="card__header">
                      <h3 className="heading heading--md card__heading">Team</h3>
                      <div className="rich-text rich-text--secondary card__rich-text w-richtext">
                        <p>We have all the necessary team members to develop your site, web app or
                          service. And if needed, we will find the missing specialist and manage
                          the project accordingly.</p>
                      </div>
                    </header>
                    <div className="card__canvas-wrapper resources-card__canvas-wrapper">
                      <img src="/Team.png" className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div data-model-name="time" data-role="card" role="listitem" className="card w-dyn-item">
                    <div className="card__chips">
                      <div data-role="card-index" className="chip chip--counter"></div>
                    </div>
                    <header className="card__header">
                      <h3 className="heading heading--md card__heading">Time</h3>
                      <div className="rich-text rich-text--secondary card__rich-text w-richtext">
                        <p>We are skilled in writing tech specs, planning, monitoring, and
                          delivering results on time. We don&#x27;t need to be reminded - we will
                          be the first to report back.</p>
                      </div>
                    </header>
                    <div className="card__canvas-wrapper resources-card__canvas-wrapper">
                      <img src="/Time.png" className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div data-model-name="competencies" data-role="card" role="listitem"
                    className="card w-dyn-item">
                    <div className="card__chips">
                      <div data-role="card-index" className="chip chip--counter"></div>
                    </div>
                    <header className="card__header">
                      <h3 className="heading heading--md card__heading">Competencies</h3>
                      <div className="rich-text rich-text--secondary card__rich-text w-richtext">
                        <p>We help new projects start generating profits as quickly as possible,
                          while also bringing fresh ideas and monetization strategies to existing
                          projects.</p>
                      </div>
                    </header>
                    <div className="card__canvas-wrapper resources-card__canvas-wrapper">
                      <img src="/Comp.png" className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div data-model-name="experience" data-role="card" role="listitem"
                    className="card w-dyn-item">
                    <div className="card__chips">
                      <div data-role="card-index" className="chip chip--counter"></div>
                    </div>
                    <header className="card__header">
                      <h3 className="heading heading--md card__heading">Experience</h3>
                      <div className="rich-text rich-text--secondary card__rich-text w-richtext">
                        <p>We learn from our mistakes on over 400+ projects and improve through
                          retrospective meetings to enhance our standards, tech processes, and
                          libraries of ready-made components.</p>
                      </div>
                    </header>
                    <div className="card__canvas-wrapper resources-card__canvas-wrapper">
                      <img src="/Exp.png" className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* Steps Section */}

        <section data-component-id="planning" className="section planning">
          <div className="container container--accent container--accent-4 planning__container">
            <div className="container-inner planning__container-inner">
              <header className="header planning__header">
                <div data-role="subheading" className="subheading">Our 5-step plan </div>
                <h2 data-role="heading" className="heading heading--lg planning__heading">How do we help you
                  achieve <span className="nowrap">your goals?</span></h2>
              </header>
              <div className="planning__slider-1-wrapper">
                <div data-role="slider-1" className="planning-steps-1-wrapper w-dyn-list">
                  <div role="list" className="planning-steps-1 swiper-wrapper w-dyn-items">
                    <div role="listitem" className="planning-step-1 swiper-slide w-dyn-item">
                      <h3 className="heading heading--sm planning-step-1__heading">Step 1. Preparation
                      </h3>
                      <div className="rich-text w-richtext">
                        <p>We assign a Project Manager who defines and describes the project&#x27;s
                          MVP. Then, a PM organizes communication between all specialists involved
                          to determine the project&#x27;s architecture and outline the epics.</p>
                      </div>
                    </div>
                    <div role="listitem" className="planning-step-1 swiper-slide w-dyn-item">
                      <h3 className="heading heading--sm planning-step-1__heading">Step 2. Planning</h3>
                      <div className="rich-text w-richtext">
                        <p>The PM selects a team and together they break down epics into manageable
                          two-day tasks using planning poker. Once the timeline is approved, they
                          add the tasks to our Kanban system and start getting things done.</p>
                      </div>
                    </div>
                    <div role="listitem" className="planning-step-1 swiper-slide w-dyn-item">
                      <h3 className="heading heading--sm planning-step-1__heading">Step 3. Design</h3>
                      <div className="rich-text w-richtext">
                        <p>We start with logic prototyping and then study competitors, collect
                          references, and create the first screen in 2-3 different styles to get
                          an aesthetic design based on project goals and your preferences.</p>
                      </div>
                    </div>
                    <div role="listitem" className="planning-step-1 swiper-slide w-dyn-item">
                      <h3 className="heading heading--sm planning-step-1__heading">Step 4. Development
                      </h3>
                      <div className="rich-text w-richtext">
                        <p>We create a responsive layout which is thoroughly reviewed by the
                          designer. Then connect the front-end with the parallel-developed
                          back-end and pass it to the QA.</p>
                      </div>
                    </div>
                    <div role="listitem" className="planning-step-1 swiper-slide w-dyn-item">
                      <h3 className="heading heading--sm planning-step-1__heading">Step 5. Check. Test.
                        Improve</h3>
                      <div className="rich-text w-richtext">
                        <p>We do it as many times as needed until you get a 100% functional project
                          and you don’t have to do QA&#x27;s job. And when everything is ready, we
                          do a code refactoring.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="planning__navigation"><a data-role="prev-slide-button" role="button"
                  aria-label="Go to previous slide" href="#"
                  className="slider-navigation-button w-inline-block">
                  <div className="slider-navigation-button__icon-wrapper w-embed">
                    <img src="/previous-icon.svg" alt="" />
                  </div>
                </a><a data-role="next-slide-button" role="button" aria-label="Go to next slide"
                  href="#" className="slider-navigation-button w-inline-block">
                    <div className="slider-navigation-button__icon-wrapper w-embed">
                      <img src="/next-icon.svg" alt="" />
                    </div>
                  </a></div>
              </div>
              <div data-role="slider-2" id="w-node-b278cdb6-ff47-1988-5b8c-02c4476dc07f-191b2f6f"
                className="planning-steps-2-wrapper w-dyn-list">
                <div role="list" className="planning-steps-2 swiper-wrapper w-dyn-items">
                  <div role="listitem" className="planning-step-2 swiper-slide w-dyn-item">
                    <div className="planning-step-2__lottie-wrapper w-embed"><lottie-player
                      className="planning-step-2__lottie" autoPlay loop mode="normal"
                      src="/SpecificationIcon.json">
                    </lottie-player></div>
                  </div>
                  <div role="listitem" className="planning-step-2 swiper-slide w-dyn-item">
                    <div className="planning-step-2__lottie-wrapper w-embed"><lottie-player
                      className="planning-step-2__lottie" autoPlay loop mode="normal"
                      src="/ToDoIcon.json">
                    </lottie-player></div>
                  </div>
                  <div role="listitem" className="planning-step-2 swiper-slide w-dyn-item">
                    <div className="planning-step-2__lottie-wrapper w-embed"><lottie-player
                      className="planning-step-2__lottie" autoPlay loop mode="normal"
                      src="/DezignIcon.json">
                    </lottie-player></div>
                  </div>
                  <div role="listitem" className="planning-step-2 swiper-slide w-dyn-item">
                    <div className="planning-step-2__lottie-wrapper w-embed"><lottie-player
                      className="planning-step-2__lottie" autoPlay loop mode="normal"
                      src="/CodeIcon.json">
                    </lottie-player></div>
                  </div>
                  <div role="listitem" className="planning-step-2 swiper-slide w-dyn-item">
                    <div className="planning-step-2__lottie-wrapper w-embed"><lottie-player
                      className="planning-step-2__lottie" autoPlay loop mode="normal"
                      src="/TestingIcon.json">
                    </lottie-player></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* Team Section */}


        <section className="section teambuilding">
          <div className="container">
            <div className="container-inner">
              <header className="header">
                <div data-role="subheading" className="subheading subheading--accent-2-extra-high-brightness">
                  Digital Butlers: team growth resources</div>
                <h2 data-role="heading" className="heading heading--lg teambuilding__heading">Develop not only
                  projects, but also a <span className="color-accent-2-high-brightness">mature team</span>
                  capable of bringing your vision to life</h2>
              </header>
              <div data-role="features-wrapper" className="teambuilding-features-wrapper w-dyn-list">
                <div role="list" className="teambuilding-features w-dyn-items">
                  <div role="listitem" className="teambuilding-feature w-dyn-item"><img alt="" loading="lazy"
                    data-role="feature-image" src="/animation-1.webp"
                    className="teambuilding-feature__image" />
                    <div data-role="feature-decoration"
                      style={{ backgroundColor: 'hsla(263.92638036809814, 100.00%, 68.04%, 1.00)' }}
                      className="dot-decoration teambuilding-feature__dot-decoration"></div>
                    <h3 data-role="feature-heading"
                      className="heading heading--sm teambuilding-feature__heading">Kanban method</h3>
                    <div data-role="feature-text"
                      className="rich-text rich-text--secondary rich-text--small w-richtext">
                      <p>We have completed the training and are implementing Kanban System Design Part
                        1, with Part 2 ahead.</p>
                    </div>
                  </div>
                  <div role="listitem" className="teambuilding-feature w-dyn-item"><img alt="" loading="lazy"
                    data-role="feature-image" src="/animation-2.webp"
                    className="teambuilding-feature__image" />
                    <div data-role="feature-decoration"
                      style={{ backgroundColor: "hsla(83.05882352941175, 100.00%, 50.00%, 1.00)" }}
                      className="dot-decoration teambuilding-feature__dot-decoration"></div>
                    <h3 data-role="feature-heading"
                      className="heading heading--sm teambuilding-feature__heading">Recognition rally</h3>
                    <div data-role="feature-text"
                      className="rich-text rich-text--secondary rich-text--small w-richtext">
                      <p>Every quarter, we take a day off to celebrate personal and team victories and
                        achievements in a triumphant manner.</p>
                    </div>
                  </div>
                  <div role="listitem" className="teambuilding-feature w-dyn-item"><img alt="" loading="lazy"
                    data-role="feature-image" src="/animation-3.webp"
                    className="teambuilding-feature__image" />
                    <div data-role="feature-decoration"
                      style={{ backgroundColor: "hsla(224.84536082474227, 80.83%, 52.94%, 1.00)" }}
                      className="dot-decoration teambuilding-feature__dot-decoration"></div>
                    <h3 data-role="feature-heading"
                      className="heading heading--sm teambuilding-feature__heading">Self-education</h3>
                    <div data-role="feature-text"
                      className="rich-text rich-text--secondary rich-text--small w-richtext">
                      <p>We constantly invest in paid professional courses to enhance our skills and
                        complete our work more efficiently.</p>
                    </div>
                  </div>
                  <div role="listitem" className="teambuilding-feature w-dyn-item"><img alt="" loading="lazy"
                    data-role="feature-image" src="/animation-4.webp"
                    className="teambuilding-feature__image" />
                    <div data-role="feature-decoration"
                      style={{ backgroundColor: 'hsla(3.846153846153848, 92.86%, 67.06%, 1.00)' }}
                      className="dot-decoration teambuilding-feature__dot-decoration"></div>
                    <h3 data-role="feature-heading"
                      className="heading heading--sm teambuilding-feature__heading">Pixels Battle</h3>
                    <div data-role="feature-text"
                      className="rich-text rich-text--secondary rich-text--small w-richtext">
                      <p>Team meetings to exchange experience, discuss trends, and find a balance
                        between speed, quality, and aesthetics.</p>
                    </div>
                  </div>
                  <div role="listitem" className="teambuilding-feature w-dyn-item"><img alt="" loading="lazy"
                    data-role="feature-image" src="/animation-5.webp"
                    className="teambuilding-feature__image" />
                    <div data-role="feature-decoration"
                      style={{ backgroundColor: 'hsla(0, 0.00%, 14.90%, 1.00)' }}
                      className="dot-decoration teambuilding-feature__dot-decoration"></div>
                    <h3 data-role="feature-heading"
                      className="heading heading--sm teambuilding-feature__heading">Retrospectives</h3>
                    <div data-role="feature-text"
                      className="rich-text rich-text--secondary rich-text--small w-richtext">
                      <p>We hold retrospective meetings at the end of checkpoints or the entire
                        project to improve ourselfs and our standards.<br /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        <section data-role="benefits" className="section benefits">
          <div className="container container--accent container--accent-3 benefits__container">
            <div className="container-inner benefits__container-inner">
              <header className="header benefits__header">
                <div data-role="subheading" className="subheading">Contact us</div>
                <h2 data-role="heading" className="heading heading--lg teambuilding__heading">If you like what
                  we do <span className="nowrap">and our</span> approach, <span
                    className="color-accent-1">let&#x27;s create smth awesome together</span></h2>
              </header>
              <div className="benefits__hand">
                <img src="" alt="" />
              </div>
              <address id="w-node-_553bc3d3-6b2a-33cc-33cc-c52cbb09c945-191b2f6f" className="our-contacts">
                <ul role="list" className="our-contacts__list">
                  <li data-a11y-dialog-show="get-quote-dialog" data-role="button"
                    className="our-contacts__item"><a role="button" data-role="button"
                      data-a11y-dialog-show="data-a11y-dialog-show" href="#"
                      className="our-contacts__button w-button">Quote</a></li>
                  <li className="our-contacts__item"><a data-role="button" href="" target="_blank"
                    className="our-contacts__button w-button">Telegram</a></li>
                  <li className="our-contacts__item"><a data-role="button" href="" target="_blank"
                    className="our-contacts__button w-button">Whatsapp</a></li>
                  <li className="our-contacts__item"><a data-role="button" href=""
                    className="our-contacts__button w-button">Email</a></li>
                  <li className="our-contacts__item"><a data-role="button" href=""
                    className="our-contacts__button w-button">Phone</a></li>
                </ul>
              </address>
            </div>
          </div>
        </section>



        <section className="section TeamSlider">
          <TeamSlider />
        </section>



        <section className="section reviews">
          <div className="container container--accent container--accent-3 reviews__container">
            <div className="container-inner reviews__container-inner">
              <div className="header reviews__header">
                <div data-role="subheading" className="subheading">We are always there </div>
                <h2 data-role="heading" className="heading heading--lg butler-code-preview__heading">Based on
                  statistics, you are likely to launch 2 projects <span className="nowrap">with us.</span>
                </h2>
                <p data-role="paragraph" className="paragraph butler-code-description__paragraph">Since November
                  23, 2016, we have completed <span className="color-accent-1">400+ projects</span> for <span
                    className="color-accent-1">170+ employers</span>. <span className="nowrap">And we are
                      honored</span> to be worthy of such trust. Explore what our employers say.</p>
              </div>
              <div id="w-node-_1cb81aec-f253-c6d8-905d-44271f04bcbd-59567f8f" className="reviews__hand">
                <div data-role="canvas-wrapper" className="reviews__canvas-wrapper">
                  <div data-role="canvas-video" id="w-node-_36066aa0-168a-9afa-eb0e-a0b559567fa4-59567f8f"
                    className="reviews__canvas-video w-embed">
                    <video autoPlay muted loop playsInline crossOrigin="anonymous"
                      data-component-id="lazy-video"
                      style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
                      <source
                        data-lazy-src="https://assets.website-files.com/63cfe79de6576501a119ce1f/648982a2762880b392a291ab_preview-transcode.mp4"
                        type="video/mp4" />
                    </video>
                  </div>
                  <img className="reviews__canvas-image" src="" alt=""
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 608px, (max-width: 1279px) 86vw, 613.796875px"
                    data-role="canvas-image" loading="lazy" />
                </div><a data-role="button" href="" className="reviews__button w-inline-block">
                  <div className="clutch-review__button-text">See video reviews</div>
                </a>
              </div>
              <div data-role="clutch-card" className="cluth-card reviews__clutch-card"><img
                src="/clutch.svg" loading="lazy" alt="Clutch logo"
                className="clutch-card__logo" />
                <div className="stars clutch-card__stars"><img src="/star.svg" loading="lazy"
                  alt="Star" className="star" /><img src="/star.svg" loading="lazy"
                    alt="Star" className="star" /><img src="/star.svg" loading="lazy"
                      alt="Star" className="star" /><img src="/star.svg" loading="lazy"
                        alt="Star" className="star" /><img src="/star.svg" loading="lazy"
                          alt="Star" className="star" /></div>
                <p className="paragraph paragraph--lg"><span data-content="clutch-reviews-rating">00</span> of 5
                  based on <span data-content="clutch-reviews-count">00</span> Clutch reviews</p><a
                    href="/reviews" className="link link--accent-inversed clutch-card__link w-inline-block">
                  <div className="link__text">Read approved reviews</div>
                  <div className="link__icon-wrapper w-embed"><svg width="20" height="20" viewBox="0 0 20 20"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM9.03033 5.46967C8.73744 5.17678 8.26256 5.17678 7.96967 5.46967C7.67678 5.76256 7.67678 6.23744 7.96967 6.53033L11.4393 10L7.96967 13.4697C7.67678 13.7626 7.67678 14.2374 7.96967 14.5303C8.26256 14.8232 8.73744 14.8232 9.03033 14.5303L13.0303 10.5303C13.3232 10.2374 13.3232 9.76256 13.0303 9.46967L9.03033 5.46967Z"
                      fill="currentColor" />
                  </svg></div>
                </a>
              </div>
            </div>
          </div>
        </section>



        <section className="section butler-code-preview">
          <div className="container">
            <div className="container-inner">
              <div className="header header--align-center">
                <div data-role="subheading" className="subheading subheading--accent-2-extra-high-brightness">
                  The Digital Butler&#x27;s CODE</div>
                <h2 data-role="heading" className="heading heading--lg butler-code-preview__heading"><span
                  className="color-accent-3 nowrap">You are Batman.</span> <span className="nowrap">We are
                    your loyal</span> butler, Alfred.</h2>
                <div data-component-id="butler-code-description" className="butler-code-description">
                  <p data-role="paragraph" className="paragraph butler-code-description__paragraph">This idea
                    inspired our studio&#x27;s name - Digital Butlers, and forms the foundation of our
                    values, code of conduct, and characteristics, which we call <a href="#"
                      role="button" data-role="tooltip-trigger" className="text-tooltip-trigger">“The
                      Digital Butler&#x27;s CODE”.</a><br /></p>
                  <div data-role="tooltip" className="tooltip">
                    <div className="dot-decoration tooltip__dot-decoration"></div>
                    <div data-role="tooltip-content" className="tooltip__rich-text w-richtext">
                      <div className="w-embed">
                        <p>
                          We strive for complete adherence to everything that's written below,
                          always asking ourselves the question, "What would Alfred do?". This
                          question is typically asked before making decisions, but to be honest,
                          sometimes it arises during retrospective meetings after decisions have
                          been made.
                        </p>
                        <p>
                          We are young and ambitious, with <span
                            data-content="employees-count">00</span> people who joined at
                          different times. However, we are constantly improving ourselves, and
                          many of us are already very close to our ideal image of Digital Butlers.
                        </p>
                      </div>
                      <p>‍</p>
                    </div>
                  </div>
                </div>
                <div className="tooltip-wrapper"></div>
              </div>
              <div className="accordion-wrapper w-dyn-list">
                <div data-role="accordion" role="list" className="accordion w-dyn-items">
                  <div data-role="accordion-item" role="listitem" className="accordion__item w-dyn-item"><a
                    data-role="accordion-summary" role="button" href="#"
                    className="accordion__summary w-inline-block">
                    <div id="w-node-_8f23c43b-31a7-4027-019f-f9f46261cd1b-191b2f6f"
                      className="accordion__chips">
                      <div data-role="accordion-index" className="chip chip--counter"></div>
                      <h3 style={{ backgroundColor: "hsla(83.05882352941175, 100.00%, 50.00%, 1.00)" }}
                        className="chip">Main values</h3>
                    </div>
                    <div id="w-node-_8f23c43b-31a7-4027-019f-f9f46261cd1e-191b2f6f"
                      className="heading heading--sm">It&#x27;s what&#x27;s important to us and what
                      we transmit to our team and employers</div>
                    <div id="w-node-_8f23c43b-31a7-4027-019f-f9f46261cd1f-191b2f6f"
                      className="accordion__switch-wrapper w-embed"><svg className="accordion__icon"
                        viewBox="0 0 34 34">
                        <path
                          d="M 17 7 L 17 27 C 17 32 9 33 7.7 29.4 Q 7 27 9 25 L 25 9 M 27 17 L 7 17 C 2 17 1 9 5.3 7.6 Q 7 7 9 9 L 25 25">
                        </path>
                      </svg></div>
                  </a>
                    <div data-role="accordion-details" className="details-wrapper">
                      <article id="w-node-_8f23c43b-31a7-4027-019f-f9f46261cd21-191b2f6f"
                        className="details">
                        <div className="details__main">
                          <div data-role="rich-text"
                            className="details__rich-text rich-text--grid w-richtext">
                            <h3>Loyalty and a sense of duty</h3>
                            <p>We understand the importance of confidentiality and maintain a
                              strict policy against gossip and spreading rumors. We also
                              strongly believe in prioritizing the interests of our employer
                              above our personal gains, and committed to upholding these
                              principles in all circumstances.</p>
                            <h3>Respect for employer goals and their decisions</h3>
                            <p>Many of our employers are visionaries who are doing what no one
                              has done before. Therefore, we understand the need to change
                              priorities, goals, and deadlines during the work process. While
                              we would like to work without restrictions on ideas and with
                              enough time to bring every project to perfection, we do so only
                              when it is the goal.</p>
                            <h3>Meeting commitments</h3>
                            <p>We are dedicated to achieving our employer&#x27;s goals,
                              demonstrating personal efficiency and flexibility. We respect
                              their pace, deadlines, and restrictions in a constantly changing
                              external environment. And, if we make an agreement, we fulfill
                              it. </p>
                            <h3>Responsibility</h3>
                            <p>We take accountability for our mistakes and make fixes free of
                              charge, never conceal the truth, refrain from assigning blame,
                              and avoid shifting responsibility onto others.</p>
                          </div>
                        </div>
                        <footer className="details__footer"><a data-a11y-dialog-show="get-quote-dialog"
                          role="button" href="#"
                          className="link link--accent-inversed w-inline-block">
                          <div className="link__text">Summon Digital Butlers</div>
                          <div className="link__icon-wrapper w-embed"><svg width="20" height="20"
                            viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM9.03033 5.46967C8.73744 5.17678 8.26256 5.17678 7.96967 5.46967C7.67678 5.76256 7.67678 6.23744 7.96967 6.53033L11.4393 10L7.96967 13.4697C7.67678 13.7626 7.67678 14.2374 7.96967 14.5303C8.26256 14.8232 8.73744 14.8232 9.03033 14.5303L13.0303 10.5303C13.3232 10.2374 13.3232 9.76256 13.0303 9.46967L9.03033 5.46967Z"
                              fill="currentColor" />
                          </svg></div>
                        </a></footer>
                      </article>
                    </div>
                  </div>
                  <div data-role="accordion-item" role="listitem" className="accordion__item w-dyn-item"><a
                    data-role="accordion-summary" role="button" href="#"
                    className="accordion__summary w-inline-block">
                    <div id="w-node-_8f23c43b-31a7-4027-019f-f9f46261cd1b-191b2f6f"
                      className="accordion__chips">
                      <div data-role="accordion-index" className="chip chip--counter"></div>
                      <h3 style={{ backgroundColor: "hsla(279.64285714285717, 100.00%, 89.02%, 1.00)" }}
                        className="chip">Code of conduct</h3>
                    </div>
                    <div id="w-node-_8f23c43b-31a7-4027-019f-f9f46261cd1e-191b2f6f"
                      className="heading heading--sm">Our rules and guiding principles for behavior in
                      any situation</div>
                    <div id="w-node-_8f23c43b-31a7-4027-019f-f9f46261cd1f-191b2f6f"
                      className="accordion__switch-wrapper w-embed"><svg className="accordion__icon"
                        viewBox="0 0 34 34">
                        <path
                          d="M 17 7 L 17 27 C 17 32 9 33 7.7 29.4 Q 7 27 9 25 L 25 9 M 27 17 L 7 17 C 2 17 1 9 5.3 7.6 Q 7 7 9 9 L 25 25">
                        </path>
                      </svg></div>
                  </a>
                    <div data-role="accordion-details" className="details-wrapper">
                      <article id="w-node-_8f23c43b-31a7-4027-019f-f9f46261cd21-191b2f6f"
                        className="details">
                        <div className="details__main">
                          <div data-role="rich-text"
                            className="details__rich-text rich-text--grid w-richtext">
                            <h3>Helpfulness</h3>
                            <p>Helpfulness is the desire to give support and be useful. And
                              under no circumstances do we achieve our selfish interests at
                              the expense of the employer. While maintaining our dignity, we
                              do everything possible for the well-being of the employer and
                              their business.</p>
                            <h3>Serve, but don&#x27;t grovel</h3>
                            <p>We are willing to be the employer&#x27;s hands and do everything
                              they say to help them implement their vision precisely. We are
                              happy to learn from visionaries. However, when such actions
                              cause harm rather than good and we cannot come to an agreement,
                              we leave, diplomatically outsourcing all the work to another
                              team.</p>
                            <h3>Anticipating Desires</h3>
                            <p>Constantly asking, directing, and reminding is part of our job
                              for which we are paid. Therefore, we strive to be proactive and
                              keep you updated on progress without being asked to do so.</p>
                            <h3>Maintaining Distance</h3>
                            <p>Over time, it&#x27;s natural to develop warm and friendly
                              relationships with our employers. However, in these situations,
                              it&#x27;s important to remember that working with a likeable
                              employer means that we must continue to perform our duties
                              flawlessly.</p>
                            <h3>Being in the Background</h3>
                            <p>We understand that our role is to support our employer and
                              contribute to the success of the project. Rather than trying to
                              overshadow our employer, we maintain a humble approach and
                              highlight their importance in the team.</p>
                            <h3>Bringing innovation</h3>
                            <p>All team members openly express ideas and suggestions for
                              improving our team&#x27;s projects and business processes, as
                              well as those of our employers. They can take responsibility for
                              their implementation, even if it goes beyond their immediate job
                              duties.</p>
                            <h3>Neutrality</h3>
                            <p>When our employer has a dispute with a partner or colleague and
                              turns to us as an arbiter, we never take anyone&#x27;s side.
                              Only strict neutrality contributes to the reconciliation of
                              morals and the resolution of conflicts.</p>
                            <h3>Impartiality</h3>
                            <p>To avoid mischief-making and peaching within our team, we have no
                              favorites or scapegoats, and everyone is treated equally. This
                              ensures impartiality and a sense of justice in all aspects of
                              our work.<br /></p>
                            <h3>Openness</h3>
                            <p>We are transparent and honest in communication and in
                              demonstrating work processes, both among ourselves and with our
                              employers.</p>
                          </div>
                        </div>
                        <footer className="details__footer"><a data-a11y-dialog-show="get-quote-dialog"
                          role="button" href="#"
                          className="link link--accent-inversed w-inline-block">
                          <div className="link__text">Summon Digital Butlers</div>
                          <div className="link__icon-wrapper w-embed"><svg width="20" height="20"
                            viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM9.03033 5.46967C8.73744 5.17678 8.26256 5.17678 7.96967 5.46967C7.67678 5.76256 7.67678 6.23744 7.96967 6.53033L11.4393 10L7.96967 13.4697C7.67678 13.7626 7.67678 14.2374 7.96967 14.5303C8.26256 14.8232 8.73744 14.8232 9.03033 14.5303L13.0303 10.5303C13.3232 10.2374 13.3232 9.76256 13.0303 9.46967L9.03033 5.46967Z"
                              fill="currentColor" />
                          </svg></div>
                        </a></footer>
                      </article>
                    </div>
                  </div>
                  <div data-role="accordion-item" role="listitem" className="accordion__item w-dyn-item"><a
                    data-role="accordion-summary" role="button" href="#"
                    className="accordion__summary w-inline-block">
                    <div id="w-node-_8f23c43b-31a7-4027-019f-f9f46261cd1b-191b2f6f"
                      className="accordion__chips">
                      <div data-role="accordion-index" className="chip chip--counter"></div>
                      <h3 style={{ backgroundColor: "#ffd1d1" }} className="chip">Characteristics</h3>
                    </div>
                    <div id="w-node-_8f23c43b-31a7-4027-019f-f9f46261cd1e-191b2f6f"
                      className="heading heading--sm">Our description with adjectives and descriptive
                      nouns</div>
                    <div id="w-node-_8f23c43b-31a7-4027-019f-f9f46261cd1f-191b2f6f"
                      className="accordion__switch-wrapper w-embed"><svg className="accordion__icon"
                        viewBox="0 0 34 34">
                        <path
                          d="M 17 7 L 17 27 C 17 32 9 33 7.7 29.4 Q 7 27 9 25 L 25 9 M 27 17 L 7 17 C 2 17 1 9 5.3 7.6 Q 7 7 9 9 L 25 25">
                        </path>
                      </svg></div>
                  </a>
                    <div data-role="accordion-details" className="details-wrapper">
                      <article id="w-node-_8f23c43b-31a7-4027-019f-f9f46261cd21-191b2f6f"
                        className="details">
                        <div className="details__main">
                          <div data-role="rich-text"
                            className="details__rich-text rich-text--grid w-richtext">
                            <h3>Tactful</h3>
                            <p>We have the ability to &quot;sense the situation&quot; and act in
                              a way that does not diminish the dignity of individuals,
                              regardless of their quirks or idiosyncrasies.</p>
                            <h3>Intelligent</h3>
                            <p>We work on ourselves to be able to communicate impartially with
                              people of all levels, personalities, and perspectives.</p>
                            <h3>Respectful</h3>
                            <p>We value care and respect towards both our team members and our
                              employer in any interaction. We support each other and show
                              loyalty, aid, and tolerance while honoring employer goals and
                              decisions.</p>
                            <h3>Punctual</h3>
                            <p>Arriving on time to a meeting is a sign of honoring agreements,
                              and if we make an agreement, we will fulfill it.</p>
                            <h3>Perfectionist</h3>
                            <p>We approach our work with a healthy sense of perfectionism. Our
                              work is easily maintainable and scalable. However, we don&#x27;t
                              try to break through a wall if we can simply go around it.</p>
                            <h3>Family-oriented</h3>
                            <p>In 2016, we, Alex and Paul, lost our 8-year-old offline perfume
                              business to the growing online market. So we decided to learn
                              more about it and help our acquaintances avoid a similar fate.
                            </p>
                            <p>To gain experience, we worked for free for the first six months
                              and only earned $140.00 during that time. However, our hard work
                              paid off, and we were recommended to others. As a result, our
                              profit increased to $2885.00 in the second half of the year.</p>
                            <p>And today we are 31 people in the team. And this would have been
                              impossible without the support of our wives Iren and Tanya.
                              That&#x27;s why we get to know our candidate partners before
                              accepting them into the team. It&#x27;s important for us to
                              consider their opinions and support. And they are always welcome
                              guests in the office and at all team meetings.</p>
                          </div>
                        </div>
                        <footer className="details__footer"><a data-a11y-dialog-show="get-quote-dialog"
                          role="button" href="#"
                          className="link link--accent-inversed w-inline-block">
                          <div className="link__text">Summon Digital Butlers</div>
                          <div className="link__icon-wrapper w-embed"><svg width="20" height="20"
                            viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM9.03033 5.46967C8.73744 5.17678 8.26256 5.17678 7.96967 5.46967C7.67678 5.76256 7.67678 6.23744 7.96967 6.53033L11.4393 10L7.96967 13.4697C7.67678 13.7626 7.67678 14.2374 7.96967 14.5303C8.26256 14.8232 8.73744 14.8232 9.03033 14.5303L13.0303 10.5303C13.3232 10.2374 13.3232 9.76256 13.0303 9.46967L9.03033 5.46967Z"
                              fill="currentColor" />
                          </svg></div>
                        </a></footer>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="section achieve-your-goal">
          <div className="container container--accent container--accent-2">
            <div className="container-inner achive-your-goal__container-inner">
              <header className="header header--align-center achieve-your-goal__header">
                <div className="subheading"><strong>Digital Butlers: web goals
                  achievement team</strong></div>
                <h2 className="heading heading--lg achieve-your-goal__heading">Set a goal
                  and we will organize the process of achieving it</h2>
              </header>
              <div className="achieve-your-goal__contact-us-buttons-group-wrapper">
                <div data-component-id="buttons-group" className="buttons-group">
                  <a href="" className="button button--lg buttons-group__main-button w-button">Let&#x27;s discuss your project</a>
                  <a href="" className="button button--lg w-button">Get quote</a>
                  <a href="" className="button button--lg w-button">Telegram</a>
                  <a href="" className="button button--lg w-button">Whatsapp</a>
                  <a href="" className="button button--lg w-button">Email</a>
                  <a href="" className="button button--lg w-button">Get a call</a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>



      <div data-name="introduction" data-component-id="introduction" className="introduction js--muted js--open">
        <a data-name="introduction-mute" role="button" href="#" className="introduction__mute w-inline-block">
          <div className="introduction__mute-icon introduction__mute-icon--unmute w-embed">
            <img src='/unmute.svg' alt=''/>
          </div>
          <div className="introduction__mute-icon introduction__mute-icon--mute w-embed">
            <img src='/mute.svg' alt=''/>
          </div>
        </a>
        <a aria-label="close" data-name="introduction-close" role="button" href="#" className="introduction__close w-inline-block">
          <div className="introduction__close-image w-embed">
          <MdClose />
          </div>
        </a>
        <div data-name="introduction-hello" className="introduction__hello">Hello there!</div>
        <div className="introduction__video-wrapper w-embed">
          <video
            className="introduction__video"
            data-name="introduction-video"
            width="100%"
            height="100%"
            data-test="video-content"
            preload="auto"
            src="/video/introduction.MP4"
            playsInline={true}
            loop={true}
            muted={true}
            autoPlay={true}
            draggable={false}
            data-object-fit="cover"
          ></video>
        </div>
        <a data-name="introduction-open" href="#" className="introduction__open-btn w-inline-block">
          <div className="introduction__open-icon-wrapper w-embed">
            <FaExpand />
          </div>
        </a>
        <a data-name="introduction-quote" role="button" data-a11y-dialog-show="get-quote-dialog" href="#" className="introduction__quote w-inline-block">
          <div className="introduction__quote-icon w-embed">
            <FaEnvelope />
          </div>
        </a>
      </div>




      <div id="get-quote-dialog" aria-hidden="true" role="dialog" data-a11y-dialog="get-quote-dialog"
        data-component-id="get-quote-dialog" inert="" className="dialog get-quote-dialog">
        <div data-a11y-dialog-hide="true" className="dialog__overlay"></div>
        <div role="document" className="dialog__container-wrapper">
          <div className="container container--accent container--accent-3">
            <div className="container-inner">
              <header id="w-node-aa484944-9fcc-91ec-e21a-8635da6e145e-da6e145c"
                className="header header--align-center"><a data-a11y-dialog-hide="true" aria-label="Close dialog"
                  role="button" href="#" className="close-button w-button"></a>
                <h2 data-role="heading" className="heading heading--lg">Let us know about your project</h2>
              </header>
              <div className="form-wrapper w-form">
                <form id="wf-form-Get-quote-form" name="wf-form-Get-quote-form" data-name="Get quote form"
                  method="get" data-component-id="get-quote-form" className="form"
                  data-wf-page-id="64de8c0ead9662c7191b2f6f"
                  data-wf-element-id="c65ab600-52ec-f64a-1588-89c66a2b510c">
                  <div className="form__grid">
                    <div data-component-id="input-wrapper" className="input-wrapper">
                      <label htmlFor="get-quote-name" data-role="input-label" className="input-label">What is your name?</label>
                      <input type="text" className="input w-input" maxLength="256" name="name" data-name="Name"
                        placeholder="Bruce Wayne" data-role="input" id="get-quote-name"
                        required="" />
                      <div data-role="error-message" className="input-error-message">Error message</div>
                    </div>
                    <div data-component-id="input-wrapper" className="input-wrapper"><label htmlFor="dialog-email"
                      data-role="input-label" className="input-label">Enter your email
                      adress</label><input type="email" className="input w-input" maxLength="256"
                        name="email" data-name="email" placeholder=" bruce@waynecorp.com"
                        data-role="input" id="dialog-email" required="" />
                      <div data-role="error-message" className="input-error-message">This is some text inside
                        of a div block.</div>
                    </div>
                    <div className="input-wrapper"><label htmlFor="dialog-goal" data-role="input-label"
                      className="input-label">What can we do for you?</label>
                      <div data-role="input"><select name="goal" data-name="goal" required=""
                        id="dialog-goal" data-component-id="select" className="input w-select">
                        <option value="1">Webflow custom website</option>
                        <option value="2">Corp. website / E-commerce</option>
                        <option value="3">Landing page / Promo website</option>
                        <option value="4">Web application</option>
                        <option value="5">UX/UI Design</option>
                        <option value="6">Frontend development</option>
                        <option value="7">Backend development</option>
                        <option value="8">Other</option>
                      </select></div>
                    </div>
                    <div className="input-wrapper"><label htmlFor="dialog-budget" data-role="input-label"
                      className="input-label">What budget do you have?</label>
                      <div data-role="input"><select name="budget" data-name="budget" id="dialog-budget"
                        data-component-id="select" className="input w-select">
                        <option value="less than 5.000€">less than 5.000€</option>
                        <option value="5,000€-10.000€">5,000€-10.000€</option>
                        <option value="10,000€-20.000€">10,000€-20.000€</option>
                        <option value="20,000€-50.000€">20,000€-50.000€</option>
                        <option value="50,000€-100.000€">50,000€-100.000€</option>
                      </select></div>
                    </div>
                    <div data-component-id="input-wrapper"
                      id="w-node-_68e80e90-3370-bd33-9aa0-a666b1d57286-6a2b510b"
                      className="input-wrapper input-wrapper--large"><label htmlFor="phone"
                        data-role="input-label" className="input-label">Enter your phone</label><input
                        type="tel" className="input w-input" maxLength="256" name="phone" data-name="phone"
                        placeholder="+1 -111-111-1111" data-role="input" id="phone" required="" />
                      <div data-role="error-message" className="input-error-message">This is some text inside
                        of a div block.</div>
                    </div>
                  </div>
                  <div className="input-wrapper"><label htmlFor="dialog-message" data-role="input-label"
                    className="input-label">Is there anything else we need to know?</label><textarea
                      className="input input--textarea w-input" maxLength="5000" name="message"
                      data-name="message" placeholder="" data-role="input" id="dialog-message"></textarea>
                  </div>
                  <div className="form__checkboxes"><label id="dialog-news-and-updates"
                    data-role="checkbox-wrapper" className="w-checkbox checkbox-wrapper">
                    <div
                      className="w-checkbox-input w-checkbox-input--inputType-custom checkbox w--redirected-checked">
                    </div><input type="checkbox" id="news-and-updates" name="news-and-updates"
                      data-name="news-and-updates" checked={isChecked} onChange={handleCheckboxChange}
                      style={{ opacity: 0, position: 'absolute', zIndex: -1 }} /><span
                        className="input-label label--checkbox w-form-label" htmlFor="news-and-updates">Keep
                      this checked if you want to get news and updates from Digital Butlers
                      Studio.</span>
                  </label><label id="dialog-policy-and-terms" data-role="checkbox-wrapper"
                    className="w-checkbox checkbox-wrapper">
                      <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div>
                      <input type="checkbox" id="policy-and-terms" name="policy-and-terms"
                        data-name="policy-and-terms" required=""
                        style={{ opacity: 0, position: 'absolute', zIndex: -1 }} /><span
                          className="input-label label--checkbox w-form-label" htmlFor="policy-and-terms">You need
                        to agree with our <a href="" target="_blank" className="text-link">Privacy
                          Policy</a> and <a href="" target="_blank" className="text-link">Terms of use</a>
                        to send this request. We
                        hope it is okay.</span>
                    </label></div>
                  <footer className="form__footer">
                    <div className="submit-button-wrapper w-embed"><button type="submit"
                      data-role="submit-button" className="button button--lg w-button">
                      Get a quote in 48 hours
                    </button>
                      <a className="form__success-link" data-role="success-link" href="" tabIndex="-1"></a>
                    </div>
                  </footer>
                </form>
                <div data-role="form-success-message" className="form-message form-message--success w-form-done">
                  <div className="form-message__text">Thank you! Your submission has been received!</div>
                </div>
                <div data-role="form-error-message" className="form-message form-message--error w-form-fail">
                  <div className="form-message__text">Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
