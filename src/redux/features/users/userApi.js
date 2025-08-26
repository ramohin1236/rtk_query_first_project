import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({

    //   get all users
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["User"],
    }),

    // add user
    addUser: builder.mutation({
        
    })
  }),
});


export const { useGetUsersQuery } = userApi;

export default userApi;
