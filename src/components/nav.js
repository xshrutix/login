import { Box } from "@mui/material"
import logo from '../images/logo.svg'
export const Navbar = () => {
    return (
      <Box className="bg-[#f5f5f5] p-[5px] ">
          <a href={"/"}>
            <img
              style={{ width: 100, height: 40, margin: "2px 28px" }}
              src={logo}
              alt="Logo"
            />
          </a>
        </Box>
    )
}