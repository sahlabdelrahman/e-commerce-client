import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Table from "../../../components/global/Table";
import AddModal from "../../../components/global/Modals/AddModal";
import DeleteModal from "../../../components/global/Modals/DeleteModal";
import EditModal from "../../../components/global/Modals/EditModal";

const GlobalForAdmin = ({
  title,
  description,
  Icon,
  tableTitle,
  tableColumns,
  apiCall,
  data,
  isLoading,
  isLoadingForAction,
  apiCallForAdd,
  FieldsForAdd,
  FieldsForEdit,
  apiCallForEdit,
  apiCallForDelete,
  selectDependToAnother,
}) => {
  const { auth } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiCall());
  }, [dispatch, apiCall]);

  const [openAddModal, setOpenAddModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [deleteModalData, setDeleteModalData] = useState(null);
  const [editModalData, setEditModalData] = useState(null);
  const [images, setImages] = useState([]);

  const handleOpenAddModal = () => {
    setOpenAddModal(true);
  };

  const handleCloseAddModal = () => {
    setOpenAddModal(false);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleOpenEditModal = () => {
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  return (
    <div>
      <div className="pageHeader">
        <h2 className="pageTitle">
          <Icon sx={{ marginRight: "5px" }} />
          {title}
        </h2>
        <p>{description}</p>
      </div>
      <Table
        data={data}
        tableColumns={tableColumns}
        tableTitle={tableTitle}
        isLoading={isLoading}
        handleOpenAddModal={handleOpenAddModal}
        handleOpenDeleteModal={handleOpenDeleteModal}
        handleOpenEditModal={handleOpenEditModal}
        setDeleteModalData={setDeleteModalData}
        setEditModalData={setEditModalData}
      />
      <AddModal
        open={openAddModal}
        handleClose={handleCloseAddModal}
        Fields={FieldsForAdd}
        apiCallForAdd={apiCallForAdd}
        isLoadingForAction={isLoadingForAction}
        token={auth?.token}
        selectDependToAnother={selectDependToAnother}
        images={images}
        setImages={setImages}
      />
      <DeleteModal
        open={openDeleteModal}
        handleClose={handleCloseDeleteModal}
        apiCallForDelete={apiCallForDelete}
        deleteModalData={deleteModalData}
        isLoadingForAction={isLoadingForAction}
        token={auth?.token}
      />
      <EditModal
        open={openEditModal}
        handleClose={handleCloseEditModal}
        Fields={FieldsForEdit}
        apiCallForEdit={apiCallForEdit}
        editModalData={editModalData}
        isLoadingForAction={isLoadingForAction}
        token={auth?.token}
        selectDependToAnother={selectDependToAnother}
        images={images}
        setImages={setImages}
      />
    </div>
  );
};

export default GlobalForAdmin;
