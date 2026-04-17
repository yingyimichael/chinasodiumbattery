import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Company() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="flex-grow p-8 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-6">Company</h1>
        <div className="space-y-4 text-slate-300">
          <p>
            Introduce your company, team, and capabilities here.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
              <div className="text-cyan-400 font-semibold">Mission</div>
              <div className="text-sm mt-2">…</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
              <div className="text-cyan-400 font-semibold">Vision</div>
              <div className="text-sm mt-2">…</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
              <div className="text-cyan-400 font-semibold">Locations</div>
              <div className="text-sm mt-2">…</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
