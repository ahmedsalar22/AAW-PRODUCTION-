
const LoginPage = () => {
  return (
    <div className="">
      <h3 className="text-xl font-semibold mb-4">Login</h3>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            placeholder="Password"
          />
        </div>
        <div className="mb-4 flex items-center">
          <input type="checkbox" className="mr-2" />
          <label className="text-gray-700">Remember me</label>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Sign in
          </button>
          <button
            type="reset"
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
          >
            Reset
          </button>
          <a href="#" className="text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
