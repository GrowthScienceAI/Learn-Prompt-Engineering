import { Link } from "wouter";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center gap-6">
        <Link href="/">
          <img 
            src="/logo.png" 
            alt="Toms Tools" 
            className="h-12 cursor-pointer hover:opacity-90 transition-opacity"
          />
        </Link>
        <a
          href="https://tom-panos.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#154072] hover:text-[#5590f3] font-semibold text-lg transition-colors"
          data-testid="link-tomstools"
        >
          TomsTools
        </a>
      </div>
    </header>
  );
}
