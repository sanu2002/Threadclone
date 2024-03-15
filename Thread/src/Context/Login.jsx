import React from "react";

const Login = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://static.cdninstagram.com/rsrc.php/v3/ye/r/YVr3E4VYzmE.png')",
      }}
    >
      <div className="bg-white bg-opacity-30 p-8 mt-20 rounded-lg w-96 ">
        <h2 style={{'color':'black'}} className="text-2xl font-bold mb-4 ">Login</h2>
        <form>
          <input
            type="text"
            placeholder="Username"
            className="block w-full p-2 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="block w-full p-2 mb-4 border rounded"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
