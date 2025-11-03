
const Register = () => {
  return (
    <div className="">
      <h3 className="text-xl font-semibold mb-4">Register</h3>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">First and last name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            placeholder="First and last name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded"
            placeholder="Email"
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
        <div className="mb-4">
          <label className="block text-gray-700">Confirm password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            placeholder="Confirm password"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            placeholder="Address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            placeholder="Phone"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Register
          </button>
          <button
            type="reset"
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
