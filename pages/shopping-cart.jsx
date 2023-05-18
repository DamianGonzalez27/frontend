import React, { useEffect, useState } from "react";
import Layout from "../src/components/common/Layout";
import { getCookie } from "../src/utils/cookies";
import { useGetMyShoppingCart } from "../src/hooks";
import Loading from "../src/components/common/Loading";

const ShippingCart = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [flag, setFlag] = useState(false);
  const getProducts = useGetMyShoppingCart(setLoading, setProducts, setFlag);

  useEffect(() => {
    if (products.length === 0 && !flag) {
      getProducts();
    }
  }, [products]);

  return (
    <Layout>
      <div className="row p-5 m-0">
        <div className="col-md-6">
          <h3>Mis productos en carrito</h3>
        </div>
      </div>
      <div className="row m-0">
        <div className="col md 8">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre del producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Aciones</th>
              </tr>
            </thead>
            {!loading ? (
              products.length === 0 ? (
                <tbody>
                  <tr>Aun no tienes productos en tu carrito</tr>
                </tbody>
              ) : (
                <tbody>
                  {products.map((item, index) => {
                    return (
                      <tr>
                        <th scope="col">{item.id}</th>
                        <th scope="col">{item.name}</th>
                        <th scope="col">1</th>
                        <th scope="col">${item.price} MXN</th>
                        <th scope="col">
                          <button className="btn btn-danger">Eliminar</button>
                        </th>
                      </tr>
                    );
                  })}
                </tbody>
              )
            ) : (
              <Loading />
            )}
          </table>
        </div>
      </div>
    </Layout>
  );
};

ShippingCart.getInitialProps = async ({ req, res }) => {
  const token = getCookie("token");
  if (!token) {
    res.setHeader("Location", "/");
    res.statusCode = 302;
    res.end();
  }
  return {};
};

export default ShippingCart;
