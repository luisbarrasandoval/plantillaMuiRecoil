import { useState } from "react";
import MiniDrawer from "./components/SideBar";
import MyBreadcrumbs from "./components/Breadcrumbs";
import { Route, Routes } from "react-router-dom";
import { pages } from "./menu";
import { Stack } from "@mui/material";

function App() {
  return (
    <Stack direction="row">
      <MiniDrawer pages={pages} />
      <Stack direction="column" sx={{
        height: "100vh",
        padding: 2,
      }}>
        <MyBreadcrumbs />
        <Routes>
          {pages.map((page) => {
            return (
              <Route
                key={page.label}
                path={page.path}
                element={page.component}
              />
            );
          })}
        </Routes>
      </Stack>
    </Stack>
  );
}

export default App;
