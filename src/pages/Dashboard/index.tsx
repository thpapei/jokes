import { Alert, Button, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataGrid from "../../components/Datagrid";
import PageTitle from "../../components/PageTitle";
import { GET_JOKES } from "../../constants/reactQueryKeys";

import { getJokesPaginated } from "../../network/services/getJokesPaginated";
import jokesColumns from "./jokesColumns";

const Dashboard = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const {
    data: jokes,
    isLoading,
    isError,
  } = useQuery([GET_JOKES, page, limit], () => getJokesPaginated(page, limit));
  const navigate = useNavigate();

  if (isError) {
    return (
      <Alert severity="error">An error occured, please try again later</Alert>
    );
  }

  if (!isLoading && !jokes) {
    return <Alert severity="info">We can't find any jokes right now...</Alert>;
  }

  // The row count usually should be fetched
  // by the same API that fetches the data.
  // This is not the case with this API.
  // A potential solution would be to fetch
  // all data without pagination and get the count.
  return (
    <>
      <PageTitle title="Dashboard" />
      <Button
        variant="contained"
        sx={{ marginBottom: "2rem" }}
        onClick={() => navigate("/create")}
      >
        Create new Joke
      </Button>
      <DataGrid
        pageSize={limit}
        loading={isLoading}
        onPageChange={(page) => setPage(page + 1)}
        onPageSizeChange={(pageSize) => setLimit(pageSize)}
        columns={jokesColumns}
        rowCount={10000}
        rows={jokes ? jokes : []}
      />
    </>
  );
};

export default Dashboard;
