import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { FetchData } from "../redux/action";
const api = process.env.REACT_APP_API_URL;
const authToken = process.env.REACT_APP_TOKEN;

function Following() {
  // const [data, setData] = useState([]);
  // const [follower, setFollower] = useState("");
  // const [following, setfollowing] = useState("");
  let data = useSelector((state) => state.userData.userList);
  // console.log(JSON.stringify(data) + "data");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchData());
  }, []);
  
  

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
  //       // console.log("hi", res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div
      style={{
        boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
        overflow: "scroll",
        height: "500px",
        width:"700px",
        marginLeft: "300px",
        marginTop: "50px",
      }}
    >
      <h3 className="text-lg my-10 font-medium text-center leading-6 text-gray-900">
        User and thier followers
      </h3>
      <div>
        {
          data.map((elem)=>{
            console.log(elem.attributes.followers.data, "Follower data ")
          })
        }
      </div>
      {data.map((elem) => {
        return (
          
          <>
            <div style={{ display: "flex", padding: "5px", margin: "10px" }}>
              <img
                style={{
                  borderRadius: "50%",
                  height: "50px",
                  width: "50px",
                  margin: "10px",
                }}
                src="https://imgs.search.brave.com/aorxXvzVvKB-bT08hlS1UULTqIyNjIx-JVY4PxdxYBQ/rs:fit:300:300:1/g:ce/aHR0cHM6Ly93d3cu/d29ybGRmdXR1cmVj/b3VuY2lsLm9yZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/Mi9kdW1teS1wcm9m/aWxlLXBpYy0zMDB4/MzAwLTEucG5n"
                alt=""
              />
              <div style={{ textAlign: "left", margin: "5px" }}>
                <p>
                  {elem.attributes.firstName} {elem.attributes.lastName}
                </p>
                <p>{elem.attributes.email}</p>
              </div>
            </div>
            <div>

              {/* {elem.attributes.followers.data ? ( */}
                {elem.attributes.followers.data.map((follow) => {
                  return (
                    <>
                      <div
                        style={{
                          display: "flex",
                          padding: "5px",
                          margin: "10px",
                        }}
                      >
                        <img
                          style={{
                            borderRadius: "50%",
                            height: "50px",
                            width: "50px",
                            margin: "10px",
                          }}
                          src="https://imgs.search.brave.com/aorxXvzVvKB-bT08hlS1UULTqIyNjIx-JVY4PxdxYBQ/rs:fit:300:300:1/g:ce/aHR0cHM6Ly93d3cu/d29ybGRmdXR1cmVj/b3VuY2lsLm9yZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/Mi9kdW1teS1wcm9m/aWxlLXBpYy0zMDB4/MzAwLTEucG5n"
                          alt=""
                        />
                        <div style={{ textAlign: "left", margin: "5px" }}>
                          <p>
                            {follow.attributes.firstName}{" "}
                            {follow.attributes.lastName}
                          </p>
                          <p>{follow.attributes.email}</p>
                        </div>
                      </div>
                    </>
                  );
                })
              }
              {/* ) : (
                <p>0 Followers</p>
              )} */}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Following;