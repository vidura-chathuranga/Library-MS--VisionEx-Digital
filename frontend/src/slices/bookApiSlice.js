import { BOOKS_URL, UPLOAD_URL } from "@/constants";
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
    updateBook: builder.mutation({
      query: (data) => ({
        url: `${BOOKS_URL}/${data.bookId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    uploadBookImage: builder.mutation({
      query: (image) => ({
        url: `${UPLOAD_URL}`,
        method: "POST",
        body: image,
      }),
    }),
    addNewBook: builder.mutation({
      query: (data) => ({
        url: `${BOOKS_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetBookByIdQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useUploadBookImageMutation,
  useAddNewBookMutation,
} = bookApiSlice;
