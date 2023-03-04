import React from "react";
import Head from "next/head";
import Title from "../components/Title/Title";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <div className="main_container">
        <Title name={`Welcome to your own\nVehicles Manager`} />
      </div>
    </React.Fragment>
  );
}

export default Home;
