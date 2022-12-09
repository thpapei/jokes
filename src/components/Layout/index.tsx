import { Card, CardContent } from "@mui/material";
import { useState } from "react";
import { ILayoutProps } from "../../interfaces/layoutProps";

import ResponsiveAppBar from "../Appbar";
import LoginPage from "../LoginPage";

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogin = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  if (!token) {
    return (
      <>
        <ResponsiveAppBar />
        <LoginPage handleLogin={handleLogin} />
      </>
    );
  }
  return (
    <>
      <ResponsiveAppBar />
      <Card style={{ minHeight: "90vh" }}>
        <CardContent>{children}</CardContent>
      </Card>
    </>
  );
};

export default Layout;
