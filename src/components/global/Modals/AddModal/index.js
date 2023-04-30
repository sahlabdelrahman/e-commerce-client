import { useDispatch } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import "../index.scss";

export default function AddModal({
  open,
  handleClose,
  apiCallForAdd,
  isLoadingForAction,
  Fields,
  token,
  selectDependToAnother,
  images,
  setImages,
}) {
  const methods = useForm();
  const dispatch = useDispatch();

  const onSubmit = methods.handleSubmit(async (data) => {
    await dispatch(apiCallForAdd({ ...data, images, token }));
    methods.reset();
    setImages([]);
    handleClose();
  });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="addDialog"
    >
      <DialogTitle
        sx={{ display: "flex", alignItems: "center", gap: "4px" }}
        id="alert-dialog-title"
      >
        <AddIcon /> {"Add"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Do you want to Add item?
        </DialogContentText>
        <FormProvider {...methods}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
            noValidate
            autoComplete="off"
            id="addForm"
          >
            <Fields
              selectDependToAnother={selectDependToAnother}
              images={images}
              setImages={setImages}
            />
          </form>
        </FormProvider>
      </DialogContent>
      <DialogActions className="dialogActions" sx={{ gap: "16px" }}>
        <button onClick={handleClose}>Cancel</button>
        <button
          form="addForm"
          type="submit"
          disabled={isLoadingForAction}
          autoFocus
        >
          Add
        </button>
      </DialogActions>
    </Dialog>
  );
}
