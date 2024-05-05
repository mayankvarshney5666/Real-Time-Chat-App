import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";
import { grayColor } from "../constants/color";

const Home = () => {
    return (
    <Box bgcolor={grayColor} height={"100%"}>
      <Typography p={"4rem"} variant="h4" textAlign={"center"}>
      {/* <img src="https://img.freepik.com/premium-photo/fantasy-painting-cute-robot-galoshes-jumping-rainy-day_985323-13069.jpg?size=626&ext=jpg&ga=GA1.1.1007903044.1709113391&semt=ais" alt="img here" /> */}
        <img src="https://res.cloudinary.com/dp8vmgxrn/image/upload/dpr_auto/w_100/v1712906163/c77515bf-a8ba-4c6e-bd7c-92c07915150c.webp" alt="img here" style={{width:"500px",height:"250px",}} />
        <br />
        Search or Select a Friend to Start Chat
      </Typography>
    </Box>
  );
};

export default AppLayout()(Home);
