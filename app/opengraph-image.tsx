import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { SITE_NAME } from "@/lib/site";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#fafaf9",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, fontWeight: 600, color: "#155e75", letterSpacing: 1 }}>
          {profile.location.toUpperCase()}
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, marginTop: 24, color: "#1a1d21" }}>
          {SITE_NAME}
        </div>
        <div style={{ display: "flex", fontSize: 36, marginTop: 16, color: "#565d66" }}>
          {profile.roleLine}
        </div>
        <div style={{ display: "flex", fontSize: 24, marginTop: 32, color: "#565d66", maxWidth: 900 }}>
          {profile.subline}
        </div>
      </div>
    ),
    { ...size },
  );
}
