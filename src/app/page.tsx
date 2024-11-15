"use client";

import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import agodIcon from "@public/icon.png";
import { client } from "./client";
import { sepolia } from "thirdweb/chains";
import { getContract } from "thirdweb";

export default function Home() {

  const contract = getContract({
    client,
    chain: sepolia,
    address: "0xC655e27D77B7a921e45C603f4D0a474BdEEDb42b",
  });
  

  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <Header />

        <div className="flex justify-center mb-20">
          <ConnectButton
            chain={sepolia}
            client={client}
            appMetadata={{
              name: "AGOD Minter",
              url: "https://agodecosystem.com",
            }}
            accountAbstraction={{
              chain: sepolia,
              sponsorGas: true,
              }}
            connectButton={{ 
                label: "Conéctate para mintear" 
              }}
            connectModal={{ 
              size: "wide",
              showThirdwebBranding: false, 
            }}
            locale={"es_ES"}
          />
        </div>

        <ThirdwebResources />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
      <Image
        src={agodIcon}
        alt=""
        className="size-[150px] md:size-[150px]"
        style={{
          filter: "drop-shadow(0px 0px 24px #a726a9a8)",
        }}
      />

      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100">
        AGOD Token
        <span className="text-zinc-300 inline-block mx-1"> · </span>
        <span className="inline-block -skew-x-6 text-red-500"> Minter </span>
      </h1>

      <p className="text-zinc-300 text-base">
        Abre la puerta al{" "}
        <code className="bg-zinc-800 text-zinc-300 px-2 rounded py-1 text-sm mx-1">
          UNIVERSO
        </code>{" "}
        Blockchain.
      </p>
    </header>
  );
}

function ThirdwebResources() {
  return (
    <div className="grid gap-4 lg:grid-cols-3 justify-center">
      <ArticleCard
        title="Pandora's Foundation"
        href="https://pandoras.foundation"
        description="Un mundo nuevo, tokenización de RWA"
      />

      <ArticleCard
        title="AGOD Ecosystem"
        href="https://agodecosystem.com"
        description="La descripción"
      />

      <ArticleCard
        title="Harmony Ark Foundation"
        href="https://harmonyearth.me"
        description="La descripción."
      />
    </div>
  );
}

function ArticleCard(props: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <a
      href={props.href + "?utm_source=next-template"}
      target="_blank"
      className="flex flex-col border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700"
    >
      <article>
        <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
        <p className="text-sm text-zinc-400">{props.description}</p>
      </article>
    </a>
  );
}
