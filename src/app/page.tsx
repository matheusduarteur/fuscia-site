"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";

const BRAND = {
  name: "Fúcsia",
  accent: "#E11DFF",
  accent2: "#7C3AED",
  dark: "#0B0B10",
  paper: "#FBFAFC", // “branco premium”
};

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
const WHATSAPP_MESSAGE =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
  "Quero um diagnóstico rápido para gerar mais leads. Pode me chamar?";

function waLink() {
  const msg = encodeURIComponent(WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

const fadeUp = {
  hidden: { opacity: 0, y: 12, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/70 px-3 py-1 text-xs font-semibold text-zinc-700 backdrop-blur">
      <span
        className="h-2 w-2 rounded-full"
        style={{ background:
