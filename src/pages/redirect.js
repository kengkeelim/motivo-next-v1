import Head from "next/head";
import Link from "next/link";

function Redirect() {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Motivo | Thank You For Your Submission</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
      </Head>

      <section className="h-screen grid place-content-center text-center text-purple-800 p-10 md:px-20">
        <h1 className="text-4xl font-black md:text-6xl">
          Thank You For Your Submission
        </h1>
        <Link href="/" as="/" replace>
          <a>
            <button
              type="button"
              className="mt-10 mx-auto leading-10 w-48 block text-sm font-semibold bg-yellow-400 text-black rounded shadow-md hover:bg-yellow-500 focus:outline-none"
            >
              BACK TO HOME PAGE
            </button>
          </a>
        </Link>
      </section>
    </div>
  );
}

export default Redirect;
