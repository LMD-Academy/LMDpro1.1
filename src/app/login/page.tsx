
// src/app/login/page.tsx
import AuthForm from "@/components/auth/AuthForm";

export default function LoginPage() {
  return (
    <>
      <main className="flex-1 flex items-center justify-center py-12 px-4 bg-muted/20 dark:bg-muted/40 min-h-screen">
        <AuthForm mode="login" />
      </main>
    </>
  );
}
