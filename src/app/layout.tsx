import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Canva',
  description: 'Make you designs',
};

// TODO: Add uuid for id
// TODO: Add colors to tailwind.config
// TODO: Study raw measures if can be changed by provided values
// TODO: Refactor common styles
// TODO: Add dark/light mode
// TODO: Replace icons to react/icons
// TODO: Create component for removeElement feature
// TODO: Add properties to InfoComponent
// TODO: Type properly 'type' and 'name' in InfoComponent
// TODO: Add logo image to assets
// TODO: Review if tags used are correct
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
