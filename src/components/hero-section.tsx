import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Play, Star } from "lucide-react";
import {
  ScrollAnimation,
  StaggeredAnimation,
} from "@/components/scroll-animation";

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <StaggeredAnimation className="space-y-8" staggerDelay={0.2}>
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Buat undangan digital yang{" "}
                <span className="text-primary">memukau</span> dalam hitungan
                menit
              </h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-lg">
                Ciptakan undangan pernikahan, ulang tahun, dan acara spesial
                lainnya dengan desain profesional yang dapat dibagikan secara
                digital.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base">
                Mulai Membuat Gratis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base bg-transparent"
              >
                <Play className="mr-2 h-4 w-4" />
                Lihat Demo
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span>4.9/5 dari 2,500+ pengguna</span>
              </div>
            </div>
          </StaggeredAnimation>

          <ScrollAnimation direction="right" delay={0.4} className="relative">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <div className="space-y-6">
                <div className="aspect-[4/3] bg-primary/10 rounded-lg flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop&crop=center"
                    alt="Preview undangan digital"
                    className="rounded-lg shadow-lg w-full h-full object-cover"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="font-semibold">Undangan Pernikahan Elegan</h3>
                  <p className="text-sm text-muted-foreground">
                    Desain modern dengan animasi yang memukau
                  </p>
                </div>
              </div>
            </Card>

            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
              ✨ Trending
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
