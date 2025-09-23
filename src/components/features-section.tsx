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
    title: "Template Beragam",
    description:
      "Pilih dari 100+ template profesional untuk berbagai jenis acara",
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
      "Editor drag-and-drop yang intuitif untuk membuat undangan dengan cepat",
  },
  {
    icon: Users,
    title: "Manajemen Tamu",
    description: "Kelola daftar tamu dan konfirmasi kehadiran dengan mudah",
  },
  {
    icon: BarChart3,
    title: "Analytics Real-time",
    description:
      "Pantau berapa banyak orang yang melihat dan merespons undangan Anda",
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground text-pretty">
                {feature.description}
              </p>
            </Card>
          ))}
        </StaggeredAnimation>
      </div>
    </section>
  );
}
