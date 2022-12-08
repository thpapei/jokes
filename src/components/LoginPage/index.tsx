import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ILoginPageProps } from "../../interfaces/loginPage";
import PageTitle from "../PageTitle";

const LoginPage: React.FC<ILoginPageProps> = ({ handleLogin }) => {
  const [token, setToken] = useState("");

  return (
    <Card style={{ height: "90vh" }}>
      <CardContent>
        <PageTitle title="Login page" />
        <Typography>Please enter a token below to continue</Typography>
        <TextField
          label="Token"
          onChange={(e) => setToken(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          onClick={() => handleLogin(token)}
          sx={{ my: "1rem" }}
        >
          Login
        </Button>
      </CardContent>
    </Card>
  );
};

export default LoginPage;
