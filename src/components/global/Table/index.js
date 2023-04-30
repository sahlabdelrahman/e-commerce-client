import { CircularProgress, Typography } from "@mui/material";
import MUIDataTable from "mui-datatables";
import CustomToolbar from "./CustomToolbar";

const Table = ({
  tableTitle,
  isLoading,
  data,
  tableColumns,
  handleOpenAddModal,
  handleOpenDeleteModal,
  handleOpenEditModal,
  setDeleteModalData,
  setEditModalData,
}) => {
  const options = {
    filter: false,
    selectableRows: "none",
    searchPlaceholder: "Search",
    responsive: "standard",
    enableNestedDataAccess: ".",
    rowsPerPage: 8,
    rowsPerPageOptions: [0],
    tableBodyHeight: "350px",
    customToolbar: () => (
      <CustomToolbar handleOpenAddModal={handleOpenAddModal} />
    ),
    textLabels: {
      body: {
        noMatch: isLoading ? "Loading..." : "Sorry, no matching records found",
      },
    },
  };

  return (
    <MUIDataTable
      className="muiDataTableCustom"
      title={
        <Typography variant="h6">
          {tableTitle}
          {isLoading && (
            <CircularProgress
              size={24}
              style={{ marginLeft: 15, position: "relative", top: 4 }}
            />
          )}
        </Typography>
      }
      data={
        data?.length > 0
          ? data?.map((item) => {
              return { item: item };
            })
          : []
      }
      columns={
        tableColumns()?.length > 0
          ? tableColumns(
              handleOpenDeleteModal,
              setDeleteModalData,
              handleOpenEditModal,
              setEditModalData
            )
          : []
      }
      options={options}
    />
  );
};

export default Table;
