
import { useAccount, useReadContract } from "wagmi"
import abi from "@/abi/MarketFactory"
import { CONTRACT_ADDRESS } from "../helpers/constants";
import { Outcome } from "../helpers/types";
import { useMemo } from "react";
import { UserPositionMarkets as Markets } from "../helpers/types";

export const useGetUserPosition=()=>{
  const {address}=useAccount();
    const {
        data,
        isLoading,
        isError,
        error,
      } = useReadContract({
        abi: abi,
        address: CONTRACT_ADDRESS,
        functionName: "get_user_positions_market",
        args:[address]
      });    
      
    const { userOpenPositions, userClosedPositions } = useMemo(() => {
      if (!data) return { userOpenPositions: [], userClosedPositions: [] };
      
      const userMarkets = Array.isArray(data) ? data : [];
      const currentTime = new Date().getTime() / 1000;
      
      const openMarkets = userMarkets.filter(item => item.is_active);
      const closeMarkets = userMarkets.filter(item => !item.is_active);
      return {
        userOpenPositions: openMarkets,
        userClosedPositions: closeMarkets
      };
    }, [data,isLoading]);
    return {
       userOpenPositions,
       userClosedPositions,
       isLoading
    };
}