import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0D2B1A",
          borderRadius: 14,
        }}
      >
        <span
          style={{
            color: "#3E9E6F",
            fontSize: 36,
            fontWeight: 700,
            fontFamily: "serif",
          }}
        >
          J
        </span>
      </div>
    ),
    size
  );
}
