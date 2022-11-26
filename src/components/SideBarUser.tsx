import {
  AccountBalance,
  DarkMode,
  LightMode,
  Logout,
  MenuSharp,
  Person,
} from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Stack } from "@mui/system";
import { FC, MouseEvent, useCallback, useMemo, useState } from "react";
import { useColorMode } from "../context/ColorModeContext";

const SideBarUser: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { toggleColorMode } = useColorMode();
  const theme = useTheme();
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const menu = useMemo(
    () => [
      { label: "Profile", icon: <Person />, callback: handleClose },
      { label: "My account", icon: <AccountBalance />, callback: handleClose },
      {
        label: theme.palette.mode === "dark" ? "Modo claro" : "Modo Oscuro",
        icon: theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />,
        callback: toggleColorMode,
      },
      { label: "Logout", icon: <Logout />, callback: handleClose },
    ],
    [theme.palette.mode]
  );

  return (
    <Stack
      direction="row"
      sx={{
        width: "100%",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Avatar
        sx={{
          width: 32,
          height: 32,
        }}
      />
      <Stack direction="column">
        <Typography variant="body1">Username</Typography>
        <Typography variant="caption">Role</Typography>
      </Stack>
      <Stack direction="row" sx={{ flexGrow: 1, justifyContent: "flex-end" }}>
        <IconButton
          aria-label="more"
          id="user-button"
          aria-controls={open ? "user-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="user-menu"
          MenuListProps={{
            "aria-labelledby": "user-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: "20ch",
            },
          }}
        >
          {menu.map((option) => (
            <MenuItem
              key={option.label}
              selected={option.label === "Pyxis"}
              onClick={option.callback}
            >
              <IconButton>{option.icon}</IconButton>
              <Typography variant="body1">{option.label}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Stack>
    </Stack>
  );
};

export default SideBarUser;
