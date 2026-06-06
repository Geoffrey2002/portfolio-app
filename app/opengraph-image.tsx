import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.fullName} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#0f172a",
          backgroundImage:
            "radial-gradient(900px circle at 0% 0%, rgba(99,102,241,0.28), transparent 55%), radial-gradient(700px circle at 100% 100%, rgba(245,158,11,0.18), transparent 50%)",
          color: "#f1f5f9",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row: status pill */}
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 20px",
              borderRadius: "999px",
              border: "1px solid rgba(16,185,129,0.35)",
              background: "rgba(16,185,129,0.12)",
              color: "#34d399",
              fontSize: "22px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "999px",
                background: "#34d399",
              }}
            />
            Available for new roles
          </div>
        </div>

        {/* Name + role */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "88px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            {siteConfig.fullName}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "40px",
              fontWeight: 600,
              color: "#a5b4fc",
            }}
          >
            Frontend Developer · IT Lead · AI &amp; Automation
          </div>
        </div>

        {/* Bottom row: stack + domain */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: "28px",
            color: "#cbd5e1",
          }}
        >
          <div style={{ display: "flex" }}>
            Next.js · TypeScript · Supabase · Claude AI
          </div>
          <div style={{ display: "flex", color: "#818cf8", fontWeight: 600 }}>
            geoffreymuthoni.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
