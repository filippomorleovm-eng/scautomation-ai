import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
      <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center font-heading font-bold text-white text-xl shadow-md">
        SC
      </div>
      <span className="font-heading font-bold text-xl text-secondary">
        SC Automation
      </span>
    </Link>
  );
}
