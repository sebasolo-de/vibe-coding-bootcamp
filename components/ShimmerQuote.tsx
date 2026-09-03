export default function ShimmerQuote({ text }: { text: string }) {
  return (
    <div className="text-center max-w-4xl">
      <div className="accent-bar mx-auto mb-8" />
      <p className="text-xl md:text-3xl lg:text-4xl font-bold leading-snug shimmer-text whitespace-pre-line">
        {text.replace(/\\n/g, "\n")}
      </p>
      <div className="accent-bar mx-auto mt-8" />
    </div>
  );
}
