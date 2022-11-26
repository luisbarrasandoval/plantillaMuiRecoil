import {
  CalendarMonth,
  Group,
  Inventory2,
  Settings,
} from "@mui/icons-material";
import { Page } from "./interface/Page";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import FeedbackIcon from "@mui/icons-material/Feedback";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/system";

const Default = () => {
  const location = useLocation()

  return (
    <Box>
      <Typography variant="h3">Welcome to the {location.pathname} page</Typography>
    </Box>
  );
};

export const pages: Array<Page> = [
  {
    name: "home",
    label: "Inicio",
    path: "/",
    icon: <DashboardIcon />,
    component: <Default />,
  },

  {
    name: "users",
    label: "Usuarios",
    path: "/users",
    icon: <Group />,
    component: <Default />,
  },

  {
    name: "inventory",
    label: "Inventario",
    path: "/inventory",
    icon: <Inventory2 />,
    component: <Default />,
  },

  {
    name: "calendar",
    label: "Calendario",
    path: "/calendar",
    icon: <CalendarMonth />,
    component: <Default />,
  },
  ,
  {
    name: "setting",
    label: "Configuracion",
    path: "/configuracion",
    icon: <Settings />,
    component: <Default />,
  },

  {
    name: "emergency",
    label: "Emergencia",
    path: "/emergency",
    icon: <ReportProblemIcon color="warning" />,
    component: <Default />,
    divider: true,
  },

  {
    name: "feedback",
    label: "Feedback",
    path: "/feedback",
    icon: <FeedbackIcon color="info" />,
    component: <Default />,
  },
];
