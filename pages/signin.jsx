import React, { useState } from "react";
import Layout, { RegisterLayout } from "../src/components/common/Layout";
import Loading from "../src/components/common/Loading";
import GeneralForm from "../src/components/forms/GeneralForm";
import SignInModel from "../src/app/SignInRequest";
import { useSignIn } from "../src/hooks";

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const { result } = useSignIn(setLoading);
  return (
    <Layout>
      <RegisterLayout>
        <div className="card col-md-12">
          <div className="card-header text-center">
            <h3>SignIn</h3>
          </div>
          {!loading ? (
            <div className="card-body">
              <GeneralForm model={SignInModel} handleSubmit={result}>
                <div className="col-auto mb-3">
                  <button
                    className="btn btn-primary rounded-phill text-light mt-1 form-control"
                    type="submit"
                  >
                    Acceder
                  </button>
                </div>
              </GeneralForm>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </RegisterLayout>
    </Layout>
  );
};

export default Signin;
