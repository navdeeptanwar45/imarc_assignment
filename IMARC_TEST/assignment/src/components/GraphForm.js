import React, { useState } from "react";
import { useData } from "../Context/DataContext";
import { useNavigate,useLocation } from "react-router-dom";

const GraphForm = () => {
  const navigate=useNavigate()
  const location = useLocation();
  const { index } = location.state||{index:null}
  const { data, setData } = useData();
  const [product, setProduct] = useState(index?data[index-1]:{
    itemName: "",
    description: "",
    values: [],
  });

  const handleItemNameChange = (e) => {
    const tempProduct = { ...product };
    tempProduct.itemName = e.target.value;
    setProduct(tempProduct);
  };
  const handleDescriptionChange = (e) => {
    const tempProduct = { ...product };
    tempProduct.description = e.target.value;
    setProduct(tempProduct);
  };
  const addProduct = () => {
    const tempData = [...data];
    if(index){
      tempData[index-1]={...product}
      setData([...tempData])
    }else{
      setData([...tempData, { ...product }]);
    }
    console.log(product)
    console.log(data)
  };
  const addPrice = () => {
    const prevPriceList = [...product.values];
    setProduct({
      ...product,
      values: [...prevPriceList, { price: "", date: "" }],
    });
  };
  const removePrice = (index) => {
    const prevPriceList = [...product.values];
    prevPriceList.splice(index, 1);
    setProduct({ ...product, values: [...prevPriceList] });
  };
  const handleDateChange = (value, index) => {
    const prevPriceList = [...product.values];
    prevPriceList[index].date = value;
    setProduct({ ...product, values: [...prevPriceList] });
  };

  const handlePriceChange = (value, index) => {
    const prevPriceList = [...product.values];
    prevPriceList[index].price = value;
    setProduct({ ...product, values: [...prevPriceList] });
  };

  return (
    <div>
      <h2>IMARC Graph Form</h2>
      <div style={{ display: "flex",alignItems:'center' }}>
        <div>
          <label>Product Type</label>
          <input
            type="text"
            value={product.itemName}
            onChange={handleItemNameChange}
          />
        </div>
        <div>
          <label> Description of Product</label>
          <input
            type="text"
            value={product.description}
            onChange={handleDescriptionChange}
          />
        </div>
        <button style={{margin:'5px', padding:'5px'}} onClick={addProduct}>Add Changes</button>
        <button style={{margin:'5px', padding:'5px'}} onClick={addPrice}>Add New Price</button>
        <button style={{margin:'5px', padding:'5px'}} onClick={()=>{navigate('/graphlist')}}>View All Graphs</button>

      </div>
      {product.values.map((item, index) => {
        return (
          <div key={index} style={{ display: "flex" }}>
            <div>
              <label>Price</label>
              <input
                type="number"
                value={item.price}
                onChange={(e) => {
                  handlePriceChange(e.target.value, index);
                }}
              />
            </div>
            <div>
              <label> Date</label>
              <input
                type="date"
                value={item.date}
                onChange={(e) => {
                  handleDateChange(e.target.value, index);
                }}
              />
            </div>
            <button onClick={() => removePrice(index)}>Remove Price</button>
          </div>
        );
      })}
    </div>
  );
};

export default GraphForm;
