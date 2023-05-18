import React from "react";
import { FaHome } from "react-icons/fa";

const CreateProductModel = {
  values: {
    name: "",
    description: "",
    price: "",
    url: "",
  },
  form: [
    {
      type: "text",
      name: "name",
      placeholder: "Nombre del producto",
      icon: <FaHome />,
    },
    {
      type: "text",
      name: "description",
      placeholder: "Descripcion del producto",
      icon: <FaHome />,
    },
    {
      type: "text",
      name: "price",
      placeholder: "Precio del producto",
      icon: <FaHome />,
    },
    {
      type: "text",
      name: "url",
      placeholder: "Imagen del producto",
      icon: <FaHome />,
    },
  ],
  validate: (values) => {
    const errors = {};

    return errors;
  },
};

export default CreateProductModel;
