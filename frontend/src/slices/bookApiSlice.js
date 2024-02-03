import { BOOKS_URL } from "@/constants";
import { apiSlice } from "./apiSlice";

export const bookApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => ({
        url: `${BOOKS_URL}`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["books"],
    }),
    getBookById: builder.query({
      query: (bookId) => ({
        url: `${BOOKS_URL}/${bookId}`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (bookId) => ({
        url: `${BOOKS_URL}/${bookId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const { useGetAllBooksQuery, useGetBookByIdQuery,useDeleteBookMutation } = bookApiSlice;
