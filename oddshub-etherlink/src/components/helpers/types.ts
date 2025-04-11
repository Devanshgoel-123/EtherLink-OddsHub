import { formatUnits } from "viem";

export interface FPMMMarket {
  deadline: string;
  is_active: boolean;
  is_settled: boolean;
  num_outcomes: number;
}

export interface FPMMMarketInfo {
  active: boolean;
  created_at: string;
  deadline: string;
  description: string;
  icon: string;
  market_id: number;
  category: string;
  outcomes: FPMMOutcome[];
  question: string;
  settled: boolean;
  fight_image?: string;
}

export interface Outcome {
  name: string;
  bought_shares: string | bigint;
}

export interface FPMMOutcome {
  name: string;
  numSharesInPool: number;
  winner: boolean;
}

export interface UserPosition {
  amount: bigint ;
  has_claimed: boolean;
}
export interface UserBet {
  outcome: Outcome;
  position: UserPosition;
}

export interface ContractData{
  numOutcomes:number,
  deadline:number,
  isActive:boolean,
  isSettled:boolean
}
export interface ContractReadResult {
  data: ContractData | undefined;
  error: Error | null;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  status: string;
}


export interface Market{
  deadline:number;
  category:string;
  name:string;
  description:string;
  image:string;
  is_active:boolean;
  is_settled:boolean;
  market_id:number  | bigint;
  money_in_pool:number  | bigint;
  winning_outcome:Outcome;
  outcomes:Outcome[];
  categoryId:number;
}

export interface SportsMarket{
  deadline:number;
  category:string;
  name:string;
  description:string;
  image:string;
  is_active:boolean;
  is_settled:boolean;
  market_id:number  | bigint;
  money_in_pool:number  | bigint;
  winning_outcome:Outcome;
  outcomes:Outcome[];
  api_event_id:boolean;
  is_home:boolean;
  categoryId:number;
}

export interface CryptoMarket{
  deadline:number;
  category:string;
  name:string;
  description:string;
  image:string;
  is_active:boolean;
  is_settled:boolean;
  market_id:number  | bigint;
  money_in_pool:number  | bigint;
  winning_outcome:Outcome;
  outcomes:Outcome[];
  conditions:number;
  price_key:number;
  amount:number;
  categoryId:number;
}

export interface UserPositionMarkets{
  categoryId:bigint;
  deadline:bigint;
  description:string;
  image:string;
  is_active:boolean;
  is_settled:boolean;
  market_id:bigint;
  money_in_pool:bigint;
  name:string;
  outcomes:Outcome[];
  winning_outcome:Outcome;
  user_bet:UserBet;
  betId : bigint;
}