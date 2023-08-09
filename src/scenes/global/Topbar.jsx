import React, { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { tokens, ColorModeContext } from "../../theme";
import InputBase from "@mui/material/InputBase";
import {
  LightModeOutlined,
  DarkModeOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutline,
  Search,
} from "@mui/icons-material";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <div>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}>
        <Box display={"flex"} backgroundColor={colors.primary[400]}>
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="search" />
          <IconButton type="button">
            <Search />
          </IconButton>
        </Box>
        <Box display={"flex"}>
          <IconButton type="button" onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined />
            ) : (
              <LightModeOutlined />
            )}
          </IconButton>
          <IconButton>
            <NotificationsOutlined />
          </IconButton>
          <IconButton>
            <SettingsOutlined />
          </IconButton>
          <IconButton>
            <PersonOutline />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
};

export default Topbar;
