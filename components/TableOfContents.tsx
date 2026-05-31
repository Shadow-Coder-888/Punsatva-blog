"use client";
import { useState } from "react";

type TocItem = {
  id: string;
  label: string;
};

type Props = {
  items: TocItem[];
};

export default function TableOfContents({ items }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{ backgroundColor: "#111a15", border: "1px solid #1e2e22", borderRadius: "8px", overflow: "hidden" }}>
      
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{ padding: "12px 16px", borderBottom: isOpen ? "1px solid #1e2e22" : "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <span style={{ color: "#9ab09e", fontSize: "12px", fontWeight: "bold", fontFamily: "sans-serif", letterSpacing: "1px", textTransform: "uppercase" }}>
          Table of Contents
        </span>
        <span style={{ color: "#5a7a5e", fontSize: "12px", fontFamily: "sans-serif" }}>{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div>
          {items.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 16px", textDecoration: "none", borderBottom: i < items.length - 1 ? "1px solid #1e2e22" : "none" }}
            >
              <span style={{ color: "#5a7a5e", fontSize: "11px", fontFamily: "monospace", minWidth: "18px" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ color: "#9ab09e", fontSize: "12px", fontFamily: "sans-serif" }}>{item.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
