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
            {
                users.map((user)=><UserTable key={user.id} user={user} />)
            }
        </div>
    </div>
  )
}

export default Users