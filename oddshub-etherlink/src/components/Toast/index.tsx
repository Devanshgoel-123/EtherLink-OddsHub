import { NextPage } from "next";
import "./styles.scss";

import { Box } from "@mui/material";

interface Props {
  message: string;
  subHeading?: string;
  hash?: string;
  chainId?: number;
}

const CustomToast: NextPage<Props> = ({ message, subHeading, hash }) => {
  
  return (
    <Box className="Toast">
      <span className="Toast-Heading">{message}</span>
      <span className="Toast-SubHeading">{subHeading}</span>
      
    </Box>
  );
};

export default CustomToast;
