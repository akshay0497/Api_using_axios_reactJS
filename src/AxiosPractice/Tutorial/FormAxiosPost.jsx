import axios from "axios";
import React, { useState } from "react";

const FormAxiosPost = () => {
  const data = { firstname: "", lastname: "" };
  const [inputData, setInputdata] = useState(data);

  const handleData = (e) => {
    setInputdata({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", inputData)
      //   .post("http://192.168.1.38:3000", inputData)
      .then((response) => {
        console.log(response);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("https://jsonplaceholder.typicode.com/users/1", inputData)
      //   .post("http://192.168.1.38:3000", inputData)
      .then((response) => {
        console.log(response);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete("https://jsonplaceholder.typicode.com/users/1", inputData)
      //   .post("http://192.168.1.38:3000", inputData)
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="my-[10%] mx-[20%]">
      <h1 className="text-center py-5 text-3xl font-semibold ">
        Axios Tutorial
      </h1>
      <form className="flex flex-col items-center gap-5 ">
        <div className="flex items-center gap-5">
          <label>First Name:</label>
          <input
            type="text"
            value={inputData.firstname}
            name="firstname"
            id="firstname"
            onChange={handleData}
            placeholder="Enter your first name"
            className="p-2 border rounded"
          />
        </div>

        <div className="flex items-center gap-5">
          <label>Last Name:</label>
          <input
            type="text"
            value={inputData.lastname}
            name="lastname"
            id="lastname"
            onChange={handleData}
            placeholder="Enter your last name"
            className="p-2 border rounded"
          />
        </div>

        <div className="grid grid-cols-3 gap-20">
          <button type="submit" onClick={handleSubmit} className="bg-[#]">
            Save
          </button>
          <button type="submit" onClick={handleUpdate}>Update</button>
          <button type="submit" onClick={handleDelete}>Delete</button>
        </div>
      </form>
    </div>
  );
};

export default FormAxiosPost;
