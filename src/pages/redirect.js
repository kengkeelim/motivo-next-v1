import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

function Redirect() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 2000);
  }, []);

  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Motivo | Thank You For Your Submission</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
      </Head>

      <section className="h-screen grid place-content-center text-center text-purple-800 p-10 md:px-20 animate-pulse">
        <h1 className="text-4xl font-black md:text-6xl">
          Thank You For Your Submission
        </h1>
        <p className="text-xs mt-6 md:text-base md:mt-10">
          Redirecting back to home page...
        </p>
      </section>
    </div>
  );
}

export default Redirect;
