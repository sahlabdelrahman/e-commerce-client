import Actions from "../global/Table/Actions";

export default function SubCategoryColumns(
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
      name: "item.category.name",
      label: "Category",
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
