import Head from "next/head";
import Link from "next/link";

import NavBar from "../components/navBar";

import undraw1 from "../assets/undraw_Forms_re_pkrt.svg";
import undraw2 from "../assets/undraw_Booked_re_vtod.svg";
import undraw3 from "../assets/undraw_business_chat_ldig.svg";
import undraw4 from "../assets/undraw_business_deal_cpi9.svg";
import undraw5 from "../assets/undraw_team_goals_hrii.svg";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Head>
        <title>Motivo | A Marketing Company</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header
        id="header"
        className={`h-screen box-border ${styles.hero} bg-cover bg-no-repeat bg-local md:h-2/3 xl:h-screen`}
      >
        <NavBar navItems />
        <div className="h-full px-10 box-border grid place-items-center md:max-w-2xl md:m-auto lg:max-w-4xl lg:flex lg:flex-row">
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-black">Set Your Business On Fire</h1>
            <p className="text-sm mt-6 text-gray-500">
              We plan and execute marketing campaigns for businesses and
              streamline with their fulfillment processes for best customer
              experience.
            </p>
            <Link href="/getStarted" as="/get-started">
              <a>
                <button
                  type="button"
                  className="mt-10 leading-10 w-40 block text-sm font-semibold bg-red-600 text-white rounded shadow-md hover:bg-red-700 focus:outline-none"
                >
                  GET STARTED
                </button>
              </a>
            </Link>
          </div>
          <div className="w-full absolute bottom-2 left-0 md:hidden xl:block">
            <svg
              className="text-gray-400 fill-current h-6 w-auto m-auto animate-bounce xl:h-8"
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

      <main className="">
        <section className="py-20 px-10 md:max-w-2xl md:m-auto lg:max-w-4xl">
          <h2 className="text-2xl font-bold">PAIN POINTS THAT WE FOCUS</h2>
          <div className="mt-6 md:flex md:flex-row md:gap-x-4">
            <div className="mt-6 p-6 flex flex-col justify-center items-center text-center bg-white border-gray-600 rounded shadow-xl md:flex-1">
              <div className="text-4xl text-red-400">&#9733;</div>
              <div className="mt-3 text-gray-500">
                Ambiguous business objective thus misspent marketing budget
              </div>
            </div>
            <div className="mt-6 p-6 flex flex-col justify-center items-center text-center bg-white border-gray-600 rounded shadow-xl md:flex-1">
              <div className="text-4xl text-red-400">&#9736;</div>
              <div className="mt-3 text-gray-500">
                Untapped resources and misaligned company direction
              </div>
            </div>
            <div className="mt-6 p-6 flex flex-col justify-center items-center text-center bg-white border-gray-600 rounded shadow-xl md:flex-1">
              <div className="text-4xl text-red-400">&#9998;</div>
              <div className="mt-3 text-gray-500">
                Lacking proper measuring and learning process
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="bg-gray-200">
          <div className="py-20 px-10 md:max-w-2xl md:m-auto lg:max-w-4xl">
            <h2 className="text-2xl font-bold">WHAT WE OFFER</h2>
            <div className="mt-6 md:grid md:gap-6 md:max-w-2xl md:m-auto md:w-full md:grid-cols-2 md:mt-10">
              <div className="mt-6 md:w-full md:h-48 md:mt-0">
                <h3 className="font-semibold text-gray-800">
                  Business Analysis &rarr;
                </h3>
                <p className="mt-3 text-sm text-justify text-gray-500">
                  We will find out the area in the business that we can improve
                  and align it with your business direction to help you make
                  informed decision fast.
                </p>
                <p className="mt-3 text-sm italic font-bold text-justify text-gray-500">
                  SWOT Analysis, Lean Canvas Model
                </p>
              </div>

              <div className="mt-6 md:w-full md:h-48 md:mt-0">
                <h3 className="font-semibold text-gray-800">
                  Website and web application Design & Development &rarr;
                </h3>
                <p className="mt-3 text-sm text-justify text-gray-500">
                  We like beautiful things. Building visually pleasing and fast
                  performance platform will always be our aim. Be it Wordpress,
                  Shopify, or custom built.
                </p>
                <p className="mt-3 text-sm italic font-bold text-justify text-gray-500">
                  Wordpress, Wix, Shopify, React
                </p>
              </div>

              <div className="mt-6 md:w-full md:h-48 md:mt-0">
                <h3 className="font-semibold text-gray-800">
                  Marketing Planning & Execution &rarr;
                </h3>
                <p className="mt-3 text-sm text-justify text-gray-500">
                  While there are many platforms for advertisements, we don't
                  lose sight of who your customer really is. We don't simply
                  follow trends, we follow your target customers.
                </p>
                <p className="mt-3 text-sm italic font-bold text-justify text-gray-500">
                  Google SEM & SEO, YouTube, Facebook, Instagram, Email
                </p>
              </div>

              <div className="mt-6 md:w-full md:h-48 md:mt-0">
                <h3 className="font-semibold text-gray-800">
                  Business Process Optimization & Implementation &rarr;
                </h3>
                <p className="mt-3 text-sm text-justify text-gray-500">
                  Providing a seamless fulfillment process gives the customer
                  the best experience and hence, they may continue staying with
                  you. With some ready tools, we will make the optimization
                  process effortless.
                </p>
                <p className="mt-3 text-sm italic font-bold text-justify text-gray-500">
                  Zapier, Respond, Google Workplace, QuickBooks, Notion, Trello
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="px-10 mt-10">
          <h2 className="text-2xl font-bold">TECHNOLOGY & TOOLS</h2>
          <div className="mt-6 text-gray-600">
            <div>Figma</div>
            <div>Notion</div>
            <div>Zapier</div>
            <div>Respond.io</div>
            <div>QuickBooks</div>
          </div>
        </section> */}

        <section
          id="workflow"
          className="py-20 px-10 md:max-w-2xl md:m-auto lg:max-w-4xl"
        >
          <h2 className="text-2xl font-bold">HOW WE CAN WORK TOGETHER</h2>
          <div className="mt-6">
            <div className="p-6 mt-6 bg-gray-600 shadow-xl md:h-48 md:w-full md:flex md:flex-row">
              <div className="md:w-1/2">
                <div className="font-semibold text-white">Step 1 :</div>
                <div className="mt-3 text-sm text-justify text-gray-100">
                  Share with us about your business. We will put ourselves in
                  your shoes and identify the areas that we could add value.
                </div>
              </div>
              <img className="hidden md:inline-block md:w-1/2" src={undraw1} />
            </div>
            <div className="p-6 mt-6 bg-gray-600 shadow-xl md:h-48 md:w-full md:flex md:flex-row">
              <img className="hidden md:inline-block md:w-1/2" src={undraw2} />
              <div className="md:w-1/2">
                <div className="font-semibold text-white">Step 2 :</div>
                <div className="mt-3 text-sm text-justify text-gray-100">
                  We will schedule a call for fact-finding & brainstorming if
                  your business matches our profile.
                </div>
              </div>
            </div>
            <div className="p-6 mt-6 bg-gray-600 shadow-xl md:h-48 md:w-full md:flex md:flex-row">
              <div className="md:w-1/2">
                <div className="font-semibold text-white">Step 3 : </div>
                <div className="mt-3 text-sm text-justify text-gray-100">
                  We will propose solutions and discuss with you. Then, you tell
                  us your decision.
                </div>
              </div>
              <img className="hidden md:inline-block md:w-1/2" src={undraw3} />
            </div>
            <div className="p-6 mt-6 bg-gray-600 shadow-xl md:h-48 md:w-full md:flex md:flex-row">
              <img className="hidden md:inline-block md:w-1/2" src={undraw4} />
              <div className="md:w-1/2">
                <div className="font-semibold text-white">Step 4 :</div>
                <div className="mt-3 text-sm text-justify text-gray-100">
                  We will prepare the quotation for you to confirm the T&C and
                  agree on the milestones. Once payment is accepted, the deal is
                  sealed.
                </div>
              </div>
            </div>
            <div className="p-6 mt-6 bg-gray-600 shadow-xl md:h-48 md:w-full md:flex md:flex-row">
              <div className="md:w-1/2">
                <div className="font-semibold text-white">Step 5 :</div>
                <div className="mt-3 text-sm text-justify text-gray-100">
                  We will kickoff the project with the 1st draft and action
                  plan, followed by timely review with you.
                </div>
              </div>
              <img className="hidden md:inline-block md:w-1/2" src={undraw5} />
            </div>
          </div>
          <Link href="/getStarted" as="/get-started">
            <a>
              <button
                type="button"
                className="mt-10 leading-10 w-40 block text-sm font-semibold bg-red-600 text-white rounded shadow-md hover:bg-red-700 focus:outline-none mx-auto"
              >
                GET STARTED
              </button>
            </a>
          </Link>
        </section>

        <section
          id="testimonials"
          className="py-20 px-10 md:max-w-2xl md:m-auto lg:max-w-4xl"
        >
          <h2 className="text-2xl font-bold">TESTIMONIALS</h2>
          <div className="mt-6 text-gray-500 md:grid md:grid-cols-2 md:gap-x-4">
            <div className="p-6 text-sm border-l-8 border-red-50 shadow-xl flex flex-col justify-between md:h-56">
              <div className="italic text-justify">
                "Motivo has helped package our offerings, execute marketing
                campaigns, and set up SOP for operations. With all the processes
                in place, running a co-working space becomes a bliss."
              </div>
              <div className="mt-6">
                <p className="">Gabriel, Host</p>
                <p className="text-xs text-gray-800 font-semibold">
                  Triune Centre
                </p>
              </div>
            </div>
            <div className="mt-10 p-6 text-sm border-l-8 border-red-50 shadow-xl flex flex-col justify-between md:mt-0 md:h-56">
              <div className="italic text-justify">
                "We have organized a few workshops successfully with the help
                from Motivo. Couldn't imagine doing that without their
                assistance."
              </div>
              <div className="mt-6">
                <p className="">Jam, Co-founder</p>
                <p className="text-xs text-gray-800 font-semibold">Get CTO</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="py-20 px-10 md:max-w-2xl md:m-auto lg:max-w-4xl"
        >
          <h2 className="text-2xl font-bold">WHAT WE VALUE</h2>
          <div className="mt-6 md:flex md:flex-row md:gap-x-4">
            <div className="mt-6 md:flex-1">
              <div className="w-auto text-gray-800 font-semibold border-red-400 border-b">
                Open Communication
              </div>
              <div className="mt-3 text-sm text-justify text-gray-500">
                Every thought is crucial in contributing to the project success.
                We always welcome ideas and constructive feedbacks to improve
                our performance.
              </div>
            </div>
            <div className="mt-6 md:flex-1">
              <div className="w-auto text-gray-800 font-semibold border-red-400 border-b">
                Mutual Respect
              </div>
              <div className="mt-3 text-sm text-justify text-gray-500">
                We are grateful to be appointed as the marketing partner and are
                committed to produce the best results for our clients.
              </div>
            </div>
            <div className="mt-6 md:flex-1">
              <div className="w-auto text-gray-800 font-semibold border-red-400 border-b">
                Honesty & Integrity
              </div>
              <div className="mt-3 text-sm text-justify text-gray-500">
                We hold our standard high in business ethics. We constantly
                strive to support genuine businesses to achieve their business
                goals.
              </div>
            </div>
          </div>
        </section>
        <div className="border-red-400 border w-4/5 m-auto lg:max-w-4xl"></div>
        <section className="py-20 px-10 text-center flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold">THINK YOU HAVE WHAT IT TAKES?</h2>
          <Link href="/getStarted" as="/get-started">
            <a>
              <button
                type="button"
                className="mt-10 leading-10 w-40 block text-sm font-semibold bg-red-600 text-white rounded shadow-md hover:bg-red-700 focus:outline-none"
              >
                LET'S DO IT!
              </button>
            </a>
          </Link>
        </section>
      </main>

      <footer className="bg-gray-800 text-xs text-gray-100">
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
              <Link href="/privacy" as="/privacy-policy">
                <a>Privacy Policy</a>
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
          Copyright 2021 @ Motivo Ventures <br />- All Rights Reserved -
        </div>
      </footer>
    </div>
  );
}
