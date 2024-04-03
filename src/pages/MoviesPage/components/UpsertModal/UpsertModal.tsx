import { InboxOutlined } from "@ant-design/icons";
import { Modal, Button, Form, Input, Rate, Select, Upload } from "antd";
import { useEffect } from "react";
import MovieState from "../../../../enums/movieState";
import useStore from "../../../../hooks/useStore";
import { observer } from "mobx-react-lite";
import Operations from "./../../../../enums/operations";

const { useForm } = Form;
const { Option } = Select;

const UpsertModal = () => {
  const {
    upsertModalStore: { movie, isLoading, isVisible, closeModal, operation },
    moviesStore: { setMovies, movies },
  } = useStore();
  const [form] = useForm();

  const handleOnSubmit = () => {
    if (operation === Operations.Add) {
      movies.push({
        title: form.getFieldValue("title"),
        rating: form.getFieldValue("rating"),
        state: form.getFieldValue("state"),
        url: "dummy",
      });
    } else {
      if (!movie) {
        return;
      }

      movie.title = form.getFieldValue("title");
      movie.rating = form.getFieldValue("rating");
      movie.state = form.getFieldValue("state");
    }

    setMovies(movies);
    form.resetFields();
    closeModal();
  };

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  useEffect(() => {
    form.setFields([
      {
        name: "title",
        value: movie?.title,
      },
      {
        name: "rating",
        value: movie?.rating,
      },
      {
        name: "state",
        value: movie?.state,
      },
    ]);
  }, [movie]);

  return (
    <Modal
      forceRender
      visible={isVisible}
      title={movie ? movie.title : "New movie"}
      onOk={() => console.log(form)}
      onCancel={closeModal}
      footer={[
        <Button key="back" onClick={closeModal}>
          Return
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={isLoading}
          onClick={handleOnSubmit}
        >
          Submit
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          title: "",
          rating: 0,
          state: "",
        }}
        onValuesChange={() => {}}
        requiredMark="optional"
      >
        <Form.Item label="Title" required name="title">
          <Input placeholder="E.g.: Spider-man" />
        </Form.Item>
        <Form.Item name="state" label="Select" hasFeedback required>
          <Select placeholder="Please select a country">
            <Option value={MovieState.Wishlist}>Wishlist</Option>
            <Option value={MovieState.Seen}>Seen</Option>
          </Select>
        </Form.Item>
        <Form.Item name="rating" label="Rating">
          <Rate allowHalf allowClear />
        </Form.Item>
        <Form.Item label="Image">
          <Form.Item
            name="image"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger
              name="files"
              maxCount={1}
              customRequest={(e) => console.log(e)}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default observer(UpsertModal);
