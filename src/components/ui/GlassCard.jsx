export default function GlassCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        bg-white/15
        backdrop-blur-md
        border border-white/30
        rounded-4xl
        shadow-2xl
        shadow-pink-300/30
        ${className}
      `}
    >
      {children}
    </div>
  );
}