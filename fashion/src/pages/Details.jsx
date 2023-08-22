import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../redux/productSlice";
import ProductDetails from "../components/detail/ProductDetails";
import Loading from "../components/Loading";

export default function Detail() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  return (
    <>
      {productDetailStatus === "LOADING" ? (
        <Loading />
      ) : (
        <ProductDetails productDetail={productDetail} />
      )}
    </>
  );
}
