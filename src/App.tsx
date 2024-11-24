import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { SuspenseComponent } from "./components/suspense";
import { Layout } from "./layout";
import { HomePageView } from "./pages/home";
import { AboutPage } from "./pages/about";
import { AuthorPageView } from "./pages/author";
import { NotFoundPage } from "./pages/404";
import { RegistrationPage } from "./pages/registration";
import { LoginPage } from "./pages/login";
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { supabase } from "@/supabase";
import { userAtom } from "./store/auth";
import { useSetAtom } from "jotai";
import AuthGuard from "@/components/route-guards/auth";
import { UserProfilePage } from "@/pages/profile";

const queryClient = new QueryClient();

function App() {
  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter future={{ v7_relativeSplatPath: true }}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Routes>
            <Route>
              <Route element={<Layout />}>
                <Route
                  index
                  element={
                    <Suspense fallback={<SuspenseComponent />}>
                      <HomePageView />
                    </Suspense>
                  }
                />
                <Route path="home" element={<HomePageView />} />
                <Route path="about" element={<AboutPage />} />
                <Route
                  path="login"
                  element={
                    <AuthGuard>
                      <LoginPage />
                    </AuthGuard>
                  }
                />
                <Route
                  path="registration"
                  element={
                    <AuthGuard>
                      <RegistrationPage />
                    </AuthGuard>
                  }
                />
                <Route path="profile" element={<UserProfilePage />} />
                <Route path="author/:id" element={<AuthorPageView />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
