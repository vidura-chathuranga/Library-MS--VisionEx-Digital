import BookCard from "@/components/shared/BookCard";
import { useGetAllBooksQuery } from "@/slices/bookApiSlice";
import { useToast } from "@/components/ui/use-toast";
import { LoaderIcon } from "lucide-react";
import AddBookFloatingIcon from "@/components/shared/addBookFloatingIcon";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { data: books, isLoading, error } = useGetAllBooksQuery();

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
  return (
    <>
      <section className="my-4 m-auto">
        {books.map((b) => (
          <BookCard key={b._id} {...b} />
        ))}
      </section>
      <div className="fixed bottom-[50px] right-[30px]">
        <AddBookFloatingIcon onClick={handleOnClick} />
      </div>
    </>
  );
};

export default Home;
