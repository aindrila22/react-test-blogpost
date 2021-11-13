import { Button } from "@mui/material";
import React from "react";

const Form = ({
  activityPostHandler,
  titleOnchange,
  titleValue,
  contentOnchange,
  contentValue,
}) => {
  return (
    <div className="modal max-w-7xl px-2 md:px-10 py-2 md:py-10 ">
      <form className="w-full mb-4" onSubmit={activityPostHandler}>
        <label className="block uppercase px-4 py-4 tracking-wide text-green-600 bg-green-200  text-xl font-bold mb-4 ">
          New Post
        </label>

        <div className="flex flex-wrap mb-4">
          <div className="w-full px-3">
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3
                px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"
              type="text"
              placeholder="title"
              onChange={titleOnchange}
              value={titleValue}
            />
          </div>
        </div>

        <div className="flex flex-wrap mb-4">
          <div className="w-full px-3">
            <textarea
              rows="6"
              className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3
                px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="your content"
              onChange={contentOnchange}
              value={contentValue}
            />
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 w-full">
          <span></span>
          <span className="space-x-3">
            <Button variant="outlined" color="error">
              Cancel
            </Button>
            <Button variant="contained" type="submit" color="success">
              Create
            </Button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Form;
