import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";



export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased flex flex-col min-h-screen`}
      >
        <AuthProvider>
          <NavBar />
            {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
