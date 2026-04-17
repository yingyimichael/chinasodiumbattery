import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
  { name: "Sodium Battery X1", desc: "Entry-level, stable performance." },
  { name: "Sodium Battery X2", desc: "Enhanced capacity for more scenarios." },
  { name: "Sodium Battery Pro", desc: "Enterprise-grade solution." },
];

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="flex-grow p-8 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-6">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.name}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition"
            >
              <h2 className="text-xl font-semibold text-cyan-400">{p.name}</h2>
              <p className="text-slate-300 text-sm mt-3">{p.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
