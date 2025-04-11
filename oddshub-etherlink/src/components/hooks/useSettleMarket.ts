import { enqueueSnackbar } from "notistack";
import axios from "axios";
import abi from "@/abi/MarketFactory";
import {useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { CONTRACT_ADDRESS } from "../helpers/constants";
import { config } from "../Web3provider";
import { useEffect, useRef } from "react";
import { useState } from "react";

interface props{
    marketId:number;
    winning_outcome:number;
    categoryId:number;
}

function useSettleMarket() {
  const [enableQuery, setEnableQuery] = useState(false);
  const handleToast = (
    message: string,
    subHeading: string,
    type: string,
    hash?: string
  ) => {
    enqueueSnackbar(message, {
      //@ts-ignore
      variant: "custom",
      subHeading: subHeading,
      hash: hash,
      type: type,
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };
  const handleToastRef = useRef<
      (
        heading: string,
        subHeading: string,
        type: string,
        hash?: string | undefined,
        chainId?: number | undefined
      ) => void
    >(handleToast);
  const {
    writeContract,
    data,
    error:contractError
  }=useWriteContract();

  const {
   isSuccess,
   isLoading:isConfirming,
  }=useWaitForTransactionReceipt({
    hash:data,
    config,
    confirmations:2,
    query:{
      enabled:enableQuery
    }
  }) 


  const settleMarket = async ({marketId,winning_outcome,categoryId}:props) => {
    try{
    const functionName= categoryId===0 ? 'settle_sports_market' : categoryId === 1 ? 'settle_crypto_market_manually' : 'settle_market';
      setEnableQuery(true)
      writeContract({
        abi:abi,
        address:CONTRACT_ADDRESS,
        functionName:`${functionName}`,
        args:[
          marketId,
          winning_outcome
        ]
      })
      
      return data;
    }catch(err){
      setEnableQuery(false)
      console.log(err)
    }
   
  };

  return { settleMarket };
}

export default useSettleMarket;
