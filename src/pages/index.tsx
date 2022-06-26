import type { NextPage } from "next";
import { Navbar } from "@components/Interface";
import { Banner } from "@components/Interface";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;
