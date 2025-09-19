import { Button } from "@/components/ui/button";
import { Heart, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Sweet Memory</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#portfolio"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#fitur"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Fitur
          </a>
          <a
            href="#harga"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Harga
          </a>
          <a
            href="#faq"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            FAQ
          </a>
          <a
            href="#kontak"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Kontak
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" className="hidden md:inline-flex">
            Masuk
          </Button>
          <Button>Daftar</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
