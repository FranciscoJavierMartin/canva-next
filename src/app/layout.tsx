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
// TODO: Fold sidebar when click on shape
// TODO: Move Edit page to panel. Avoid 'client page'
// TODO: Move addListeners to proper element instead of window
// TODO: Add consts with default values for components
// TODO: Add more interfaces InfoComponent depending of the element to add
// FIXME: Fix opacity with slider
// TODO: Replace input text for a textarea
// TODO: Save text when lose focus
// TODO: Split CreateComponent with switch and functions for returned JSX
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
