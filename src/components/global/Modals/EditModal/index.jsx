import { useDispatch } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";

import "../index.scss";

export default function EditModal({
  open,
  handleClose,
  apiCallForEdit,
  editModalData,
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
    await dispatch(
      apiCallForEdit({ ...data, images, slug: editModalData?.slug, token })
    );
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
      className="editDialog"
    >
      <DialogTitle
        sx={{ display: "flex", alignItems: "center", gap: "4px" }}
        id="alert-dialog-title"
      >
        <EditIcon /> {"Edit"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Do you want to edit this item?
        </DialogContentText>
        <FormProvider {...methods}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
            noValidate
            autoComplete="off"
            id="editForm"
          >
            <Fields
              data={editModalData}
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
          form="editForm"
          type="submit"
          disabled={isLoadingForAction}
          autoFocus
        >
          Edit
        </button>
      </DialogActions>
    </Dialog>
  );
}
