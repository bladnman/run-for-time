import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useMemo } from "react";
export const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

export default function useBreakSize() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  const isXl = useMediaQuery(theme.breakpoints.only("xl"));

  const isGtXs = isSm || isMd || isLg || isXl;
  const isGtSm = isMd || isLg || isXl;
  const isGtMd = isLg || isXl;
  const isGtLg = isLg || isXl;

  const isLtMega = isXs || isSm || isMd || isLg || isXl;
  const isLtXxl = isXs || isSm || isMd || isLg || isXl;
  const isLtXl = isXs || isSm || isMd || isLg;
  const isLtLg = isXs || isSm || isMd;
  const isLtMd = isXs || isSm;
  const isLtSm = isXs;

  return useMemo(() => {
    return {
      isXs,
      isSm,
      isMd,
      isLg,
      isXl,

      isGtXs,
      isGtSm,
      isGtMd,
      isGtLg,

      isLtMega,
      isLtXxl,
      isLtXl,
      isLtLg,
      isLtMd,
      isLtSm,
    };
  }, [
    isGtLg,
    isGtMd,
    isGtSm,
    isGtXs,
    isLg,
    isLtLg,
    isLtMd,
    isLtMega,
    isLtSm,
    isLtXl,
    isLtXxl,
    isMd,
    isSm,
    isXl,
    isXs,
  ]);
}
