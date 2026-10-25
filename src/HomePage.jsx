import React from 'react';
import { useNavigate } from 'react-router-dom';

export const QUIZ_LIST = [
  {
    id: 1,
    title: "Pandangan Medis & Islam Terkait LGBT / Bioetika",
    badge: "Kuis 1",
    questionCount: 30,
    topic: "Etika Klinis & Nilai Islam",
    description: "Pembahasan konsep dasar, aspek medis, sosial, serta pandangan Islam dan etika kedokteran mengenai LGBT.",
    icon: "⚖️",
    gradient: "linear-gradient(135deg, #1b5e20, #2e7d32)"
  },
  {
    id: 2,
    title: "Islam & IPTEK, Sejarah Psikiatri & Etik Hukum Islam",
    badge: "Kuis 2",
    questionCount: 34,
    topic: "Psikiatri & Hukum Islam",
    description: "Evaluasi prinsip etik dasar, persetujuan tindakan, hak pasien, serta penanganan psikiatri involuntary.",
    icon: "📜",
    gradient: "linear-gradient(135deg, #1e3c72, #2a5298)"
  },
  {
    id: 3,
    title: "Penyakit Autoimun Neurologi (GBS, MG, MS)",
    badge: "Kuis 3",
    questionCount: 32,
    topic: "Neurologi & Autoimun",
    description: "Konsep patofisiologi, manifestasi klinis, kriteria diagnosis, dan tatalaksana GBS, Myasthenia Gravis, & MS.",
    icon: "🧬",
    gradient: "linear-gradient(135deg, #4a148c, #7b1fa2)"
  },
  {
    id: 4,
    title: "Kesadaran, GCS & Refleks Batang Otak",
    badge: "Kuis 4",
    questionCount: 31,
    topic: "Neurologi & Neuroemergensi",
    description: "Anatomi kesadaran, penilaian Glasgow Coma Scale (GCS), FOUR Score, pupil, serta refleks batang otak.",
    icon: "🧠",
    gradient: "linear-gradient(135deg, #b71c1c, #d32f2f)"
  },
  {
    id: 5,
    title: "Gangguan Gerak (Movement Disorders) - Bagian 1",
    badge: "Kuis 5",
    questionCount: 33,
    topic: "Neurologi Movement Disorders",
    description: "Anatomi ganglia basalis, Tics, Sindrom Tourette, Klasifikasi Tremor, Huntington Disease & Sydenham Chorea.",
    icon: "⚡",
    gradient: "linear-gradient(135deg, #e65100, #f57c00)"
  },
  {
    id: 6,
    title: "Gangguan Gerak (Movement Disorders) - Bagian 2",
    badge: "Kuis 6",
    questionCount: 35,
    topic: "Neurologi Lanjutan",
    description: "Sejarah, epidemiologi, kriteria tics, farmakoterapi distonia, analisis tremor spesifik & etio-patofisiologi chorea.",
    icon: "🔄",
    gradient: "linear-gradient(135deg, #004d40, #00796b)"
  },
  {
    id: 7,
    title: "Entrapment Neuropathies (CTS & Guyon Tunnel)",
    badge: "Kuis 7",
    questionCount: 32,
    topic: "Saraf Tepi & Kompresi",
    description: "Patofisiologi kompresi saraf tepi, evaluasi klinis, Carpal Tunnel Syndrome & Guyon Canal Syndrome.",
    icon: "🖐️",
    gradient: "linear-gradient(135deg, #311b92, #512da8)"
  },
  {
    id: 8,
    title: "Trauma Kapitis (Traumatic Brain Injury)",
    badge: "Kuis 8",
    questionCount: 31,
    topic: "Neurotrauma",
    description: "Biomekanika TBI, perdarahan epidural & subdural (EDH/SDH), SAH, DAI, fraktur basis cranii, serta klasifikasi GCS.",
    icon: "💥",
    gradient: "linear-gradient(135deg, #880e4f, #c2185b)"
  },
  {
    id: 9,
    title: "Cedera Medula Spinalis (Spinal Cord Injury)",
    badge: "Kuis 9",
    questionCount: 29,
    topic: "Spinal Cord & Shock",
    description: "Anatomi medula spinalis, biomekanika SCI, klasifikasi ASIA, level lesi, serta perbedaan syok spinal vs neurogenik.",
    icon: "🦴",
    gradient: "linear-gradient(135deg, #1a237e, #303f9f)"
  },
  {
    id: 10,
    title: "Epilepsi & Bangkitan (Seizures)",
    badge: "Kuis 10",
    questionCount: 28,
    topic: "Epileptologi & Emergency",
    description: "Kriteria praktis ILAE, ambang bangkitan, klasifikasi kejang fokal vs umum, & tatalaksana Status Epileptikus.",
    icon: "⚡",
    gradient: "linear-gradient(135deg, #bf360c, #e64a19)"
  }
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #0f172a 0%, #090d16 100%)",
      color: "#f8fafc",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      padding: "32px 20px 60px"
    }}>
      {/* Header Container */}
      <div style={{ maxWidth: 1080, margin: "0 auto", textAlign: "center", marginBottom: 40 }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "6px 16px",
          background: "rgba(34, 197, 94, 0.1)",
          border: "1px solid rgba(34, 197, 94, 0.25)",
          borderRadius: "30px",
          fontSize: "12px",
          fontWeight: "700",
          color: "#4ade80",
          letterSpacing: "1px",
          textTransform: "uppercase",
          marginBottom: "16px"
        }}>
          ✨ Modul Uji Kompetensi Kedokteran
        </div>

        <h1 style={{
          fontSize: "clamp(28px, 5vw, 42px)",
          fontWeight: 900,
          margin: "0 0 12px",
          letterSpacing: "-0.5px",
          background: "linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          Kuis Blok 6
        </h1>

        <p style={{
          fontSize: "clamp(14px, 2vw, 16px)",
          color: "#94a3b8",
          maxWidth: 640,
          margin: "0 auto",
          lineHeight: 1.6
        }}>
          Pilih topik kuis di bawah ini untuk memulai latihan soal analitis, tinjauan kasus klinis, dan integrasi keilmuan Islam-medis.
        </p>
      </div>

      {/* Grid Menu Kuis */}
      <div style={{
        maxWidth: 1080,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "20px"
      }}>
        {QUIZ_LIST.map((quiz) => (
          <div
            key={quiz.id}
            onClick={() => navigate(`/kuis/${quiz.id}`)}
            style={{
              background: "rgba(30, 41, 59, 0.7)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              padding: "24px",
              cursor: "pointer",
              transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.borderColor = "rgba(74, 222, 128, 0.4)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(0, 0, 0, 0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)";
            }}
          >
            {/* Top Accent Line */}
            <div style={{
              position: "absolute",
              top: 0, left: 0, right: 0, height: "4px",
              background: quiz.gradient
            }} />

            <div>
              {/* Header Badges */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                <span style={{
                  padding: "4px 10px",
                  background: "rgba(255, 255, 255, 0.06)",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontWeight: 800,
                  color: "#38bdf8",
                  letterSpacing: "0.5px"
                }}>
                  {quiz.badge}
                </span>

                <span style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#a7f3d0",
                  background: "rgba(16, 185, 129, 0.12)",
                  padding: "3px 8px",
                  borderRadius: "6px"
                }}>
                  {quiz.questionCount} Soal
                </span>
              </div>

              {/* Title & Icon */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "10px" }}>
                <span style={{ fontSize: "28px", lineHeight: 1 }}>{quiz.icon}</span>
                <h2 style={{
                  margin: 0,
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#f1f5f9",
                  lineHeight: 1.35
                }}>
                  {quiz.title}
                </h2>
              </div>

              <p style={{
                margin: "0 0 20px",
                fontSize: "13px",
                color: "#94a3b8",
                lineHeight: 1.5
              }}>
                {quiz.description}
              </p>
            </div>

            {/* Action Footer */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifySpace: "space-between",
              gap: "12px",
              paddingTop: "14px",
              borderTop: "1px solid rgba(255, 255, 255, 0.06)",
              marginTop: "auto"
            }}>
              <span style={{
                fontSize: "11px",
                color: "#64748b",
                fontWeight: 600,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}>
                {quiz.topic}
              </span>
              <span style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#4ade80",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                whiteSpace: "nowrap"
              }}>
                Mulai Kuis →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer style={{
        maxWidth: 1080,
        margin: "50px auto 0",
        textAlign: "center",
        fontSize: "12px",
        color: "#64748b",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        paddingTop: "20px"
      }}>
        © {new Date().getFullYear()} Kuis Blok 6 · Fakultas Kedokteran & Ilmu Kesehatan
      </footer>
    </div>
  );
}
