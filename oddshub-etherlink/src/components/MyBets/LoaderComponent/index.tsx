import { Box } from "@mui/material";
import "./styles.scss";
import { NextPage } from "next";
import CustomLoader from "@/components/common/CustomLoader";

interface Props {}

const LoaderComponent: NextPage<Props> = ({}) => {
  return (
    <Box className="LoaderDiv">
      <CustomLoader size={"55"} color="#9C9C9C" />
    </Box>
  );
};

export default LoaderComponent;
