import { NextPage } from "next";
import { infinity } from "ldrs";
import { useEffect, useState } from "react";

interface Props {
  color: string;
  size: string;
}

const CustomLoader: NextPage<Props> = ({ color, size }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      infinity.register();
      setIsClient(true);
    }
  }, []);

  if (!isClient) {
    return null; // Or a fallback/loading indicator
  }

  return (
    <l-infinity
      size={size}
      stroke="4"
      stroke-length="0.15"
      bg-opacity="0.1"
      speed="1.3"
      color={color}
    ></l-infinity>
  );
};

export default CustomLoader;
