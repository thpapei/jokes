import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import JokePage from "../pages/JokePage";

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
    {
      path: "/:id",
      element: (
        <Layout>
          <JokePage />
        </Layout>
      ),
    },
    {
      path: "/create",
      element: (
        <Layout>
          <JokePage />
        </Layout>
      ),
    },
  ],
  {
    basename: "/jokes/",
  }
);
export default router;
