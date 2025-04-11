"use client";
import CustomLogo from "@/components/common/CustomIcons";
import "./styles.scss";
import BetSection from "@/components/BetSection";
import Image from "next/image";
import { ETHERLINK_LOGO } from "@/components/helpers/icons";
export default function Home() {
  return (
    <main className='Home'>
      <div className='Heading-Section'>
        <span className='Heading'>Use your Insights & Trade on Opinions with ForeCast</span>
        <span className='Sub-Heading'>
        India’s Primary Prediction Market - built on <Image src={ETHERLINK_LOGO} height={22} width={22} alt="MoonBeam" className="ChainLogo"/>EtherLink
        </span>
      </div>
      <BetSection />
    </main>
  );
}
