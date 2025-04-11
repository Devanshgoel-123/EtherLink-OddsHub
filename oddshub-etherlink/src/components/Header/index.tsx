import { NextPage } from "next";
import "./styles.scss";
import { motion } from "framer-motion";
import CustomLogo from "../common/CustomIcons";
import HeaderLink from "./HeaderLink";
import WalletButton from "./WalletButtons/index";
import Image from "next/image";
import { RAIZE_LOGO } from "../helpers/icons";
interface Props {}

const Header: NextPage<Props> = ({}) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="Header-Wrapper"
    >
      <div className="Header-LogoContainer">
      {/* <div className="Header-Logo">
          <Image src={RAIZE_LOGO} height={22} width={22} alt="logo" className="Logo"/>
        </div> */}
        <span className="HeaderText">OddsHub</span>
      </div>
      <div className="Header-LinksContainer">
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
          linkCTA="Trades"
        />
      </div>
      <div className="Header-ButtonsContainer">
        <WalletButton />
      </div>
    </motion.div>
  );
};

export default Header;
