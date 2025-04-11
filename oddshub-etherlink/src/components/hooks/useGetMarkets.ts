

import { useReadContract } from "wagmi";
import { CONTRACT_ADDRESS } from "../helpers/constants";
import abi from "@/abi/MarketFactory";
import { CryptoMarket, Market, SportsMarket } from "../helpers/types";

type CategoryType = 0 | 1 | 2;

type MarketTypeMap = {
  0: SportsMarket;
  1: CryptoMarket;
  2: Market;
};


export const useGetParticularMarket = <T extends CategoryType>(index: number,category:T) => {
  const { data, isLoading, error } = useReadContract({
    abi,
    address: CONTRACT_ADDRESS,
    functionName: category === 2 ?'get_all_markets' : category ===1 ? 'get_all_crypto_markets' : 'get_all_sports_markets',
  });
 
  type SelectedMarket = MarketTypeMap[T];
  const finalData = (data as SelectedMarket[]) || [];
  const market: SelectedMarket | undefined = finalData[index];
  return {
    data: market,
    isLoading,
    error,
  };
};

export const useGetMarket = () => {
  const {data} = useReadContract({
    abi,
    address: CONTRACT_ADDRESS,
    functionName: 'get_all_markets',
  });
  const finalData:Market[]=data as Market[];
  
  return {finalData};
};



export const useGetCryptoMarket = () => {
  const { data, isLoading, error } = useReadContract({
    abi,
    address: CONTRACT_ADDRESS,
    functionName: 'get_all_crypto_markets',
  });
  const finalData: CryptoMarket[] = (data as CryptoMarket[]);
  return {
    cryptoMarket: finalData || [],
    isLoading,
    error,
  };
};

export const useGetSportsMarket = () => {
  const { data, isLoading, error } = useReadContract({
    abi,
    address: CONTRACT_ADDRESS,
    functionName: 'get_all_sports_markets',
  });
 
  const finalData: SportsMarket[] = (data as SportsMarket[]) || [];
  const market:SportsMarket[] = finalData ;
  return {
    sportsMarket: market || [],
    isLoading,
    error,
  };
};