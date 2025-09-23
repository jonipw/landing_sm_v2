import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const portfolioItems = [
  {
    title: "Undangan Pernikahan Minimalis",
    category: "Pernikahan",
    image:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400&h=300&fit=crop&crop=center",
    tags: ["Elegan", "Modern"],
  },
  {
    title: "Undangan Kegiatan Adat",
    category: "Kegiatan Adat Bali",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop&crop=center",
    tags: ["Tradisional", "Kultur"],
  },
  {
    title: "Undangan Acara Perusahaan",
    category: "Corporate",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop&crop=center",
    tags: ["Profesional", "Berkelas"],
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Portfolio Undangan Digital Kami
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Lihat berbagai desain undangan yang telah kami buat untuk berbagai
            acara spesial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 py-0 gap-0"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={
                    item.image ||
                    "https://via.placeholder.com/400x300/f3f4f6/6b7280?text=No+Image"
                  }
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{item.category}</Badge>
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
