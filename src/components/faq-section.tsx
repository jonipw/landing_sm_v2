import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Apakah saya bisa menggunakan InviteKu secara gratis?",
    answer:
      "Ya! Kami menyediakan paket gratis yang memungkinkan Anda membuat hingga 3 undangan per bulan dengan template dasar dan maksimal 50 tamu. Anda bisa upgrade kapan saja jika membutuhkan fitur lebih lengkap.",
  },
  {
    question: "Bagaimana cara membagikan undangan digital?",
    answer:
      "Setelah undangan selesai dibuat, Anda akan mendapatkan link unik yang bisa dibagikan melalui WhatsApp, email, media sosial, atau platform lainnya. Tamu cukup mengklik link untuk melihat undangan.",
  },
  {
    question: "Apakah undangan bisa diakses tanpa internet?",
    answer:
      "Undangan membutuhkan koneksi internet untuk diakses pertama kali, namun setelah dimuat, sebagian besar konten akan tersimpan di cache browser sehingga loading selanjutnya lebih cepat.",
  },
  {
    question: "Bisakah saya mengedit undangan setelah dibagikan?",
    answer:
      "Ya, Anda bisa mengedit undangan kapan saja bahkan setelah link dibagikan. Perubahan akan langsung terlihat oleh semua orang yang mengakses link tersebut.",
  },
  {
    question: "Apakah ada batasan jumlah tamu?",
    answer:
      "Batasan tamu tergantung paket yang Anda pilih. Paket Gratis maksimal 50 tamu, Pro maksimal 500 tamu, dan Business unlimited tamu.",
  },
  {
    question: "Bagaimana dengan keamanan data tamu?",
    answer:
      "Kami sangat serius dengan keamanan data. Semua data dienkripsi dan disimpan dengan standar keamanan tinggi. Kami tidak akan membagikan data tamu Anda kepada pihak ketiga.",
  },
  {
    question: "Apakah tersedia customer support?",
    answer:
      "Ya, kami menyediakan support melalui email untuk semua pengguna. Pengguna Pro dan Business mendapatkan priority support dengan response time lebih cepat.",
  },
  {
    question: "Bisakah saya menggunakan domain sendiri?",
    answer:
      "Fitur custom domain tersedia untuk pengguna paket Pro dan Business. Anda bisa menggunakan domain sendiri untuk undangan yang lebih profesional.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Pertanyaan yang Sering Diajukan</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang layanan undangan digital kami
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-medium text-pretty">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground text-pretty">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
