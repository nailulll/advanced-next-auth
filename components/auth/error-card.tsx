import { Card, CardFooter, CardHeader } from "../ui/card";
import { BackButton } from "./back-button";
import Header from "./header";

const ErrorCard = () => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label="Opps! Something went wrong!" />
      </CardHeader>
      <CardFooter>
        <BackButton href="/auth/login" label="Back to Login" />
      </CardFooter>
    </Card>
  );
};

export default ErrorCard;
