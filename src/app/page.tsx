import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="m-4">
        <NavBar />
        <hr className="w-full mt-2 mb-2 border border-gray-400" />
      </header>
      <main>
        <LandingPage />
      </main>
      <footer className="m-4">
        <Footer />
      </footer>
    </div>
  );
}
