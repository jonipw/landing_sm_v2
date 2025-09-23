import {
  Heart,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t" id="footer">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Sweet Memory</span>
            </div>
            <p className="text-sm text-muted-foreground text-pretty">
              Platform terdepan untuk membuat undangan digital yang memukau dan
              mudah dibagikan.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="space-y-4 text-left md:text-right">
            <h4 className="font-semibold">Kontak</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:bliputupro@gmail.com"
                  className="hover:text-primary transition-colors flex items-center justify-start md:justify-end space-x-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>bliputupro@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6285700000000"
                  className="hover:text-primary transition-colors flex items-center justify-start md:justify-end space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>0857xxxxxxxx</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 Sweet Memory. Semua hak dilindungi.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
