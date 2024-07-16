import StoreSettings from '@/components/Settings';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Store settings",
};


const page = () => {
  return (
    <StoreSettings />
  )
}

export default page