"use client";
import Iridescence from "@/blocks/Backgrounds/Iridescence/Iridescence";

export default function BackgroundClient() {
  return (
    <Iridescence
      color={[0.5, 0.6, 0.8]}
      mouseReact={false}
      amplitude={0.1}
      speed={1.0}
    />
  );
}
