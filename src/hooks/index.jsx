import { useEffect, useState, useRef, useCallback } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { errorAlert, successAlert } from "../utils/alerts";
import axiosInstance, { setAuthInterceptor } from "../api";
import useAppContext from "../context/app";
import { setCookie, getCookie, deleteCookie } from "../utils/cookies";

/**
 *  Modulo de agrupacion de hooks personalizados
 *
 * @module Hooks
 */

/**
 * @author DamianDev
 *
 * @description
 * Hook para oprimizar la carga y renderizado de los componentes mediante un LazyLoading del componetne.
 * Recibe como parámetro un elemento y un state para poder ser implementado adecuadamente en el dom
 *
 * @param {*} element
 * @param {*} setShow
 */
export const useLazyRender = () => {
  const [show, setShow] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== "undefined"
        ? window.IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    });
  }, [element]);

  return [element, show];
};

/**
 * @author DamianDev
 *
 * @description
 * Hook para almacenar datos en el localstorage de la aplicación
 *
 * @param {*} key
 * @param {*} initialValue
 * @returns
 */
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (e) {
      console.error(e);
    }
  };

  return [storedValue, setLocalStorage];
};

/**
 * Este Hook contiene una integración con Formik para realizar validaciones de formularios
 *
 * @param {Object} values - Valores a validar
 * @param {Function} onSubmit - Función que se ejecuta cuando el usuario preciona el boton de sumbimt
 * @param {Function} validate - Función con la lógica de validacion
 * @returns
 */
export const useValidate = (initialValues, onSubmit, validate) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return formik;
};

export const useSignIn = (setLoading) => {
  const router = useRouter();
  const [storedValue, setLocalStorage] = useLocalStorage('user', null)
  const { setSession, setUser } = useAppContext();
  const result = useCallback(async (values) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/auth/signin", values);
      successAlert(response.data.message);
      const { token, user } = response.data.data;
      setCookie("token", token);
      setLocalStorage(user)
      setUser(user)
      setSession(true);
      router.push("/");
    } catch (error) {
      errorAlert(error.response.data.message);
    }
    setLoading(false);
  });

  return {
    result,
  };
};

export const useSignUp = (setLoading) => {
  const router = useRouter();
  const result = useCallback(async (values) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/auth/signup", values);
      successAlert(response.message);
      router.push("/");
    } catch (error) {
      router.push("/signup");
      errorAlert(error.response.data.message);
    }
    setLoading(false);
  });

  return {
    result,
  };
};

export const useSignOut = () => {
  const [storedValue, setLocalStorage] = useLocalStorage('user', null)
  const router = useRouter();
  const { setSession } = useAppContext();
  const result = useCallback(async () => {
    try {
      const token = getCookie("token");
      setAuthInterceptor(token, axiosInstance);
      const response = await axiosInstance.post("/auth/signout");
      setSession(false);
      deleteCookie("token");      
      successAlert(response.data.message);
      setLocalStorage(null)
      router.reload();
    } catch (error) {
      errorAlert(error.response.data.message);
    }
  });

  return { result };
};

export const useGetProducts = (setLoading, setProducts) => {
  const getProducts = useCallback(async(params) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get('/products')
      setProducts(response.data.data)
    } catch (error) {
      errorAlert(error.response.data.message);
    }
    setLoading(false);
  })

  return getProducts
}

export const useAddProductShoppingCart = (setLoading, quantity = 1) => {
  const addProducts = useCallback(async(e) => {
    setLoading(true);
    try {
      const token = getCookie("token");
      setAuthInterceptor(token, axiosInstance);
      const response = await axiosInstance.put(`/shopping-cart/${e.target.id}`, {
        quantity
      });
      successAlert(response.data.message);
    } catch (error) {
      errorAlert(error.response.data.message);
    }
    setLoading(false);
  })

  return addProducts
}

export const useCreateStore = (setLoading, setStore) => {
  const { setUser } = useAppContext();
  const [storedValue, setLocalStorage] = useLocalStorage('user', null)
  const createStore = useCallback(async(values) => {
    setLoading(true);
    try {
      const token = getCookie("token");
      setAuthInterceptor(token, axiosInstance);
      const response = await axiosInstance.post(`/store`, values);
      let user = storedValue;
      user.store = values;
      setLocalStorage(user)
      setUser(user)
      setStore(values)
      successAlert(response.data.message);
    } catch (error) {
      errorAlert(error.response.data.message);
    }
    setLoading(false);
  })

  return createStore
}

export const useGetMyProducts = (setLoading, setProducts, setFlag) => {
  const getProducts = useCallback(async() => {
    setLoading(true);
    try {
      const token = getCookie("token");
      setAuthInterceptor(token, axiosInstance);
      const response = await axiosInstance.get('/my-products')
      setProducts(response.data.data)
    } catch (error) {
      errorAlert(error.response.data.message);
    }
    setFlag(true)
    setLoading(false);
  })

  return getProducts
}

export const useGetMyShoppingCart = (setLoading, setProducts, setFlag) => {
  const getProducts = useCallback(async() => {
    setLoading(true);
    try {
      const token = getCookie("token");
      setAuthInterceptor(token, axiosInstance);
      const response = await axiosInstance.get('/shopping-cart')
      setProducts(response.data.data)
    } catch (error) {
      errorAlert(error.response.data.message);
    }
    setFlag(true)
    setLoading(false);
  })

  return getProducts
}

export const useCreateProduct = (setLoading) => {
  const router = useRouter();
  const createProduct = useCallback(async(values) => {
    setLoading(true);
    try {
      const token = getCookie("token");
      setAuthInterceptor(token, axiosInstance);
      const response = await axiosInstance.post(`/products`, values);
      successAlert(response.data.message);
      router.push('/my-products')
    } catch (error) {
      errorAlert(error.response.data.message);
    }
    setLoading(false);
  })

  return createProduct
}