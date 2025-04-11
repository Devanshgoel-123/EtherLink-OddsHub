"use client";
import React, { useEffect, useState } from "react";
import OpenPositions from "./OpenPositions";
import ClosedPositions from "./ClosedPositions";
import "./styles.scss";
import { Market, UserBet } from "../helpers/types";
import { useAccount } from "wagmi";
import { CONTRACT_ADDRESS } from "../helpers/constants";
import abi from "@/abi/MarketFactory";
import { useGetUserPosition } from "../hooks/useGetUserPosition";
import { UserPositionMarkets } from "../helpers/types";


function MyBets() {
  const { address } = useAccount();

  const [openUserPosition, setOpenUserPosition] = useState<UserPositionMarkets[]>([]);
  const [closedUserPosition, setClosedUserPosition] = useState<UserPositionMarkets[]>([]);

   const {
    userOpenPositions,
    userClosedPositions,
    isLoading
   }=useGetUserPosition();

  useEffect(() => {
      if(address===undefined) return;
      if(userOpenPositions){
        setOpenUserPosition(userOpenPositions)
      }
      if(userClosedPositions){
        setClosedUserPosition(userClosedPositions)
      }
  
  }, [address,userOpenPositions,userClosedPositions]);

  return (
    <div className='MyBets'>
      <OpenPositions
        loading={isLoading}
        openPositions={openUserPosition}
      />
      <ClosedPositions
        loading={isLoading}
        closedMarkets={closedUserPosition}
      />
    </div>
  );
}

export default MyBets;