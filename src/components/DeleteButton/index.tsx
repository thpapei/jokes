import { Button } from "@mui/material";
import { IDeleteButtonProps } from "../../interfaces/deleteButtonProps";
import DeleteDialog from "./DeleteModal";

const DeleteButton: React.FC<IDeleteButtonProps> = (props) => {
  const { handleDelete, open, handleClose, ...buttonProps } = props;

  return (
    <div>
      <Button style={{ color: "red" }} {...buttonProps}>
        {"Delete"}
      </Button>
      <DeleteDialog
        open={open}
        handleDelete={handleDelete}
        handleClose={handleClose}
      />
    </div>
  );
};

export default DeleteButton;
