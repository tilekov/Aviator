import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Form, Input, InputNumber } from "antd";
import { productsContext } from "../../contexts/productsContext";
// import { brandsContext } from "../../contexts/brandsContext";

const EditProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { getOneProduct, oneProduct, updateProduct } =
    useContext(productsContext);
//   const { getBrands, brands } = useContext(brandsContext);
  const [form] = Form.useForm();
  useEffect(() => {
    getOneProduct(params.id);
    // getBrands();
  }, []);
  useEffect(() => {
    form.setFieldsValue(oneProduct);
  }, [oneProduct]);
  const onFinish = (values) => {
    console.log("Success:", values);
    updateProduct(params.id, values).then(() => navigate("/admin"));
  };
  return (
    <div className="container" style={{ marginTop: "15px",display:"flex", flexDirection:"column", alignItems:"center" }}>
      <h2 style={{textAlign:"center"}}>Edit product</h2>
      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        form={form}
        style={{width:"50%"}}
      >

        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input title!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input description!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input price!",
            },
          ]}
        >
          <InputNumber min={1} style={{width: "100%"}} />
        </Form.Item>

        <Form.Item
          label="Photo 1"
          name="photo1"
          rules={[
            {
              required: true,
              message: "Please input URL of photo 1!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Photo 2"
          name="photo2"
          rules={[
            {
              required: true,
              message: "Please input URL of photo 2!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Photo 3"
          name="photo3"
          rules={[
            {
              required: true,
              message: "Please input URL of photo 3!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 9,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Edit product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProduct;
