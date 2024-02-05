import BookCard from "@/components/shared/BookCard";
import { useGetAllBooksQuery } from "@/slices/bookApiSlice";
import { LoaderIcon } from "lucide-react";
import AddBookFloatingIcon from "@/components/shared/addBookFloatingIcon";
import { useNavigate, useParams } from "react-router-dom";
import PaginationCustom from "@/components/shared/PaginationCustom";
const Home = () => {
  // get the page number from URL params
  const { pageNumber } = useParams();

  const { data, isLoading, error } = useGetAllBooksQuery(pageNumber);

  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LoaderIcon className="animate-spin" size={100} />
      </div>
    );
  }

  if (error) {
    return <h1>{error?.error}</h1>;
  }

  const handleOnClick = () => {
    navigate("/books/add");
  };
  console.log(data);
  return (
    <>
      <section className="my-4 m-auto">
        {data.books.map((b) => (
          <BookCard key={b._id} {...b} />
        ))}
      </section>
      <div className="fixed bottom-[50px] right-[30px]">
        <AddBookFloatingIcon onClick={handleOnClick} />
      </div>

      <PaginationCustom page={data.pageNumber} pages={data.pagesCount} />
    </>
  );
};

export default Home;
