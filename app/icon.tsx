import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#fff9f5",
          borderRadius: 8,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: 6,
        }}
      >
        <div
          style={{
            width: 9,
            height: 12,
            borderRadius: 999,
            background: "#f15b62",
            marginRight: -1,
          }}
        />
        <div
          style={{
            width: 9,
            height: 13,
            borderRadius: 999,
            background: "#55c5c0",
            marginBottom: 3,
          }}
        />
        <div
          style={{
            width: 8,
            height: 11,
            borderRadius: 999,
            background: "#ffc83d",
            marginLeft: -1,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
