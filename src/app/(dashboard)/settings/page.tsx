import React, { Suspense } from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

// Dynamically import the StoreSettings component with no SSR
const StoreSettings = dynamic(() => import('@/components/Settings'), {
  ssr: false,
  loading: () => <LoadingComponent />
});

export const metadata: Metadata = {
  title: "Store settings",
};

const LoadingComponent = () => (
  <div className="flex justify-center items-center h-screen">
    <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
  </div>
);

const SettingsPage = () => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <StoreSettings />
    </Suspense>
  );
};

export default SettingsPage;