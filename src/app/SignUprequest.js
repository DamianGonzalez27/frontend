import React from "react";
import { FaMailBulk } from "react-icons/fa";

const SignUpModel = {
  values: {
    email: "",
    name: "",
    password: "",
  },
  form: [
    {
      type: "text",
      name: "email",
      placeholder: "Email",
      icon: <FaMailBulk />,
    },
    {
      type: "text",
      name: "name",
      placeholder: "Name",
      icon: <FaMailBulk />,
    },
    {
      type: "password",
      name: "password",
    },
  ],
  validate: (values) => {
    const errors = {};

    return errors;
  },
};

export default SignUpModel;
