import Head from "next/head";
import { useEffect, useState } from "react";

import JotformEmbed from "react-jotform-embed";

import NavBar from "../components/navBar";

function GetStarted() {
  const [doneLoading, setDoneLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      return setDoneLoading(true);
    }, 3000);
  });

  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Motivo | Get Started</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="h-auto w-auto">
        {doneLoading ? (
          <NavBar />
        ) : (
          <div className="h-screen grid place-items-center text-4xl font-black text-purple-800 animate-pulse md:text-6xl">
            Loading...
          </div>
        )}

        <JotformEmbed
          className={doneLoading ? "block" : "hidden"}
          src="https://form.jotform.com/210382996785067"
        />
      </section>

      {doneLoading ? (
        <footer className="h-auto bg-black text-xs text-gray-200">
          <div className="p-10 text-center">
            Copyright 2021 @ Motivo Ventures <br />- All Rights Reserved -
          </div>
        </footer>
      ) : (
        ""
      )}
    </div>
  );
}

export default GetStarted;
