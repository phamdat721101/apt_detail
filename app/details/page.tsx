"use client";
import dynamic from "next/dynamic";
import LayoutSecond from "@/components/LayoutSecond";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
const wallets = [new PetraWallet()];

const Detail = dynamic(() => import("@/components/Details"), { ssr: false });
const MorePools = dynamic(() => import("@/components/MorePools"), {
    ssr: false,
});

export default function Details() {
    return (
        <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
            <LayoutSecond>
                    <Detail></Detail>
                    <MorePools></MorePools>
            </LayoutSecond>
        </AptosWalletAdapterProvider>
    );
}
