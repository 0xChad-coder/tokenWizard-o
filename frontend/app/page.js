import React from "react";
// import { useState } from "react";
// import Header from "./Navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import block1 from "@/public/image2.png";
import block2 from "@/public/image1.png";
import { motion } from "framer-motion";
import { Navbar } from "@/components";

const Home = () => {
  return (
    <>
      <Head>
        <title>A token deployer for ORB3 Blockchain</title>
        <meta
          name="ORB3 Token Deployer"
          content="Token Deployer for the ORB3 Blockchain"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/f0rges.ico" />
      </Head>

      {/* Hero Section  */}
      <section className="">
        <div className="flex flex-col-reverse md:flex-row md:justify-between items-center px-10 md:px-[5%] lg:px-[10%] mb-10">
          {/* left item  */}
          <div className="flex flex-col mb-5">
            <h1 className="max-w-md text-3xl text-center md:text-4xl md:text-left text-gray-300 ">
              A <span className="text-[#ff0000] font-semibold">Token</span> and{" "}
              <span className="text-[#ff0000] font-semibold">NFT</span> Wizard
            </h1>
            <p className="max-w-md text-center md:text-justify text-gray-400">
              Create your own tokens effortlessly with TokenWizard, the magic
              tool that works across different blockchain networks. Get a clear
              view of all your token creations and assets through the
              user-friendly lens of TokenWizard. It's like having a wizard by
              your side, making the process fun and easy!
            </p>
            <div className="flex justify-center md:block">
              <div className="w-fit mt-2 md:block p-3 px-6 pt-2 text-white bg-[#e22221] rounded-lg baseline hover:bg-[#ff0000] hover:shadow-lg hover:transition-all">
                <Link href="/tokenWizard">Launch Dapp</Link>
              </div>
            </div>
          </div>

          {/* image  */}
          <div className="">
            <Image
              src={block2}
              alt="tokenWizard Logo"
              width={450}
              height={450}
            />
          </div>
        </div>
      </section>

      {/* features section  */}
      <section className="">
        <div className="flex flex-col-reverse md:flex-row md:justify-between items-center px-10 md:px-[5%] lg:px-[10%] mb-32 ">
          <div className="">
            <Image
              src={block1}
              alt="tokenWizard Logo"
              width={450}
              height={450}
            />
          </div>
          {/* left item  */}
          <div className="flex flex-col mt-3">
            <h1 className="max-w-md text-3xl text-center md:text-4xl md:text-left text-gray-300">
              About{" "}
              <span className="text-[#ff0000] font-semibold">TokenWizard</span>
            </h1>
            <p className="max-w-sm text-center md:text-justify text-gray-400">
              Step into the enchanting realm of TokenWizard, your very own
              magical guide to crafting and managing Web3 tokens! This
              fantastical platform weaves its spell seamlessly across diverse
              blockchain networks, adding a sprinkle of magic to the creation
              and management of tokens. Glide through the decentralized wonders
              as TokenWizard harmonizes with Ethereum wallets, creating a truly
              magical experience in the realm of token generation. Embrace the
              magic, where creating and managing tokens becomes an enchanting
              journey with TokenWizard by your side!
            </p>
          </div>

          {/* image  */}
        </div>
      </section>

      {/* core features section  */}
      <section className="features_section" id="features">
        {/* flex container */}
        <div className="flex flex-col md:justify-between items-center px-10 md:px-[5%] lg:px-[10%] my-10 space-y-12 md:space-y-0 md:flex-row gap-3">
          <div className="flex flex-col space-y-2 md:w-1/2">
            <h2 className="max-w-md text-3xl font-bold text-gray-300 md:text-left">
              Core Features of{" "}
              <span className="text-[#ff0000] font-semibold">TokenWizard</span>
            </h2>
            <p className="max-w-sm text-start md:text-justify text-gray-400">
              Meet TokenWizard, your ultimate companion for bringing tokens to
              life in the exciting world of DeFi and blockchain! We make the
              creation and management of tokens a breeze in this ever-changing
              landscape. With TokenWizard, deploying tokens on different chains
              is like magic – easy and effortless! It's your go-to solution for
              a hassle-free journey into the Web3 world, making crafting and
              managing tokens a walk in the park. Take the plunge into the
              decentralized universe with TokenWizard, where creating and
              managing tokens is as simple as waving a wand!
            </p>
          </div>
          <div className="flex flex-col space-y-8 md:w-1/2">
            {/* list item 1 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row  ">
              {/* heading */}
              <div className="rounded-lg bg-[#ff0000] md:bg-transparent">
                <div className="flex items-center space-x-2 ">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-[#e22221]">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden text-gray-400">
                    Token Deployer
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-[#e22221] font-bold md:block ">
                  Token Deployer
                </h3>
                <p className="text-gray-400">
                  Connect your wallet to deploy your token on ORB3
                  chain.
                </p>
              </div>
            </div>

            {/* list item 2 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row  ">
              {/* heading */}
              <div className="rounded-lg bg-[#ff0000] md:bg-transparent">
                <div className="flex items-center space-x-2 ">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-[#e22221]">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden text-gray-400">
                    Anti-Bot Functions
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-[#e22221] font-bold md:block ">
                  Team Allocation
                </h3>
                <p className="text-gray-400">Fill in Token Information</p>
              </div>
            </div>

            {/* list item 3 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row  ">
              {/* heading */}
              <div className="rounded-lg bg-[#ff0000] md:bg-transparent">
                <div className="flex items-center space-x-2 ">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-[#e22221]">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden text-gray-400">
                    Transaction History
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-[#e22221] font-bold md:block ">
                  Transaction History
                </h3>
                <p className="text-gray-400">
                  Choose from the optional functions ranging from anti-bot, team
                  allocation, etc.Easily review and verify all your transactions
                  for transparency and security.
                </p>
              </div>
            </div>

            {/* list item 4 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row  ">
              {/* heading */}
              <div className="rounded-lg bg-[#ff0000] md:bg-transparent">
                <div className="flex items-center space-x-2 ">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-[#e22221]">
                    04
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden text-gray-400">
                    Different Chain Integration
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-[#e22221] font-bold md:block ">
                  Different Chain Integration
                </h3>
                <p className="text-gray-400">
                  Enjoy fast and easy token deployment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
