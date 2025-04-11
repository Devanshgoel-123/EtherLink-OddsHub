import { forwardRef, useCallback, useState } from "react";
import Image from "next/image";
import "./styles.scss";

import { Box } from "@mui/material";

import { SnackbarContent, CustomContentProps, useSnackbar } from "notistack";
import CustomToast from "..";

interface CustomToastWrapperProps extends CustomContentProps {
  type: string;
  subHeading?: string;
  hash?: string;
}

const CustomToastWrapper = forwardRef<HTMLDivElement, CustomToastWrapperProps>(
  ({ id, ...props }, ref) => {
    const { closeSnackbar } = useSnackbar();
    const [startAnimation, setStartAnimation] = useState<boolean>(false);

    const handleDismiss = useCallback(() => {
      closeSnackbar(id);
    }, [id]);

    return (
      <SnackbarContent
        ref={ref}
        className={`CustomToastWrapper-Root${props.type}`}
        onMouseEnter={() => {
          setStartAnimation(true);
        }}
        onMouseLeave={() => setStartAnimation(false)}
      >
        <Box>
          <CustomToast
            //@ts-ignore
            message={props.message}
            subHeading={props.subHeading}
            hash={props.hash}
          />
        </Box>

        <Box
          style={{
            transform: startAnimation
              ? "translate(0,0)"
              : "translate(100%,-100%)",
          }}
          onClick={handleDismiss}
          className="CustomToastWrapper-CloseBtn"
        >
          <Image
            src="/assets/icons/cross.svg"
            alt="BaseForeCast"
            width={0}
            height={0}
            style={{
              width: "10px",
              height: "10px",
              objectFit: "cover",
            }}
          />
        </Box>
      </SnackbarContent>
    );
  }
);

CustomToastWrapper.displayName = "CustomToastWrapper";

export default CustomToastWrapper;
