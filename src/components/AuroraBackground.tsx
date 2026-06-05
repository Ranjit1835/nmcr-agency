"use client";

export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute w-[800px] h-[600px] rounded-full opacity-[0.15] blur-[120px] -top-[200px] -right-[200px] motion-safe:animate-aurora-1"
        style={{ background: "linear-gradient(135deg, #7dd3fc, #bae6fd, #e0f2fe)" }}
      />
      <div
        className="absolute w-[600px] h-[500px] rounded-full opacity-[0.12] blur-[100px] top-[40%] -left-[150px] motion-safe:animate-aurora-2"
        style={{ background: "linear-gradient(135deg, #fed7aa, #fef3c7, #fff7ed)" }}
      />
      <div
        className="absolute w-[500px] h-[400px] rounded-full opacity-[0.10] blur-[100px] bottom-[-100px] right-[20%] motion-safe:animate-aurora-3"
        style={{ background: "linear-gradient(135deg, #bbf7d0, #dcfce7, #f0fdf4)" }}
      />
    </div>
  );
}
