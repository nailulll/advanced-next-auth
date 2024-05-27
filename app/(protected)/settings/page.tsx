import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const Page = async () => {
  const session = await auth();

  return (
    <div>
      Setting Page
      <div>
        <pre>{JSON.stringify(session)}</pre>
      </div>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <Button type="submit">Logout</Button>
      </form>
    </div>
  );
};

export default Page;
