import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import "../index.scss";

export default function DeleteModal({
  open,
  handleClose,
  apiCallForDelete,
  deleteModalData,
  isLoadingForAction,
  token,
}) {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    await dispatch(apiCallForDelete({ slug: deleteModalData, token }));
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="deleteDialog"
    >
      <DialogTitle
        sx={{ display: "flex", alignItems: "center", gap: "4px" }}
        id="alert-dialog-title"
      >
        <DeleteIcon /> {"Delete"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this item?
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ gap: "16px" }}>
        <button disabled={isLoadingForAction} onClick={handleDelete} autoFocus>
          Delete
        </button>
        <button onClick={handleClose}>Cancel</button>
      </DialogActions>
    </Dialog>
  );
}
