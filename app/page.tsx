import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-sky-500">
      <div className="space-y-6">
        <h1 className="text-6xl font-semibold drop-shadow-md text-white">
          Auth
        </h1>
        <p className="text-white text-lg">Simple authenticate service</p>
        <div>
          <LoginButton>
            <Button size="lg" variant="secondary">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
