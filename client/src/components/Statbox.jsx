import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";

const Statbox = ({ title, value, icon, increase, description }) => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      gridColumn="span 2"
      gridRow="span 1"
      justifyContent="space-between"
      p="1.5rem 1rem"
      flex="1 1 100%"
      backgroundColor={theme.palette.background.alt}
      borderRadius="0.55rem"
    >
      <FlexBetween>
        <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
          {title}
        </Typography>
        {icon}
      </FlexBetween>
      <Typography
        variant="h3"
        fontWeight="600"
        sx={{ color: theme.palette.secondary[200] }}
      >
        {value}
      </Typography>
      <FlexBetween gap="1rem">
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: theme.palette.secondary.light }}
        >
          {increase}
        </Typography>
        <Typography>{description}</Typography>
      </FlexBetween>
    </Box>
  );
};

export default Statbox;
