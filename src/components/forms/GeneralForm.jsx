import React from "react";
import InputMaker from "./inputs";
import { useValidate } from "../../hooks";

const GeneralForm = ({ children, model, handleSubmit }) => {
  const formik = useValidate(model.values, handleSubmit, model.validate);
  return (
    <form onSubmit={formik.handleSubmit}>
      {model.form.map((item, index) => (
        <InputMaker
          key={index}
          {...item}
          onChange={formik.handleChange}
          value={formik.values[item.name]}
          error={formik.errors[item.name]}
        />
      ))}
      {children}
    </form>
  );
};

export default GeneralForm;
