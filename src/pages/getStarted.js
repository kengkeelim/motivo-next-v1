import React from "react";
import Head from "next/head";
import JotformEmbed from "react-jotform-embed";
import NavBar from "../components/navBar";

function GetStarted() {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Motivo | Get Started</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="h-auto w-auto">
        <NavBar />
        <JotformEmbed src="https://form.jotform.com/210382996785067" />
      </section>
      <footer className="h-auto bg-black text-xs text-gray-200">
        <div className="p-10 text-center">
          Copyright 2021 @ Motivo Ventures <br />- All Rights Reserved -
        </div>
      </footer>
    </div>
  );
}

export default GetStarted;
