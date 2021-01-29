import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Head>
        <title>Motivo Marketing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="h-screen box-border">
        <div className="h-screen px-10 box-border grid place-items-center">
          <div className="">
            <h1 className="text-4xl font-black">Reliable Marketing Partner</h1>
            <p className="text-sm mt-10 text-gray-600">
              We plan and execute marketing campaign for businesses and
              streamline with their fulfillment processes for best customer
              experience.
            </p>
            <button
              type="button"
              className="mt-6 leading-10 w-40 block text-sm font-semibold bg-red-600 text-white rounded shadow-md"
            >
              GET STARTED
            </button>
          </div>
        </div>
      </header>

      <main className="">
        <section className="mt-10 p-10">
          <h2 className="text-2xl font-bold">PAIN POINTS THAT WE ADDRESS</h2>
          <div className="mt-6">
            <div className="mt-6 p-6 flex flex-col justify-center items-center text-center border-gray-600 rounded shadow-xl">
              <div className="text-4xl text-gray-800">&#9733;</div>
              <div className="mt-3 text-gray-600">
                Ambiguous business objective thus misspent marketing budget
              </div>
            </div>
            <div className="mt-6 p-6 flex flex-col justify-center items-center text-center border-gray-600 rounded shadow-xl">
              <div className="text-4xl text-gray-800">&#9736;</div>
              <div className="mt-3 text-gray-600">
                Underutilized resources and unfulfilled marketing promise
              </div>
            </div>
            <div className="mt-6 p-6 flex flex-col justify-center items-center text-center border-gray-600 rounded shadow-xl">
              <div className="text-4xl text-gray-800">&#9998;</div>
              <div className="mt-3 text-gray-600">
                Lacking proper measuring and learning process
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 bg-red-100">
          <div className="p-10">
            <h2 className="text-2xl font-bold">WHAT WE OFFER</h2>
            <div className="mt-6">
              <div className="mt-6">
                <h3 className="font-semibold text-gray-800">
                  Business Analysis &rarr;
                </h3>
                <p className="mt-3 text-sm text-gray-600">
                  We will find out the area in the business that we can improve
                  and align it with your business direction to help you make
                  informed decision fast.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-gray-800">
                  Web and Mobile App Design & Development &rarr;
                </h3>
                <p className="mt-3 text-sm text-gray-600">
                  We like beautiful things. Building visually pleasing and fast
                  performance platform will always be our aim.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-gray-800">
                  Marketing Planning & Execution &rarr;
                </h3>
                <p className="mt-3 text-sm text-gray-600">
                  While there are many platforms for advertisements, we don't
                  lose sight of who your customer really is. We don't simply
                  follow trends, we follow your target customers.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-gray-800">
                  Business Process Optimization & Implementation &rarr;
                </h3>
                <p className="mt-3 text-sm text-gray-600">
                  Providing a seamless fulfillment process gives the customer
                  the best experience and hence, they may continue staying with
                  you. With some ready tools, we will make the optimization
                  process effortless.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="px-10 mt-10">
          <h2 className="text-2xl font-bold">Handy tools we come across</h2>
          <div className="mt-6 text-gray-600">
            <div>Figma</div>
            <div>Notion</div>
            <div>Zapier</div>
            <div>Respond.io</div>
            <div>QuickBooks</div>
          </div>
        </section> */}

        <section className="p-10 mt-10">
          <h2 className="text-2xl font-bold">HOW WE CAN WORK TOGETHER</h2>
          <div className="mt-6">
            <div className="p-6 mt-6 bg-gray-800 shadow-xl">
              <div className="font-semibold text-white">Step 1 :</div>
              <div className="mt-3 text-sm text-justify text-gray-100">
                Share with us about your business. We will put ourselves in your
                shoes and identify the areas that we could add value.
              </div>
            </div>
            <div className="p-6 mt-6 bg-gray-800 shadow-xl">
              <div className="font-semibold text-white">Step 2 :</div>
              <div className="mt-3 text-sm text-justify text-gray-100">
                We will schedule a call for fact-finding & brainstorming if your
                business matches our profile.
              </div>
            </div>
            <div className="p-6 mt-6 bg-gray-800 shadow-xl">
              <div className="font-semibold text-white">Step 3 : </div>
              <div className="mt-3 text-sm text-justify text-gray-100">
                We will propose solutions and discuss with you. Then, you tell
                us your decision.
              </div>
            </div>
            <div className="p-6 mt-6 bg-gray-800 shadow-xl">
              <div className="font-semibold text-white">Step 4 :</div>
              <div className="mt-3 text-sm text-justify text-gray-100">
                We will prepare the quotation for you to confirm the T&C and
                agree on the milestones. Once payment is accepted, the deal is
                sealed.
              </div>
            </div>
            <div className="p-6 mt-6 bg-gray-800 shadow-xl">
              <div className="font-semibold text-white">Step 5 :</div>
              <div className="mt-3 text-sm text-justify text-gray-100">
                We will kickoff the project with the 1st draft and action plan,
                followed by timely review with you.
              </div>
            </div>
          </div>
          <button
            type="button"
            className="mt-10 leading-10 w-40 block text-sm font-semibold bg-red-600 text-white rounded shadow-md"
          >
            GET STARTED
          </button>
        </section>

        <section className="p-10 mt-10">
          <h2 className="text-2xl font-bold">TESTIMONIALS</h2>
          <div className="mt-6 text-gray-600">
            <div className="p-6 text-sm border-l-8 border-red-50 shadow-xl">
              <div className="italic">
                "Motivo has helped package our offerings, execute marketing
                campaigns, and set up SOP for operations. With all the processes
                in place, running a co-working space becomes a bliss."
              </div>
              <div>
                <p className="mt-6">Gabriel, Host</p>
                <p className="text-xs text-gray-800 font-semibold">
                  Triune Centre
                </p>
              </div>
            </div>
            <div className="mt-10 p-6 text-sm border-l-8 border-red-50 shadow-xl">
              <div className="italic">
                "We have organized a few workshops successfully with the help
                from Motivo. Couldn't imagine doing that without their
                assistance."
              </div>
              <div>
                <p className="mt-6">Jam, Co-founder</p>
                <p className="text-xs text-gray-800 font-semibold">Get CTO</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-10 mt-10">
          <h2 className="text-2xl font-bold">WHAT WE VALUE</h2>
          <div className="mt-6">
            <div className="mt-6">
              <div className="w-auto text-gray-800 font-semibold border-red-600 border-b">
                Open Communication
              </div>
              <div className="mt-3 text-sm text-justify text-gray-600">
                Every thought is crucial in contributing to the project success.
                We always welcome ideas and constructive feedbacks to improve
                our performance.
              </div>
            </div>
            <div className="mt-6">
              <div className="w-auto text-gray-800 font-semibold border-red-600 border-b">
                Mutual Respect
              </div>
              <div className="mt-3 text-sm text-justify text-gray-600">
                We are grateful to be appointed as the marketing partner and are
                committed to produce the best results for our clients.
              </div>
            </div>
            <div className="mt-6">
              <div className="w-auto text-gray-800 font-semibold border-red-600 border-b">
                Honesty & Integrity
              </div>
              <div className="mt-3 text-sm text-justify text-gray-600">
                We hold our standard high in business ethics. We constantly
                strive to support genuine businesses to achieve their business
                goals.
              </div>
            </div>
          </div>
        </section>

        <section className="p-10 mt-10 text-center flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold">THINK YOU HAVE WHAT IT TAKES?</h2>
          <button
            type="button"
            className="mt-6 leading-10 w-40 block text-sm font-semibold bg-red-600 text-white rounded shadow-md"
          >
            LET'S DO IT!
          </button>
        </section>
      </main>

      <footer className="p-10 mt-10 bg-gray-800 text-xs text-gray-100">
        <div>
          <div>
            <p className="font-semibold">Address :</p>
            <p className="mt-3">
              BO1-A-09, Menara 2 KL Eco City, 3, Jln Bangsar 59200 Kuala Lumpur
            </p>
          </div>
          <div className="mt-6">
            Can't find what you need from the website? Send us an email at{" "}
            <br />
            <span className="font-semibold italic">
              enquiry@motivo.marketing
            </span>
          </div>
          <Link href="/privacy">
            <a sx={{ color: "text", fontSize: 3, cursor: "pointer", marginTop: "1.5rem" }}>
              Privacy Policy
            </a>
          </Link>
        </div>
        <div className="mt-10 text-center">
          Copyright 2021 @ Motivo Ventures <br />- All Rights Reserved -
        </div>
      </footer>
    </div>
  );
}
