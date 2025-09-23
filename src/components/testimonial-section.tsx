"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Putri",
    role: "Pemilik Acara",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content:
      "Undangan online ini sangat membantu pernikahan kami! Mudah disebarkan ke keluarga dan teman-teman. Tampilannya juga sangat elegan dan sesuai dengan tema pernikahan kami.",
    rating: 5,
    event: "Undangan Pernikahan",
  },
  {
    id: 2,
    name: "Budi Santoso",
    role: "Mempelai Pria",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content:
      "Undangan digital ini sangat praktis dan hemat budget! Tamu-tamu mudah konfirmasi kehadiran dan kami bisa tracking siapa saja yang sudah baca undangan. Desainnya juga premium banget!",
    rating: 5,
    event: "Undangan Pernikahan",
  },
  {
    id: 3,
    name: "Maya Sari",
    role: "Pemilik Acara",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content:
      "Fitur gallery foto dan video di undangan ini luar biasa! Tamu-tamu bisa melihat foto pre-wedding kami dan excited banget untuk datang ke acara. Terima kasih!",
    rating: 5,
    event: "Undangan Pernikahan",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Testimoni Pelanggan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dengarkan cerita dari mereka yang telah mempercayai undangan online
            kami untuk momen spesial mereka
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full bg-card/80 backdrop-blur-sm border hover:shadow-xl transition-all duration-300 group flex flex-col">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-primary opacity-50" />
                  </div>

                  {/* Content - takes available space */}
                  <div className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                      "{testimonial.content}"
                    </p>

                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Profile - stays at bottom */}
                  <div className="flex items-center mt-auto">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary/20 group-hover:border-primary/40 transition-colors"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-primary font-medium">
                        {testimonial.event}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
