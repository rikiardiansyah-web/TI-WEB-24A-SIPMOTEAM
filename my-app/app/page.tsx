import Image from "next/image";
import Menu from "./components/navbar";
import "./body.css";
import "./globals.css";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Menu /> {/* Nav menu */}
      <div className="container">
        <h1>Selamat Datang di SIPMO</h1>
        <p>Sistem Informasi Pengaduan Masyarakat Online</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
        <div className="w-full md:w-1/2 leftbody">
        <p>Apa itu SIPMO?</p>
          SIPMO adalah Sistem Informasi Pengaduan Masyarakat Online yang
          dirancang untuk memudahkan masyarakat dalam menyampaikan pengaduan
          terkait berbagai masalah di lingkungan mereka. Dengan SIPMO, Anda
          dapat dengan mudah melaporkan masalah seperti kerusakan jalan, sampah
          yang tidak terkelola, atau masalah keamanan di sekitar Anda.
        </div>
        <div className="w-full md:w-1/2 rightbody">
          SIPMO memungkinkan masyarakat untuk melaporkan masalah secara real-time dan memantau status pengaduan mereka. Sistem ini juga menyediakan fitur untuk memberikan feedback dan evaluasi terhadap layanan yang diberikan.
        </div>
      </div>
      <Footer /> {/* Footer */}
    </>
  );
}
