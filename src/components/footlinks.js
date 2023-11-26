import { Box , IconButton , Typography } from "@mui/material";
export const FootLinks = (props) => {
    return (
      <>
        <a href={props.href} className="text-black text-[14px]">
          <Box
            sx={{
              display: "flex",
              paddingLeft: { md: 2, xs: 0 },
              alignItems: "center",
            }}
          >
            <IconButton className="text-[14px] text-black font-thin">{props.icon}</IconButton>
            <Typography sx={{ fontSize: 13, opacity: 0.4 }}>
              {props.text}
            </Typography>
          </Box>
        </a>
      </>
    );
  };