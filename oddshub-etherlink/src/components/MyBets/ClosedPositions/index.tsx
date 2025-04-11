import React from "react";
import "./styles.scss";
import { USDC_LOGO } from "@/components/helpers/icons";
import LoaderComponent from "../LoaderComponent";
import EmptyBetComponent from "../EmptyBetComponent";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import CustomLogo from "@/components/common/CustomIcons";
import { writeContract } from "@wagmi/core";
import { useAccount, useWriteContract } from "wagmi";
import {config} from "../../Web3provider";
import abi from "@/abi/MarketFactory";
import { CONTRACT_ADDRESS } from "@/components/helpers/constants";
import { UserPositionMarkets } from "@/components/helpers/types";
import { getTimeForDisplay } from "@/components/helpers/functions";
import Image from "next/image";
import { XTR_LOGO } from "@/components/helpers/icons";
import useClaimWinnings from "@/components/hooks/useClaimWinnings";

interface ClosedPositionsProps {
  loading: boolean;
  closedMarkets: UserPositionMarkets[];
}

enum WinStatus {
  Won = "Won",
  Lost = "Lost",
}

function ClosedPositions({ loading, closedMarkets }: ClosedPositionsProps) {
  const {address}=useAccount();
  const {
    claimWinnings
  }=useClaimWinnings();
  const renderMarket = (market: UserPositionMarkets) => {
    if(!market) return;
    const userPrediction=market.user_bet.outcome.name;
    const outcomeIndex=market.winning_outcome.name == "Yes" ? 0 : 1;
    const statusClass= userPrediction===market.winning_outcome.name? !market.user_bet.position.has_claimed ? "Claim" : "Won" : "Lost";
    return (
      <div className="Data" key={market.market_id}>
        {statusClass==="Claim" ? 
        <div className="StatusClaim">
          <button onClick={async ()=>{
            const market_type= Number(market.categoryId);
            claimWinnings({
              marketId: Number(market.market_id),
              market_type,
              bet_num:Number(market.betId)
          })
            }}>
         {statusClass}
        </button >
        </div>
        :
         <span className="Status" >
         {statusClass}
        </span>
        }
        <span className="Event">{market.name}</span>
        <span className="DatePlaced">
          {getTimeForDisplay(Number(market.deadline))}
        </span>
        <span className="StakedAmount">
          <Image src={XTR_LOGO} height={22} width={22} alt="GLMR"/>
          {Number(market.user_bet.outcome.bought_shares)/1e18}
        </span>
        <span className="Yes Prediction">
          {market.user_bet.outcome.name}
        </span>
      </div>
    );
  };

  return (
    <div className="ClosedPositions">
      <div className="Heading">Closed Positions</div>
      <div className="Container">
        {loading ? (
          <LoaderComponent />
        ) : closedMarkets.length > 0 ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.35 }}
              className="Headings"
            >
              <span className="Status">Status</span>
              <span className="Event">Event</span>
              <span className="DatePlaced">Bet Deadline</span>
              <span className="StakedAmount">Shares Bought</span>
              <span className="Prediction">Prediction</span>
              <span className="Details"></span>
            </motion.div>
            {closedMarkets.map(renderMarket)}
          </>
        ) : (
          <EmptyBetComponent text="You have no closed positions" />
        )}
      </div>
    </div>
  );
}

export default ClosedPositions;