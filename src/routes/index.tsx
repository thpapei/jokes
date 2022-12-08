import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Layout>
          <Dashboard />
        </Layout>
      ),
    },
  ],
  {
    basename: "/jokes/",
  }
);
export default router;
