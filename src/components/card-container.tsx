export function CardContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`card-section ${className}`}>{children}</div>;
}
