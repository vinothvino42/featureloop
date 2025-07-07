export function CardContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`card_section ${className}`}>{children}</div>;
}
