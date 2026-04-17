type EcosystemPillProps = {
  tool: string;
  color: string;
};

export function EcosystemPill({ tool, color }: EcosystemPillProps) {
  return (
    <span
      className="rounded-full border px-3 py-1 text-sm transition duration-300 hover:-translate-y-0.5"
      style={{ borderColor: `${color}66`, boxShadow: `0 0 18px ${color}20` }}
    >
      {tool}
    </span>
  );
}
