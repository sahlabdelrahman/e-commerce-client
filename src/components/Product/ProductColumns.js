import Actions from "../global/Table/Actions";

export default function ProductColumns(
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
      name: "item.title",
      label: "Title",
      options: {
        customBodyRender: (value) => <div>{value}</div>,
      },
    },
    {
      name: "item.description",
      label: "Description",
      options: {
        customBodyRender: (value) => (
          <div>
            {value.length > 40 ? `${value.substring(0, 40)}...` : value}
          </div>
        ),
      },
    },
    {
      name: "item.images",
      label: "Image",
      options: {
        customBodyRender: (value) => (
          <div>
            <img
              src={
                value.length > 0
                  ? value[0]?.url
                  : "/assets/images/default-image.png"
              }
              style={{
                height: "100px",
                width: "100px",
                objectFit: "contain",
              }}
              alt="Product"
            />
          </div>
        ),
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
