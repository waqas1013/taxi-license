import { CategoryGroup, QuestionSection } from "../types/questions";

const createExplanationImage = (title: string, details: string): string => {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="900" height="520" viewBox="0 0 900 520">
    <defs>
      <linearGradient id="bg" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc" />
        <stop offset="100%" stop-color="#dbeafe" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="900" height="520" fill="url(#bg)" />
    <rect x="40" y="40" width="820" height="440" rx="18" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />
    <text x="80" y="120" font-family="Arial, sans-serif" font-size="42" font-weight="700" fill="#0f172a">${title}</text>
    <text x="80" y="190" font-family="Arial, sans-serif" font-size="27" fill="#334155">${details}</text>
    <text x="80" y="250" font-family="Arial, sans-serif" font-size="24" fill="#334155">- Tanka tidigt och planera körningen.</text>
    <text x="80" y="295" font-family="Arial, sans-serif" font-size="24" fill="#334155">- Följ regler och kör defensivt.</text>
    <text x="80" y="340" font-family="Arial, sans-serif" font-size="24" fill="#334155">- Hjälp passagerare tryggt och tydligt.</text>
  </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

const section = (id: string, name: string, seedText: string): QuestionSection => ({
  id,
  name,
  questions: [
    {
      id: `${id}-q1`,
      text: `${seedText}: Vad är viktigast före körpasset?`,
      options: [
        "Kontrollera däck, bromsar och belysning",
        "Bara tvätta bilen utvändigt",
        "Starta utan kontroll för att spara tid",
        "Endast kontrollera radion"
      ],
      correctIndex: 0,
      explanationImage: createExplanationImage(name, "Säkerhetskontroll minskar risker i trafiken.")
    },
    {
      id: `${id}-q2`,
      text: `${seedText}: Hur bemöter du en stressad kund bäst?`,
      options: [
        "Ignorera kundens oro",
        "Tydlig och lugn kommunikation",
        "Köra snabbare än tillåtet",
        "Avsluta resan direkt"
      ],
      correctIndex: 1,
      explanationImage: createExplanationImage(name, "Lugnt bemötande ökar trygghet och kvalitet.")
    },
    {
      id: `${id}-q3`,
      text: `${seedText}: Vad gäller vid osäker vägkorsning?`,
      options: [
        "Öka hastigheten för att hinna först",
        "Signalera sent och sväng direkt",
        "Sakta ner och ge företräde enligt regler",
        "Stanna mitt i korsningen"
      ],
      correctIndex: 2,
      explanationImage: createExplanationImage(name, "Defensiv körning förebygger olyckor.")
    }
  ]
});

export const questionGroups: CategoryGroup[] = [
  {
    id: "main",
    name: "Huvudämnen",
    categories: [
      {
        id: "sakerhet",
        name: "Säkerhet",
        sections: [
          section("sakerhet-1", "Säkerhet 1", "Säkerhet"),
          section("sakerhet-2", "Säkerhet 2", "Säkerhet")
        ]
      },
      {
        id: "lagstiftning",
        name: "Lagstiftning",
        sections: [section("lagstiftning-1", "Lagstiftning 1", "Lagstiftning")]
      },
      {
        id: "karta",
        name: "Karta",
        sections: [section("karta-1", "Karta 1", "Karta")]
      }
    ]
  },
  {
    id: "taxi-foretag",
    name: "Taxi företag",
    categories: [
      {
        id: "ekonomi",
        name: "Ekonomi",
        sections: [section("ekonomi-1", "Ekonomi 1", "Ekonomi")]
      },
      {
        id: "fallstudie",
        name: "Fallstudie",
        sections: [section("fallstudie-1", "Fallstudie 1", "Fallstudie")]
      },
      {
        id: "juridik",
        name: "Juridik",
        sections: [section("juridik-1", "Juridik 1", "Juridik")]
      },
      {
        id: "tekniska",
        name: "Tekniska",
        sections: [section("tekniska-1", "Tekniska 1", "Tekniska")]
      }
    ]
  }
];
