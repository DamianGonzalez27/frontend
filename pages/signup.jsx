import React, { useState } from "react";
import Layout, { RegisterLayout } from "../src/components/common/Layout";
import Loading from "../src/components/common/Loading";
import GeneralForm from "../src/components/forms/GeneralForm";
import SignUpModel from "../src/app/SignUprequest";
import { useSignUp } from "../src/hooks";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const { result } = useSignUp(setLoading);
  return (
    <Layout>
      <RegisterLayout>
        <div className="card col-md-12">
          <div className="card-header text-center">
            <h3>SignUp</h3>
          </div>
          {!loading ? (
            <div className="card-body">
              <GeneralForm model={SignUpModel} handleSubmit={result}>
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

export default SignUp;
