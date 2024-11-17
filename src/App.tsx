import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { SuspenseComponent } from "./components/suspense";
import { Layout } from "./layout";
import { HomePageView } from "./pages/home";
import { NotFoundPage } from "./pages/404";
import { RegistrationPage } from "./pages/registration";
import { LoginPage } from "./pages/login";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
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
            <Route path="login" element={<LoginPage />} />
            <Route path="registration" element={<RegistrationPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
