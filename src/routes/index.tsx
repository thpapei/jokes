import { createBrowserRouter } from "react-router-dom";
import JokeForm from "../components/JokeForm";
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
    {
      path: "/:id",
      element: (
        <Layout>
          <JokeForm />
        </Layout>
      ),
    },
    {
      path: "/create",
      element: (
        <Layout>
          <JokeForm />
        </Layout>
      ),
    },
  ],
  {
    basename: "/jokes/",
  }
);
export default router;
