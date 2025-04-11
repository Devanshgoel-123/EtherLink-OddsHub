"use client";
import BetActions from "@/components/BetDetailView/BetActions";
import BetDetails from "@/components/BetDetailView/BetDetails";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import { usePathname, useRouter } from "next/navigation";
import { useReadContract } from "wagmi";
import abi from "@/abi/MarketFactory";
import { CONTRACT_ADDRESS } from "@/components/helpers/constants";
import { Outcome, Market, SportsMarket, CryptoMarket} from "@/components/helpers/types";
import { NextPage } from "next";
import CustomLogo from "@/components/common/CustomIcons";
import { BACK_LOGO } from "@/components/helpers/icons";
import { Skeleton } from "@mui/material";
import axios from "axios";
import { handleToast } from "@/components/helpers/functions";
import { useGetParticularMarket } from "@/components/hooks/useGetMarkets";

interface ContractData {
  numOutcomes: number;
  deadline: number;
  isActive: boolean;
  isSettled: boolean;
}

interface ContractReadResult {
  data: ContractData | undefined;
  error: Error | null;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  status: string;
}

const BetDetailView: NextPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const category=pathname.split("/")[2];
  const encoded = pathname.split("/")[3];
  const hexPart = encoded.slice(0, -4);
  const marketId = parseInt(hexPart, 16);
  const [market, setMarket] = useState<Market | SportsMarket | CryptoMarket | null>(null);
  const [outcomes, setOutcomes] = useState<Outcome[]>([]);
  const categoryId = (category.toLowerCase().includes("sports") || category.toLowerCase().includes("amma")) ? 0 : 
                     (category.toLocaleLowerCase().includes("politics") || category.toLowerCase().includes("pop")) ? 2 : 1;

  const {data}=useGetParticularMarket(marketId,categoryId)

  useEffect(() => {
    if(data){
      setMarket(data as Market)
    }
  }, [marketId,data]);

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className='BetDetailView'>
      <div className='GoBack' onClick={handleBack}>
        <CustomLogo width={"30px"} height={"20px"} src={BACK_LOGO} />
        <div>Back</div>
      </div>

      {market && (
        <div className='DetailsAndActions'>
          <BetDetails
            category={market.category}
            logo={market.image}
            duration={market.deadline.toString() || ""}
            heading={market.name}
            subHeading={market.description}
            moneyInPool={Number(market.money_in_pool.toString())}
          />
          {market ? (
            <BetActions
            outcomes={market.outcomes}
            category={market.category}
           moneyInPool={Number(market.money_in_pool.toString())}
            />
          ) : (
            <Skeleton />
          )}
        </div>
      )}
    </div>
  );
};

export default BetDetailView;
