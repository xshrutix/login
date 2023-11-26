import React, { useEffect } from "react";
import Foot from "../components/foot";
import steps  from '../images/steps.svg'
import * as firebaseui from "firebaseui";
import firebase from "firebase/compat/app";
import "firebaseui/dist/firebaseui.css";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { auth } from "../firebase/config";
import { Navbar } from "../components/nav";

const Login = () => {
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    ui.start("#firebaseui-auth-container", {
      signInOptions: [
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      signInFlow: "popup",
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      tosUrl: "/terms",
      privacyPolicyUrl: "/privacy",
    });
  }, []);
    
    

  return (
    <>
      <Box className="bg-[#f5f5f5] min-h-[90vh]">
        <Navbar/>
        <Box
          className="flex flex-grow  m-auto pt-[14vh]"
          sx={{
            verticalAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            paddingInline: "5vh",
            width: "100%",
            maxWidth: "80%",
            minHeight: "86vh",
          }}
        >
          <Box className="flex" sx={{ width: "100%" }}>
                      <Box
                          className = "flex-grow w-[100%] m-auto h-[80%] justify-center"
              sx={{
                display: {
                  md: "flex",
                  xs: "none",
                },
              }}
            >
              <img
                src={steps}
                alt="text404"
                style={{
                  width: 550,
                  height: 380,
                }}
              />
            </Box>
                      <Box
                          className = "flex-grow w-[95%] ml-[2vh]"
              sx={{
                alignItems: "center",
              }}
            >
              <Card sx={{ backgroundColor: "#f1f4fd" }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "27px",
                      textAlign: "center",
                      fontWeight: 500,
                      marginBottom: 6,
                      margin: "15px auto",
                    }}
                    className="text-gray-700"
                  >
                    Ready to make your website blazing fast?
                  </Typography>
                  <Box>
                    <div id="firebaseui-auth-container"></div>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
      <Foot/>
    </>
  );
};

export default Login;
