import React, { useEffect, useState } from "react";
import Layout from "../src/components/common/Layout";
import ProductCard from "../src/components/common/ProductCard";
import { useGetProducts } from "../src/hooks";
import Loading from "../src/components/common/Loading";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const getProducts = useGetProducts(setLoading, setProducts);
  useEffect(() => {
    if (products.length === 0) {
      getProducts();
    }
  }, [products]);

  return (
    <Layout>
      {!loading ? (
        <div className="row p-5 m-0">
          {products.map((item, index) => {
            return (
              <div key={index} className="col-md-3">
                <ProductCard key={item.id}  {...item}/>
              </div>
            );
          })}
        </div>
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

export default Home;
