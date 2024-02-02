import BookCard from "@/components/shared/BookCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Home = () => {
  const books = [
    {
      image: "/vite.svg",
      title: "asdsad",
      author: "Vidura chathuranga",
      publicationYear: 2010,
      location: "1st,floor,2nd Room",
    },
    {
      image: "/vite.svg",
      title: "asdsad",
      author: "Vidura chathuranga",
      publicationYear: 2010,
      location: "1st,floor,2nd Room",
    },
    {
      image: "/vite.svg",
      title: "asdsad",
      author: "Vidura chathuranga",
      publicationYear: 2010,
      location: "1st,floor,2nd Room",
    },
    {
      image: "/vite.svg",
      title: "asdsad",
      author: "Vidura chathuranga",
      publicationYear: 2010,
      location: "1st,floor,2nd Room",
    },
    {
      image: "/vite.svg",
      title: "asdsad",
      author: "Vidura chathuranga",
      publicationYear: 2010,
      location: "1st,floor,2nd Room",
    },
    {
      image: "/vite.svg",
      title: "asdsad",
      author: "Vidura chathuranga",
      publicationYear: 2010,
      location: "1st,floor,2nd Room",
    },
  ];

  return (
    <>
      <section className="mt-4 flex flex-wrap justify-center gap-5  items-cente m-auto">
        {books.map((b) => (
          <BookCard key={b.title} {...b} />
        ))}
      </section>
    </>
  );
};

export default Home;
