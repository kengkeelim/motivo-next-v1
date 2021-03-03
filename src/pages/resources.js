import Head from "next/head";
import Link from "next/link";

import NavBar from "../components/navBar";

function Resources() {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Motivo | Resources</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="px-4 bg-gradient-to-b from-purple-900 to-black md:px-20">
        <NavBar />
        <div className="h-16 md:h-20"></div>
        <div className="p-10 bg-white max-w-screen-md mx-auto rounded md:px-20">
          <h1 className="text-4xl font-black text-center">
            Tools Used In Building This Website
          </h1>
          <p className="mt-10 text-sm  text-gray-500">
            This page is created for the purpose of sharing and giving credits
            to the free and open-source tools/softwares used in building this
            website.
          </p>

          <h2 className="mt-10 text-gray-800 text-2xl font-bold underline">
            FRAMEWORKS
          </h2>
          <p className="mt-3 text-sm  text-gray-500">
            The technology used to build this website.
          </p>

          <h3 className="mt-6 ml-4 text-lg font-semibold text-yellow-500">
            <a href="https://nextjs.org/" target="_blank">
              Next.js &rarr;
            </a>
          </h3>
          <p className="mt-2 ml-4 text-sm text-gray-500">
            It is a popular React Framework used to build static and dynamic
            websites and web applications. This framework serves as a good
            foundation for Motivo should we plan to build our Content Management
            System (CMS) for blog or evolve into a web application.
          </p>

          <h3 className="mt-6 ml-4 text-lg font-semibold text-yellow-500">
            <a href="https://tailwindcss.com/" target="_blank">
              Tailwind CSS &rarr;
            </a>
          </h3>
          <p className="mt-2 ml-4 text-sm text-gray-500">
            A utility-first CSS framework packed with classes that can be
            composed to build any design, directly in your markup. In short, it
            uses standardized value thus reducing the excess use CSS code.
            Overall, it speeds up the development process.
          </p>

          <h2 className="mt-10 text-gray-800 text-2xl font-bold underline">
            GRAPHICS
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Logos, images, icons, and graphics used to make this website
            stunning.
          </p>

          <h3 className="mt-6 ml-4 text-lg font-semibold text-yellow-500">
            <a href="https://unsplash.com/" target="_blank">
              Unsplash &rarr;
            </a>
          </h3>
          <p className="mt-2 ml-4 text-sm text-gray-500">
            It has a lot of freely-usable images contributed by creators from
            everywhere.
          </p>

          <h3 className="mt-6 ml-4 text-lg font-semibold text-yellow-500">
            <a href="https://www.flaticon.com/" target="_blank">
              Flaticon &rarr;
            </a>
          </h3>
          <p className="mt-2 ml-4 text-sm text-gray-500">
            They have icons in various UI design styles.
          </p>

          <h3 className="mt-6 ml-4 text-lg font-semibold text-yellow-500">
            <a href="https://undraw.co/" target="_blank">
              Undraw &rarr;
            </a>
          </h3>
          <p className="mt-2 ml-4 text-sm text-gray-500">
            They even allow everyone to use the graphics, illustrations, and
            images completely free and without attribution.
          </p>

          <h3 className="mt-6 ml-4 text-lg font-semibold text-gray-600">
            Additional credits to:
          </h3>
          <ul className="mt-3 ml-10 text-sm text-gray-500">
            <li className="flex flex-row gap-2">
              <div className="text-yellow-500">&#10148;</div>
              <a
                href="https://unsplash.com/@fakurian"
                target="_blank"
                className="hover:text-yellow-500"
              >
                Milad B. Fakurian
              </a>
            </li>
            <li className="flex flex-row gap-2">
              <div className="text-yellow-500">&#10148;</div>
              <a
                href="https://unsplash.com/@bigkids"
                target="_blank"
                className="hover:text-yellow-500"
              >
                David Werbrouck
              </a>
            </li>
            <li className="flex flex-row gap-2">
              <div className="text-yellow-500">&#10148;</div>
              <a
                href="https://www.creativelive.com/blog/seth-godin/"
                target="_blank"
                className="hover:text-yellow-500"
              >
                CreativeLive
              </a>
            </li>
          </ul>

          <h2 className="mt-10 text-gray-800 text-2xl font-bold underline">
            EDITING
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Handy tools to touch up images and graphics or convert file format
            quickly.
          </p>

          <h3 className="mt-6 ml-4 text-lg font-semibold text-yellow-500">
            <a href="https://favicon.io/favicon-converter/" target="_blank">
              Favicon.io &rarr;
            </a>
          </h3>
          <p className="mt-2 ml-4 text-sm text-gray-500">
            It generates the favicon from an uploaded image.
          </p>

          <h3 className="mt-6 ml-4 text-lg font-semibold text-yellow-500">
            <a href="https://pinetools.com/c-images/" target="_blank">
              PineTools &rarr;
            </a>
          </h3>
          <p className="mt-2 ml-4 text-sm text-gray-500">
            It is an online tool used to touch up images. It also includes other
            functions.
          </p>

          <h3 className="mt-6 ml-4 text-lg font-semibold text-yellow-500">
            <a href="https://www.canva.com/" target="_blank">
              Canva &rarr;
            </a>
          </h3>
          <p className="mt-2 ml-4 text-sm text-gray-500">
            It is a user-friendly graphic design platform used to create social
            media graphics, presentations, posters, documents and other visual
            content. It have many templates for users to choose.
          </p>

          <h2 className="mt-10 text-gray-800 text-2xl font-bold underline">
            DOMAIN & HOSTING
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Where Motivo domain is bought and the website is hosted.
          </p>

          <h3 className="mt-6 ml-4 text-lg font-semibold text-yellow-500">
            <a href="https://www.namecheap.com/" target="_blank">
              NameCheap &rarr;
            </a>
          </h3>
          <p className="mt-2 ml-4 text-sm text-gray-500">
            An accredited domain name registrar, which provides domain name
            registration and web hosting. They offer many cheap domain names.
          </p>

          <h3 className="mt-6 ml-4 text-lg font-semibold text-yellow-500">
            <a href="https://vercel.com/" target="_blank">
              Vercel &rarr;
            </a>
          </h3>
          <p className="mt-2 ml-4 text-sm text-gray-500">
            ​A cloud platform for static sites and Serverless Functions. It is
            also the same team that develops Next.js. It can be connected to
            GitHub and deploys automatically when there is new push.
          </p>

          <h3 className="mt-6 ml-4 text-lg font-semibold text-yellow-500">
            <a href="https://github.com/" target="_blank">
              GitHub &rarr;
            </a>
          </h3>
          <p className="mt-2 ml-4 text-sm text-gray-500">
            It hosts all the source code for version control using Git.
          </p>

          <h2 className="mt-10 text-gray-800 text-2xl font-bold underline">
            COLORS
          </h2>
          <p className="mt-3 text-sm text-gray-500">Everything about colors.</p>

          <h3 className="mt-6 ml-4 text-lg font-semibold text-yellow-500">
            <a href="https://coolors.co/" target="_blank">
              Coolors &rarr;
            </a>
          </h3>
          <p className="mt-2 ml-4 text-sm text-gray-500">
            A super fast color schemes generator. Users can browse beautiful
            color combinations for their designs.
          </p>

          <h3 className="mt-6 ml-4 text-lg font-semibold text-yellow-500">
            <a href="https://mycolor.space/" target="_blank">
              ColorSpace &rarr;
            </a>
          </h3>
          <p className="mt-2 ml-4 text-sm text-gray-500">
            Color palettes generator and color gradient tool that help users
            find the perfect matching color schemes.
          </p>

          <h3 className="mt-6 ml-4 text-lg font-semibold text-yellow-500">
            <a href="https://uigradients.com/" target="_blank">
              uiGradients &rarr;
            </a>
          </h3>
          <p className="mt-2 ml-4 text-sm text-gray-500">
            A handpicked collection of beautiful color gradients for designers
            and developers.
          </p>

          <h2 className="mt-10 text-gray-800 text-2xl font-bold underline">
            OTHERS
          </h2>

          <h3 className="mt-6 ml-4 text-lg font-semibold text-yellow-500">
            <a href="https://www.jotform.com/" target="_blank">
              JotForm &rarr;
            </a>
          </h3>
          <p className="mt-2 ml-4 text-sm text-gray-500">
            An online form builder for generating leads, distributing surveys,
            collecting payments and more. It allows integration with other tools
            for business process automation.
          </p>

          <div className="mt-16">
            <p className="text-gray-700 text-sm font-semibold italic">
              PS: If you like what you see and would like to have us build it
              for you, please let us know.
            </p>
            <Link href="/start" as="/start" replace>
              <a>
                <button
                  type="button"
                  className="mt-10 mx-auto leading-10 w-40 block text-sm font-semibold bg-yellow-400 text-black rounded shadow-md hover:bg-yellow-500 focus:outline-none"
                >
                  GET STARTED
                </button>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <footer className="bg-black text-xs text-gray-200">
        <div className="p-10 text-center">
          Copyright 2021 @ Motivo Ventures <br />- All Rights Reserved -
        </div>
      </footer>
    </div>
  );
}

export default Resources;
