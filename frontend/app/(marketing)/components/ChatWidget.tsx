"use client";

import { colors } from "../theme";

export default function ChatWidget() {
  return (
    <button
      aria-label="Buka live chat"
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        zIndex: 60,
        width: 56,
        height: 56,
        borderRadius: "50%",
        border: "none",
        background: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.orangeDeep} 100%)`,
        boxShadow: "0 14px 28px -10px rgba(234, 91, 47, 0.65)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20C10.58 20 9.24 19.63 8.08 18.98L4 20L5.13 16.35C4.41 15.13 4 13.62 4 12Z"
          stroke={colors.white}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        style={{
          position: "absolute",
          top: -2,
          right: -2,
          width: 18,
          height: 18,
          borderRadius: "50%",
          backgroundColor: "#DC2626",
          color: colors.white,
          fontSize: 11,
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: `2px solid ${colors.cream}`
        }}
      >
        1
      </span>
    </button>
  );
}