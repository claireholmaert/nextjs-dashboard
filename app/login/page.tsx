import { Metadata } from "next";
import AcmeLogo from "../ui/acme-logo";
import LoginForm from "../ui/login-form";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto w-full flex max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="w-full h-20 flex items-end rounded-lg bg-indigo-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
