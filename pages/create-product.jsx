import React, { useState } from "react";
import Layout from "../src/components/common/Layout";
import { getCookie } from "../src/utils/cookies";
import CreateProductModel from "../src/app/CreateProduct";
import GeneralForm from "../src/components/forms/GeneralForm";
import Loading from "../src/components/common/Loading";
import { useCreateProduct } from "../src/hooks";

const CreateProduct = () => {
  const [loading, setLoading] = useState(false);
  const createProduct = useCreateProduct(setLoading);
  return (
    <Layout>
      <div className="row p-5 m-0">
        <h3>Crear producto</h3>
      </div>
      <div className="row m-0">
        <div className="col-md-8 container border p-2">
          <div>
            {!loading ? (
              <div className="card-body">
                <GeneralForm
                  model={CreateProductModel}
                  handleSubmit={createProduct}
                >
                  <div className="col-auto mb-3">
                    <button
                      className="btn btn-primary rounded-phill text-light mt-1 form-control"
                      type="submit"
                    >
                      Crear
                    </button>
                  </div>
                </GeneralForm>
              </div>
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

CreateProduct.getInitialProps = async ({ req, res }) => {
  const token = getCookie("token");
  if (!token) {
    res.setHeader("Location", "/");
    res.statusCode = 302;
    res.end();
  }
  return {};
};

export default CreateProduct;
