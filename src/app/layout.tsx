import type { Metadata } from 'next';
import '../styles/globals.css';  // ✅ Use global styles
import Navigation from '../components/Navigation';  // ✅ Import Navigation globally

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'A personal portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation /> {/* ✅ Now Navigation appears on ALL pages */}
        {children} {/* ✅ This will render the content of each page */}
      </body>
    </html>
  );
}
