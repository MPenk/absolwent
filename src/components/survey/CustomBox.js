import { styled } from "@mui/system";

export const CustomBox = styled("div", {
    name: "MuiCustomBox",
    overridesResolver: (props, styles) => {
      return [styles.root];
    }
  })();