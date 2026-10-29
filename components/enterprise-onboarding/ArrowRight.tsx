/** Right arrow drawn as SVG (Google's Inter subset has no → glyph). */
export default function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      width="21"
      height="18"
      viewBox="0 0 21 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M2 9h17M12 2l7 7-7 7" />
    </svg>
  );
}
