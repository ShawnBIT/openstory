export type LifeEntry = {
  id: string;
  date: string;
  title: string;
  quote?: string;
  images: string[];
};

export const lifeEntries: LifeEntry[] = [
  {
    id: "iceland-2025",
    date: "2025.10.10",
    title: "再见，冰岛🇮🇸",
    quote:
      "我还会走许多弯路，还会为许多「已实现」感到失望，但一切终将实现它们的意义。",
    images: [
      "/gallery/iceland/1.jpg",
      "/gallery/iceland/2.jpg",
      "/gallery/iceland/3.jpg",
      "/gallery/iceland/4.jpg",
      "/gallery/iceland/5.jpg",
      "/gallery/iceland/6.jpg",
      "/gallery/iceland/7.jpg",
      "/gallery/iceland/8.jpg",
      "/gallery/iceland/9.jpg",
    ],
  },
];
