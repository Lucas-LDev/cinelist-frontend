import { Outlet } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";
import Header from "@/components/shared/Header";

export default function DefaultLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-1 w-full">
        <div className="mx-auto w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

