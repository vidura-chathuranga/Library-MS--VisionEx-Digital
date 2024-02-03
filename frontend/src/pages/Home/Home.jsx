import BookCard from "@/components/shared/BookCard";
import { useGetAllBooksQuery } from "@/slices/bookApiSlice";
import { useToast } from "@/components/ui/use-toast";
import { LoaderIcon } from "lucide-react";
const Home = () => {
  const { toast } = useToast();

  const { data: books, isLoading, error } = useGetAllBooksQuery();
  console.log(error);

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
  return (
    <>
      <section className="mt-4 flex flex-wrap justify-center gap-5 items-cente m-auto">
        {books.map((b) => (
          <BookCard key={b._id} {...b} />
        ))}
      </section>
    </>
  );
};

export default Home;
