import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import ScrollToTop from './ScrollToTop';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Spinner from '@/assets/svgs/spinner.svg?react';
import { Toaster } from '@/components/ui/toaster';

export default function DefaultLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-1 w-full">
        <div className="mx-auto w-full">
          <Suspense
            fallback={
              <div className="p-10 flex justify-center">
                <Spinner className="h-20 animate-spin transition-transform duration-700" />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}