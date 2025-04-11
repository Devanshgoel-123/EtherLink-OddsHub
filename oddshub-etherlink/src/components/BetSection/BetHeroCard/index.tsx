import { NextPage } from "next";
import "./styles.scss";

import CustomLogo from "@/components/common/CustomIcons";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  category: string;
  categoryIndex: number;
  categoryLogo: string;
  categoryName: string;
  cardBgColor: string;
  image: string;
  setActiveTab: Function;
  scrollFn?: Function;
  width?: string;
  height?: string;
  enabled?: boolean;
}

const BetHeroCard: NextPage<Props> = ({
  setActiveTab,
  categoryIndex,
  category,
  categoryLogo,
  categoryName,
  cardBgColor,
  image,
  scrollFn,
  width,
  height,
  enabled,
}) => {
  const [startAnimation, setStartAnimation] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setStartAnimation(true)}
      onMouseLeave={() => setStartAnimation(false)}
      className='BetHeroCard'
      style={{ background: cardBgColor }}
    >
      <div
        style={{
          transform: startAnimation ? "scale(1.2)" : "scale(1)",
        }}
        className='Background-Card'
      ></div>
      <div className='BetHeroCard-HeadingWrapper'>
        <div className='BetHeroCard-HeadingContainer'>
          {/* <div className='Category'>{category}</div> */}
          <div className='Bet-Details'>
            <div className='Bet-Logo'>
              {/* <CustomLogo radius='4px' src={categoryLogo} /> */}
            </div>
            {/* <span className='Bet-Name'>{categoryName}</span> */}
          </div>
        </div>
        <div className='Bet-Heading'>{categoryName}</div>
      </div>
      <motion.div
        whileTap={{ scale: 1.2 }}
        className='Predict-Btn'
        onClick={
          enabled
            ? () => {
                setActiveTab(categoryIndex);
                if (scrollFn) {
                  scrollFn();
                }
              }
            : () => {}
        }
      >
        {enabled ? "Predict Now" : "Coming Soon"}
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className='Card-Image'
      >
        <CustomLogo src={image} width={width} height={height} />
      </motion.div>
    </div>
  );
};

export default BetHeroCard;
