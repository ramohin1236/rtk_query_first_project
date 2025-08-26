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
        query: (data)=>({
            url: '/users',
            method: 'POST',
            body: data
        })
    })
  }),
});


export const { useGetUsersQuery, useAddUserMutation } = userApi;

export default userApi;
