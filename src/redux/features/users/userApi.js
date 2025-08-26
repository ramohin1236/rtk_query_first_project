import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const userApi = createApi({
     reducerPath: 'userApi',
     baseQuery: fetchBaseQuery({
         baseUrl: 'https://pokeapi.co/api/v2/'
     }),
})