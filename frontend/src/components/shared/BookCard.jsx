import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CalendarRange, User, MapPin, Check, X } from "lucide-react";

const BookCard = (props) => {
  return (
    <Link to={`/books/${props._id}`}>
      <Card className="mb-3 flex  ">
        <section>
          <img src={props.image} width={100} className="p-5 bg-cover" />
        </section>
        <section>
          <CardHeader>
            <CardTitle>{props.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row gap-x-4 items-center">
            <div className="flex gap-x-2 ">
              <User />
              <span>{props.author}</span>
            </div>
            <div className="flex gap-x-2 ">
              <CalendarRange />
              <span>
                {new Date(props.publicationYear).toLocaleDateString()}
              </span>
            </div>
            <div className="flex gap-x-2 ">
              <MapPin />

              <span>{props.location}</span>
            </div>
            <div className="flex gap-x-2 ">
              {props.availableStatus ? <Check /> : <X />}

              <span>{props.availableStatus ? "Available" : "Unavailable"}</span>
            </div>
          </CardContent>
        </section>
      </Card>
    </Link>
  );
};

export default BookCard;
