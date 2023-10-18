import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';


const ProductsDetails = () => {
  const [getdata, setGetdata] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(id);

  const productDetails = () => {
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
      setGetdata(res.data);
    });
  };

  useEffect(() => {
    console.log(getdata, "inside useeffect");
    productDetails();
  }, [id]);

  return (
    <div className="px-20">
      <h1 className="text-center text-3xl py-5 font-bold ">Selected Products</h1>
      <hr/>
      <div key={getdata.index} className="py-5">
        <div className="flex py-5">
        <Carousel showArrows={true} showIndicators={false} showStatus={false} showThumbs={false} autoPlay={true} 
        infiniteLoop={true} stopOnHover={true} className="!w-[500px]" >
            {getdata?.images?.map((lst)=>{return(
            <div key={getdata.id}>
              {console.log(getdata.id)}
                <img src={lst} className="h-96 !w-96" />
            </div>
            )})}
        </Carousel>
          <div>
            <div className=" flex items-center justify-between w-[500px] text-3xl">
              <h1 className="">{getdata.brand}</h1>
              <div className="">{getdata.title}</div>
            </div>
            <div className="flex items-center gap-10 text-2xl py-2">
              <h1>Price: ${getdata.price}</h1>
              <h1>discount: {getdata.discountPercentage}</h1>
            </div>
            <div>
              <span className="py-3 text-lg">Rating: {getdata.rating}</span>
            </div>
            <div>
              <p className="px-2 py-3">{getdata.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 px-5">
        <button
          className="bg-[#0275d8] rounded  text-white text-sm w-20 h-9"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
        
      </div>
    </div>
  );
};

export default ProductsDetails;
