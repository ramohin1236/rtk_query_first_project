import { useGetUsersQuery } from "../redux/features/users/userApi";



const Users = () => {

   const { data, error, isLoading } = useGetUsersQuery();

   console.log(data)
   
    return (
    <div>Users</div>
  )
}

export default Users