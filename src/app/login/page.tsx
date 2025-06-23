
// src/app/login/page.tsx
import AuthForm from "@/components/auth/AuthForm";
import PublicHeader from "@/components/layout/PublicHeader";

export default function LoginPage() {
  return (
    <>
      <PublicHeader />
      <main className="flex-1 flex items-center justify-center py-12 px-4 bg-muted/20 dark:bg-muted/40">
        <AuthForm mode="login" />
      </main>
    </>
  );
}
