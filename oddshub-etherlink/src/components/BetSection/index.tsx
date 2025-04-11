import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import "./styles.scss";
import BetHeroCard from "./BetHeroCard";
import {  CryptoMarket, FPMMMarketInfo, SportsMarket } from "../helpers/types";
import { motion } from "framer-motion";
import CustomLoader from "../common/CustomLoader";
import ContBetCard from "./ContBetCard";

import { useGetCryptoMarket, useGetMarket, useGetSportsMarket } from "../hooks/useGetMarkets";
import { Market } from "../helpers/types";

interface Props {}


const BetSection: NextPage<Props> = ({}) => {
  const [activeTab, setActiveTab] = useState<number>(2);
  const [loading, setLoading] = useState<boolean>(false);
  const [contMarkets, setContMarkets] = useState<Market[]>([]);
  const [sportsMarkets,setSportsMarkets]=useState<SportsMarket[]>([]);
  const [cryptoMarkets,setCryptoMarkets]=useState<CryptoMarket[]>([]);
  const betCardWrapperDiv = useRef<HTMLDivElement | null>(null);

  const scrollToElement = () => {
    if (betCardWrapperDiv.current) {
      betCardWrapperDiv.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const {finalData}=useGetMarket();
  const {cryptoMarket}=useGetCryptoMarket();
   const {sportsMarket,isLoading,error}=useGetSportsMarket()
  useEffect(()=>{
    if(finalData){
      setContMarkets(finalData)
      setCryptoMarkets(cryptoMarket)
      setSportsMarkets(sportsMarket)
    }
  },[finalData,sportsMarket])
  

  const Tabs=[
    {
      name:"Trending Markets",
      activeTab:2
    },
    {
      name:"Crypto",
      activeTab:1
    },
    {
      name:"Sports",
      activeTab:0
    }
  ]

  return (
    <div className='BetSection'>
      <div className='BetSection-Hero'>
        <div className='BetSection-HeroCard'>
          <BetHeroCard
            setActiveTab={setActiveTab}
            categoryIndex={0}
            category='Sports'
            categoryLogo='/assets/logos/WC.jpeg'
            categoryName='India vs Pakistan'
            cardBgColor='#000000'
            image='/assets/images/crick.svg'
            scrollFn={scrollToElement}
            enabled={true}
          />
        </div>
        <div className='BetSection-HeroCard'>
          <BetHeroCard
            setActiveTab={setActiveTab}
            categoryIndex={1}
            category='Crypto Market'
            categoryLogo='/assets/logos/btc.webp'
            categoryName='Crypto Prices'
            cardBgColor='#000000'
            image='/assets/images/crypto.svg'
            scrollFn={scrollToElement}
            height='230px'
            width='370px'
            enabled={true}
          />
        </div>
      </div>
      <div ref={betCardWrapperDiv} className='BetSection-CardWrapper'>
        <div className='Tabs-Section'>
            {Tabs.map((item)=>{
              return <div key={item.activeTab}
              onClick={()=>{setActiveTab(item.activeTab)}}
              className={activeTab === item.activeTab ? "Tab-Active" : "Tab"}
              >
              {item.name}
            </div>
            })}
        </div>
        <div className='BetCard-Wrapper'>
          {loading ? (
            <div className='LoaderDiv'>
              <CustomLoader size={"55"} color='#9C9C9C' />
            </div>
          ) : activeTab == 0 ? (
            sportsMarket.length > 0 && sportsMarket.filter((market) => market.is_active).length > 0 ? (
              sportsMarkets
                .filter((market) => market.is_active)
                .map((item, index) => (
                  <div key={index} className='BetCard-Container'>
                    <ContBetCard
                      marketId={Number(item.market_id.toString())}
                      category={item.category}
                      logo={item.image}
                      deadline={item.deadline.toString()}
                      heading={item.name.toString()}
                      subHeading={item.description}
                      outcomes={item.outcomes}
                      isActive={item.is_active}
                      moneyInPool={item.money_in_pool}
                    />
                  </div>
              ))
            
            ) : (
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.25 }}
                className='PlaceholderText'
              >
                No Active Events
              </motion.span>
            )
          
          ) : activeTab == 2 ? (
            contMarkets.length > 0 && contMarkets.filter((market) => market.is_active).length > 0 ? (
             contMarkets
                .filter((market) => market.is_active)
                .map((item, index) => (
                  <div key={index} className='BetCard-Container'>
                    <ContBetCard
                      marketId={Number(item.market_id.toString())}
                      category={item.category}
                      logo={item.image}
                      deadline={item.deadline.toString()}
                      heading={item.name.toString()}
                      subHeading={item.description}
                      outcomes={item.outcomes}
                      isActive={item.is_active}
                      moneyInPool={item.money_in_pool}
                    />
                  </div>
              ))
            
            ) : (
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.25 }}
                className='PlaceholderText'
              >
                No Active Events
              </motion.span>
            )
          
          ) : activeTab==1 ? (
            cryptoMarkets.length > 0 && cryptoMarkets.filter((market) => market.is_active).length > 0 ? (
              cryptoMarkets
                .filter((market) => market.is_active)
                .map((item, index) => (
                  <div key={index} className='BetCard-Container'>
                    <ContBetCard
                      marketId={Number(item.market_id.toString())}
                      category={item.category}
                      logo={item.image}
                      deadline={item.deadline.toString()}
                      heading={item.name.toString()}
                      subHeading={item.description}
                      outcomes={item.outcomes}
                      isActive={item.is_active}
                      moneyInPool={item.money_in_pool}
                    />
                  </div>
              ))
            
            ) : (
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.25 }}
                className='PlaceholderText'
              >
                No Active Events
              </motion.span>
            )
          ) :
           (
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.25 }}
              className='PlaceholderText'
            >
              No Active Events
            </motion.span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BetSection;
