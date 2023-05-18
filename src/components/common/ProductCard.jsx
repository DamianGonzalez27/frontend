import React, { useCallback, useState } from "react";
import useAppContext from "../../context/app";
import Loading from "./Loading";
import { useAddProductShoppingCart } from "../../hooks";

const ProductCard = ({ name, price, url, id }) => {
  const { session } = useAppContext();
  const [loading, setLoading] = useState(false);

  const addProducts = useAddProductShoppingCart(setLoading)

  return (
    <div className="card clickable mb-4" style={{ width: "18rem" }}>
      <img src={url} className="card-img-top border" alt="..." />
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-center">{name}</li>
        <li className="list-group-item text-center text-success">
          ${price} <strong>MXN</strong>
        </li>
        {session ? (
          <li className="list-group-item text-center text-success">
            {!loading ? (
              <button
                className="btn btn-primary text-light"
                id={id}
                onClick={addProducts}
              >
                Agregar al carrito
              </button>
            ) : (
              <Loading />
            )}
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};

export default ProductCard;
