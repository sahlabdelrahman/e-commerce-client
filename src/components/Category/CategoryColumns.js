import Actions from "../global/Table/Actions";

export default function CategoryColumns(
  handleOpenDeleteModal,
  setDeleteModalData,
  handleOpenEditModal,
  setEditModalData
) {
  return [
    {
      name: "item._id",
      label: "Id",
      options: {
        customBodyRender: (value) => <div>{value}</div>,
      },
    },
    {
      name: "item.name",
      label: "Name",
      options: {
        customBodyRender: (value) => <div>{value}</div>,
      },
    },
    {
      name: "item",
      label: "Actions",
      options: {
        customBodyRender: (value) => (
          <Actions
            handleOpenDeleteModal={handleOpenDeleteModal}
            handleOpenEditModal={handleOpenEditModal}
            setDeleteModalData={setDeleteModalData}
            setEditModalData={setEditModalData}
            value={value}
          />
        ),
      },
    },
  ];
}
