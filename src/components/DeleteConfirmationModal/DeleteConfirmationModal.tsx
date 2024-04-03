import { WarningOutlined } from "@ant-design/icons";
import { Modal, Button } from "antd";
import form from "antd/lib/form";
import useStore from "../../hooks/useStore";
import styles from "./DeleteConfirmationModal.module.scss";
import { observer } from "mobx-react-lite";

const { icon } = styles;

const DeleteConfirmationModal = () => {
  const {
    deleteModalStore: { isVisible, closeModal, movie },
    moviesStore: { movies, setMovies },
  } = useStore();

  const handleOnClick = () => {
    if (!movie) {
      return;
    }

    const movieIndex = movies.indexOf(movie);
    if (movieIndex > -1) {
      movies.splice(movieIndex, 1);
    }

    setMovies(movies);
    closeModal();
  };

  return (
    <Modal
      visible={isVisible}
      title={
        <>
          <WarningOutlined className={icon} />
          WARNING
          <WarningOutlined className={icon} />
        </>
      }
      onOk={handleOnClick}
      onCancel={closeModal}
      footer={[
        <Button key="back" onClick={closeModal}>
          Return
        </Button>,
        <Button key="submit" type="primary" danger onClick={handleOnClick}>
          Delete
        </Button>,
      ]}
    >
      <p></p>
      <p>By pressing "Delete" the content will be erased permanently.</p>
    </Modal>
  );
};

export default observer(DeleteConfirmationModal);
