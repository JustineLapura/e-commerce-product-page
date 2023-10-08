import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="w-full h-full bg-white">
      {/* Container */}
      <div className="w-full h-full max-w-[1000px] mx-auto">
        {/* Navbar  */}
        <Navbar />
      </div>
    </main>
  );
}
