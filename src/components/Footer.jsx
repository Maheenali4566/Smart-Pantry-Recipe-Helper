import React from "react";
import "../styles/components/Footer.css";

export default function Footer() {
  return (
    <footer className="text-center py-4 text-gray-500">
      © {new Date().getFullYear()} Smart Pantry • Reduce waste • Cook happier <br />
      <span className="font-semibold">By Maheen Ali</span>
    </footer>
  );
}

