import React, { useState } from "react";
import Layout from "../src/components/common/Layout";
import { getCookie } from "../src/utils/cookies";
import useAppContext from "../src/context/app";
import CreateStoreModel from "../src/app/CreateStore";
import GeneralForm from "../src/components/forms/GeneralForm";
import { useCreateStore } from "../src/hooks";
import Loading from "../src/components/common/Loading";

const MyStore = () => {
  const { user } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [store, setStore] = useState(user?.store);
  const createStore = useCreateStore(setLoading, setStore);

  return (
    <Layout>
      <div className="row p-5 m-0">
        <h3>Mi tienda</h3>
      </div>
      <div className="row m-0">
        <div className="col-md-8 container border  p-2">
          {!store ? (
            <div>
              {!loading ? (
                <div className="card-body">
                  <GeneralForm model={CreateStoreModel} handleSubmit={createStore}>
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
          ) : (
            <div className="col-md-6 p-5">
              <div>
                Nombre de la tienda: <strong>{store.name}</strong>
              </div>
              <div>
                Descripcion de la tienda: <strong>{store.description}</strong>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

MyStore.getInitialProps = async ({ req, res }) => {
  const token = getCookie("token");
  if (!token) {
    res.setHeader("Location", "/");
    res.statusCode = 302;
    res.end();
  }
  return {};
};

export default MyStore;
