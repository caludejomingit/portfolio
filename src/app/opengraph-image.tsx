import { ImageResponse } from "next/og";

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
          justifyContent: "center",
          padding: "80px",
          background: "#0D2B1A",
          color: "#EEF4EE",
        }}
      >
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#3E9E6F",
          }}
        >
          Jomin George Attayil
        </span>
        <span
          style={{
            fontFamily: "serif",
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.15,
            marginTop: 24,
            maxWidth: 950,
          }}
        >
          Data Analyst → Data Engineer
        </span>
        <span
          style={{
            fontFamily: "sans-serif",
            fontSize: 28,
            marginTop: 28,
            color: "#A9C4B4",
            maxWidth: 850,
          }}
        >
          Freelance data visualization, apps &amp; web craft — @thinkwithjomin
        </span>
      </div>
    ),
    size
  );
}
