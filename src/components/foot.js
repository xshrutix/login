import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import { FootLinks } from "./footlinks";
import { StyledDropDown } from "./styledfooter";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import {
  Typography,
  IconButton,
  Box,
  useMediaQuery,
  Collapse,
  List,
  ListItem,
} from "@mui/material";

const IsLarge = () => {
  return useMediaQuery("(min-width:800px)");
}

const Foot = () => {
  const [show, setShow] = React.useState(false);

  const handleShowClick = () => {
    setShow(!show);
  };

  const currDate = new Date();
  let currYear = currDate.getFullYear();
   
  const large = IsLarge()
  return (
    <>
      {!large ? (
        <Box>
          <Box
            className="flex justify-center items-center text-center"
            onClick={handleShowClick}
          >
            <IconButton>
              <SplitscreenIcon sx={{fontSize : "16px" ,  marginTop : "4px" , fontWeight : "50"}} fontSize="small" />
            </IconButton>
            <Typography sx={{fontSize : "13px",  marginTop : "4px" , fontWeight : "100"}} className="text-sm">Footer</Typography>
            <StyledDropDown>
              <ExpandMoreIcon sx={{fontSize : "14px" , marginTop : "4px"}} />
            </StyledDropDown>
          </Box>
          <Collapse in={show} timeout="auto" unmountOnExit>
            <Box>
              <List>
                <ListItem>
                  <Typography className="text-sm pl-1.5">
                    &#169; {currYear}
                    <a
                      className="text-blue-300 no-underline pl-4"
                      href="https://rabbitloader.com/"
                    >
                      RabbitLoader
                    </a>
                  </Typography>
                </ListItem>
                <ListItem>
                  <FootLinks
                    text="Privacy Policy"
                    icon={
                      <DescriptionOutlinedIcon fontSize="small" padding={0} />
                    }
                    href="https://rabbitloader.com/privacy/"
                  />
                </ListItem>
                <ListItem>
                  <FootLinks
                    text="Service Terms"
                    icon={
                      <DescriptionOutlinedIcon fontSize="small" padding={0} />
                    }
                    href="https://rabbitloader.com/terms/"
                  />
                </ListItem>
                <ListItem>
                  <FootLinks
                    text="Knowledge Base"
                    icon={<SchoolIcon fontSize="small" padding={0} />}
                    href="https://rabbitloader.com/kb/"
                  />
                </ListItem>
              </List>
            </Box>
          </Collapse>
        </Box >
      ) : (
        
            <Box
          className="flex justify-between items-center h-7vh"
        >
          <Box>
            <Typography className="pt-2 pl-4 " sx={{fontSize : "13px"}}>
              &#169; {currYear}
              <a
                className="text-purple-300 visited:text-purple-400 pl-[4px]"
                href="https://rabbitloader.com/"
              >
                RabbitLoader
              </a>
            </Typography>
          </Box>
          <Box className="flex mr-5 mt-1">
                      <FootLinks
              text="Privacy Policy"
              icon={<DescriptionOutlinedIcon/>}
              href="https://rabbitloader.com/privacy/"
            />
            <FootLinks
              text="Service Terms"
              icon={<DescriptionOutlinedIcon />}
              href="https://rabbitloader.com/terms/"
            />
            <FootLinks
              text="Knowledge Base"
              icon={<SchoolIcon />}
              href="https://rabbitloader.com/kb/"
            />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Foot;
