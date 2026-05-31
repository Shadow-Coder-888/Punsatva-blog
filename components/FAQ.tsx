"use client";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FAQItem[];
};

export default function FAQ({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleClick(index: number) {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{ backgroundColor: "#111a15", border: "1px solid #1e2e22", borderRadius: "6px", overflow: "hidden" }}
        >
          <button
            onClick={() => handleClick(index)}
            style={{
              width: "100%",
              padding: "14px 18px",
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px",
              textAlign: "left",
            }}
          >
            <span style={{ color: "#e8f0ea", fontSize: "14px", fontFamily: "Georgia, serif" }}>{item.question}</span>
            <span style={{ color: "#4a9a5a", fontSize: "18px", fontFamily: "sans-serif", flexShrink: 0 }}>
              {openIndex === index ? "−" : "+"}
            </span>
          </button>

          {openIndex === index && (
            <div style={{ padding: "0 18px 16px", borderTop: "1px solid #1e2e22" }}>
              <p style={{ color: "#9ab09e", fontSize: "13px", lineHeight: "1.8", fontFamily: "sans-serif", paddingTop: "12px" }}>
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
