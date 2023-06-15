import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337/api' }),
    endpoints: (builder) => ({
      getProducts: builder.query({
        query: () => '/products?populate=*',
      }),
    }),
  })
  

export const {
    useGetProductsQuery
} = apiSlice  