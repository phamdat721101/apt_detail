// import Image from "next/image";
"use client";
import Banner from "@/components/Banner";
import DrivenPortfolio from "@/components/DrivenPortfolio";
import Feature from "@/components/Feature";
import Layout from "@/components/Layout";
import Newsletter from "@/components/Newsletter";
import Questions from "@/components/Questions";
import Steps from "@/components/Steps";
import Timeline from "@/components/Timeline";
import dynamic from "next/dynamic";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
const wallets = [new PetraWallet()];

export default function Home() {
    return (
        <Layout>
            <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
            <Banner></Banner>
            <DrivenPortfolio></DrivenPortfolio>
            <Feature></Feature>
            <Steps></Steps>
            <Questions></Questions>
            <Timeline></Timeline>
            <Newsletter></Newsletter>
            <div className="border-t border-gray-800/20"></div>
            </AptosWalletAdapterProvider>
        </Layout>
    );
}
