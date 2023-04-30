import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Actions({
  handleOpenDeleteModal,
  handleOpenEditModal,
  setDeleteModalData,
  setEditModalData,
  value,
}) {
  const handleDeleteModal = (id) => {
    setDeleteModalData(id);
    handleOpenDeleteModal();
  };
  const handleEditModal = (value) => {
    setEditModalData(value);
    handleOpenEditModal();
  };

  return (
    <div>
      <Tooltip title="Edit" onClick={() => handleEditModal(value)}>
        <IconButton>
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete" onClick={() => handleDeleteModal(value?.slug)}>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}
