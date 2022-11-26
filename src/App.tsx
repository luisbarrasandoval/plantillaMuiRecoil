import { useState } from "react";
import MiniDrawer from "./components/SideBar";
import MyBreadcrumbs from "./components/Breadcrumbs";
import { Route, Routes } from "react-router-dom";
import { pages } from "./menu";
import { Stack } from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <Stack direction="row">
      <MiniDrawer open={open} setOpen={setOpen} pages={pages} />
      <Stack direction="column" sx={{
        height: "100vh",
        padding: 3,
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
