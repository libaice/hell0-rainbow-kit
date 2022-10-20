import { ConnectButton } from "@rainbow-me/rainbowkit";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
        <ConnectButton label="Connect" accountStatus={"full"} chainStatus={"name"}  />
  );
};

export default Home;
