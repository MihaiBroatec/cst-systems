import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CST Systems',
  description: 'IT Software Company',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
