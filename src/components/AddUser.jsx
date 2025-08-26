
const AddUser = () => {
  return (
    <div>
        <h2>Add New User</h2>

        <form className="border border-gray-300 rounded-lg shadow-lg mt-10 max-w-96 mx-auto px-4 py-4">
              <div>
                {/* first input */}
                  <label className="block mb-1 font-semibold">Name:</label>
                  <input type="text" name="name" className="border w-full border-gray-300 p-2 ring-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter name"/>  
                {/* first input */}
                  <label className="block mb-1 font-semibold">email:</label>
                  <input type="text" name="email" className="border w-full border-gray-300 p-2 ring-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter email"/>  
                {/* first input */}
                  <label className="block mb-1 font-semibold">role:</label>
                  <input type="text" name="role" className="border w-full border-gray-300 p-2 ring-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter role"/>  
                {/* first input */}
                  <label className="block mb-1 font-semibold">Age:</label>
                  <input type="text" name="age" className="border w-full border-gray-300 p-2 ring-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter age"/>  
              </div>

              <button type="submit" className="bg-blue-500 mt-4 text-white 
              w-full py-2 rounded-lg hover:bg-blue-600">Add User</button>
        </form>
    </div>
  )
}

export default AddUser