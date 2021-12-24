import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Empty, Input, Pagination } from "antd";

import { productsContext } from "../../contexts/productsContext";
import Filters from "../Filters/Filters";
import "./ProductsList.css";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(
    searchParams.get("_limit") ? searchParams.get("_limit") : 4
  );
  const [price, setPrice] = useState([0,99999]);
  const { getProducts, products, productsTotalCount } =
    useContext(productsContext);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      _limit: limit,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, []);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      _limit: limit,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [search, page, limit, price]);
  console.log(products);
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div className="products-search">
        <Filters price={price} setPrice={setPrice} />
        <Input.Search
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "25vw" }}
          placeholder="Search..."
        />
      </div>
      <div className="products-list">
        {products.length > 0 ? (
          products.map((item) => <ProductCard item={item} />)
        ) : (
          <Empty style={{ marginBottom: "20px" }} />
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
          current={+page}
          pageSize={+limit}
          defaultCurrent={1}
          total={+productsTotalCount}
        />
      </div>
    </div>
  );
};

export default ProductsList;
