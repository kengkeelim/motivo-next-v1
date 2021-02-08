import React from "react";
import Head from "next/head";
import NavBar from "../components/navBar";

function GetStarted() {
  return (
    <div>
      <Head>
        <title>Motivo | Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <section className="p-10 max-w-screen-md m-auto mt-16 md:mt-20">
        this is sign up page
      </section>
    </div>
  );
}

export default GetStarted;
