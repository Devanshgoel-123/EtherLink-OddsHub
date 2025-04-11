import { useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { config } from "../Web3provider";
import abi from "@/abi/MarketFactory";
import { CONTRACT_ADDRESS } from "../helpers/constants";
import { parseEther } from "viem";
import { useState,useRef } from "react";
import { enqueueSnackbar } from "notistack";
import { useEffect } from "react";
export const usePlaceBet=(category:string)=>{
    const {
        writeContract,
        data,
        error:contractError
    }=useWriteContract();
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
             "Your transaction is being processed, please wait for a few seconds.",
            "info",
            data as string
           )
         setEnableQuery(false);
    }else if(data && isSuccess){
         handleToastRef.current(
          "Prediction Placed Successfully!",
          "Watch out for the results in “My bets” section. PS - All the best for this and your next prediction.",
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
  },[data, isSuccess, isConfirming,contractError])
     
    const sendTransaction=async (amount:string, market_id:number, market_type:number,token_to_mint:number)=>{
        if(amount==="" || !Number(amount)) return;
        setEnableQuery(true)
        try{
          writeContract({
            abi:abi,
            functionName:"buy_shares",
            address:CONTRACT_ADDRESS,
            args:[
                BigInt(market_id),
                BigInt(token_to_mint),
                market_type
            ],
            value:parseEther(amount)
        })

        }catch(err){
          console.log("Faced error during contract interactions")
          handleToastRef.current(
            "Oh shoot!",
            "Something unexpected happened, check everything from your side while we check what happened on our end and try again.",
            "info"
          )
          setEnableQuery(false)
        }
       
    }

    return {
        sendTransaction
    }
}