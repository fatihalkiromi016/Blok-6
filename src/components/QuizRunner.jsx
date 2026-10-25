import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";




const TIMER_OPTIONS = [
  { label: "30 dtk", value: 30, icon: "⚡" },
  { label: "60 dtk", value: 60, icon: "⏱" },
  { label: "Bebas", value: null, icon: "∞" },
];

// PALET UNISA TEMA ISLAMI/MEDIS: Hijau gelap elegan (Aisyiyah), Emas, Putih Bersih
const C = {
  bg: "#f3f8f5", surface: "#ffffff", surfaceHigh: "#fafcfa",
  border: "#cce0d2", borderSoft: "#e2ede5",
  accent: "#1b5e20", accentLight: "#4caf50", accentGlow: "rgba(27,94,32,0.08)", accentDim: "#144216",
  warn: "#f57c00", warnLight: "rgba(245,124,0,0.12)",
  gold: "#d4af37",
  correct: "#2e7d32", correctLight: "rgba(46,125,50,0.10)",
  wrong: "#c62828", wrongLight: "rgba(198,40,40,0.10)",
  text: "#1e3323", textMid: "#4b6653", textMuted: "#728a79", textDim: "#a8bdae",
};

// ANIMASI BARU
const customAnimations = `
@keyframes slideUpFade { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
@keyframes bannerScalePop {
  0%   { opacity: 0; transform: scale(0.6) translateY(-20px); }
  50%  { opacity: 1; transform: scale(1.05) translateY(5px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}
@keyframes floatSoftly { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
@keyframes pulseGlowButton {
  0%   { box-shadow: 0 0 0 0 rgba(27, 94, 32, 0.4); }
  70%  { box-shadow: 0 0 0 14px rgba(27, 94, 32, 0); }
  100% { box-shadow: 0 0 0 0 rgba(27, 94, 32, 0); }
}
@keyframes correctPopAnim {
  0%   { transform: scale(1); box-shadow: 0 0 0 0 rgba(46, 125, 50, 0.5); }
  50%  { transform: scale(1.02); box-shadow: 0 0 0 10px rgba(46, 125, 50, 0); }
  100% { transform: scale(1); }
}
@keyframes wrongWiggleAnim {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px) rotate(-1deg); }
  75% { transform: translateX(5px) rotate(1deg); }
}
@keyframes scoreScalePop { 0% { transform: scale(0.5); opacity: 0; } 60% { transform: scale(1.1); opacity: 1; } 100% { transform: scale(1); } }

.anim-slide-up { animation: slideUpFade 0.4s ease-out forwards; }
.anim-banner-scale { animation: bannerScalePop 0.6s cubic-bezier(0.2, 1.3, 0.5, 1) forwards; }
.anim-float-soft { animation: floatSoftly 3.5s ease-in-out infinite; }
.anim-pulse-glow { animation: pulseGlowButton 2s infinite; }
.anim-correct-pop { animation: correctPopAnim 0.5s ease-out forwards; }
.anim-wrong-wiggle { animation: wrongWiggleAnim 0.4s ease-in-out forwards; }
.anim-score-pop { animation: scoreScalePop 0.6s ease-out forwards; }

@media (prefers-reduced-motion: reduce) {
  .anim-slide-up, .anim-banner-scale, .anim-float-soft, .anim-pulse-glow, .anim-correct-pop, .anim-wrong-wiggle, .anim-score-pop { animation: none !important; }
}
`;

// BANNER STREAK (TEMA MEDIS ISLAMI)
const STREAK_MILESTONES = [3, 7, 15, 30, 50];
function streakInfo(n) {
  if (n >= 50) return { emoji: "🏆", title: "AKHLAQ MULIA PARIPURNA!", text: `${n} jawaban beruntun sempurna!`, bg: "linear-gradient(135deg,#d4af37,#f57c00)" };
  if (n >= 30) return { emoji: "⚕️", title: "DOKTER PROFESIONAL!", text: `${n} jawaban benar berturut-turut`, bg: "linear-gradient(135deg,#1b5e20,#4caf50)" };
  if (n >= 15) return { emoji: "🛡️", title: "NON-MALEFICENCE!", text: `${n} jawaban benar berturut-turut`, bg: "linear-gradient(135deg,#0d47a1,#1976d2)" };
  if (n >= 7) return { emoji: "🤝", title: "KLINIS BERETIKA!", text: `${n} jawaban benar berturut-turut`, bg: "linear-gradient(135deg,#2e7d32,#66bb6a)" };
  return { emoji: "🌱", title: "BINA RAPPORT!", text: `${n} jawaban benar berturut-turut`, bg: `linear-gradient(135deg,${C.accentDim},${C.accentLight})` };
}

function TimerRing({ timeLeft, total, noTimer }) {
  const pct = noTimer ? 1 : timeLeft / total;
  const r = 26, cx = 30, cy = 30, circ = 2 * Math.PI * r, dash = circ * pct;
  const col = noTimer ? C.accentDim : pct > 0.5 ? C.accent : pct > 0.25 ? C.warn : C.wrong;
  return (
    <div style={{ position: "relative", width: 60, height: 60 }}>
      <svg width="60" height="60" style={{ transform: "rotate(-90deg)" }}>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={C.borderSoft} strokeWidth="4" />
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={col} strokeWidth="4"
          strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
          style={{ transition: noTimer ? "none" : "stroke-dasharray 0.4s linear,stroke 0.3s" }} />
      </svg>
      <span style={{
        position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: noTimer ? 22 : 16, fontWeight: 800, color: col, fontFamily: "Georgia,serif"
      }}>
        {noTimer ? "∞" : timeLeft}
      </span>
    </div>
  );
}

function Bar({ current, total }) {
  return (
    <div style={{ width: "100%", height: 5, background: C.borderSoft, borderRadius: 3, overflow: "hidden" }}>
      <div style={{
        height: "100%", width: `${(current / total) * 100}%`,
        background: `linear-gradient(90deg,${C.accentDim},${C.accentLight})`,
        borderRadius: 3, transition: "width 0.5s ease"
      }} />
    </div>
  );
}

function CatBadge({ name, selected, onClick }) {
  return (
    <button onClick={onClick} style={{
      padding: "5px 12px", borderRadius: 20,
      border: `1.5px solid ${selected ? C.accent : C.border}`,
      background: selected ? C.accentGlow : "transparent",
      color: selected ? C.accent : C.textMuted,
      fontSize: 10, fontWeight: 700, cursor: "pointer", fontFamily: "Georgia,serif", whiteSpace: "nowrap",
      transition: "all 0.2s"
    }}>{name}</button>
  );
}

export default function QuizRunner({ quizTitle, questionsData }) {
  const navigate = useNavigate();
  const ALL_QUESTIONS = questionsData || [];
  const CATEGORIES = [...new Set(ALL_QUESTIONS.map(q => q.category))];
  const [screen, setScreen] = useState("home");
  const [selCats, setSelCats] = useState([...CATEGORIES]);
  const [timerDur, setTimerDur] = useState(30);
  const [questions, setQuestions] = useState([]);
  const [qi, setQi] = useState(0);
  const [chosen, setChosen] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [showExp, setShowExp] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [answers, setAnswers] = useState([]);
  const [timedOut, setTimedOut] = useState(false);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [streakBanner, setStreakBanner] = useState(null);
  const bannerRef = useRef(null);
  const timerRef = useRef(null);
  const curQ = questions[qi];

  const startQuiz = useCallback(() => {
    const pool = ALL_QUESTIONS.filter(q => selCats.includes(q.category));
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    setQuestions(shuffled); setQi(0); setChosen(null); setConfirmed(false);
    setShowExp(false); setTimeLeft(timerDur ?? 0); setAnswers([]); setTimedOut(false);
    setStreak(0); setMaxStreak(0); setStreakBanner(null);
    setScreen("quiz");
  }, [selCats, timerDur]);

  // Hitung mundur
  useEffect(() => {
    if (screen !== "quiz" || confirmed || timerDur === null) return;
    timerRef.current = setInterval(() => {
      setTimeLeft(t => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [screen, confirmed, qi, timerDur]);

  // Waktu habis - Perbaikan bug React 18 StrictMode: cegah insert ganda
  useEffect(() => {
    if (screen !== "quiz" || confirmed || timerDur === null || timeLeft > 0 || !curQ) return;
    clearInterval(timerRef.current);
    setTimedOut(true); setConfirmed(true);
    setAnswers(prev => {
      if (prev.length > qi) return prev; // Proteksi StrictMode
      return [...prev, { correct: false, category: curQ.category }];
    });
    setStreak(0);
  }, [timeLeft, screen, confirmed, timerDur, curQ, qi]);

  function showBanner(n) {
    setStreakBanner(n);
    clearTimeout(bannerRef.current);
    bannerRef.current = setTimeout(() => setStreakBanner(null), 2200);
  }
  function pick(i) { if (!confirmed) setChosen(i); }
  function confirm() {
    if (chosen === null || confirmed) return;
    clearInterval(timerRef.current); setConfirmed(true);
    const isCorrect = chosen === curQ.answer;

    setAnswers(prev => {
      if (prev.length > qi) return prev; // Proteksi StrictMode
      return [...prev, { correct: isCorrect, category: curQ.category }];
    });

    if (isCorrect) {
      const next = streak + 1;
      setStreak(next);
      setMaxStreak(m => Math.max(m, next));
      if (STREAK_MILESTONES.includes(next)) showBanner(next);
    } else {
      setStreak(0);
    }
  }

  function next() {
    if (qi + 1 >= questions.length) { setScreen("result"); return; }
    setQi(i => i + 1); setChosen(null); setConfirmed(false);
    setShowExp(false); setTimeLeft(timerDur ?? 0); setTimedOut(false);
  }

  function toggleCat(cat) {
    setSelCats(prev => prev.includes(cat) ? (prev.length > 1 ? prev.filter(c => c !== cat) : prev) : [...prev, cat]);
  }

  // RESULT
  if (screen === "result") {
    const score = answers.filter(a => a.correct).length;
    const total = answers.length;
    const pct = total ? Math.round((score / total) * 100) : 0;
    const grade = pct >= 85 ? { label: "LUAR BIASA ✦", color: C.correct } :
      pct >= 70 ? { label: "BAGUS ✦", color: C.accent } :
        pct >= 55 ? { label: "CUKUP", color: C.warn } :
          { label: "PERLU BELAJAR LAGI", color: C.wrong };
    const catStats = CATEGORIES.map(cat => {
      const ca = answers.filter(a => a.category === cat);
      if (!ca.length) return null;
      const ok = ca.filter(a => a.correct).length;
      return { cat, ok, total: ca.length, pct: Math.round((ok / ca.length) * 100) };
    }).filter(Boolean);

    return (
      <div style={{ minHeight: "100vh", background: C.bg, padding: "24px 16px", fontFamily: "Georgia,serif" }}>
        <style>{customAnimations}</style>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{ fontSize: 10, letterSpacing: 4, color: C.textMuted, marginBottom: 10, textTransform: "uppercase", fontFamily: "sans-serif" }}>
              Etika Klinis & Nilai Islam · Kuis Selesai
            </div>
            <div className="anim-score-pop" style={{ fontSize: 72, fontWeight: 900, color: grade.color, lineHeight: 1 }}>{pct}%</div>
            <div style={{ fontSize: 13, color: grade.color, fontWeight: 700, marginTop: 6, letterSpacing: 2 }}>{grade.label}</div>
            <div style={{ marginTop: 10, fontSize: 15, color: C.textMid }}>{score} dari {total} soal benar</div>
            {maxStreak >= 2 && (
              <div className="anim-float-soft" style={{
                marginTop: 12, display: "inline-flex", alignItems: "center", gap: 8,
                background: C.warnLight, border: "1.5px solid rgba(245,124,0,0.28)",
                borderRadius: 20, padding: "6px 16px"
              }}>
                <span style={{ fontSize: 18 }}>✨</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: C.warn, fontFamily: "sans-serif" }}>
                  Streak terbaik: {maxStreak}x berturut-turut
                </span>
              </div>
            )}
          </div>
          <div style={{ background: C.surface, border: `1.5px solid ${C.border}`, borderRadius: 14, padding: "18px 20px", marginBottom: 18 }}>
            <div style={{ fontSize: 10, letterSpacing: 3, color: C.textMuted, marginBottom: 14, textTransform: "uppercase", fontFamily: "sans-serif" }}>Analisis Per Kategori</div>
            {catStats.map(s => (
              <div key={s.cat} style={{ marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginBottom: 4 }}>
                  <span style={{ fontSize: 11, color: C.textMid }}>{s.cat}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: s.pct >= 70 ? C.correct : C.warn, whiteSpace: "nowrap" }}>{s.ok}/{s.total} ({s.pct}%)</span>
                </div>
                <div style={{ height: 4, background: C.borderSoft, borderRadius: 2 }}>
                  <div style={{ height: "100%", width: `${s.pct}%`, background: s.pct >= 70 ? C.correct : s.pct >= 50 ? C.gold : C.wrong, borderRadius: 2, transition: "width 1s ease" }} />
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => setScreen("home")} style={{
            width: "100%", padding: "14px 0",
            background: `linear-gradient(135deg,${C.accentDim},${C.accentLight})`,
            border: "none", borderRadius: 10, color: "#fff",
            fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "Georgia,serif"
          }}>← Kembali ke Menu Utama</button>
        </div>
      </div>
    );
  }

  // QUIZ
  if (screen === "quiz" && curQ) {
    const info = streakBanner ? streakInfo(streakBanner) : null;
    return (
      <div style={{ minHeight: "100vh", background: C.bg, padding: "18px 16px", fontFamily: "Georgia,serif" }}>
        <style>{customAnimations}</style>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <button onClick={() => setScreen("home")} style={{
              background: "transparent", border: `1px solid ${C.border}`, borderRadius: 20,
              padding: "4px 12px", fontSize: 11, fontWeight: 700, color: C.textMid, cursor: "pointer",
              fontFamily: "sans-serif"
            }}>
              ← Kembali ke Menu
            </button>
            <button onClick={() => navigate("/")} style={{
              background: "transparent", border: "none", fontSize: 11, fontWeight: 700,
              color: C.accent, cursor: "pointer", fontFamily: "sans-serif"
            }}>
              Halaman Utama 🏠
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <TimerRing timeLeft={timeLeft} total={timerDur ?? 1} noTimer={timerDur === null} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 8, marginBottom: 5 }}>
                <span style={{ fontSize: 10, color: C.textMuted, fontFamily: "sans-serif", letterSpacing: 1, textTransform: "uppercase" }}>{curQ.category}</span>
                <span style={{ fontSize: 10, color: C.textMuted, fontFamily: "sans-serif", whiteSpace: "nowrap" }}>{qi + 1}/{questions.length}</span>
              </div>
              <Bar current={qi + 1} total={questions.length} />
              <div style={{ marginTop: 4, fontSize: 10, color: C.textMuted, fontFamily: "sans-serif", display: "flex", alignItems: "center", flexWrap: "wrap", gap: 6 }}>
                <span>✓ {answers.filter(a => a.correct).length} benar</span>
                {timerDur !== null && <span style={{ color: C.textDim }}>· {timerDur}s/soal</span>}
                {timerDur === null && <span style={{ color: C.textDim }}>· tanpa batas waktu</span>}
                {streak >= 2 && (
                  <span style={{
                    marginLeft: 4, fontWeight: 700, color: streak >= 7 ? C.warn : C.accent,
                    background: streak >= 7 ? C.warnLight : C.accentGlow,
                    padding: "1px 7px", borderRadius: 10, fontSize: 10
                  }}>
                    ✨ {streak}x
                  </span>
                )}
              </div>
            </div>
          </div>

          {info && (
            <div key={streakBanner} className="anim-banner-scale" style={{
              background: info.bg,
              borderRadius: 10, padding: "10px 16px", marginBottom: 12,
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              boxShadow: "0 4px 20px rgba(0,0,0,0.14)"
            }}>
              <span className="anim-float-soft" style={{ fontSize: 24 }}>{info.emoji}</span>
              <div style={{ color: "#fff", fontFamily: "sans-serif" }}>
                <div style={{ fontWeight: 900, fontSize: 14, letterSpacing: 0.5 }}>{info.title}</div>
                <div style={{ fontSize: 11, opacity: 0.92 }}>{info.text}</div>
              </div>
            </div>
          )}

          {timedOut && (
            <div className="anim-wrong-wiggle" style={{
              background: C.wrongLight, border: `1.5px solid ${C.wrong}`, borderRadius: 8,
              padding: "9px 13px", marginBottom: 12, color: C.wrong, fontSize: 12, fontFamily: "sans-serif"
            }}>
              ⏱ Waktu habis! Jawaban benar: {String.fromCharCode(65 + curQ.answer)}
            </div>
          )}

          <div style={{ background: C.surface, border: `1.5px solid ${C.border}`, borderRadius: 14, padding: "18px 17px", marginBottom: 14 }}>
            <div style={{ fontSize: 10, color: C.textMuted, letterSpacing: 1, marginBottom: 10, fontFamily: "sans-serif", textTransform: "uppercase" }}>Soal {qi + 1}</div>
            <p style={{ margin: 0, fontSize: 15, color: C.text, lineHeight: 1.7 }}>{curQ.question}</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 14 }}>
            {curQ.options.map((opt, i) => {
              const isChosen = chosen === i, isAns = i === curQ.answer;
              let border = C.border, bg = C.surface, text = C.text, cls = "";
              if (confirmed) {
                if (isAns) { border = C.correct; bg = C.correctLight; text = C.correct; cls = "anim-correct-pop"; }
                else if (isChosen) { border = C.wrong; bg = C.wrongLight; text = C.wrong; cls = "anim-wrong-wiggle"; }
                else text = C.textDim;
              } else if (isChosen) { border = C.accent; bg = C.accentGlow; text = C.accent; }
              return (
                <button key={i} className={cls} onClick={() => pick(i)} style={{
                  display: "flex", alignItems: "flex-start", gap: 11,
                  padding: "12px 14px", border: `1.5px solid ${border}`,
                  background: bg, borderRadius: 10, cursor: confirmed ? "default" : "pointer",
                  textAlign: "left", transition: "all 0.2s"
                }}>
                  <span style={{
                    minWidth: 22, height: 22, borderRadius: "50%", border: `1.5px solid ${border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 10, fontWeight: 800, color: text, flexShrink: 0, marginTop: 1, fontFamily: "sans-serif"
                  }}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span style={{ fontSize: 13, color: text, lineHeight: 1.6, minWidth: 0, overflowWrap: "anywhere" }}>
                    {opt}{confirmed && isAns ? " ✓" : ""}{confirmed && isChosen && !isAns ? " ✗" : ""}
                  </span>
                </button>
              );
            })}
          </div>

          {confirmed && (
            <div style={{ marginBottom: 12 }}>
              <button onClick={() => setShowExp(v => !v)} style={{
                width: "100%", padding: "9px 14px", background: "transparent",
                border: `1.5px solid ${C.border}`, borderRadius: 8, color: C.textMuted,
                fontSize: 11, cursor: "pointer", fontFamily: "sans-serif"
              }}>{showExp ? "▲ Tutup Penjelasan" : "▼ Lihat Penjelasan Klinis"}</button>
              {showExp && (
                <div className="anim-slide-up" style={{
                  marginTop: 8, padding: "13px 15px", background: C.surfaceHigh,
                  border: `1.5px solid ${C.borderSoft}`, borderRadius: 8,
                  fontSize: 13, color: C.textMid, lineHeight: 1.7
                }}>
                  <span style={{ color: C.accent, fontWeight: 700, fontSize: 10, fontFamily: "sans-serif", letterSpacing: 1 }}>PEMBAHASAN — </span>
                  {curQ.explanation}
                </div>
              )}
            </div>
          )}

          <div style={{ display: "flex", gap: 9 }}>
            {!confirmed && (
              <button onClick={confirm} disabled={chosen === null} style={{
                flex: 1, padding: "13px 0",
                background: chosen !== null ? `linear-gradient(135deg,${C.accentDim},${C.accentLight})` : "transparent",
                border: `1.5px solid ${chosen !== null ? C.accent : C.border}`,
                borderRadius: 9, color: chosen !== null ? "#fff" : C.textDim,
                fontSize: 13, fontWeight: 700, cursor: chosen !== null ? "pointer" : "not-allowed",
                fontFamily: "Georgia,serif", transition: "all 0.2s"
              }}>Kunci Jawaban</button>
            )}
            {confirmed && (
              <button onClick={next} style={{
                flex: 1, padding: "13px 0",
                background: `linear-gradient(135deg,${C.accentDim},${C.accentLight})`,
                border: "none", borderRadius: 9, color: "#fff",
                fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "Georgia,serif"
              }}>{qi + 1 >= questions.length ? "Lihat Evaluasi Akhir →" : "Pertanyaan Berikutnya →"}</button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // HOME
  const totalSel = ALL_QUESTIONS.filter(q => selCats.includes(q.category)).length;
  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: "Georgia,serif" }}>
      <style>{customAnimations}</style>

      <div style={{
        background: "linear-gradient(160deg,#cce0d2 0%,#f3f8f5 100%)",
        padding: "36px 20px 28px", textAlign: "center", borderBottom: `1.5px solid ${C.border}`
      }}>
        <div style={{ position: "relative", width: 68, height: 68, margin: "0 auto 14px" }}>
          <div className="anim-pulse-glow" style={{
            position: "absolute", inset: 0, borderRadius: "50%",
            border: `2px dashed ${C.accentLight}`, opacity: 0.7
          }} />
          <div className="anim-float-soft" style={{
            position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30
          }}>⚖️</div>
        </div>
        <div style={{
          fontSize: 9, letterSpacing: 3, color: C.textMuted, marginBottom: 10,
          textTransform: "uppercase", fontFamily: "sans-serif"
        }}>
          <button onClick={() => navigate("/")} style={{
            display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 14px",
            background: C.accentGlow, border: `1px solid ${C.border}`, borderRadius: 20,
            fontSize: 12, fontWeight: 700, color: C.accent, cursor: "pointer",
            marginBottom: 10, fontFamily: "sans-serif", transition: "all 0.2s"
          }}>
            ← Kembali ke Menu Utama
          </button>
        </div>
        <h1 style={{ margin: 0, fontSize: "clamp(20px,5vw,28px)", fontWeight: 900, color: C.text, lineHeight: 1.25 }}>{quizTitle}</h1>
        <p style={{ margin: "12px 0 0", fontSize: 12, color: C.textMuted, lineHeight: 1.6, fontFamily: "sans-serif" }}>
          {ALL_QUESTIONS.length} soal analitis · {CATEGORIES.length} kategori · Atur waktu pengerjaan
        </p>
      </div>

      <div style={{ maxWidth: 600, margin: "0 auto", padding: "22px 16px" }}>

        <div style={{
          background: C.surface, border: `1.5px solid ${C.border}`,
          borderRadius: 12, padding: "16px 17px", marginBottom: 20
        }}>
          <div style={{
            fontSize: 9, letterSpacing: 2, color: C.textMuted, marginBottom: 14,
            textTransform: "uppercase", fontFamily: "sans-serif"
          }}>
            ⏳ Durasi Evaluasi
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {TIMER_OPTIONS.map(opt => {
              const active = timerDur === opt.value;
              return (
                <button key={String(opt.value)} onClick={() => setTimerDur(opt.value)} style={{
                  flex: 1, padding: "14px 6px",
                  border: `2px solid ${active ? C.accent : C.border}`,
                  background: active ? C.accentGlow : "transparent",
                  borderRadius: 10, cursor: "pointer",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                  transition: "all 0.2s",
                  boxShadow: active ? `0 0 0 3px rgba(27,94,32,0.12)` : "none"
                }}>
                  <span style={{ fontSize: 24, lineHeight: 1 }}>{opt.icon}</span>
                  <span style={{
                    fontSize: 12, fontWeight: 700, color: active ? C.accent : C.textMuted,
                    fontFamily: "sans-serif"
                  }}>{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <span style={{ fontSize: 10, letterSpacing: 2, color: C.textMuted, textTransform: "uppercase", fontFamily: "sans-serif" }}>Topik Pembahasan</span>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => setSelCats([...CATEGORIES])} style={{ fontSize: 10, color: C.accent, background: "none", border: "none", cursor: "pointer", fontFamily: "sans-serif" }}>Semua</button>
              <span style={{ color: C.textDim }}>|</span>
              <button onClick={() => setSelCats([CATEGORIES[0]])} style={{ fontSize: 10, color: C.textMuted, background: "none", border: "none", cursor: "pointer", fontFamily: "sans-serif" }}>Reset</button>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {CATEGORIES.map(cat => (
              <CatBadge key={cat} name={cat} selected={selCats.includes(cat)} onClick={() => toggleCat(cat)} />
            ))}
          </div>
        </div>

        <div style={{
          background: C.surface, border: `1.5px solid ${C.border}`, borderRadius: 12,
          padding: "14px 17px", marginBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "center"
        }}>
          <div>
            <div style={{ fontSize: 9, color: C.textMuted, letterSpacing: 2, textTransform: "uppercase", marginBottom: 3, fontFamily: "sans-serif" }}>Bank Soal Aktif</div>
            <div style={{ fontSize: 30, fontWeight: 900, color: C.accent }}>{totalSel} <span style={{ fontSize: 13, color: C.textMuted }}>soal</span></div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 9, color: C.textMuted, letterSpacing: 2, textTransform: "uppercase", marginBottom: 3, fontFamily: "sans-serif" }}>Timer / Soal</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: C.gold }}>{timerDur === null ? "∞" : `${timerDur}s`}</div>
          </div>
        </div>

        <div style={{ background: C.surface, border: `1.5px solid ${C.border}`, borderRadius: 12, padding: "15px 17px", marginBottom: 20 }}>
          <div style={{ fontSize: 9, letterSpacing: 2, color: C.textMuted, marginBottom: 12, textTransform: "uppercase", fontFamily: "sans-serif" }}>Distribusi Kategori</div>
          {CATEGORIES.map((cat, i) => {
            const count = ALL_QUESTIONS.filter(q => q.category === cat).length;
            const active = selCats.includes(cat);
            return (
              <div key={cat} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10,
                paddingBottom: i < CATEGORIES.length - 1 ? 9 : 0, marginBottom: i < CATEGORIES.length - 1 ? 9 : 0,
                borderBottom: i < CATEGORIES.length - 1 ? `1px solid ${C.borderSoft}` : "none"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", flexShrink: 0, background: active ? C.accent : C.textDim }} />
                  <span style={{ fontSize: 12, color: active ? C.text : C.textDim }}>{cat}</span>
                </div>
                <span style={{ fontSize: 11, color: active ? C.accent : C.textDim, fontWeight: 700, fontFamily: "sans-serif", whiteSpace: "nowrap" }}>{count} soal</span>
              </div>
            );
          })}
        </div>

        <button className="anim-pulse-glow" onClick={startQuiz} disabled={totalSel === 0} style={{
          width: "100%", padding: "15px 0",
          background: `linear-gradient(135deg,${C.accentDim},${C.accentLight})`,
          border: "none", borderRadius: 10, color: "#fff",
          fontSize: 14, fontWeight: 900, cursor: "pointer",
          letterSpacing: 1, fontFamily: "Georgia,serif",
          boxShadow: `0 4px 24px rgba(27,94,32,0.28)`
        }}>Mulai Uji Kompetensi →</button>
        <p style={{ textAlign: "center", marginTop: 14, fontSize: 10, color: C.textMuted, fontFamily: "sans-serif" }}>
          Urutan soal diacak otomatis setiap sesi · {timerDur ? `${timerDur} detik per soal` : "Tanpa batas waktu"}
        </p>
      </div>
    </div>
  );
}
