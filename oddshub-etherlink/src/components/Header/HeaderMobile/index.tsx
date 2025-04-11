import { motion } from "framer-motion";
import { NextPage } from "next";
import "./styles.scss";
import HeaderLink from "../HeaderLink";

interface Props {}

const HeaderMobile: NextPage<Props> = ({}) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="HeaderMobile"
    >
      <HeaderLink
        link="/"
        whiteIcon="/assets/icons/homeicon-white.svg"
        coloredIcon="/assets/icons/homeicon.svg"
        linkCTA="Home"
      />
      <HeaderLink
        link="/my-bets"
        whiteIcon="/assets/icons/bets-white.svg"
        coloredIcon="/assets/icons/bets.svg"
        linkCTA="My Bets"
      />
    </motion.div>
  );
};

export default HeaderMobile;
