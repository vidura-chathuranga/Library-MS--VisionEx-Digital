import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const CustomAlert = ({ variant = "", title, description, erorrIcon }) => {
  console.log(erorrIcon);
  return (
    <Alert variant={variant}>
      <div className="flex  gap-x-5">
        {erorrIcon ? (
          <span className="h-4 w-4 mt-2">{erorrIcon}</span>
        ) : (
          <AlertCircle className="h-4 w-4 mt-2" />
        )}
        <div>
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>{description}</AlertDescription>
        </div>
      </div>
    </Alert>
  );
};

export default CustomAlert;
