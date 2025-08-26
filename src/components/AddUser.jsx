import { useForm } from "react-hook-form"



const AddUser = () => {

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div>
        <h2>Add New User</h2>

        <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-gray-300 rounded-lg shadow-lg mt-10 max-w-96 mx-auto px-4 py-4">
              <div>
                {/* first input */}
                  <label className="block mb-1 font-semibold">Name:</label>
                  <input type="text" name="name" className="border w-full border-gray-300 p-2 ring-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter name"
                  {...register("name", { required: "Name is required" })} />
                  {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                {/* first input */}
                  <label className="block mb-1 font-semibold">email:</label>
                  <input type="text" name="email" className="border w-full border-gray-300 p-2 ring-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter email"
                  {...register("email", { required: "Email is required" })} />
                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                
                {/* first input */}
                  <label className="block mb-1 font-semibold">role:</label>
                 <select className="border w-full border-gray-300 p-2 ring-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" name="role" id="role"
                 {...register("role", { required: "Role is required" })}>
                   <option value="">Select role</option>
                   <option value="admin">Admin</option>
                   <option value="user">User</option>
                 </select>
                 {errors.role && <p className="text-red-500">{errors.role.message}</p>}
                {/* first input */}
                  <label className="block mb-1 font-semibold">Age:</label>
                  <input type="text" name="age" className="border w-full border-gray-300 p-2 ring-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter age"
                  {...register("age", { required: "Age is required" })} />
                  {errors.age && <p className="text-red-500">{errors.age.message}</p>}
              </div>

              <button type="submit" className="bg-blue-500 mt-4 text-white 
              w-full py-2 rounded-lg hover:bg-blue-600">Add User</button>
        </form>
    </div>
  )
}

export default AddUser