import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BatteryPack() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="flex-grow p-8 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-6">Battery Pack</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-cyan-400 mb-2">
              Standard Pack
            </h2>
            <p className="text-slate-300 text-sm">
              Describe standard pack configurations.
            </p>
          </section>
          <section className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-cyan-400 mb-2">
              Custom Pack
            </h2>
            <p className="text-slate-300 text-sm">
              Describe customization, BMS, safety, etc.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
