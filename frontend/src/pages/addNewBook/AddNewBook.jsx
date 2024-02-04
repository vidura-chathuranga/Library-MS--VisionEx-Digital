import { Link, useNavigate, useParams } from "react-router-dom";
import { useAddNewBookMutation, useUploadBookImageMutation } from "@/slices/bookApiSlice";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, LoaderIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";

const schema = z.object({
  ISBN: z.string().min(1, { message: "ISBN is required" }),
  title: z.string().min(1, { message: "Title is required" }),
  author: z.string().min(1, { message: "Author is required" }),
  publicationYear: z.date(),
  image: z.string().min(1),
  numOfPages: z.string().min(1,{message : "Number of pages should be more than 1"}),

  location: z.string().min(1, { message: "location is required" }),
  language: z.string().min(1, { message: "Language is required" }),
  description: z.string().min(10, { message: "Description is required" }),
});
const AddNewBook = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  // upload image mutation
  const [uploadImage] = useUploadBookImageMutation();

  // add book mutaion
  const[addNewBook] = useAddNewBookMutation();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    setError,
    formState: { isSubmitting, errors: formErrors },
  } = useForm({
    defaultValues: {
      ISBN: "",
      title: "",
      author: "",
      publicationYear: new Date(),

      image: "" || {},
      location: "",
      language: "",
      description: "",
    },
    resolver: zodResolver(schema),
  });

  // handle image uploading
  const handleImageUpload = async (imageData) => {
    const formData = new FormData();

    formData.append("image", imageData);

    try {
      const res = await uploadImage(formData).unwrap();

      // set new Image URL to the image attribute in form
      setValue("image", res.image);
    } catch (error) {
      // set form error
      setError("image", error?.data?.message || error?.error);
    }
  };
  // handle form submit
  const onSubmit = async (data) => {
    try {
      const res = await addNewBook(data).unwrap();

      // success TIme
      const successDate = new Date();

      // show the success toast
      toast({
        title: `${res.message}`,
        description: `${successDate.toLocaleDateString()}, ${successDate.toLocaleTimeString()}`,
      });

      // if success then navigate to the home page again
      navigate("/");
    } catch (error) {
      // show the errors to the user
      setError("root", { message: error.data.message || error.error });
    }
  };

  return (
    <div className="mt-5">
      <h2>Add new book</h2>

      {/* show the updating errors */}
      <div className="mt-3">
        {formErrors.root && (
          <span className="text-red-500">{formErrors.root.message}</span>
        )}
      </div>
      {/* edit form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="my-7 grid sm:grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-y-3">
            <Label>ISBN</Label>
            <Input
              className="text-gray-400"
              type="text"
              placeholder="ISBN"
              {...register("ISBN")}
            />
            {formErrors.ISBN && (
              <span className="text-red-500">{formErrors.ISBN.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-y-3">
            <Label>Title</Label>
            <Input
              className="text-gray-400"
              type="text"
              placeholder="Title"
              {...register("title")}
            />
            {formErrors.title && (
              <span className="text-red-500">{formErrors.title.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-y-3">
            <Label>Author</Label>
            <Input
              className="text-gray-400"
              type="text"
              placeholder="Author"
              {...register("author")}
            />
            {formErrors.author && (
              <span className="text-red-500">{formErrors.author.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-y-3">
            <Label>Publication Date</Label>
            <Controller
              name="publicationYear"
              control={control}
              render={({ field }) => (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !field.value && "text-muted-foreground",
                        "text-gray-400"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                    <div className="rounded-md border">
                      <Calendar
                        mode="single"
                        onDayClick={(date) => field.onChange(date)}
                        selected={field.value}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                      />
                    </div>
                  </PopoverContent>
                </Popover>
              )}
            />
            {formErrors.publicationYear && (
              <span className="text-red-500">
                {formErrors.publicationYear.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-y-3">
            <Label>Image</Label>
            <Controller
              control={control}
              name={"image"}
              render={({ field: { value, onChange, ...field } }) => {
                return (
                  <Input
                    {...field}
                    type="file"
                    accept={"image/*"}
                    placeholder="Author name"
                    className="text-gray-400"
                    value={value?.fileName}
                    onChange={(event) => {
                      handleImageUpload(event.target.files[0]);
                    }}
                    id="image"
                  />
                );
              }}
            />

            {formErrors.image && (
              <span className="text-red-500">{formErrors.image.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-y-3">
            <Label>Number of pages</Label>
            <Input
              className="text-gray-400"
              type="number"
              placeholder="Number of pages"
              {...register("numOfPages")}
            />
            {formErrors.numOfPages && (
              <span className="text-red-500">
                {formErrors.numOfPages.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-y-3">
            <Label>Location</Label>
            <Input
              className="text-gray-400"
              type="text"
              placeholder="Location"
              {...register("location")}
            />
            {formErrors.location && (
              <span className="text-red-500">
                {formErrors.location.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-y-3">
            <Label>Language</Label>
            <Input
              className="text-gray-400"
              type="text"
              placeholder="Language"
              {...register("language")}
            />
            {formErrors.language && (
              <span className="text-red-500">
                {formErrors.language.message}
              </span>
            )}
          </div>
        </section>
        <div className="flex flex-col gap-y-3">
          <Label>Description</Label>
          <Textarea
            className="text-gray-400"
            rows={10}
            {...register("description")}
          />
          {formErrors.description && (
            <span className="text-red-500">
              {formErrors.description.message}
            </span>
          )}
        </div>
        <section className="flex gap-x-3 mt-5">
          <Link to={"/"}>
            <Button variant="outline" className="bg-red-500 text-black ">
              Cancel
            </Button>
          </Link>
          <Button
            variant="outline"
            className="text-black bg-green-500"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isSubmitting ? "Adding..." : "Add book"}
          </Button>
        </section>
      </form>
    </div>
  );
};

export default AddNewBook;
