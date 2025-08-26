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
        }),
        invalidatesTags: ["User"]
    }),

    // delete a user from api
     deleteUser: builder.mutation({
        query: (id) => ({
            url: `/users/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ["User"]
     })
  }),
});


export const { useGetUsersQuery, useAddUserMutation, useDeleteUserMutation } = userApi;

export default userApi;
