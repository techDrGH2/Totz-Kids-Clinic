import { ImageResponse } from "next/og";

export const alt = "Tiny Totz Kids Clinic, paediatrician and child healthcare in Puppalguda, Hyderabad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0e3144",
          color: "#ffffff",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#b7ddd7" }}>
          PAEDIATRICIAN & CHILD HEALTHCARE
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, lineHeight: 1.05 }}>Tiny Totz Kids Clinic</div>
          <div style={{ marginTop: 18, fontSize: 32, color: "#f3e6df" }}>
            Puppalguda, Hyderabad
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#d5e1e6" }}>
          Dr. Shilpa Reddy T · MBBS, DNB Pediatrics, IDPCCM
        </div>
      </div>
    ),
    { ...size },
  );
}
