import React, { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  return products;
};

export default useGetProducts;
