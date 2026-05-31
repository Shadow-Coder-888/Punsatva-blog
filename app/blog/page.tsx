import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Disease is Not the Enemy | Punsatva",
  description:
    "A new perspective on illness — Ayurvedic and modern medicine both agree that disease is a signal from your body, not an enemy. Learn root causes and holistic healing pathways.",
  openGraph: {
    title: "Disease is Not the Enemy | Punsatva",
    description: "Reframing illness as a signal, not a sentence. Ayurvedic + modern medical perspective.",
    type: "article",
  },
};

const tocItems = [
  { id: "intro", label: "Introduction" },
  { id: "signal", label: "Disease as a Signal" },
  { id: "ayurveda", label: "Ayurvedic Perspective" },
  { id: "modern", label: "Modern Medicine View" },
  { id: "doshas", label: "Tridosha & Root Causes" },
  { id: "healing", label: "Healing Pathways" },
  { id: "daily", label: "Daily Prevention Tips" },
  { id: "faq", label: "FAQs" },
];

const faqData = [
  {
    question: "Does 'disease is not the enemy' mean I should avoid doctors?",
    answer:
      "Not at all. The idea is to complement conventional medicine with a deeper understanding of root causes. Doctors, diagnostics, and medicine remain essential — especially in acute situations. This framework helps you ask better questions and address lifestyle factors alongside treatment.",
  },
  {
    question: "How does Ayurveda identify my body type (Prakriti)?",
    answer:
      "A qualified Ayurvedic practitioner assesses your Prakriti through pulse diagnosis (Nadi Pariksha), physical observations, and a detailed questionnaire about your digestion, sleep, stress responses, and emotional tendencies. This creates a personalized health map.",
  },
  {
    question: "Can Ayurveda help with chronic conditions like diabetes or hypertension?",
    answer:
      "Yes, with the important caveat that it should work alongside your doctor's supervision — not replace it. Ayurvedic protocols for metabolic conditions focus on diet, herbal support, and lifestyle corrections that can meaningfully improve markers over time.",
  },
  {
    question: "What is Ama in Ayurveda?",
    answer:
      "Ama literally means 'undigested' — it refers to metabolic waste that accumulates in tissues when digestion (Agni) is weak. Modern medicine recognises similar concepts in oxidative stress, inflammatory markers, and toxin buildup at the cellular level.",
  },
  {
    question: "How do emotions affect physical disease according to Ayurveda?",
    answer:
      "Each dosha governs both physical and emotional patterns. Unprocessed fear disturbs Vata, chronic anger inflames Pitta, and unexpressed grief stagnates Kapha. This directly parallels findings in psychoneuroimmunology — the study of how mental states affect immune function.",
  },
];

export default function BlogPage() {
  return (
    <div style={{ backgroundColor: "#0a0f0d", minHeight: "100vh" }}>
      <Navbar />

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 20px" }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "24px", fontFamily: "sans-serif", fontSize: "12px", color: "#5a7a5e" }}>
          <span>Home</span>
          <span>/</span>
          <span>Knowledge Hub</span>
          <span>/</span>
          <span style={{ color: "#9ab09e" }}>Disease is Not the Enemy</span>
        </div>

        {/* Main layout — article + sidebar */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "40px", alignItems: "start" }}>

          {/* ===== ARTICLE ===== */}
          <article>

            {/* Header */}
            <div style={{ marginBottom: "32px", paddingBottom: "24px", borderBottom: "1px solid #1e2e22" }}>
              <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
                <span style={{ backgroundColor: "rgba(74,154,90,0.15)", color: "#5dbf70", border: "1px solid rgba(74,154,90,0.3)", padding: "3px 10px", borderRadius: "4px", fontSize: "11px", fontFamily: "monospace", letterSpacing: "1px" }}>
                  AYURVEDIC WELLNESS
                </span>
                <span style={{ backgroundColor: "rgba(201,168,76,0.12)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.25)", padding: "3px 10px", borderRadius: "4px", fontSize: "11px", fontFamily: "monospace", letterSpacing: "1px" }}>
                  MEDICALLY REVIEWED
                </span>
              </div>

              <h1 style={{ fontSize: "36px", fontWeight: "800", color: "#e8f0ea", lineHeight: "1.2", letterSpacing: "-1px", marginBottom: "16px" }}>
                Disease is Not{" "}
                <span style={{ color: "#4a9a5a" }}>the Enemy</span>
              </h1>

              <p style={{ color: "#9ab09e", fontSize: "15px", lineHeight: "1.7", fontFamily: "sans-serif", marginBottom: "20px", maxWidth: "600px" }}>
                A new Ayurvedic-modern perspective on why illness is your body talking to you — and how listening leads to deeper, lasting healing.
              </p>

              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", fontSize: "12px", color: "#5a7a5e", fontFamily: "sans-serif" }}>
                <span>📋 Reviewed by <strong style={{ color: "#9ab09e" }}>Punsatva Medical Board</strong></span>
                <span>⏱ 10–12 min read</span>
                <span>📅 May 26, 2026</span>
              </div>
            </div>

            {/* Hero Image */}
            <div style={{ position: "relative", width: "100%", height: "320px", borderRadius: "8px", overflow: "hidden", marginBottom: "36px", border: "1px solid #1e2e22" }}>
              <Image
                src="https://picsum.photos/seed/ayurveda-wellness/900/400"
                alt="Ayurvedic wellness - herbs and natural healing"
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                style={{ objectFit: "cover" }}
                priority
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 16px", background: "linear-gradient(transparent, rgba(10,15,13,0.9))" }}>
                <p style={{ color: "#9ab09e", fontSize: "11px", fontFamily: "sans-serif" }}>
                  Ayurvedic approach: treating the root, not just the symptom
                </p>
              </div>
            </div>

            {/* Quick answers box */}
            <div style={{ backgroundColor: "#111a15", border: "1px solid #2a3d2e", borderRadius: "8px", padding: "20px", marginBottom: "36px" }}>
              <h2 style={{ color: "#5dbf70", fontSize: "13px", fontFamily: "monospace", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>
                Quick Answers
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { q: "What does this mean?", a: "Your body uses illness as a signal — not a punishment. Fix the root cause, not just the symptom." },
                  { q: "Is this anti-medicine?", a: "No. It works alongside modern medicine to get better, lasting results." },
                  { q: "Can the body heal itself?", a: "Yes — when root causes are addressed and the terrain is restored, healing follows naturally." },
                ].map((item) => (
                  <div key={item.q} style={{ borderLeft: "2px solid #4a9a5a", paddingLeft: "12px" }}>
                    <p style={{ color: "#e8f0ea", fontSize: "13px", fontWeight: "bold", marginBottom: "4px" }}>{item.q}</p>
                    <p style={{ color: "#9ab09e", fontSize: "12px", fontFamily: "sans-serif", lineHeight: "1.6" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 1 - Intro */}
            <section id="intro" style={{ marginBottom: "40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ color: "#4a9a5a", fontSize: "11px", fontFamily: "monospace", letterSpacing: "1px" }}>01 / INTRODUCTION</span>
                <div style={{ flex: 1, height: "1px", backgroundColor: "#1e2e22" }}></div>
              </div>
              <h2 style={{ color: "#e8f0ea", fontSize: "24px", fontWeight: "700", marginBottom: "16px", letterSpacing: "-0.5px" }}>
                A Paradigm Shift in How We See Illness
              </h2>
              <p style={{ color: "#9ab09e", fontSize: "14px", lineHeight: "1.85", fontFamily: "sans-serif", marginBottom: "14px" }}>
                For centuries, Western medicine has framed disease as an enemy — something to be fought, conquered, and eliminated. We &quot;battle&quot; cancer. We &quot;combat&quot; infections. Language shapes how we think, and this war metaphor shapes how we treat illness.
              </p>
              <p style={{ color: "#9ab09e", fontSize: "14px", lineHeight: "1.85", fontFamily: "sans-serif", marginBottom: "14px" }}>
                But what if this framing is exactly wrong? What if disease is not the enemy — but the messenger? Both ancient Ayurvedic medicine and cutting-edge systems biology are now converging on this insight: that symptoms are not random malfunctions but intelligent signals from a body trying to restore balance.
              </p>

              {/* Comparison visual */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 40px 1fr", alignItems: "center", gap: "12px", margin: "24px 0", padding: "20px", backgroundColor: "#0f1a14", border: "1px solid #1e2e22", borderRadius: "8px" }}>
                <div style={{ backgroundColor: "#111a15", border: "1px solid #1e2e22", borderRadius: "6px", padding: "16px" }}>
                  <p style={{ color: "#c94a4a", fontSize: "10px", fontFamily: "monospace", letterSpacing: "1px", marginBottom: "10px" }}>OLD MODEL</p>
                  <p style={{ color: "#9ab09e", fontSize: "12px", fontFamily: "sans-serif", marginBottom: "5px" }}>❌ Disease = Enemy</p>
                  <p style={{ color: "#9ab09e", fontSize: "12px", fontFamily: "sans-serif", marginBottom: "5px" }}>❌ Body = Battlefield</p>
                  <p style={{ color: "#9ab09e", fontSize: "12px", fontFamily: "sans-serif" }}>❌ Symptoms = Problems</p>
                </div>
                <div style={{ textAlign: "center", color: "#4a9a5a", fontSize: "20px" }}>→</div>
                <div style={{ backgroundColor: "#111a15", border: "1px solid #2a3d2e", borderRadius: "6px", padding: "16px" }}>
                  <p style={{ color: "#5dbf70", fontSize: "10px", fontFamily: "monospace", letterSpacing: "1px", marginBottom: "10px" }}>NEW MODEL</p>
                  <p style={{ color: "#9ab09e", fontSize: "12px", fontFamily: "sans-serif", marginBottom: "5px" }}>✅ Disease = Signal</p>
                  <p style={{ color: "#9ab09e", fontSize: "12px", fontFamily: "sans-serif", marginBottom: "5px" }}>✅ Body = Intelligence</p>
                  <p style={{ color: "#9ab09e", fontSize: "12px", fontFamily: "sans-serif" }}>✅ Symptoms = Messages</p>
                </div>
              </div>
            </section>

            {/* Section 2 - Signal */}
            <section id="signal" style={{ marginBottom: "40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ color: "#4a9a5a", fontSize: "11px", fontFamily: "monospace", letterSpacing: "1px" }}>02 / DISEASE AS SIGNAL</span>
                <div style={{ flex: 1, height: "1px", backgroundColor: "#1e2e22" }}></div>
              </div>
              <h2 style={{ color: "#e8f0ea", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>
                Your Body is Trying to Tell You Something
              </h2>
              <p style={{ color: "#9ab09e", fontSize: "14px", lineHeight: "1.85", fontFamily: "sans-serif", marginBottom: "14px" }}>
                Think of it like a smoke detector. When the alarm goes off, you don&apos;t attack the detector — you find the fire. Suppressing symptoms with medication alone, without addressing what triggered them, is like removing the battery and going back to sleep.
              </p>

              <div style={{ backgroundColor: "rgba(74,154,90,0.06)", border: "1px solid rgba(74,154,90,0.2)", borderLeft: "3px solid #4a9a5a", borderRadius: "0 6px 6px 0", padding: "16px 18px", margin: "20px 0" }}>
                <p style={{ color: "#7ab07a", fontSize: "13px", fontWeight: "bold", marginBottom: "6px" }}>The Signal Model</p>
                <p style={{ color: "#9ab09e", fontSize: "13px", lineHeight: "1.7", fontFamily: "sans-serif" }}>
                  Disease arises when the body&apos;s self-regulation becomes overwhelmed by accumulated stressors. Symptoms are corrective attempts, not failures.
                </p>
              </div>

              <p style={{ color: "#9ab09e", fontSize: "13px", fontFamily: "monospace", letterSpacing: "1px", marginBottom: "8px", marginTop: "20px" }}>WHAT DISEASE COMMONLY SIGNALS:</p>
              {[
                "Nutritional deficiencies or toxic buildup (Ama) in tissues",
                "Chronic stress and nervous system overactivation",
                "Suppressed emotional or psychological conflicts",
                "Lifestyle choices misaligned with your body type",
                "Disrupted sleep, digestion, and daily routines",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ color: "#4a9a5a", fontSize: "12px", marginTop: "2px", flexShrink: 0 }}>→</span>
                  <p style={{ color: "#9ab09e", fontSize: "13px", fontFamily: "sans-serif", lineHeight: "1.6" }}>{item}</p>
                </div>
              ))}
            </section>

            {/* Section 3 - Ayurveda */}
            <section id="ayurveda" style={{ marginBottom: "40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ color: "#4a9a5a", fontSize: "11px", fontFamily: "monospace", letterSpacing: "1px" }}>03 / AYURVEDIC LENS</span>
                <div style={{ flex: 1, height: "1px", backgroundColor: "#1e2e22" }}></div>
              </div>
              <h2 style={{ color: "#e8f0ea", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>
                How Ayurveda Sees Illness
              </h2>
              <p style={{ color: "#9ab09e", fontSize: "14px", lineHeight: "1.85", fontFamily: "sans-serif", marginBottom: "14px" }}>
                Ayurveda — literally &quot;the knowledge of life&quot; — defines health as harmony between body, mind, senses, and soul. Disease (Vyadhi) is simply the disruption of this harmony. The root cause, according to Ayurveda, is Prajna-aparadha — &quot;crimes against wisdom&quot;: knowingly making choices that go against your own nature over time.
              </p>

              <h3 style={{ color: "#e8f0ea", fontSize: "17px", fontWeight: "700", marginBottom: "12px", marginTop: "24px" }}>
                Key Ayurvedic Herbs for Restoration
              </h3>
              {[
                { name: "Ashwagandha (Withania Somnifera)", desc: "Adaptogenic root that reduces cortisol, restores nervous system strength, and supports Vata balance." },
                { name: "Triphala Churna", desc: "Classic three-fruit blend that gently cleanses Ama, rekindles Agni, and nourishes all body tissues (Dhatus)." },
                { name: "Brahmi (Bacopa Monnieri)", desc: "Brain tonic that calms Pitta-related inflammation and supports nerve cell regeneration." },
              ].map((herb) => (
                <div key={herb.name} style={{ backgroundColor: "#111a15", border: "1px solid #1e2e22", borderRadius: "6px", padding: "14px 16px", marginBottom: "10px" }}>
                  <p style={{ color: "#c9a84c", fontSize: "12px", fontFamily: "monospace", marginBottom: "4px" }}>{herb.name}</p>
                  <p style={{ color: "#9ab09e", fontSize: "13px", fontFamily: "sans-serif", lineHeight: "1.6" }}>{herb.desc}</p>
                </div>
              ))}
            </section>

            {/* Section 4 - Modern */}
            <section id="modern" style={{ marginBottom: "40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ color: "#4a9a5a", fontSize: "11px", fontFamily: "monospace", letterSpacing: "1px" }}>04 / MODERN MEDICINE</span>
                <div style={{ flex: 1, height: "1px", backgroundColor: "#1e2e22" }}></div>
              </div>
              <h2 style={{ color: "#e8f0ea", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>
                Where Science and Ayurveda Agree
              </h2>
              <p style={{ color: "#9ab09e", fontSize: "14px", lineHeight: "1.85", fontFamily: "sans-serif", marginBottom: "20px" }}>
                Modern systems biology and psychoneuroimmunology are independently arriving at insights Ayurveda has held for thousands of years. The convergence is striking.
              </p>

              {/* Table */}
              <div style={{ overflowX: "auto", borderRadius: "8px", border: "1px solid #1e2e22" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "440px" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#1a2a1e" }}>
                      <th style={{ padding: "10px 14px", textAlign: "left", color: "#9ab09e", fontSize: "11px", fontFamily: "monospace", letterSpacing: "1px", borderBottom: "1px solid #2a3d2e" }}>CONCEPT</th>
                      <th style={{ padding: "10px 14px", textAlign: "left", color: "#9ab09e", fontSize: "11px", fontFamily: "monospace", letterSpacing: "1px", borderBottom: "1px solid #2a3d2e" }}>AYURVEDA</th>
                      <th style={{ padding: "10px 14px", textAlign: "left", color: "#9ab09e", fontSize: "11px", fontFamily: "monospace", letterSpacing: "1px", borderBottom: "1px solid #2a3d2e" }}>MODERN MEDICINE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Digestive fire", "Agni", "Gut microbiome & digestive enzymes"],
                      ["Waste accumulation", "Ama", "Oxidative stress & toxin buildup"],
                      ["Body constitution", "Prakriti", "Genetic & epigenetic phenotype"],
                      ["Life energy", "Prana", "Mitochondrial ATP energy"],
                      ["Tissue channels", "Srotas", "Lymphatic & circulatory system"],
                    ].map(([concept, ayur, modern], i) => (
                      <tr key={concept} style={{ backgroundColor: i % 2 === 0 ? "#111a15" : "transparent", borderBottom: "1px solid #1e2e22" }}>
                        <td style={{ padding: "10px 14px", color: "#e8f0ea", fontSize: "13px", fontWeight: "600" }}>{concept}</td>
                        <td style={{ padding: "10px 14px", color: "#c9a84c", fontSize: "12px", fontFamily: "monospace" }}>{ayur}</td>
                        <td style={{ padding: "10px 14px", color: "#9ab09e", fontSize: "13px", fontFamily: "sans-serif" }}>{modern}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5 - Doshas */}
            <section id="doshas" style={{ marginBottom: "40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ color: "#4a9a5a", fontSize: "11px", fontFamily: "monospace", letterSpacing: "1px" }}>05 / ROOT CAUSES</span>
                <div style={{ flex: 1, height: "1px", backgroundColor: "#1e2e22" }}></div>
              </div>
              <h2 style={{ color: "#e8f0ea", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>
                Tridosha: The Three Body Intelligences
              </h2>
              <p style={{ color: "#9ab09e", fontSize: "14px", lineHeight: "1.85", fontFamily: "sans-serif", marginBottom: "20px" }}>
                Every person has a unique combination of three biological principles — Vata, Pitta, and Kapha. When any of these accumulates beyond its threshold, disease begins. Two people with the same diagnosis may need entirely different treatments.
              </p>

              {[
                { name: "Vata", color: "#3a9090", causes: "Irregular routines, cold/raw foods, overexertion, anxiety", symptoms: "Dry skin, insomnia, joint pain, variable digestion", remedy: "Warm oils, grounding routines, cooked warm foods" },
                { name: "Pitta", color: "#c9a84c", causes: "Spicy foods, chronic stress, overwork, suppressed anger", symptoms: "Inflammation, skin issues, acid reflux, irritability", remedy: "Cooling herbs, meditation, bitter and sweet foods" },
                { name: "Kapha", color: "#7ab07a", causes: "Sedentary life, heavy food, excess sleep, emotional stagnation", symptoms: "Congestion, weight gain, slow metabolism, low energy", remedy: "Vigorous exercise, light foods, stimulating herbs" },
              ].map((dosha) => (
                <div key={dosha.name} style={{ backgroundColor: "#111a15", borderLeft: `3px solid ${dosha.color}`, borderRadius: "0 6px 6px 0", border: `1px solid #1e2e22`, borderLeftWidth: "3px", padding: "16px 18px", marginBottom: "12px" }}>
                  <p style={{ color: dosha.color, fontSize: "15px", fontWeight: "700", marginBottom: "12px" }}>{dosha.name} Imbalance</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "12px" }}>
                    <div>
                      <p style={{ color: "#5a7a5e", fontSize: "10px", fontFamily: "monospace", letterSpacing: "1px", marginBottom: "4px" }}>CAUSES</p>
                      <p style={{ color: "#9ab09e", fontSize: "12px", fontFamily: "sans-serif", lineHeight: "1.5" }}>{dosha.causes}</p>
                    </div>
                    <div>
                      <p style={{ color: "#5a7a5e", fontSize: "10px", fontFamily: "monospace", letterSpacing: "1px", marginBottom: "4px" }}>SYMPTOMS</p>
                      <p style={{ color: "#9ab09e", fontSize: "12px", fontFamily: "sans-serif", lineHeight: "1.5" }}>{dosha.symptoms}</p>
                    </div>
                    <div>
                      <p style={{ color: "#5a7a5e", fontSize: "10px", fontFamily: "monospace", letterSpacing: "1px", marginBottom: "4px" }}>REMEDIES</p>
                      <p style={{ color: "#9ab09e", fontSize: "12px", fontFamily: "sans-serif", lineHeight: "1.5" }}>{dosha.remedy}</p>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Section 6 - Healing */}
            <section id="healing" style={{ marginBottom: "40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ color: "#4a9a5a", fontSize: "11px", fontFamily: "monospace", letterSpacing: "1px" }}>06 / HEALING PATHWAYS</span>
                <div style={{ flex: 1, height: "1px", backgroundColor: "#1e2e22" }}></div>
              </div>
              <h2 style={{ color: "#e8f0ea", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>
                Punsatva&apos;s 3-Tier Integrative Protocol
              </h2>
              <p style={{ color: "#9ab09e", fontSize: "14px", lineHeight: "1.85", fontFamily: "sans-serif", marginBottom: "20px" }}>
                Our approach moves from lifestyle corrections first, then Ayurvedic therapies, and clinical intervention only where needed. Most imbalances respond well within 60–90 days.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
                {[
                  { tier: "Tier 1", label: "Lifestyle & Diet", items: ["Constitutional diet alignment", "Dinacharya (daily routines)", "Circadian rhythm reset", "Sleep architecture repair"] },
                  { tier: "Tier 2", label: "Ayurvedic Therapy", items: ["Personalised herbal blends", "Abhyanga oil massage", "Pranayama breathwork", "Shirodhara nerve therapy"] },
                  { tier: "Tier 3", label: "Clinical Support", items: ["Blood & biomarker tests", "Functional medicine consult", "Targeted supplements", "Specialist referral if needed"] },
                ].map((t) => (
                  <div key={t.tier} style={{ backgroundColor: "#111a15", border: "1px solid #1e2e22", borderRadius: "6px", padding: "16px" }}>
                    <p style={{ color: "#4a9a5a", fontSize: "10px", fontFamily: "monospace", letterSpacing: "1px", marginBottom: "4px" }}>{t.tier}</p>
                    <p style={{ color: "#e8f0ea", fontSize: "14px", fontWeight: "700", marginBottom: "12px" }}>{t.label}</p>
                    {t.items.map((item) => (
                      <div key={item} style={{ display: "flex", gap: "6px", marginBottom: "6px" }}>
                        <span style={{ color: "#4a9a5a", fontSize: "10px", marginTop: "3px", flexShrink: 0 }}>▸</span>
                        <p style={{ color: "#9ab09e", fontSize: "12px", fontFamily: "sans-serif", lineHeight: "1.5" }}>{item}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7 - Daily Tips */}
            <section id="daily" style={{ marginBottom: "40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ color: "#4a9a5a", fontSize: "11px", fontFamily: "monospace", letterSpacing: "1px" }}>07 / DAILY PREVENTION</span>
                <div style={{ flex: 1, height: "1px", backgroundColor: "#1e2e22" }}></div>
              </div>
              <h2 style={{ color: "#e8f0ea", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>
                4 Daily Habits That Change Everything
              </h2>
              <p style={{ color: "#9ab09e", fontSize: "14px", lineHeight: "1.85", fontFamily: "sans-serif", marginBottom: "20px" }}>
                Ayurveda is ultimately a science of prevention. Most chronic conditions can be significantly avoided by consistent daily practices.
              </p>

              {[
                { num: "01", title: "Respect Your Circadian Rhythm", desc: "Rise before sunrise. Sleep before 10pm. Your cortisol, melatonin, and digestive enzymes all run on this clock. Disrupting it is one of the fastest routes to chronic imbalance." },
                { num: "02", title: "Protect Your Digestive Fire (Agni)", desc: "Eat your heaviest meal at midday when digestion peaks. Avoid cold water with meals, late-night eating, and eating when stressed. Weak Agni is at the root of most chronic conditions." },
                { num: "03", title: "Oil Your Body Daily (Abhyanga)", desc: "Apply warm sesame oil before bathing. This ancient practice nourishes your nervous system, calms Vata, and builds physical and emotional resilience — confirmed by modern dermatology research." },
                { num: "04", title: "Guard Your Mental Environment", desc: "Limit inflammatory media. Cultivate gratitude. Maintain real social connection. Mental Sattva (clarity and peace) is not a luxury — it directly regulates your immune gene expression." },
              ].map((item) => (
                <div key={item.num} style={{ display: "flex", gap: "14px", backgroundColor: "#111a15", border: "1px solid #1e2e22", borderRadius: "6px", padding: "16px", marginBottom: "10px" }}>
                  <div style={{ width: "32px", height: "32px", backgroundColor: "rgba(74,154,90,0.15)", border: "1px solid rgba(74,154,90,0.3)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "monospace", fontSize: "11px", color: "#4a9a5a", fontWeight: "bold", flexShrink: 0 }}>
                    {item.num}
                  </div>
                  <div>
                    <p style={{ color: "#e8f0ea", fontSize: "14px", fontWeight: "700", marginBottom: "6px" }}>{item.title}</p>
                    <p style={{ color: "#9ab09e", fontSize: "13px", fontFamily: "sans-serif", lineHeight: "1.7" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </section>

            {/* Assessment form */}
            <div id="assessment" style={{ backgroundColor: "#111a15", border: "1px solid #2a3d2e", borderRadius: "8px", padding: "24px", marginBottom: "40px" }}>
              <p style={{ color: "#4a9a5a", fontSize: "11px", fontFamily: "monospace", letterSpacing: "1px", marginBottom: "8px" }}>PUNSATVA WELLNESS PROGRAM</p>
              <h3 style={{ color: "#e8f0ea", fontSize: "20px", fontWeight: "700", marginBottom: "8px" }}>Get Your Free Wellness Assessment</h3>
              <p style={{ color: "#9ab09e", fontSize: "13px", fontFamily: "sans-serif", lineHeight: "1.6", marginBottom: "20px" }}>
                Speak confidentially with an Ayurvedic expert. Personalised guidance based on your unique constitution.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px", marginBottom: "14px" }}>
                {[
                  { label: "Your Main Concern", options: ["Chronic fatigue / low energy", "Digestive issues", "Stress / sleep problems", "Skin or inflammatory issues"] },
                  { label: "How Long?", options: ["A few weeks", "Several months", "Over a year"] },
                ].map((field) => (
                  <div key={field.label}>
                    <label style={{ display: "block", color: "#9ab09e", fontSize: "11px", fontFamily: "monospace", letterSpacing: "1px", marginBottom: "6px" }}>
                      {field.label.toUpperCase()}
                    </label>
                    <select
                      defaultValue=""
                      style={{ width: "100%", backgroundColor: "#1a2a1e", border: "1px solid #2a3d2e", color: "#9ab09e", padding: "8px 12px", borderRadius: "4px", fontSize: "13px", fontFamily: "sans-serif" }}
                    >
                      <option value="" disabled>Select option</option>
                      {field.options.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: "14px" }}>
                <label style={{ display: "block", color: "#9ab09e", fontSize: "11px", fontFamily: "monospace", letterSpacing: "1px", marginBottom: "6px" }}>YOUR EMAIL</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  style={{ width: "100%", backgroundColor: "#1a2a1e", border: "1px solid #2a3d2e", color: "#e8f0ea", padding: "9px 12px", borderRadius: "4px", fontSize: "13px", fontFamily: "sans-serif", outline: "none" }}
                />
              </div>

              <button style={{ backgroundColor: "#4a9a5a", color: "white", padding: "11px 24px", border: "none", borderRadius: "5px", fontSize: "13px", fontWeight: "bold", cursor: "pointer", fontFamily: "sans-serif", letterSpacing: "0.5px" }}>
                Submit Free Assessment →
              </button>
              <p style={{ color: "#5a7a5e", fontSize: "11px", fontFamily: "sans-serif", marginTop: "8px" }}>100% private. No spam.</p>
            </div>

            {/* FAQ Section */}
            <section id="faq" style={{ marginBottom: "40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ color: "#4a9a5a", fontSize: "11px", fontFamily: "monospace", letterSpacing: "1px" }}>08 / FAQs</span>
                <div style={{ flex: 1, height: "1px", backgroundColor: "#1e2e22" }}></div>
              </div>
              <h2 style={{ color: "#e8f0ea", fontSize: "24px", fontWeight: "700", marginBottom: "20px" }}>Frequently Asked Questions</h2>
              <FAQ items={faqData} />
            </section>

            {/* Author box */}
            <div style={{ backgroundColor: "#111a15", border: "1px solid #1e2e22", borderRadius: "8px", padding: "20px", marginBottom: "32px" }}>
              <p style={{ color: "#5a7a5e", fontSize: "11px", fontFamily: "monospace", letterSpacing: "1px", marginBottom: "14px" }}>REVIEWED BY</p>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", flexWrap: "wrap" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", overflow: "hidden", border: "2px solid #2a3d2e", position: "relative", flexShrink: 0 }}>
                  <Image
                    src="https://picsum.photos/seed/dr-sharma/200/200"
                    alt="Dr. Ananya Sharma"
                    fill
                    sizes="64px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: "200px" }}>
                  <div style={{ display: "flex", gap: "6px", marginBottom: "6px", flexWrap: "wrap" }}>
                    <span style={{ backgroundColor: "rgba(74,154,90,0.15)", color: "#5dbf70", border: "1px solid rgba(74,154,90,0.3)", padding: "2px 8px", borderRadius: "3px", fontSize: "10px", fontFamily: "monospace" }}>✓ BOARD CERTIFIED</span>
                    <span style={{ backgroundColor: "rgba(201,168,76,0.12)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.25)", padding: "2px 8px", borderRadius: "3px", fontSize: "10px", fontFamily: "monospace" }}>MEDICAL REVIEWER</span>
                  </div>
                  <p style={{ color: "#e8f0ea", fontSize: "16px", fontWeight: "700", marginBottom: "2px" }}>Dr. Ananya Sharma</p>
                  <p style={{ color: "#c9a84c", fontSize: "12px", fontFamily: "sans-serif", marginBottom: "8px" }}>M.D. Integrative Medicine · 18+ Years · Ayurvedic Specialist</p>
                  <p style={{ color: "#9ab09e", fontSize: "13px", fontFamily: "sans-serif", lineHeight: "1.7" }}>
                    Dr. Sharma specialises in bridging Ayurvedic tradition with evidence-based modern medicine. She has guided thousands of patients through holistic recovery pathways over 18+ years of clinical practice.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div style={{ marginBottom: "20px" }}>
              <p style={{ color: "#5a7a5e", fontSize: "11px", fontFamily: "monospace", letterSpacing: "1px", marginBottom: "16px" }}>RELATED ARTICLES</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
                {[
                  { tag: "Wellness", title: "The Ayurvedic Framework for Chronic Disease", desc: "How Ayurveda classifies disease at its root — and why imbalance matters more than diagnosis." },
                  { tag: "Mind-Body", title: "How Stress Amplifies Physical Symptoms", desc: "Clinical exploration of psycho-somatic pathways and Ayurvedic interventions." },
                  { tag: "Prevention", title: "The Complete Dinacharya Wellness Manual", desc: "Punsatva's guide to Ayurvedic daily routines, nutrition, and restorative practices." },
                ].map((a) => (
                  <div key={a.title} style={{ backgroundColor: "#111a15", border: "1px solid #1e2e22", borderRadius: "6px", padding: "14px" }}>
                    <span style={{ color: "#4a9a5a", fontSize: "10px", fontFamily: "monospace", letterSpacing: "1px", display: "block", marginBottom: "6px" }}>{a.tag.toUpperCase()}</span>
                    <p style={{ color: "#e8f0ea", fontSize: "13px", fontWeight: "700", marginBottom: "6px", lineHeight: "1.4" }}>{a.title}</p>
                    <p style={{ color: "#9ab09e", fontSize: "12px", fontFamily: "sans-serif", lineHeight: "1.5" }}>{a.desc}</p>
                    <p style={{ color: "#4a9a5a", fontSize: "12px", fontFamily: "sans-serif", marginTop: "8px", fontWeight: "600" }}>Read →</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div style={{ backgroundColor: "#0f1a14", border: "1px solid #1e2e22", borderRadius: "6px", padding: "14px 16px" }}>
              <p style={{ color: "#5a7a5e", fontSize: "11px", fontFamily: "sans-serif", lineHeight: "1.7" }}>
                <strong style={{ color: "#9ab09e" }}>Medical Disclaimer:</strong> This article is for educational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional before starting any new health regimen.
              </p>
            </div>

          </article>

          {/* ===== SIDEBAR ===== */}
          <aside style={{ position: "sticky", top: "72px", display: "flex", flexDirection: "column", gap: "16px" }}>
            
            <TableOfContents items={tocItems} />

            {/* CTA Card */}
            <div style={{ backgroundColor: "#1a2a1e", border: "1px solid #2a3d2e", borderRadius: "8px", padding: "18px" }}>
              <p style={{ color: "#4a9a5a", fontSize: "10px", fontFamily: "monospace", letterSpacing: "1px", marginBottom: "8px" }}>FREE ASSESSMENT</p>
              <h3 style={{ color: "#e8f0ea", fontSize: "14px", fontWeight: "700", lineHeight: "1.4", marginBottom: "8px" }}>Concerned About Your Health?</h3>
              <p style={{ color: "#9ab09e", fontSize: "12px", fontFamily: "sans-serif", lineHeight: "1.6", marginBottom: "12px" }}>
                Get a personalised Ayurvedic assessment from our board of experts.
              </p>
              <button style={{ backgroundColor: "#4a9a5a", color: "white", width: "100%", padding: "10px", border: "none", borderRadius: "5px", fontSize: "12px", fontWeight: "bold", cursor: "pointer", fontFamily: "sans-serif", letterSpacing: "0.5px" }}>
                Start Free Assessment
              </button>
              <p style={{ color: "#5a7a5e", fontSize: "10px", textAlign: "center", marginTop: "8px", fontFamily: "sans-serif" }}>100% confidential</p>
            </div>

            {/* Trust signals */}
            <div style={{ backgroundColor: "#111a15", border: "1px solid #1e2e22", borderRadius: "8px", overflow: "hidden" }}>
              {[
                { icon: "✦", title: "Medically Reviewed", desc: "All content reviewed by certified practitioners" },
                { icon: "◈", title: "Evidence-Based", desc: "Sourced from peer-reviewed clinical data" },
                { icon: "◉", title: "Privacy First", desc: "HIPAA-compliant. No data sharing." },
                { icon: "◆", title: "Expert Guided", desc: "Direct links to specialist care pathways" },
              ].map((item, i) => (
                <div key={item.title} style={{ padding: "12px 14px", borderBottom: i < 3 ? "1px solid #1e2e22" : "none" }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "#4a9a5a", fontSize: "14px" }}>{item.icon}</span>
                    <div>
                      <p style={{ color: "#e8f0ea", fontSize: "12px", fontWeight: "600", marginBottom: "2px", fontFamily: "sans-serif" }}>{item.title}</p>
                      <p style={{ color: "#5a7a5e", fontSize: "11px", fontFamily: "sans-serif", lineHeight: "1.5" }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </aside>

        </div>
      </main>

      <Footer />

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 280px"] {
            grid-template-columns: 1fr !important;
          }
          aside[style*="position: sticky"] {
            position: static !important;
            display: grid !important;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)) !important;
            order: -1 !important;
          }
          h1[style*="font-size: 36px"] {
            font-size: 26px !important;
          }
          .hidden { display: none !important; }
        }
      `}</style>
    </div>
  );
}
