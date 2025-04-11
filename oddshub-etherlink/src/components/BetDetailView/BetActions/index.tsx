"use client";
import { NextPage } from "next";

import { useAccount, useBalance } from "wagmi";
import { MenuItem, Select } from "@mui/material";
import { Box } from "@mui/material";
import "./styles.scss";
import { parseUnits } from "viem";
import { useCallback } from "react";
import CustomLogo from "@/components/common/CustomIcons";
import {
  XTR_LOGO
} from "@/components/helpers/icons";
import { useContext, useEffect, useMemo, useState } from "react";
import { Outcome } from "@/components/helpers/types";
import { USDC_ADDRESS,ETH_ADDRESS,STARK_ADDRESS, LORDS_ADDRESS, NATIVE_DECIMALS_ETHERLINK, ETHERLINK_CHAIN_ID } from "@/components/helpers/constants";
import { getProbabilites} from "@/components/helpers/functions";
import { usePathname } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { usePlaceBet } from "@/components/hooks/usePlaceBet";

interface Props {
  outcomes: Outcome[];
  moneyInPool: number;
  category: string;
}

const BetActions: NextPage<Props> = ({ outcomes, moneyInPool, category }) => {
  const { address } = useAccount();
  const pathname = usePathname();
  const [userChoice,setUserChoice]=useState<number>(0);
  const [betAmount, setBetAmount] = useState<string>("");
  const [marketId, setMarketId] = useState(0);
  const [potentialWinnings, setPotentialWinnings] = useState(0);
  const [percent1, setPercent1] = useState(0);
  const [userBalance,setBalance]=useState<number>(0);
  const [percent2, setPercent2] = useState(0);
  const [marketType,setMarketType]=useState<number | null>(null);

  useEffect(() => {
    if (!outcomes) return;
    const percentages = getProbabilites(
      outcomes[0].bought_shares.toString(),
      outcomes[1].bought_shares.toString()
    );
    setPercent1(percentages[0]);
    setPercent2(percentages[1]);
  }, [outcomes]);

  useEffect(() => {
    const encoded = pathname.split("/")[3];
    const hexPart = encoded.slice(0, -4);
    const marketId = parseInt(hexPart, 16);
    const category=pathname.split("/")[2];
    const categoryId = (category.toLowerCase().includes("sports") || category.toLowerCase().includes("amma")) ? 0 : 
                     (category.toLocaleLowerCase().includes("politics") || category.toLowerCase().includes("pop")) ? 2 : 1;
    setMarketId(marketId);
    setMarketType(categoryId)
  }, [pathname]);

  const {sendTransaction}=usePlaceBet(category);
  const balance=useBalance({
    address:address,
    chainId:ETHERLINK_CHAIN_ID
  })

  useEffect(()=>{
    if(balance.data?.value!==undefined){
      setBalance(Number(balance.data.value.toString()) / NATIVE_DECIMALS_ETHERLINK)
    }
  },[balance])

  const handleBetAmount=(value: string)=>{
    const regex = /^\d*\.?\d*$/;
    if (value === "" || regex.test(value)) {
      setBetAmount(value);
    }
  }

  useEffect(() => {
      if (moneyInPool && betAmount !== "") {
        const timeout = setTimeout(() => {
          const betAmountParsed = parseUnits(betAmount, NATIVE_DECIMALS_ETHERLINK).toString();
          console.log("The bet amount parsed is",betAmountParsed);
          const poolAmount = moneyInPool;
          const outcomeShares = userChoice === 0
            ? outcomes[0].bought_shares.toString()
            : outcomes[1].bought_shares.toString();
          const numerator = parseFloat(betAmountParsed) * (parseFloat(betAmountParsed) + poolAmount);
          const denominator = parseFloat(betAmountParsed) + parseFloat(outcomeShares);
          const result = numerator / denominator;
          console.log("the result is",result)
          setPotentialWinnings(result / 10**NATIVE_DECIMALS_ETHERLINK);
        }, 300);
    
        return () => clearTimeout(timeout)
      }
  }, [userChoice, betAmount, moneyInPool]);

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

  return (
    <Box className='BetActions'>
      <span className='BetActions-Label'>Your Prediction</span>
      <Box className='BetOptionsContainer'>
        <span className='BetOptionsLabel'>Choose your option</span>
        <Box
          onClick={() => {
            setUserChoice(0)
          }}
          className={userChoice === 0 ? "BetOptionActive" : "BetOption"}
        >
          <span className='Green'>
            {outcomes ? (outcomes[0].name.toString()) : "Yes"}
          </span>
          <Box className='RadioButtonContainer'>
            <span className='RadioLabel'>{percent1.toFixed(2)}%</span>
            <Box className='RadioButton'>
              <Box className='RadioButtonInner'></Box>
            </Box>
          </Box>
        </Box>
        <Box
          onClick={() => {
            setUserChoice(1)
          }}
          className={userChoice === 1 ? "BetOptionActive" : "BetOption"}
        >
          <span className='Red'>
            {outcomes ? outcomes[1].name.toString() : "No"}
          </span>
          <Box className='RadioButtonContainer'>
            <span className='RadioLabel'>{percent2.toFixed(2)}%</span>
            <Box className='RadioButton'>
              <Box className='RadioButtonInner'></Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className='InputContainer'>
        <span className='Label'>Order Value</span>
        <Box className='InputWrapper'>
          <Box className='Input-Left'>
            <Box className='Starknet-logo'>
                {
                <CustomLogo width='20px' height='20px' src={XTR_LOGO} />
               }
            </Box>
            <input
              className='InputField'
              type='number'
              id='numberInput'
              name='numberInput'
              value={betAmount}
              onChange={(e) => handleBetAmount(e.target.value)}
              placeholder='0.00'
              required
            />
          </Box>
        </Box>
        <span className='BalanceField'>
          {address
            ? "Balance: " +(Number(balance.data?.value.toString())/10**(balance.data?.decimals || 8)).toFixed(6) + " XTR "
            : "Please connect your wallet."}{" "}
        </span>
      </Box>
      <Box className='ReturnStats'>
        <span className='ReturnLabel'>Potential Winning</span>
        <Box className='ReturnValue'>
          <span className={betAmount == "" ? "Gray" : "Green"}>
            {potentialWinnings ? potentialWinnings.toFixed(5) : 0}
          </span>
          <Box className='Starknet-logo'>
            <CustomLogo src={XTR_LOGO} />
          </Box>
        </Box>
      </Box>
      {address ? (
        <Box onClick={() => {
          if(marketType===null) return;
          sendTransaction(betAmount,marketId,marketType,userChoice)
        }} className={`ActionBtn`}>
          {betAmount == ""
            ? "Enter Amount"
            : userBalance > parseFloat(betAmount)
            ? "Place Order"
            : "Insufficient Balance"}
        </Box>
      ) : (
        <Box
          className='ActionBtn'
        >
          Connect Wallet
        </Box>
      )}
    </Box>
  );
};

export default BetActions;