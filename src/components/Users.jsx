import { useGetUsersQuery } from "../redux/features/users/userApi";
import Loading from "./Loading";
import UserTable from "./UserTable";



const Users = () => {

   const { data: users=[], error, isLoading } = useGetUsersQuery();

   if(isLoading) return <Loading />;
   if(error) return <div>Error fetching users</div>;

   console.log(users)

    return (
    <div className="container mx-auto mt-12">
        <p className="text-lg font-semibold text-green-600 ">All Users: <span className="font-bold text-blue-600">{users.length}</span></p>

        <div>
           <tbody className="divide-y divide-gray-200">
      <tr className="hover:bg-gray-50 transition-colors">
        {
            users.map((user, index)=><UserTable key={index} user={user} />)
        }
        
      </tr>
    </tbody>
        </div>
    </div>
  )
}

export default Users