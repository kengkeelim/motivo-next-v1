import Head from "next/head";
import Link from "next/link";

import { useState, useEffect } from "react";

import NavBar from "../components/navBar";

import undraw1 from "../assets/undraw_fill_forms_yltj.svg";
import undraw2 from "../assets/undraw_Booking_re_gw4j.svg";
import undraw3 from "../assets/undraw_video_call_kxyp.svg";
import undraw4 from "../assets/undraw_business_deal_cpi9.svg";
import undraw5 from "../assets/undraw_team_goals_hrii.svg";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [sectionValue, setSectionValue] = useState(null);
  const [navHeight, setNavHeight] = useState(null);
  const [scrolling, setScrolling] = useState(null);

  const getSectionInfo = () => {
    const allSectionId = ["solutions", "workflow", "testimonials"];

    let sectionInfo = allSectionId.map((id) => {
      let section = document.getElementById(id);

      return {
        id,
        offsetTop: section.offsetTop,
        offsetHeight: section.offsetHeight,
      };
    });

    setSectionValue(sectionInfo);
  };

  const getNavInfo = () => {
    const nav = document.querySelector("nav");
    if (nav) {
      setNavHeight(nav.offsetHeight);
    } else if (window.innerWidth >= 768) {
      setNavHeight(80);
    } else {
      setNavHeight(64);
    }
  };

  const checkScroll = (yPos) => {
    if (yPos === 0) {
      setScrolling(false);
    } else {
      setScrolling(true);
    }
  };

  const checkActiveLink = (yPos) => {
    if (sectionValue) {
      let solutionsSection = sectionValue[0];

      sectionValue.forEach((section) => {
        // When scroll within the section, set nav link to active.
        if (
          section.offsetTop <= yPos + navHeight &&
          section.offsetTop + section.offsetHeight > yPos
        ) {
          setActiveLink(section.id);
        } else if (yPos + navHeight < solutionsSection.offsetTop) {
          setActiveLink(null);
        }
      });
    }
  };

  const handleScroll = () => {
    const yPos = window.pageYOffset;
    checkScroll(yPos);
    checkActiveLink(yPos);
  };

  useEffect(() => {
    getSectionInfo();
    getNavInfo();
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    document.addEventListener("touchstart", handleScroll);
    return () => {
      document.removeEventListener("touchstart", handleScroll);
    };
  }, [handleScroll]);

  if (typeof window !== "undefined") {
    const body = document.querySelector("body");
    if (window.innerWidth < 768 && openMenu) {
      body.style.overflow = "hidden";
      body.scroll = "no";
    } else {
      body.style.overflow = "scroll";
      body.scroll = "yes";
    }
  }

  return (
    <div className="h-screen w-screen">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Motivo | A Marketing Company</title>
        <link rel="canonical" href="https://motivo.marketing/" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
        <meta
          name="description"
          content="We help SMEs develop websites, run pay per click (PPC) campaigns, create contents for social media, and streamline fulfillment processes for best customer experience."
        />
        <meta
          name="keywords"
          content="digital marketing malaysia, small business marketing, search engine marketing (SEM), social media content creation, web development service"
        />
        <meta name="theme-color" content="#4C1D95" />
      </Head>

      <header
        id="header"
        className={`h-screen box-border bg-black ${styles.hero} bg-cover bg-no-repeat bg-local md:h-5/6 xl:h-screen`}
      >
        <NavBar>
          <div className="menu">
            <button
              aria-label="menu"
              type="button"
              className={`block ${
                scrolling ? "text-gray-400" : "text-gray-200"
              } focus:outline-none md:hidden`}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </svg>
            </button>

            <div
              className={
                openMenu
                  ? `${styles.navItems} ${styles.slideIn}`
                  : `${styles.navItems}`
              }
            >
              <div className="close w-3/5 md:hidden">
                <button
                  aria-label="close"
                  type="button"
                  className="block float-right focus:outline-none"
                  onClick={() => setOpenMenu(!openMenu)}
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 511.995 511.995"
                  >
                    <g>
                      <g>
                        <path
                          d="M437.126,74.939c-99.826-99.826-262.307-99.826-362.133,0C26.637,123.314,0,187.617,0,256.005
			s26.637,132.691,74.993,181.047c49.923,49.923,115.495,74.874,181.066,74.874s131.144-24.951,181.066-74.874
			C536.951,337.226,536.951,174.784,437.126,74.939z M409.08,409.006c-84.375,84.375-221.667,84.375-306.042,0
			c-40.858-40.858-63.37-95.204-63.37-153.001s22.512-112.143,63.37-153.021c84.375-84.375,221.667-84.355,306.042,0
			C493.435,187.359,493.435,324.651,409.08,409.006z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M341.525,310.827l-56.151-56.071l56.151-56.071c7.735-7.735,7.735-20.29,0.02-28.046
			c-7.755-7.775-20.31-7.755-28.065-0.02l-56.19,56.111l-56.19-56.111c-7.755-7.735-20.31-7.755-28.065,0.02
			c-7.735,7.755-7.735,20.31,0.02,28.046l56.151,56.071l-56.151,56.071c-7.755,7.735-7.755,20.29-0.02,28.046
			c3.868,3.887,8.965,5.811,14.043,5.811s10.155-1.944,14.023-5.792l56.19-56.111l56.19,56.111
			c3.868,3.868,8.945,5.792,14.023,5.792c5.078,0,10.175-1.944,14.043-5.811C349.28,331.117,349.28,318.562,341.525,310.827z"
                        />
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
              <button
                type="button"
                onClick={() => {
                  setActiveLink("solutions");
                  setOpenMenu(!openMenu);
                }}
                className={`${
                  activeLink === "solutions"
                    ? "text-yellow-500"
                    : scrolling
                    ? "md:text-gray-400"
                    : "md:text-gray-200"
                } text-sm font-semibold md:hover:text-yellow-500 transition-all`}
              >
                <Link href="/#solutions">
                  <a>Solutions</a>
                </Link>
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveLink("workflow");
                  setOpenMenu(!openMenu);
                }}
                className={`${
                  activeLink === "workflow"
                    ? "text-yellow-500"
                    : scrolling
                    ? "md:text-gray-400"
                    : "md:text-gray-200"
                } text-sm font-semibold md:hover:text-yellow-500 transition-all`}
              >
                <Link href="/#workflow">
                  <a>Workflow</a>
                </Link>
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveLink("testimonials");
                  setOpenMenu(!openMenu);
                }}
                className={`${
                  activeLink === "testimonials"
                    ? "text-yellow-500"
                    : scrolling
                    ? "md:text-gray-400"
                    : "md:text-gray-200"
                } text-sm font-semibold md:hover:text-yellow-500 transition-all`}
              >
                <Link href="/#testimonials">
                  <a>Testimonials</a>
                </Link>
              </button>
              <Link href="/start" as="/start" replace>
                <a>
                  <button
                    id="ctaNav"
                    type="button"
                    className="leading-10 w-40 block text-sm font-semibold bg-yellow-400 text-black rounded shadow-md hover:bg-yellow-500 focus:outline-none"
                  >
                    GET STARTED
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </NavBar>
        <div className="h-full px-10 box-border grid place-items-center m-auto md:max-w-3xl lg:max-w-4xl">
          <div className="md:w-2/3 lg:w-5/6">
            <h1 className="text-5xl font-black text-white lg:text-7xl">
              Set Your Business On <span className="text-yellow-400">Fire</span>
            </h1>
            <p className="text-sm mt-6 text-gray-200 lg:text-base">
              We plan and execute marketing campaigns for businesses and
              streamline with their fulfillment processes for best customer
              experience.
            </p>
            <Link href="/start" as="/start" replace>
              <a>
                <button
                  id="ctaHeader"
                  type="button"
                  className="mt-10 leading-10 w-40 block text-sm font-semibold bg-yellow-400 text-black rounded shadow-md hover:bg-yellow-500 focus:outline-none"
                >
                  GET STARTED
                </button>
              </a>
            </Link>
          </div>
          <div className="w-full absolute bottom-2 left-0 md:hidden xl:block">
            <svg
              className="text-gray-200 fill-current h-6 w-auto m-auto animate-bounce xl:h-8"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
            >
              <g>
                <g>
                  <path
                    d="M437.952,242.976L334.816,96H336c8.832,0,16-7.168,16-16V16c0-8.832-7.168-16-16-16H80c-8.832,0-16,7.168-16,16v64
			c0,8.832,7.168,16,16,16h0.384C70.24,109.408,64,125.92,64,144v160c0,26.464,21.536,48,48,48c8.608,0,16.544-2.464,23.52-6.432
			C144.064,359.008,158.944,368,176,368c8.608,0,16.544-2.464,23.52-6.432C208.064,375.008,222.944,384,240,384
			c5.632,0,10.976-1.152,16-2.944V464c0,26.464,21.536,48,48,48s48-21.536,48-48V288.672l10.304,12.96
			c7.904,10.208,19.296,16.672,32.096,18.112c12.736,1.472,25.408-2.176,35.136-10.112c10.24-7.904,16.672-19.328,18.144-32.096
			C449.152,264.704,445.472,252.096,437.952,242.976z M96,32h224v32h-32.64H144H96V32z M415.904,273.856
			c-0.48,4.128-2.592,7.84-6.24,10.688c-3.328,2.656-7.424,3.872-11.584,3.392c-4.16-0.48-7.84-2.56-10.56-6.08l-38.976-48.96
			c-0.224-0.224-0.512-0.352-0.704-0.576c-0.736-0.832-1.6-1.44-2.496-2.112c-0.832-0.576-1.568-1.216-2.464-1.632
			c-0.864-0.416-1.792-0.608-2.752-0.864c-1.088-0.288-2.144-0.608-3.264-0.672c-0.32,0-0.576-0.16-0.864-0.16
			c-0.704,0-1.312,0.32-1.984,0.384c-1.12,0.16-2.176,0.288-3.264,0.672c-1.024,0.352-1.92,0.896-2.816,1.44
			c-0.64,0.384-1.344,0.512-1.92,0.96c-0.224,0.192-0.352,0.512-0.576,0.704c-0.832,0.736-1.44,1.6-2.08,2.496
			c-0.608,0.8-1.248,1.568-1.664,2.464c-0.416,0.832-0.608,1.792-0.864,2.72c-0.288,1.088-0.608,2.144-0.672,3.296
			c0,0.288-0.16,0.544-0.16,0.864V464c0,8.8-7.2,16-16,16s-16-7.2-16-16V272c0-8.832-7.168-16-16-16c-8.832,0-16,7.168-16,16v64
			c0,8.8-7.2,16-16,16s-16-7.2-16-16v-48c0-8.832-7.168-16-16-16c-8.832,0-16,7.168-16,16v32c0,8.8-7.2,16-16,16s-16-7.2-16-16v-48
			c0-8.832-7.168-16-16-16c-8.832,0-16,7.168-16,16v32c0,8.8-7.2,16-16,16s-16-7.2-16-16V144c0-26.464,21.536-48,48-48h143.36
			c5.248,0,10.112,2.528,13.12,6.784l112,159.488C415.168,265.568,416.384,269.664,415.904,273.856z"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </header>

      <main>
        <section className="py-20 px-10 md:max-w-2xl md:m-auto lg:max-w-4xl">
          <h2 className="text-2xl text-gray-800 font-bold">
            PAIN POINTS THAT WE FOCUS
          </h2>
          <div className="mt-6 md:flex md:flex-row md:gap-x-4">
            <div className="mt-6 p-6 flex flex-col justify-center items-center text-center bg-white border-gray-600 rounded shadow-xl md:flex-1">
              <div className="text-4xl text-purple-800">&#9733;</div>
              <div className="mt-3 text-gray-500">
                Ambiguous business objective thus misspent marketing budget
              </div>
            </div>
            <div className="mt-6 p-6 flex flex-col justify-center items-center text-center bg-white border-gray-600 rounded shadow-xl md:flex-1">
              <div className="text-4xl text-purple-800">&#9736;</div>
              <div className="mt-3 text-gray-500">
                Untapped resources and misaligned company direction
              </div>
            </div>
            <div className="mt-6 p-6 flex flex-col justify-center items-center text-center bg-white border-gray-600 rounded shadow-xl md:flex-1">
              <div className="text-4xl text-purple-800">&#9998;</div>
              <div className="mt-3 text-gray-500">
                Lacking proper measuring and learning process
              </div>
            </div>
          </div>
        </section>

        <section
          id="solutions"
          className={`bg-black ${styles.hero2} bg-fixed bg-cover`}
        >
          <div className="py-20 px-10 md:max-w-2xl md:m-auto lg:max-w-4xl">
            <h2 className="text-white text-2xl font-bold">WHAT WE OFFER</h2>
            <div className="mt-6 md:grid md:gap-20 lg:gap-x-24 md:max-w-2xl md:m-auto md:w-full md:grid-cols-2 md:mt-10">
              <div className="mt-10 md:w-full md:h-48 md:mt-0">
                <h3 className="font-semibold text-gray-200">
                  Business Analysis &rarr;
                </h3>
                <p className="mt-3 text-sm text-justify text-gray-300">
                  We will find out the area in the business that we can improve
                  and align it with your business direction to help you make
                  informed decision fast.
                </p>
                <p className="mt-3 text-sm italic font-bold text-justify text-purple-500">
                  SWOT Analysis, Lean Canvas Model
                </p>
              </div>

              <div className="mt-10 md:w-full md:h-48 md:mt-0">
                <h3 className="font-semibold text-gray-200">
                  Website and web application Design & Development &rarr;
                </h3>
                <p className="mt-3 text-sm text-justify text-gray-300">
                  We like beautiful things. Building visually pleasing and fast
                  performance platform will always be our aim. Be it Wordpress,
                  Shopify, or custom built.
                </p>
                <p className="mt-3 text-sm italic font-bold text-justify text-purple-500">
                  Wordpress, Wix, Shopify, React
                </p>
              </div>

              <div className="mt-10 md:w-full md:h-48 md:mt-0">
                <h3 className="font-semibold text-gray-200">
                  Marketing Planning & Execution &rarr;
                </h3>
                <p className="mt-3 text-sm text-justify text-gray-300">
                  While there are many platforms for advertisements, we don't
                  lose sight of who your customer really is. We don't simply
                  follow trends, we follow your target customers.
                </p>
                <p className="mt-3 text-sm italic font-bold text-justify text-purple-500">
                  Google SEM & SEO, YouTube, Facebook, Instagram, Email
                </p>
              </div>

              <div className="mt-10 md:w-full md:h-48 md:mt-0">
                <h3 className="font-semibold text-gray-200">
                  Business Process Optimization & Implementation &rarr;
                </h3>
                <p className="mt-3 text-sm text-justify text-gray-300">
                  Providing a seamless fulfillment process gives the customer
                  the best experience and hence, they may continue staying with
                  you. With some ready tools, we will make the optimization
                  process effortless.
                </p>
                <p className="mt-3 text-sm italic font-bold text-justify text-purple-500">
                  Zapier, Respond, Google Workplace, QuickBooks, Notion, Trello
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="workflow"
          className="py-20 px-10 md:max-w-2xl md:m-auto lg:max-w-4xl"
        >
          <h2 className="text-gray-800 text-2xl font-bold">
            HOW WE CAN WORK TOGETHER
          </h2>
          <div className="mt-6 md:px-20">
            <div className="p-6 mt-6 bg-gradient-to-br from-purple-900 to-black shadow-xl md:h-48 md:w-full md:flex md:flex-row">
              <div className="md:w-1/2">
                <div className="font-semibold text-white">Step 1 :</div>
                <div className="mt-3 text-sm text-justify text-gray-200">
                  Share with us about your business. We will put ourselves in
                  your shoes and identify the areas that we could add value.
                </div>
              </div>
              <img
                width="304px"
                height="144px"
                className="hidden md:inline-block md:w-1/2"
                src={undraw1}
                alt="customer survey"
              />
            </div>
            <div className="p-6 mt-6 bg-gradient-to-br from-purple-900 to-black md:bg-gradient-to-bl shadow-xl md:h-48 md:w-full md:flex md:flex-row">
              <img
                width="304px"
                height="144px"
                className="hidden md:inline-block md:w-1/2"
                src={undraw2}
                alt="call scheduling"
              />
              <div className="md:w-1/2">
                <div className="font-semibold text-white">Step 2 :</div>
                <div className="mt-3 text-sm text-justify text-gray-200">
                  We will schedule a call for fact-finding & brainstorming if
                  your business matches our profile.
                </div>
              </div>
            </div>
            <div className="p-6 mt-6 bg-gradient-to-br from-purple-900 to-black shadow-xl md:h-48 md:w-full md:flex md:flex-row">
              <div className="md:w-1/2">
                <div className="font-semibold text-white">Step 3 : </div>
                <div className="mt-3 text-sm text-justify text-gray-200">
                  We will propose solutions and discuss with you. Then, you tell
                  us your decision.
                </div>
              </div>
              <img
                width="304px"
                height="144px"
                className="hidden md:inline-block md:w-1/2"
                src={undraw3}
                alt="discussion"
              />
            </div>
            <div className="p-6 mt-6 bg-gradient-to-br from-purple-900 to-black md:bg-gradient-to-bl shadow-xl md:h-48 md:w-full md:flex md:flex-row">
              <img
                width="304px"
                height="144px"
                className="hidden md:inline-block md:w-1/2"
                src={undraw4}
                alt="closed deal"
              />
              <div className="md:w-1/2">
                <div className="font-semibold text-white">Step 4 :</div>
                <div className="mt-3 text-sm text-justify text-gray-200">
                  We will prepare the quotation for you to confirm the T&C and
                  agree on the milestones. Once payment is accepted, the deal is
                  sealed.
                </div>
              </div>
            </div>
            <div className="p-6 mt-6 bg-gradient-to-br from-purple-900 to-black shadow-xl md:h-48 md:w-full md:flex md:flex-row">
              <div className="md:w-1/2">
                <div className="font-semibold text-white">Step 5 :</div>
                <div className="mt-3 text-sm text-justify text-gray-200">
                  We will kickoff the project with the 1st draft and action
                  plan, followed by timely review with you.
                </div>
              </div>
              <img
                width="304px"
                height="144px"
                className="hidden md:inline-block md:w-1/2"
                src={undraw5}
                alt="project kickoff"
              />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-purple-900 to-black">
          <div className="py-20 px-10 text-center flex flex-col justify-center items-center">
            <h2 className="text-white text-2xl font-bold italic">
              GOT A FEW MINUTES TO SPARE?
            </h2>
            <Link href="/start" as="/start" replace>
              <a>
                <button
                  id="ctaS1"
                  type="button"
                  className="mt-10 leading-10 w-40 block text-sm font-semibold bg-yellow-400 text-black rounded shadow-md hover:bg-yellow-500 focus:outline-none"
                >
                  GET STARTED
                </button>
              </a>
            </Link>
          </div>
        </section>

        <section
          id="testimonials"
          className="py-20 px-10 md:max-w-2xl md:m-auto lg:max-w-4xl"
        >
          <h2 className="text-2xl p-4 bg-gradient-to-r from-purple-900 to-black text-gray-200 font-bold">
            TESTIMONIALS
          </h2>
          <div className="mt-6 text-gray-500 md:grid md:grid-cols-2 md:gap-x-16">
            <div className="p-6 text-sm bg-white border-l-8 border-purple-900 shadow-xl flex flex-col justify-between md:h-56">
              <div className="italic text-justify">
                "Motivo has helped package our offerings, execute marketing
                campaigns, and set up SOP for operations. With all the processes
                in place, running a co-working space becomes a bliss."
              </div>
              <div className="mt-6">
                <p>Gabriel, Host</p>
                <p className="text-xs text-gray-800 font-semibold">
                  Triune Centre
                </p>
              </div>
            </div>
            <div className="mt-10 p-6 text-sm bg-white border-l-8 border-purple-900 shadow-xl flex flex-col justify-between md:mt-0 md:h-56">
              <div className="italic text-justify">
                "We have organized a few workshops successfully with the help
                from Motivo. Couldn't imagine doing that without their
                assistance."
              </div>
              <div className="mt-6">
                <p>Jam, Co-founder</p>
                <p className="text-xs text-gray-800 font-semibold">Get CTO</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="py-20 px-10 md:max-w-2xl md:m-auto lg:max-w-4xl"
        >
          <h2 className="text-gray-800 text-2xl font-bold">WHAT WE VALUE</h2>
          <div className="mt-6 md:flex md:flex-row md:gap-20">
            <div className="mt-6 md:flex-1">
              <div className="w-auto text-purple-800 font-semibold border-gray-800 border-b-2">
                Open Communication
              </div>
              <div className="mt-3 text-sm text-gray-500">
                Every thought is crucial in contributing to the project success.
                We always welcome ideas and constructive feedbacks to improve
                our performance.
              </div>
            </div>
            <div className="mt-6 md:flex-1">
              <div className="w-auto text-purple-800 font-semibold border-gray-800 border-b-2">
                Mutual Respect
              </div>
              <div className="mt-3 text-sm text-gray-500">
                We are grateful to be appointed as the marketing partner and are
                committed to produce the best results for our clients.
              </div>
            </div>
            <div className="mt-6 md:flex-1">
              <div className="w-auto text-purple-800 font-semibold border-gray-800 border-b-2">
                Honesty & Integrity
              </div>
              <div className="mt-3 text-sm text-gray-500">
                We hold our standard high in business ethics. We constantly
                strive to support genuine businesses to achieve their business
                goals.
              </div>
            </div>
          </div>
        </section>

        <section className="p-10 h-80 md:h-96 md:max-w-2xl md:m-auto lg:max-w-4xl">
          <div
            className={`bg-black ${styles.quoteImage} bg-local bg-cover h-full grid place-content-center`}
          >
            <div className="box-border px-10 md:px-4 md:w-2/3 lg:px-0 lg:mr-20">
              <h2 className="text-white text-3xl font-bold italic md:text-4xl">
                "<span className="text-purple-500">Everyone</span> is not your{" "}
                <span className="text-purple-500">customer</span>."
              </h2>
              <p className="mt-6 text-gray-200">Seth Godin</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-purple-900 to-black">
          <div className="py-20 px-10 text-center flex flex-col justify-center items-center">
            <h2 className="text-white text-2xl font-bold italic">
              THINK YOU HAVE WHAT IT TAKES?
            </h2>
            <Link href="/start" as="/start" replace>
              <a>
                <button
                  id="ctaS2"
                  type="button"
                  className="mt-10 leading-10 w-40 block text-sm font-semibold bg-yellow-400 text-black rounded shadow-md hover:bg-yellow-500 focus:outline-none"
                >
                  GET STARTED
                </button>
              </a>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-black text-xs text-gray-200">
        <div className="pt-10 px-10 md:max-w-2xl md:m-auto md:flex md:flex-row md:gap-x-4 lg:max-w-4xl">
          <div className="md:flex-1">
            <p className="font-semibold">Address :</p>
            <p className="mt-3">
              BO1-A-09, Menara 2 KL Eco City, 3, Jln Bangsar 59200 Kuala Lumpur
            </p>
          </div>
          <div className="mt-6 md:flex-1 md:mt-0">
            <div>
              Can't find what you need from the website? Send us an email at
            </div>
            <div className="mt-3 font-semibold italic">
              enquiry@motivo.marketing
            </div>
          </div>
          <div className="mt-6 md:flex-1 md:mt-0">
            <div className="mt-3 md:mt-0">
              <Link href="/privacy" as="/privacy">
                <a>Privacy Policy</a>
              </Link>
            </div>
            <div className="mt-3">
              <Link href="/resources" as="/resources">
                <a>Resources</a>
              </Link>
            </div>
            <div className="mt-3">
              <Link href="/sitemap.xml">
                <a>Site Map</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="p-10 text-center">
          Copyright 2021 @ Motivo Ventures -- 202003227668 (003155757-H) <br />-
          All Rights Reserved -
        </div>
      </footer>
      <Link href="/" as="/" replace>
        <a>
          <button
            id="ctaS2"
            type="button"
            className="fixed bottom-10 right-10 leading-10 w-40 block text-sm font-semibold bg-yellow-400 text-black rounded shadow-md hover:bg-yellow-500 focus:outline-none"
          >
            <div className="flex flex-row justify-center items-center">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                ></path>
              </svg>
              &nbsp;CHAT WITH US
            </div>
          </button>
        </a>
      </Link>
    </div>
  );
}
