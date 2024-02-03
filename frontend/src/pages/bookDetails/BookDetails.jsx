import { Link, useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "@/slices/bookApiSlice";
import {
  Barcode,
  CalendarRange,
  Check,
  Languages,
  Layers3,
  LoaderIcon,
  MapPin,
  User,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const BookDetails = () => {
  const { id: bookId } = useParams();

  const { data, isLoading, error } = useGetBookByIdQuery(bookId);

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
      <Link to="/">
        <Button className="my-4">Go Back</Button>
      </Link>
      <section className="flex flex-row gap-x-4">
        {/* <img src={data.image} /> */}

        <div className="flex flex-col gap-5">
          <h2>{data.title}</h2>
          <h4 className="mt-4">{data.description}</h4>

          <div className="flex gap-x-2 ">
            <User />
            <span>
              <strong>Author: </strong> {data.author}
            </span>
          </div>
          <div className="flex gap-x-2 ">
            <CalendarRange />
            <span>
              <strong>Published Date: </strong>
              {new Date(data.publicationYear).toLocaleDateString()}
            </span>
          </div>
          <div className="flex gap-x-2 ">
            <MapPin />

            <span>
              <strong>Location: </strong>
              {data.location}
            </span>
          </div>
          <div className="flex gap-x-2 ">
            {data.availableStatus ? <Check color="#27c161"/> : <X color="#ef443a"/>}

            <span className={data.availableStatus ? "text-green-400" : "text-red-500"}>{data.availableStatus ? "Available" : "Unavailable"}</span>
          </div>
          <div className="flex gap-x-2 ">
            <Layers3 />

            <span>
              <strong>Number of pages: </strong>
              {data.numOfPages}
            </span>
          </div>
          <div className="flex gap-x-2 ">
            <Languages />

            <span>
              <strong>Language: </strong>
              {data.language}
            </span>
          </div>
          <div className="flex gap-x-2 ">
            <Barcode />

            <span>
              <strong>ISBN: </strong>
              {data.ISBN}
            </span>
          </div>
        </div>
      </section>
      <div className="my-5 flex gap-x-5">
        <Button className="bg-green-500 px-10 hover:text-gray-50 hover:bg-green-800">Edit Book</Button>
        <Button className="bg-red-500 px-10  hover:text-gray-50 hover:bg-red-800">Delete Book</Button>
      </div>
    </>
  );
};

export default BookDetails;
