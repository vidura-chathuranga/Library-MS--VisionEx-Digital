import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CalendarRange, User, MapPin, Check, X } from "lucide-react";

const BookCard = (props) => {
  return (
    <Link to={`/books/dadasdaweqe`}>
      <Card className="w-[350px] flex flex-col items-center">
        <img src="/vite.svg" width={100} className="p-5 bg-cover" />
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-x-2 mb-5">
            <User />
            <span>{props.author}</span>
          </div>
          <div className="flex gap-x-2 my-5">
            <CalendarRange />
            <span>{props.publicationYear}</span>
          </div>
          <div className="flex gap-x-2 my-5">
            <MapPin />

            <span>{props.location}</span>
          </div>
          <div className="flex gap-x-2 my-5">
            {props.isAvailable ? <Check /> : <X />}
          

            <span>{props.isAvailable ? "Available": "Unavailable"}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BookCard;
