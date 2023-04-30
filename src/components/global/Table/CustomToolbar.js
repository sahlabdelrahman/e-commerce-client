import { IconButton, Tooltip } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

// import "./index.scss";

export default function CustomToolbar({ handleOpenAddModal }) {
  return (
    <>
      <Tooltip title="Add" onClick={() => handleOpenAddModal()}>
        <IconButton>
          <AddIcon />
        </IconButton>
      </Tooltip>
    </>
  );
}
