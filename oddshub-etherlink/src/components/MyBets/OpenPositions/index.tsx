import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import CustomLogo from "@/components/common/CustomIcons";
import LoaderComponent from "../LoaderComponent";
import EmptyBetComponent from "../EmptyBetComponent";
import { ETH_LOGO } from "@/components/helpers/icons";
import { UserPositionMarkets } from "@/components/helpers/types";
import { XTR_LOGO } from "@/components/helpers/icons";
import { useGetParticularMarket } from "@/components/hooks/useGetMarkets";
import Image from "next/image";
import { getTimeForDisplay } from "@/components/helpers/functions";

interface Bet {
  Yes: number;
  No: number;
}

interface Props{
  openPositions:UserPositionMarkets[];
  loading:boolean;
}

function OpenPositions({ loading, openPositions }:Props) {
  return (
    <div className="OpenPositions">
      <div className="Heading">Open Positions</div>
      <div className="Container">
        {loading ? (
          <LoaderComponent />
        ) : openPositions.length > 0 ? (
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

            {openPositions.map((market: UserPositionMarkets, index: number) => (
              <div className="Data" key={index}>
                <span className="Status">Open</span>
                <span className="Event">{market.name}</span>
                <span className="DatePlaced">{getTimeForDisplay(Number(market.deadline))}</span>
                <span className="StakedAmount">
                <Image src={XTR_LOGO} height={22} width={22} alt="GLMR"/>
                  {Number(market.user_bet.position.amount)/1e18 || 0.00}
                </span>
                <span className="Yes Prediction">
                  {market.user_bet.outcome.name}
                </span>
              </div>
            ))}
          </>
        ) : (
          <EmptyBetComponent text="You have no open positions" />
        )}
      </div>
    </div>
  );
}

export default OpenPositions;
