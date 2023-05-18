import React, { useEffect, useState } from "react";
import Layout from "../src/components/common/Layout";
import { getCookie } from "../src/utils/cookies";
import { useGetMyProducts } from "../src/hooks";
import Loading from "../src/components/common/Loading";
import ProductCard from "../src/components/common/ProductCard";
import Link from "next/link";

const MyProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [flag, setFlag] = useState(false)
  const getProducts = useGetMyProducts(setLoading, setProducts, setFlag);

  useEffect(() => {
    if (products.length === 0 && !flag) {
      getProducts();
    }
  }, [products]);

  return (
    <Layout>
      <div className="row p-5 m-0">
        <div className="col-md-6">
          <h3>Mis productos</h3>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <Link href="/create-product">
            <a className="btn btn-primary text-light">Crear</a>
          </Link>
        </div>
      </div>
      <div className="row m-0">
        {!loading ? (
          <div>
            {products.length === 0 ? (
              <div>Aun no tienes productos en tu tienda</div>
            ) : (
              <div className="row p-5 m-0">
                {products.map((item, index) => {
                  return (
                    <div key={index} className="col-md-3">
                      <ProductCard key={item.id} {...item} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </Layout>
  );
};

MyProducts.getInitialProps = async ({ req, res }) => {
  const token = getCookie("token");
  if (!token) {
    res.setHeader("Location", "/");
    res.statusCode = 302;
    res.end();
  }
  return {};
};

export default MyProducts;
