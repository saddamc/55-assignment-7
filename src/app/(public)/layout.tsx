import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="min-h-dvh pb-24">{children}</main>
      <Footer />
    </>
  );
}
