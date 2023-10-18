import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const GetAllProducts = () => {
  const [getdata, setGetdata] = useState([]);
  const navigate = useNavigate();
  const [seemore, setSeemore] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  console.log(seemore);
  
  const seemoreData = () => {
    axios.get(`https://dummyjson.com/products?limit=${seemore}`).then((res) => {
      setSeemore(res.data);
      console.log(seemore.data);
    });
  };
  console.log(seemore);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://dummyjson.com/products").then((response) => {
      console.log(response.data);
      setGetdata(response.data.products);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <div className="flex justify-center items-center h-screen">
      <CircularProgress />
    </div>
  ) : (
    <div>
      <h1 className="text-center text-3xl py-5">All Products</h1>

      <div className="grid grid-cols-5 gap-10 px-5">
        {getdata.map((data) => {
          return (
            <div key={data.id} className="border">
              <img className="!h-20 w-52 px-5 py-2" src={data.thumbnail} />
              <div className="px-5">
                <h1 className="py-2 font-semibold">{data.title}</h1>
                <p className="truncate text-sm hover:whitespace-normal">
                  {data.description}
                </p>
              </div>
              <div className="py-5 px-5">
                <button
                  className="bg-[#0275d8] rounded  text-white text-sm w-20 h-9"
                  onClick={() => navigate(`/products/${data.id}`)}
                >
                  See More
                </button>
              </div>
            </div>
          );
        })}
        <div className="py-5 px-5">
          <button
            className="bg-[#0275d8] rounded  text-white text-sm w-20 h-9"
            // onClick={() => navigate(`/product/limit${seemore}`)}
          >
            limit
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetAllProducts;
