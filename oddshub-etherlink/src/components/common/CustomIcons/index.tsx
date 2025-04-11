import { NextPage } from "next";

interface Props {
  src: string;
  width?: string;
  height?: string;
  radius?: string;
}

const CustomLogo: NextPage<Props> = ({ src, width, height, radius }) => {
  return (
    <>
      <img
        style={{
          width: width ? width : "100%",
          height: height ? height : "100%",
          objectFit: "cover",
          borderRadius: radius ? radius : "0",
        }}
        width={0}
        height={0}
        src={src}
        alt="RaizeClub"
      />
    </>
  );
};

export default CustomLogo;
