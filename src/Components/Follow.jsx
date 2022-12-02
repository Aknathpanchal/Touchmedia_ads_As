import React, { useEffect, useState } from "react";
import axios from "axios";
import {useSelector,useDispatch} from "react-redux"
import { FetchData } from "../redux/action";
const api = process.env.REACT_APP_API_URL;
const authToken = process.env.REACT_APP_TOKEN;

function Follow() {

  // const [follower, setFollower] = useState("");
  // const [following, setfollowing] = useState("");

let data =useSelector((state)=>state.userData.userList)
// console.log(JSON.stringify(data) + "data")
const dispatch = useDispatch()

useEffect(()=>{

  dispatch(FetchData())

},[])
 



  // const getData = () => {
  //   axios({
  //     url: `${api}/?populate=*`,
  //     method: "GET",
  //     headers: {
  //       AUTHORIZATION: `Bearer ${authToken}`,
  //     },
  //   })
  //     .then((res) => {
  //       setData(res.data.data);
  //        console.log("hi", res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  // const handelChose = (e) => {
  //   e.preventDefault();
  //   setuserid(e.target.value)
  //   // getData();
  //   const newdata = data.filter((elem) => elem.id != e.target.value);
  //   setData(newdata);
  // };
  const handelFollow = (e) => {
    // e.preventDefault();
    // setflag(!false)

  };
  // console.log(userid);
  return (
    <div style={{}}>
      <h3 className="text-lg font-medium text-center my-10 leading-6 text-gray-900">
        Follow Now
      </h3>
      <form onSubmit={handelFollow}>
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-gray-300 px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select User
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  // onChange={(e) => {
                  //   handelChose(e);
                  // }}
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Select User</option>
                  {data.map((elem) => (
                  // if(follower!==elem.attributes.firstName){
                    <option key={elem.id} value={elem.id}>
                    {`${elem.attributes.firstName} ${elem.attributes.lastName}`}
                  </option>
                  // {setfollowing(elem.attributes.firstName)}
                  // }
                ))}
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Following To
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Select user to whom to follow</option>
                  {data.map((elem) => {
                    return (
                      <option key={elem.id} value={elem.id}>
                        {`${elem.attributes.firstName} ${elem.attributes.lastName}`}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 px-4 py-3 text-center sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              FOLLOW
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Follow;
