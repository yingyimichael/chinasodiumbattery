import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-cyan-400">
          China Sodium Battery
        </div>

        <div className="flex gap-6 text-sm">
          <Link className="hover:text-cyan-400 transition" href="/analysis-report">
            Analysis Report
          </Link>
          <Link className="hover:text-cyan-400 transition" href="/company">
            Company
          </Link>
          <Link className="hover:text-cyan-400 transition" href="/products">
            Products
          </Link>
          <Link className="hover:text-cyan-400 transition" href="/battery-pack">
            Battery Pack
          </Link>
        </div>
      </div>
    </nav>
  );
}
