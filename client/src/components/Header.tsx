import { Link } from "wouter";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <Link href="/">
          <img 
            src="/logo.png" 
            alt="Toms Tools" 
            className="h-12 cursor-pointer hover:opacity-90 transition-opacity"
          />
        </Link>
      </div>
    </header>
  );
}
