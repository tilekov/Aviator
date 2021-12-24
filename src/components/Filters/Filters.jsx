import React, { useContext, useEffect } from "react";
import { Slider } from "antd";
import { productsContext } from "../../contexts/productsContext";

const Filters = ({price, setPrice}) => {
  const { getProducts } = useContext(productsContext);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div style={{ marginTop: "20px"}}>
        <h3 style={{textAlign:'center'}}>Фильтрация по цене</h3>
      <Slider
      style={{width:"25vw"}}
        value={price}
        onChange={(e) => setPrice(e)}   
        range
        defaultValue={[1, 100000]}
        min={0}
        max={100000}
        step={500}
      />
    </div>
  );
};

export default Filters;
