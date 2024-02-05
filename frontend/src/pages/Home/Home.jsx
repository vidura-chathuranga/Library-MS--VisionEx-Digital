import BookCard from "@/components/shared/BookCard";
import { useGetAllBooksQuery } from "@/slices/bookApiSlice";
import { LoaderIcon, WifiOff } from "lucide-react";
import { useParams } from "react-router-dom";
import PaginationCustom from "@/components/shared/PaginationCustom";
import CustomAlert from "@/components/shared/CustomAlert";
import AddBookFloatingIcon from "@/components/shared/AddBookFloatingIcon";

const Home = () => {
  // get the page number from URL params
  const { pageNumber } = useParams();

  const { data, isLoading, error } = useGetAllBooksQuery(pageNumber);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LoaderIcon className="animate-spin" size={100} />
      </div>
    );
  }

  if (error) {
    return (
      <CustomAlert
        variant="destructive"
        title="Connection error"
        description="Check your internet connection and refresh the page"
        erorrIcon={<WifiOff />}
      />
    );
  }

  return (
    <>
      <section className="my-4 m-auto">
        {data.books.map((b) => (
          <BookCard key={b._id} {...b} />
        ))}
      </section>
      <div className="fixed bottom-[50px] right-[30px]">
        <AddBookFloatingIcon />
      </div>
      <div className="mb-5">
        <PaginationCustom page={data.pageNumber} pages={data.pagesCount} />
      </div>
    </>
  );
};

export default Home;
