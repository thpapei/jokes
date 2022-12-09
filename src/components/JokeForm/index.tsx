import {
  Alert,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  LinearProgress,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_JOKE } from "../../constants/reactQueryKeys";
import createJoke from "../../network/services/createJoke";
import { deleteJoke } from "../../network/services/deleteJoke";
import { getJoke } from "../../network/services/getJoke";
import updateJoke from "../../network/services/updateJoke";
import dateFormatter from "../../util/dateFormatter";
import DeleteButton from "../DeleteButton";
import Link from "../Link";

const JokeForm = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [isTitleTouched, setIsTitleTouched] = useState(false);
  const [body, setBody] = useState("");
  const [isBodyTouched, setIsBodyTouched] = useState(false);
  const [author, setAuthor] = useState("");
  const [isAuthorTouched, setIsAuthorTouched] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const navigate = useNavigate();

  const {
    data: joke,
    isLoading,
    isError,
    isFetched,
  } = useQuery([GET_JOKE, id], () => getJoke(id), {
    enabled: !!id,
  });

  const { mutate: createJokeMutation, isLoading: isCreateLoading } =
    useMutation(createJoke, {
      onSuccess: () => {
        setIsSuccess(true);
      },
    });
  const { mutate: updateJokeMutation, isLoading: isUpdateLoading } =
    useMutation(updateJoke, {
      onSuccess: () => {
        setIsSuccess(true);
      },
    });

  const { mutate: deleteJokeMutation, isLoading: isDeleteLoading } =
    useMutation(deleteJoke, {
      onSuccess: () => {
        setIsSuccess(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      },
    });

  useEffect(() => {
    // This sets the initial values
    // in the joke form.
    setTitle(joke?.Title || "");
    setBody(joke?.Body || "");
    setAuthor(joke?.Author || "");
  }, [isFetched]);

  const handleSubmit = () => {
    // If we have an id url, that means
    // we're trying to update a joke.
    // If not, the we should create a joke.
    if (id && !!joke?.id) {
      updateJokeMutation({
        id: joke.id,
        Author: author,
        Title: title,
        Body: body,
        Views: joke.Views,
        CreatedAt: joke.CreatedAt,
      });
    } else {
      createJokeMutation({
        id: id,
        Author: author,
        Title: title,
        Body: body,
        CreatedAt: new Date().getTime(),
        Views: 0,
      });
    }
  };

  const handleDelete = () => {
    if (joke?.id) {
      deleteJokeMutation({
        id: joke?.id,
      });
    }

    setIsDeleteDialogOpen(false);
  };

  if (!!id && isLoading) {
    return <CircularProgress />;
  }

  if (!!id && (isError || !joke?.id)) {
    return (
      <Alert severity="error">An error occured, please try again later</Alert>
    );
  }

  return (
    <Card>
      <CardContent>
        <Link to="/">Back to Homepage</Link>
        {isCreateLoading ||
          isUpdateLoading ||
          (isDeleteLoading && <LinearProgress />)}

        <Snackbar
          open={isSuccess}
          autoHideDuration={6000}
          onClose={() => setIsSuccess(false)}
          message="Submitted successfully!"
        />
        <TextField
          label="Title"
          fullWidth
          error={isTitleTouched && !title}
          helperText={isTitleTouched && !title && "Required"}
          sx={{ marginTop: "1rem", marginBottom: "1rem" }}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => setIsTitleTouched(true)}
          value={title}
        />

        <TextField
          label="Body"
          multiline
          minRows={10}
          fullWidth
          error={isBodyTouched && !body}
          helperText={isBodyTouched && !body && "Required"}
          sx={{ marginBottom: "1rem" }}
          onChange={(e) => setBody(e.target.value)}
          onBlur={() => setIsBodyTouched(true)}
          value={body}
        />

        <TextField
          label="Author"
          fullWidth
          sx={{ marginBottom: "1rem" }}
          error={isAuthorTouched && !author}
          helperText={isAuthorTouched && !author && "Required"}
          onChange={(e) => setAuthor(e.target.value)}
          onBlur={() => setIsAuthorTouched(true)}
          value={author}
        />

        <Grid container spacing={2} sx={{ marginBottom: "2rem" }}>
          <Grid item>
            {!!id && (
              <Typography variant="body2" gutterBottom>
                Views: {joke?.Views || "-"}
              </Typography>
            )}
          </Grid>
          <Grid item>
            {!!id && (
              <Typography variant="body2" gutterBottom>
                Created at:{" "}
                {joke?.CreatedAt ? dateFormatter(joke?.CreatedAt) : "-"}
              </Typography>
            )}
          </Grid>
        </Grid>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            disabled={!author || !title || !body}
            onClick={handleSubmit}
          >
            {!!id ? "Update" : "Create"}
          </Button>
          {!!id && (
            <DeleteButton
              open={isDeleteDialogOpen}
              disabled={!author || !title || !body}
              onClick={() => setIsDeleteDialogOpen(true)}
              handleDelete={handleDelete}
              handleClose={() => setIsDeleteDialogOpen(false)}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default JokeForm;
