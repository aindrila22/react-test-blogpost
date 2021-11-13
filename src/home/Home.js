import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { CheckCircle, Edit, Trash } from "react-feather";
import Form from "../components/Form";
import NewNav from "./../components/Navbar";

const Home = () => {
  const [posts, setPosts] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingText, setEditingText] = useState("");
  const [postEditing, setPostEditing] = React.useState(null);

  function activityPostHandler(e) {
    e.preventDefault();

    const newPost = {
      id: new Date().getTime(),
      title: title,
      content: content,
    };
    setPosts([...posts].concat(newPost));
    setTitle("");
    setContent("");
  }
  function deletePost(id) {
    let targetPosts = [...posts].filter((post) => post.id !== id);
    setPosts(targetPosts);
  }
  function submitEdits(id) {
    const updatedTodos = [...posts].map((todo) => {
      if (todo.id === id) {
        todo.content = editingText;
      }
      return todo;
    });
    setPosts(updatedTodos);
    setPostEditing(null);
  }
  return (
    <div className="max-h-screen">
      <NewNav />
      <div className="flex flex-wrap items-start mt-16 space-x-4">
        <div className="w-1/3 ">
          <Form
            activityPostHandler={activityPostHandler}
            titleOnchange={(e) => setTitle(e.target.value)}
            titleValue={title}
            contentOnchange={(e) => setContent(e.target.value)}
            contentValue={content}
          />
        </div>
        <div className="w-full flex flex-col-reverse pl-20 flex-1 bg-black">
          <Scrollbars style={{ width: "100%", height: "91vh" }}>
            {posts &&
              posts.map((p) => (
                <div
                  key={p.id}
                  className="block w-3/4 border rounded-md border-green-500 px-5 py-4 mt-5 mb-5"
                >
                  <div className="heading text-lg flex flex-wrap justify-between items-center">
                    <span className="ml-0 capitalize text-xl text-purple-500 bg-gray-900 px-4 py-2 font-bold">
                      {p.title}
                    </span>

                    <span className="flex items-center space-x-4">
                      {p.id === postEditing ? (
                        <CheckCircle
                          className="text-blue-400 cursor-pointer"
                          onClick={() => submitEdits(p.id)}
                        />
                      ) : (
                        <Edit
                          className="text-yellow-400 cursor-pointer"
                          onClick={() => setPostEditing(p.id)}
                        />
                      )}
                      <Trash
                        className="text-pink-700 cursor-pointer"
                        onClick={() => deletePost(p.id)}
                      />
                    </span>
                  </div>
                  <div className="pt-4">
                    <p className="text-green-400">
                      {p.id === postEditing ? (
                        <textarea
                          className="bg-black w-full border border-gray-50"
                          rows="4"
                          type="text"
                          onChange={(e) => setEditingText(e.target.value)}
                        />
                      ) : (
                        <div>{p.content}</div>
                      )}
                    </p>
                  </div>
                </div>
              ))}
          </Scrollbars>
        </div>
      </div>
    </div>
  );
};

export default Home;
