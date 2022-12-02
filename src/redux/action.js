import axios from "axios";
export const GET_DATA_LOADING = "GET_DATA_LOADING";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";
const api = process.env.REACT_APP_API_URL;
const authToken = process.env.REACT_APP_TOKEN;

const getDataLoading = () => {
  return {
    type: GET_DATA_LOADING,
  };
};
const getDataSuccess = (payload) => {
  return {
    type: GET_DATA_SUCCESS,
    payload,
  };
};
const getDataFailure = () => {
  return {
    type: GET_DATA_FAILURE,
  };
};


export const FetchData = () => (dispatch) => {
   dispatch(getDataLoading());

axios({
    url: `${api}/?populate=*`,
    method: "GET",

    headers: {
      AUTHORIZATION: `Bearer ${authToken}`,
    },
  })
    .then((res) => {
        dispatch(getDataSuccess(res.data.data));
    //   setData(res.data.data);
    //   console.log("hi", res.data);
    })
    .catch((err) => {
        console.log(err)
         dispatch(getDataFailure());
    });

    }


// const config = {
//     headers: {
//       Authorization: `Bearer ${authToken}`,
//     },
//   };

//   const payload = {
//     data: {
//       ...pld,
//     },
//   };

//   axios({
//     url: `${api}`,
//     method: "GET",
//     data: JSON.stringify(payload),
//     headers: {
//       AUTHORIZATION: `Bearer ${authToken}`,
//     },
//   })
//     .then((res) => {
//       console.log("res", res);
//     })
//     .catch((err) => console.log(err));

 
// };
// export const GetSingleBookData = (id) => (dispatch) => {
// //   dispatch(getDataLoading());
//   axios
//     .get(`http://localhost:8080/books/${id}`)
//     .then((res) => {
//     //   dispatch(getSingleBook(res.data));
//     })
//     .catch((err) => {
//     //   dispatch(getDataFailure());
//       console.log(err);
//     });
// };

export const postData = (pld) => (dispatch) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${authToken}`,
//     },
//   };

  const payload = {
    data: {
      ...pld,
    },
  };

  axios({
    url: `${api}`,
    method: "POST",
    data: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      AUTHORIZATION: `Bearer ${authToken}`,
    },
  })
    .then((res) => {
      console.log("res", res);
    })
    .catch((err) => console.log(err));

 
};
