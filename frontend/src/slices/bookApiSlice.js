import { BOOKS_URL } from "@/constants";
import { apiSlice } from "./apiSlice";

export const bookApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => ({
        url: '/api/books/',
      }),
      keepUnusedDataFor: 5,
      providesTags: ["books"],
    }),
  }),
});


export const {useGetAllBooksQuery} = bookApiSlice;