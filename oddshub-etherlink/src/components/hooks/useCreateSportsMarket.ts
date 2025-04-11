import { enqueueSnackbar } from "notistack";
import axios from "axios";
import abi from "@/abi/MarketFactory";
import {useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { CONTRACT_ADDRESS } from "../helpers/constants";
import { config } from "../Web3provider";
import { useEffect, useRef } from "react";
import { useState } from "react";
interface Data {
  heading: string;
  category: string;
  description: string;
  outcome1: string;
  outcome2: string;
  deadline: number;
  image: string;
  fightImage?: string;
}

function useCreateSportsMarket({
  heading,
  category,
  deadline,
  description,
  image,
  outcome1,
  outcome2,
  fightImage,
}: Data) {

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

  
  useEffect(()=>{
   if(data && isConfirming){
      handleToastRef.current(
        "Transaction Pending",
        "Your market is being made, please wait for a few seconds.",
        "info",
        data as string
      )
    setEnableQuery(false);
   }
   if(data && isSuccess){
    handleToastRef.current(
        "Market Created Succesfully!",
        "Your market is now live, let's start trading.",
        "success",
        data as string
    )
    setEnableQuery(false);
   }
   if(contractError){
    console.log("The Error faced is",contractError.message)
    handleToastRef.current(
      "Oh shoot!",
      "Something unexpected happened, check everything from your side while we check what happened on our end and try again.",
      "info"
    )
    setEnableQuery(false);
   }
  },[data,isSuccess,isConfirming,contractError])

  const createSportsMarket = async () => {
    try{
      const api_event_id=1;
      const is_home=false;
      setEnableQuery(true)
      writeContract({
        abi:abi,
        address:CONTRACT_ADDRESS,
        functionName:'create_sports_market',
        args:[
          heading,
          description,
          outcome1,
          outcome2,
          category,
          image,
          deadline,
          api_event_id,
          is_home
        ]
      })
      
      return data;
    }catch(err){
      setEnableQuery(false)
      console.log(err)
      handleToastRef.current(
        heading,
        "Error creating the market",
        category,
      )
    }
   
  };

  return { createSportsMarket };
}

export default useCreateSportsMarket;
