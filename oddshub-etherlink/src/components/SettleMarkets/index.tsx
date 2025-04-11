import { NextPage } from "next";
import "./styles.scss";
import { Box } from "@mui/material";
import { colorStyles } from "@/components/helpers/menuStyles";
import { useEffect, useState } from "react";
import Select from "react-select";
import { CONTRACT_ADDRESS } from "../helpers/constants";
import abi from "@/abi/MarketFactory";
import { CryptoMarket, Market, SportsMarket } from "../helpers/types";
import { Radio, RadioGroup } from "rsuite";
import useSettleMarket from "../hooks/useSettleMarket";
import axios from "axios";
import { useGetCryptoMarket, useGetMarket, useGetSportsMarket } from "../hooks/useGetMarkets";
import WalletConnectButton from "../Header/WalletButtons";
import { useAccount } from "wagmi";
interface Props {}

const settel_categories = [
  {
    value: "all",
    label: "All Market",
  },
  {
    value: "crypto",
    label: "Crypto Market",
  },
  {
    value: "sports",
    label: "Sports Market",
  },
];

const SettleMarkets: NextPage<Props> = ({}) => {
  const [category, setCategory] = useState("");
  const [marketId, setMarketId] = useState<BigInt | undefined>(BigInt(0));
  const [value, setValue] = useState<any>("Yes");
  const [allMarkets, setAllMarkets] = useState<Market[]>([]);
  const [allSportsMarkets,setSportsMarkets]=useState<SportsMarket[]>([]);
  const [allCryptoMarkets,setCryptoMarkets]=useState<CryptoMarket[]>([]);
  const {address}=useAccount();
//   const { settleMarket, } = useSettleMarket({
//     category: category,
//     marketId: marketId,
//     outcome: value === "Yes" ? 0 : 1,
//   });
const {cryptoMarket}=useGetCryptoMarket();
const {sportsMarket}=useGetSportsMarket();
const {finalData}=useGetMarket();
const {settleMarket}=useSettleMarket();
useEffect(()=>{
    if(cryptoMarket){
        setCryptoMarkets(cryptoMarket)
    }
    if(sportsMarket){
        setSportsMarkets(sportsMarket)
    }
    if(finalData){
        setAllMarkets(finalData)
    }
},[finalData,sportsMarket,cryptoMarket])

  const returnAllMarkets = () => {
    const select_markets: any = [];
    allMarkets.length > 0 ? allMarkets.map((item)=>{
        select_markets.push({
            value:Number(item.market_id),
            label:item.description
        })
    })
    :
    null;

    return (
      <Box className='InputContainer'>
        <span className='Label'>Active Markets</span>
        <Box className='Input'>
          <Select
            className='SelectBox'
            styles={colorStyles}
            options={select_markets}
            onChange={(id: any) => {
              setMarketId(BigInt(id.value));
            }}
          />
        </Box>
      </Box>
    );
  };

  const returnAllCryptoMarkets = () => {
    const select_markets: any = [];
    allCryptoMarkets.map((item:CryptoMarket)=>{
        select_markets.push({
            value:Number(item.market_id),
            label:item.description
        })
    })

    return (
      <Box className='InputContainer'>
        <span className='Label'>Active Markets</span>
        <Box className='Input'>
          <Select
            className='SelectBox'
            styles={colorStyles}
            options={select_markets}
            onChange={(id: any) => {
              setMarketId(id.value);
            }}
          />
        </Box>
      </Box>
    );
  };

  const returnAllSportsMarkets = () => {
    const select_markets: any = [];
    allSportsMarkets.map((item:SportsMarket)=>{
        select_markets.push({
            value:Number(item.market_id),
            label:item.description
        })
    })
   
    return (
      <Box className='InputContainer'>
        <span className='Label'>Active Markets</span>
        <Box className='Input'>
          <Select
            className='SelectBox'
            styles={colorStyles}
            options={select_markets}
            onChange={(id: any) => {
              setMarketId(id.value);
            }}
          />
        </Box>
      </Box>
    );
  };

  return (
    <div>
      <Box className='InputContainer'>
        <span className='Label'>Category</span>
        <Box className='Input'>
          <Select
            className='SelectBox'
            styles={colorStyles}
            options={settel_categories}
            onChange={(category) => setCategory(category?.value!)}
          />
        </Box>
      </Box>
      {category === "all" && returnAllMarkets()}
      {category === "crypto" && returnAllCryptoMarkets()}
      {category === "sports" && returnAllSportsMarkets()}
      {}
      {marketId!==undefined && category!=="" && (
        <Box className='InputContainer'>
          <span className='Label'>Market Id: {Number(marketId)}</span>
        </Box>
      )}
      {marketId!==undefined && category!=="" && (
        <Box className='InputContainer'>
          <span className='Label'>Outcome</span>
          <Box className='Input'>
            <RadioGroup
              value={value}
              onChange={setValue}
              name='radio-group'
              defaultValue='Yes'
            >
              <Radio value='Yes'>Yes</Radio>
              <Radio value='No'>No</Radio>
            </RadioGroup>
          </Box>
        </Box>
      )}
      {marketId!==undefined && (
        <Box className='Submit'>
          {address!==undefined ?
           <button type="button" onClick={()=>{
            const outcome=value==="Yes" ? 0 : 1;
            const marketID=Number(marketId);
            const categoryId= category.toLowerCase().includes("all") ? 2 : category.toLowerCase().includes("sports") ? 0 : 1;
            settleMarket({
                marketId:marketID,
                winning_outcome:outcome,
                categoryId:categoryId
           })
           }} className='SubmitButton'>
            Settle Market
          </button>
          :
          <WalletConnectButton/>
          }
        </Box>
      
      )}
 
    </div>
  );
};

export default SettleMarkets;