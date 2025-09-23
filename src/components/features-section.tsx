import { Card } from "@/components/ui/card";
import {
  Palette,
  Smartphone,
  Share2,
  Clock,
  Users,
  BarChart3,
  Heart,
  Zap,
} from "lucide-react";
import {
  ScrollAnimation,
  StaggeredAnimation,
} from "@/components/scroll-animation";

const features = [
  {
    icon: Palette,
    title: "Kustomasi Undangan",
    description: "Sesuaikan setiap komponen undangan sesuai tema dan gaya Anda",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description:
      "Undangan yang responsif dan terlihat sempurna di semua perangkat",
  },
  {
    icon: Share2,
    title: "Mudah Dibagikan",
    description:
      "Bagikan melalui WhatsApp, email, atau media sosial dengan satu klik",
  },
  {
    icon: Clock,
    title: "Buat dalam Menit",
    description:
      "Editor yang mudah dioperasikan untuk membuat undangan dengan cepat",
  },
  {
    icon: Users,
    title: "Manajemen Tamu",
    description: "Kelola daftar tamu dan konfirmasi kehadiran dengan mudah",
  },
  {
    icon: BarChart3,
    title: "Analytics Real-time",
    description: "Pantau berapa banyak orang yang merespons undangan Anda",
  },
  {
    icon: Heart,
    title: "Animasi Menarik",
    description: "Tambahkan animasi dan efek visual yang memukau",
  },
  {
    icon: Zap,
    title: "Loading Super Cepat",
    description:
      "Undangan dimuat dengan cepat tanpa mengurangi kualitas visual",
  },
];

export function FeaturesSection() {
  return (
    <section id="fitur" className="py-20">
      <div className="container">
        <ScrollAnimation className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Fitur Lengkap untuk Undangan Perfect
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Semua yang Anda butuhkan untuk membuat undangan digital yang
            profesional dan berkesan
          </p>
        </ScrollAnimation>

        <StaggeredAnimation
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5"
          staggerDelay={0.1}
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-4 md:p-5 lg:p-6 text-center md:text-center hover:shadow-lg dark:hover:shadow-primary/10 hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              {/* Mobile: Horizontal layout with icon on left */}
              <div className="flex md:block items-start md:items-center gap-3 md:gap-0">
                <div className="flex-shrink-0 md:mb-4 md:flex md:justify-center">
                  <div className="p-2 md:p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                    <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                </div>

                <div className="flex-1 md:flex-none text-left md:text-center">
                  <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground text-pretty">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </StaggeredAnimation>
      </div>
    </section>
  );
}
