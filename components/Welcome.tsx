const STANZAS = [
  [
    "ottos mops trotzt",
    "otto: fort mops fort",
    "ottos mops hopst fort",
    "otto: soso",
  ],
  [
    "otto holt koks",
    "otto holt obst",
    "otto horcht",
    "otto: mops mops",
    "otto hofft",
  ],
  [
    "ottos mops klopft",
    "otto: komm mops komm",
    "ottos mops kommt",
    "ottos mops kotzt",
    "otto: ogottogott",
  ],
];

export default function Welcome() {
  return (
    <div className="text-center text-2xl md:text-4xl leading-relaxed text-[#1A1A2E]">
      <h1 className="mb-8 font-bold">ottos mops</h1>
      {STANZAS.map((lines, i) => (
        <p key={i} className="mb-8 whitespace-pre-line">
          {lines.join("\n")}
        </p>
      ))}
    </div>
  );
}
