import { Card, CardContent } from "@mui/material";
import { ILayoutProps } from "../../interfaces/dashboard";
import ResponsiveAppBar from "../Appbar";

const Layout: React.FC<ILayoutProps> = ({ children }) => {
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
