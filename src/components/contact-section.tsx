import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export function ContactSection() {
  return (
    <section id="kontak" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Hubungi Kami
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Ada pertanyaan atau butuh bantuan? Tim kami siap membantu Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Mari Berkolaborasi</h3>
              <p className="text-muted-foreground text-pretty">
                Kami senang mendengar dari Anda. Kirimkan pesan dan kami akan
                merespons secepat mungkin.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">bliputupro@gmail.com</p>
                </div>
              </div>

              {/* <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Telepon</h4>
                  <p className="text-muted-foreground">+62 0000000</p>
                </div>
              </div> */}

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">WhatsApp</h4>
                  <p className="text-muted-foreground">+62 0000000</p>
                </div>
              </div>

              {/* <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Alamat</h4>
                  <p className="text-muted-foreground text-pretty">
                    Bali
                    <br />
                    Indonesia
                    <br />
                    Indonesia
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nama Lengkap
                  </label>
                  <Input id="name" placeholder="Masukkan nama Anda" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="nama@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subjek
                </label>
                <Input id="subject" placeholder="Apa yang bisa kami bantu?" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Pesan
                </label>
                <Textarea
                  id="message"
                  placeholder="Tulis pesan Anda di sini..."
                  className="min-h-[120px]"
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Kirim Pesan
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
