import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AnalysisReport() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="flex-grow p-8 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-6">Analysis Report</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-cyan-400 mb-2">
              Market Overview
            </h2>
            <p className="text-slate-300">
              Add your market analysis content here.
            </p>
          </section>
          <section className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-cyan-400 mb-2">
              Growth Trends
            </h2>
            <p className="text-slate-300">
              Add your charts/insights here.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
