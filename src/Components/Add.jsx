import React, { useState } from "react";
import { postData } from "../redux/action";

import { useDispatch } from "react-redux";

function Add() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    dispatch(postData(formData));
  };
  return (
    <div style={{}}>
      <div className="">
        <div className="md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <h3 className="text-lg my-10 font-medium text-center leading-6 text-gray-900">
              Create an Account
            </h3>
            <form onSubmit={handelSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="">
                    <div className="col-span-6 sm:col-span-3">
                      <input
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          });
                        }}
                        type="text"
                        name="first-name"
                        id="first-name"
                        placeholder="First Name"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <input
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            lastName: e.target.value,
                          });
                        }}
                        type="text"
                        name="last-name"
                        id="last-name"
                        placeholder="Last Name"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <input
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                        }}
                        type="text"
                        name="email-address"
                        id="email-address"
                        placeholder="Email id"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-center sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
