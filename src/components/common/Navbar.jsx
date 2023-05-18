import Link from "next/link";
import useAppContext from "../../context/app";
import React from "react";
import { useSignOut } from "../../hooks";

const Navbar = () => {
  const { session, user } = useAppContext();
  const { result } = useSignOut();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid row">
        <Link href="/">
          <a className="navbar-brand col-sm-2 d-flex justify-content-center text-light">
            Home
          </a>
        </Link>
        <div className="col-2 text-light">
          {session ? (
            <div className="btn-group dropstart">
              <button
                type="button"
                className="btn btn-primary text-light dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user?.name ?? 'Menu'}
              </button>
              <ul className="dropdown-menu">
                <Link href="/my-store">
                  <a className="dropdown-item" >
                    Store
                  </a>
                </Link>
                <Link href="/my-products">
                  <a className="dropdown-item">
                    Products
                  </a>
                </Link>
                <Link href="/shopping-cart">
                  <a className="dropdown-item">
                    Shopping cart
                  </a>
                </Link>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item text-center clickable"
                    onClick={result}
                  >
                    SignOut
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="row">
              <div className="col-6 p-1">
                <Link href="/signin">
                  <button className="btn btn-success form-control text-light">
                    Iniciar sesion
                  </button>
                </Link>
              </div>
              <div className="col-6 p-1 d-flex align-items-center">
                <Link href="/signup">
                  <a className="btn btn-primary text-light form-control">
                    Registrate
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
