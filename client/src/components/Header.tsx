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
          className="text-[#154072] hover:text-[#5590f3] text-[0.966rem] transition-colors"
          data-testid="link-home"
        >
          Home
        </a>
        <a
          href="https://tom-panos.com/toms-tools-library"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#154072] hover:text-[#5590f3] text-[0.966rem] transition-colors"
          data-testid="link-tools-library"
        >
          Software Library
        </a>
        <a
          href="https://tom-panos.com/human-centered-ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#154072] hover:text-[#5590f3] text-[0.966rem] transition-colors"
          data-testid="link-mission"
        >
          My Mission
        </a>
        <a
          href="https://tom-panos.com/toms-blog"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#154072] hover:text-[#5590f3] text-[0.966rem] transition-colors"
          data-testid="link-blog"
        >
          My Blog
        </a>
      </div>
    </header>
  );
}
