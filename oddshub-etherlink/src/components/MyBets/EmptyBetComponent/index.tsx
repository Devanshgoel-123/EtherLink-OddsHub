import { Box } from "@mui/material";
import { NextPage } from "next";
import "./styles.scss";
import { motion } from "framer-motion";

interface Props {
  text: string;
}

const EmptyBetComponent: NextPage<Props> = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.35 }}
      className="PlaceholderText"
    >
      {text}
    </motion.div>
  );
};

export default EmptyBetComponent;
