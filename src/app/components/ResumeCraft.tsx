import { useState } from "react";
import { ArrowLeft, Check, Sparkles, AlertCircle, FileText, Send, HelpCircle, Star, ShieldCheck, Zap, Clock } from "lucide-react";

interface ResumeCraftProps {
  onBack: () => void;
  dark?: boolean;
}

export default function ResumeCraftLandingPage({ onBack, dark = false }: ResumeCraftProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const packages = [
    {
      name: "Paket Standard",
      subtitle: "Desain Upgrade",
      price: "149.000",
      description: "Cocok untuk Anda yang sudah memiliki isi resume lengkap dan hanya ingin mempercantik tampilan visual agar terlihat profesional.",
      features: [
        "Redesain Layout Resume Premium (1 Halaman)",
        "Pilihan Grid Modern, Minimalis & Elegan",
        "Optimasi Tipografi & Kontras Warna",
        "Format File Akhir: PDF High-Quality",
        "Estimasi Pengerjaan: 3-4 Hari",
        "Revisi Desain: 2x"
      ],
      ctaText: "Pesan Paket Standard",
      popular: false,
      color: "#F7D6E0",
      textColor: "#A47C5B",
      waText: "Halo Alfath, saya tertarik untuk memesan Paket Standard ResumeCraft. Bagaimana prosedur selanjutnya?"
    },
    {
      name: "Paket Professional",
      subtitle: "ATS Optimizer & Copywriting",
      price: "299.000",
      description: "Paket paling populer. Sangat direkomendasikan untuk menembus filter robot ATS recruiter sekaligus memikat HRD.",
      features: [
        "Semua fitur Paket Standard",
        "Optimasi Format ATS-Friendly (Ramah Sistem Scanner)",
        "Rewrite & Copywriting Deskripsi Kerja (Metode STAR/XYZ)",
        "Penyusunan Kalimat Aksi/Kata Kunci (Keywords) Relevan",
        "Source File Editor (Link Canva / Figma)",
        "Estimasi Pengerjaan: 2-3 Hari",
        "Revisi Konten & Desain: 3x"
      ],
      ctaText: "Pesan Paket Professional",
      popular: true,
      color: "#8EC5FC",
      textColor: "#3F4A5A",
      waText: "Halo Alfath, saya tertarik untuk memesan Paket Professional ResumeCraft. Tolong bantu optimalkan resume saya agar lolos ATS."
    },
    {
      name: "Paket Premium",
      subtitle: "Job-Ready Executive Bundle",
      price: "449.000",
      description: "Solusi lengkap bagi Anda yang ingin siap melamar kerja secara menyeluruh dengan resume, surat lamaran, dan profil profesional.",
      features: [
        "Semua fitur Paket Professional",
        "Penulisan Cover Letter / Surat Lamaran Kerja Kustom",
        "Optimasi Profil LinkedIn Lengkap (Teks Header, Bio, & Kerja)",
        "Prioritas Pengerjaan Utama (1-2 Hari)",
        "Revisi Sepuasnya (Selama 14 Hari)",
        "Konsultasi Karir & Portofolio Personal via Chat"
      ],
      ctaText: "Pesan Paket Premium",
      popular: false,
      color: "#A9D18E",
      textColor: "#3F4A5A",
      waText: "Halo Alfath, saya tertarik untuk memesan Paket Premium ResumeCraft. Saya ingin bundle lengkap Resume, Cover Letter, dan LinkedIn."
    }
  ];

  const faqs = [
    {
      q: "Bagaimana proses pembuatan resume ini berlangsung?",
      a: "Prosesnya sangat mudah: (1) Anda memilih paket dan melakukan pembayaran, (2) Anda mengisi form data atau mengirimkan resume lama Anda, (3) Proses pengerjaan draf baru dimulai, (4) Kami mengirimkan draf untuk Anda review, (5) Kami lakukan revisi jika diperlukan, dan (6) Kami kirimkan file final yang siap dikirim."
    },
    {
      q: "Apakah format resume akhir dijamin lolos ATS (Applicant Tracking System)?",
      a: "Ya! Untuk Paket Professional dan Premium, kami merancang tata letak dan menggunakan struktur font yang dapat dibaca dengan sempurna oleh parser ATS. Kami juga melakukan optimasi keyword berdasarkan posisi yang Anda tuju untuk meningkatkan skor kecocokan sistem."
    },
    {
      q: "Format file apa saja yang akan saya dapatkan?",
      a: "Semua paket mendapatkan file PDF High-Quality yang siap dikirim ke email rekruter. Untuk Paket Professional & Premium, Anda juga akan mendapatkan link source file (Figma atau Canva) agar Anda bisa mengedit isinya sendiri di kemudian hari jika ada perubahan data."
    },
    {
      q: "Bagaimana jika saya belum memiliki resume lama sama sekali?",
      a: "Tidak masalah! Kami akan mengirimkan kuesioner wawancara karir sederhana yang bisa Anda isi. Data tersebut akan kami olah untuk menyusun resume profesional Anda dari nol."
    },
    {
      q: "Berapa lama waktu pengerjaannya?",
      a: "Waktu pengerjaan standar berkisar antara 2 hingga 4 hari kerja tergantung paket yang Anda pilih. Kami juga menawarkan opsi pengerjaan kilat (1 hari) untuk Paket Premium jika Anda membutuhkannya secara mendesak."
    }
  ];

  const handleWaLink = (text: string) => {
    // WhatsApp redirect with pre-filled message (using placeholder phone, user can replace it)
    const phone = "6285227334556"; // User can change this to their business WhatsApp number
    const encoded = encodeURIComponent(text);
    return `https://wa.me/${phone}?text=${encoded}`;
  };

  return (
    <div className={`min-h-screen ${dark ? "bg-[#1E222B] text-gray-100" : "bg-[#FFF8EF] text-[#3F4A5A]"} transition-colors duration-300 pb-20`}>
      {/* HEADER NAVBAR */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b ${dark ? "bg-[#1E222B]/90 border-gray-800" : "bg-[#FFF8EF]/90 border-gray-200"} py-4 px-6`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:-translate-x-1 ${dark ? "hover:bg-gray-800 text-gray-300" : "hover:bg-[#F7D6E0] text-[#A47C5B]"}`}
          >
            <ArrowLeft size={16} />
            <span>Kembali ke Portofolio</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
              Resume<span style={{ color: "#8EC5FC" }}>Craft</span>
            </span>
          </div>

          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("pricing");
            }}
            className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0"
            style={{ background: "#8EC5FC" }}
          >
            Pesan Sekarang
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold" style={{ background: "#F7D6E0", color: "#A47C5B" }}>
              <Sparkles size={14} />
              <span>Jasa Desain & Optimasi Resume Profesional</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Bikin Resumemu Menarik Perhatian HRD dalam <span className="underline decoration-[#8EC5FC] decoration-wavy">6 Detik!</span>
            </h1>

            <p className={`text-base md:text-lg leading-relaxed ${dark ? "text-gray-400" : "text-[#5A6478]"}`}>
              Dapatkan resume modern / ATS-Friendly dengan tata letak premium dan teknik penulisan profesional yang terbukti meningkatkan panggilan wawancara kerja Anda hingga 3x lipat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={handleWaLink("Halo Alfath, saya mau konsultasi gratis dulu untuk jasa perbaikan resume saya.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-center text-white"
                style={{ background: "#8EC5FC" }}
              >
                Konsultasi Resume Gratis 💬
              </a>
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("pricing");
                }}
                className={`px-8 py-4 rounded-2xl font-semibold hover:-translate-y-0.5 transition-all border text-center ${dark ? "border-gray-700 hover:bg-gray-800 text-gray-300" : "border-gray-300 hover:bg-[#F7F3EE] text-[#3F4A5A]"}`}
              >
                Lihat Paket Harga
              </a>
            </div>

            {/* TRUST BADGES */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200/50">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-[#A9D18E]" size={20} />
                <span className="text-xs font-medium">100% ATS-Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-amber-400 fill-amber-400" size={18} />
                <span className="text-xs font-medium">Bisa Edit Sendiri</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="text-[#8EC5FC]" size={18} />
                <span className="text-xs font-medium">Proses Cepat 2 Hari</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8EC5FC]/20 to-[#F7D6E0]/20 rounded-3xl blur-3xl -z-10" />
            <div className="rounded-3xl p-3 border shadow-2xl overflow-hidden transform hover:rotate-1 transition-transform duration-500" style={{ background: "white", borderColor: "rgba(142,197,252,0.3)" }}>
              <img
                src="/resumecraft.png"
                alt="ResumeCraft Preview Design"
                className="w-full h-auto rounded-2xl object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY US / PROBLEM SECTION */}
      <section className={`py-20 px-6 ${dark ? "bg-[#171a21]" : "bg-white"}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Kenapa 75% Resume Gugur di Tahap Awal?
            </h2>
            <p className={`text-sm ${dark ? "text-gray-400" : "text-[#8A8FA8]"}`}>
              Banyak pelamar kerja bertalenta yang ditolak bukan karena kualifikasinya kurang, melainkan karena kesalahan teknis penulisan resume mereka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-8 rounded-3xl border transition-all hover:shadow-md ${dark ? "bg-[#1E222B] border-gray-800" : "bg-[#FFF8EF] border-gray-100"}`}>
              <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center mb-6">
                <Clock className="text-rose-500" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3">Aturan 6 Detik</h3>
              <p className={`text-sm leading-relaxed ${dark ? "text-gray-400" : "text-[#5A6478]"}`}>
                Recruiter rata-rata hanya menghabiskan 6 detik untuk scanning awal dokumen resume Anda. Jika informasi penting sulit dibaca, resume Anda langsung diabaikan.
              </p>
            </div>

            <div className={`p-8 rounded-3xl border transition-all hover:shadow-md ${dark ? "bg-[#1E222B] border-gray-800" : "bg-[#FFF8EF] border-gray-100"}`}>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center mb-6">
                <AlertCircle className="text-amber-500" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3">Sistem Filter ATS</h3>
              <p className={`text-sm leading-relaxed ${dark ? "text-gray-400" : "text-[#5A6478]"}`}>
                Perusahaan besar memakai software robot ATS untuk menyaring berkas. Resume dengan grafik rumit, tabel bertumpuk, atau tanpa keyword relevan akan gagal dibaca robot.
              </p>
            </div>

            <div className={`p-8 rounded-3xl border transition-all hover:shadow-md ${dark ? "bg-[#1E222B] border-gray-800" : "bg-[#FFF8EF] border-gray-100"}`}>
              <div className="w-12 h-12 rounded-2xl bg-[#E2F0D9] flex items-center justify-center mb-6">
                <FileText className="text-[#A9D18E]" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3">Isi Kurang Berdampak</h3>
              <p className={`text-sm leading-relaxed ${dark ? "text-gray-400" : "text-[#5A6478]"}`}>
                Hanya menjabarkan tugas kerja harian (*job description*) tidaklah cukup. Anda harus menunjukkan prestasi kerja berbasis metrik data & hasil (*achievements*).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE VS AFTER SHOWCASE */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Perbedaan Hasil Desain ResumeCraft
            </h2>
            <p className={`text-sm ${dark ? "text-gray-400" : "text-[#8A8FA8]"}`}>
              Bandingkan format resume standar yang membosankan dengan desain yang modern dan dioptimasi oleh tim kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* BEFORE CARD */}
            <div className={`p-8 rounded-3xl border border-dashed flex flex-col justify-between ${dark ? "bg-[#1E222B]/50 border-gray-800" : "bg-white border-gray-300"}`}>
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-500 mb-4 inline-block">Sebelum (Format Biasa)</span>
                <h4 className="text-xl font-bold mb-4">Resume Kaku & Kurang Optimal</h4>
                <ul className="space-y-3 text-sm text-gray-500 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">✗</span>
                    <span>Desain template Word kuno yang pasaran.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">✗</span>
                    <span>Hanya menulis jobdesk standar, tidak ada pencapaian prestasi.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">✗</span>
                    <span>Tata letak berantakan dan sulit dipindai dalam 6 detik.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">✗</span>
                    <span>Tidak teroptimasi dengan kata kunci pencarian HRD (Tidak ATS Friendly).</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-semibold text-gray-400 min-h-[150px]">
                📄 Layout Resume Lama yang Padat & Kaku
              </div>
            </div>

            {/* AFTER CARD */}
            <div className={`p-8 rounded-3xl border flex flex-col justify-between shadow-lg relative overflow-hidden ${dark ? "bg-[#1E222B] border-gray-700" : "bg-[#FFF8EF] border-[#8EC5FC]/40"}`}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#8EC5FC]/10 rounded-full blur-xl pointer-events-none" />
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E2F0D9] text-green-600 mb-4 inline-block">Sesudah (ResumeCraft Upgrade)</span>
                <h4 className="text-xl font-bold mb-4">Resume Premium & ATS-Optimized</h4>
                <ul className="space-y-3 text-sm text-[#3F4A5A] dark:text-gray-300 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    <span>Desain custom elegan, minimalis, dan berkelas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    <span>Penggunaan kalimat aktif (STAR Method) untuk memamerkan prestasi kerja.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    <span>Skor terbaca ATS tinggi dengan kata kunci yang sangat spesifik.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    <span>Sangat mudah dipindai HRD dengan visual struktur yang prima.</span>
                  </li>
                </ul>
              </div>
              <div className="p-2 rounded-2xl bg-white border border-[#8EC5FC]/20 flex items-center justify-center text-xs overflow-hidden h-[150px] shadow-sm">
                <img
                  src="/resumecraft.png"
                  alt="ResumeCraft Premium Layout"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING PLANS SECTION */}
      <section id="pricing" className={`py-20 px-6 ${dark ? "bg-[#171a21]" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Paket Jasa ResumeCraft
            </h2>
            <p className={`text-sm ${dark ? "text-gray-400" : "text-[#8A8FA8]"}`}>
              Pilih paket layanan yang sesuai dengan kebutuhan pengembangan karir Anda. Tanpa biaya tersembunyi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 relative ${pkg.popular
                  ? `shadow-xl border-[#8EC5FC] -translate-y-2 ${dark ? "bg-[#1E222B]" : "bg-[#FFF8EF]"}`
                  : `shadow-md border-gray-100 ${dark ? "bg-[#1E222B] border-gray-800" : "bg-[#FFF8EF]/50"}`
                  }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white bg-[#8EC5FC] shadow-sm uppercase tracking-wider">
                    Paling Rekomendasi ⭐
                  </div>
                )}

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest block mb-1 text-[#A47C5B]">
                    {pkg.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: pkg.textColor }}>
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-1 my-4">
                    <span className="text-xs font-medium text-gray-500">Rp</span>
                    <span className="text-4xl font-extrabold" style={{ color: pkg.textColor }}>
                      {pkg.price}
                    </span>
                    <span className="text-xs font-medium text-gray-500">/file</span>
                  </div>

                  <p className={`text-xs leading-relaxed mb-6 ${dark ? "text-gray-400" : "text-gray-500"}`}>
                    {pkg.description}
                  </p>

                  <div className="border-t border-gray-200/50 pt-6">
                    <ul className="space-y-3.5 mb-8">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-left">
                          <div className="w-4 h-4 rounded-full flex items-center justify-center bg-green-100 mt-0.5 shrink-0">
                            <Check size={10} className="text-green-600 font-bold" />
                          </div>
                          <span className={dark ? "text-gray-300" : "text-[#5A6478]"}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={handleWaLink(pkg.waText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-2xl text-xs font-bold text-center transition-all ${pkg.popular
                    ? "text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    : "border hover:-translate-y-0.5"
                    }`}
                  style={{
                    background: pkg.popular ? "#8EC5FC" : "transparent",
                    borderColor: pkg.popular ? "transparent" : "rgba(142,197,252,0.6)",
                    color: pkg.popular ? "white" : "#A47C5B"
                  }}
                >
                  {pkg.ctaText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Frequently Asked Questions
            </h2>
            <p className={`text-sm ${dark ? "text-gray-400" : "text-[#8A8FA8]"}`}>
              Menjawab pertanyaan paling umum seputar proses dan kelayakan layanan jasa kami.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${activeFaq === idx
                  ? `shadow-sm ${dark ? "bg-[#1E222B] border-gray-700" : "bg-white border-[#8EC5FC]/40"}`
                  : `border-gray-200/50 hover:bg-white/40 ${dark ? "hover:bg-[#1E222B]/20" : ""}`
                  }`}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left font-semibold text-sm outline-none"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={16} className="text-[#8EC5FC]" />
                    {faq.q}
                  </span>
                  <span className="text-lg text-gray-400 font-normal">
                    {activeFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className={`px-6 pb-5 pt-1 text-xs leading-relaxed border-t border-gray-100 ${dark ? "text-gray-400 border-gray-800" : "text-[#5A6478]"}`}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <div className="rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-xl" style={{ background: "linear-gradient(135deg, #8EC5FC 0%, #F7D6E0 100%)" }}>
          <div className="absolute inset-0 bg-white/10 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#3F4A5A]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Siap Punya Resume yang Menjual?
            </h2>
            <p className="text-sm md:text-base text-[#3F4A5A]/85 leading-relaxed font-medium">
              Konsultasikan berkas lamaran kerjamu sekarang secara gratis. Jangan biarkan impian karir terhalang oleh format resume yang salah.
            </p>
            <div className="pt-4 flex justify-center">
              <a
                href={handleWaLink("Halo Alfath, saya mau konsultasi perihal draft resume saya dan mendiskusikan paket yang cocok.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl font-bold bg-[#3F4A5A] text-white hover:bg-[#3F4A5A]/90 hover:-translate-y-0.5 active:translate-y-0 shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                <Send size={15} />
                Hubungi via WhatsApp Bisnis
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
