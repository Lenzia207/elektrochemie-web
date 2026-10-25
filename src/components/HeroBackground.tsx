"use client";

import Iridescence from "@/blocks/Backgrounds/Iridescence/Iridescence";

// Defined outside the component so the shader is not re-initialised on every render
const SHADER_COLOR: [number, number, number] = [0.5, 0.6, 0.8];

export default function HeroBackground() {
  return (
    // Always viewport-high so the shader keeps the home hero's proportions;
    // shorter heroes simply crop it (they set overflow-hidden)
    <div className="absolute inset-x-0 top-0 h-[100svh] min-h-full bg-egm-haze" aria-hidden="true">
      <Iridescence
        color={SHADER_COLOR}
        mouseReact={false}
        amplitude={0.1}
        speed={.2}
      />
    </div>
  );
}
