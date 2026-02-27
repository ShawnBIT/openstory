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
      "/gallery/iceland/3.jpg",
      "/gallery/iceland/5.jpg",
      "/gallery/iceland/6.jpg",
      "/gallery/iceland/7.jpg",
      "/gallery/iceland/9.jpg",
    ],
  },
  {
    id: "thirty-birthday-2025",
    date: "2025.09.17",
    title: "30岁你好🎂",
    quote:
      "未来的路上，时刻提醒自己，重要的不是向上或者向下，而是持续向前。愿你我都有缓慢而扎实的生活，从今天起，关心粮食、蔬菜和大自然。",
    images: [
      "/gallery/thirty-birthday/1.jpg",
      "/gallery/thirty-birthday/2.jpg",
      "/gallery/thirty-birthday/3.jpg",
      "/gallery/thirty-birthday/4.jpg",
      "/gallery/thirty-birthday/5.jpg",
      "/gallery/thirty-birthday/6.jpg",
    ],
  },
  {
    id: "haidian-marathon-2024",
    date: "2024.10.27",
    title: "【首马335】首届海淀马拉松",
    quote:
      "首届海淀马拉松，也是我的首马。赛前预期是跟着330的兔子顺下来，结果到37公里开始岔气，加上腿酸，导致跟不住，最后335安全完赛，下次再战330。\n\n今天天气很好，一路也很平坦，起伏不大，路上加油声络绎不绝。330兔子大队伍也一直互相打气，让我真切的感受到一个人可以跑的很快，但是一群人可以跑的更远。马拉松对于我而言，是一种对身体和意志的挑战，和一群人奔跑的时候，我感受到了平日未曾感受到的生命力，它具象且热烈。",
    images: [
      "/gallery/fullm/1.jpg",
      "/gallery/fullm/2.jpg",
      "/gallery/fullm/3.jpg",
    ],
  },
];
