// src/app/register/page.tsx
import AuthForm from "@/components/auth/AuthForm";
import PublicHeader from "@/components/layout/PublicHeader";
import PublicFooter from "@/components/layout/PublicFooter";

export default function RegisterPage() {
  return (
    <>
      <PublicHeader />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <AuthForm mode="register" />
      </main>
      <PublicFooter />
    </>
  );
}
