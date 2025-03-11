'use client'
import { useEffect, useState } from 'react';
import AdminHeader from '@/components/Admin/AdminHeader';
import AdminFooter from '@/components/Admin/AdminFooter';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('users');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <html lang="en">
      <body className="antialiased">
        <AdminHeader />
        <main>{children}</main>
        <AdminFooter />
      </body>
    </html>
  );
}
