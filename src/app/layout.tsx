import type { Metadata } from 'next';
import '../styles/globals.css';  
import Navigation from '../components/Navigation'; 

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
        <Navigation /> 
        {children} 
      </body>
    </html>
  );
}
