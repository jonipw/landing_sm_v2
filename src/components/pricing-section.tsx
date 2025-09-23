import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import {
  ScrollAnimation,
  StaggeredAnimation,
} from "@/components/scroll-animation";

const plans = [
  {
    name: "Basic (soon)",
    price: "100",
    period: "selamanya",
    description: "Cocok untuk mencoba fitur dasar",
    features: [
      "3 undangan per bulan",
      "Template dasar",
      "Maksimal 50 tamu",
      "Branding Sweet Memory",
      "Support email",
    ],
    cta: "Mulai Gratis",
    popular: false,
  },
  {
    name: "Pro (soon)",
    price: "150",
    period: "per bulan",
    description: "Untuk kebutuhan personal dan keluarga",
    features: [
      "Undangan unlimited",
      "Semua template premium",
      "Maksimal 500 tamu",
      "Tanpa branding",
      "Analytics lengkap",
      "Custom domain",
      "Priority support",
    ],
    cta: "Pilih Pro",
    popular: true,
  },
  {
    name: "Custom",
    price: "250",
    period: "6 bulan",
    description: "Untuk event organizer dan bisnis",
    features: [
      "Semua fitur Pro",
      "Unlimited tamu",
      "White label solution",
      "API access",
      "Team collaboration",
      "Advanced analytics",
      "Dedicated support",
      "Custom integrations",
    ],
    cta: "Pilih Custom",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="harga" className="py-20 bg-muted/30">
      <div className="container">
        <ScrollAnimation className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Pilih Paket yang Tepat untuk Anda
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Mulai gratis dan upgrade kapan saja sesuai kebutuhan Anda
          </p>
        </ScrollAnimation>

        <StaggeredAnimation
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          staggerDelay={0.15}
        >
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative ${
                plan.popular ? "border-primary shadow-lg scale-105" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                  <Star className="w-3 h-3 mr-1" />
                  Paling Populer
                </Badge>
              )}

              <div className="text-center space-y-4 mb-8">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="space-y-1">
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold">Rp{plan.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">
                      rb
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.period}</p>
                </div>
                <p className="text-sm text-muted-foreground text-pretty">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start space-x-3"
                  >
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                size="lg"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </StaggeredAnimation>

        <ScrollAnimation delay={0.6} className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Semua paket termasuk SSL gratis, backup otomatis, dan uptime 99.9%
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
}
