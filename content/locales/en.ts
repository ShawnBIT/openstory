import type { LocaleContent } from "./types";

export const enContent: LocaleContent = {
  hero: {
    name: "WangShen (Shawn)",
    tags: [
      "Recommendation Algorithm Engineer",
      "Vibe Coding Enthusiast",
      "Marathon Runner",
    ],
    slogan:
      "Exploring the intersection of data, algorithms, and human vibes.",
    motto:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.",
    mottoAuthor: "Steve Jobs",
    socials: [
      { name: "Google Scholar", href: "https://scholar.google.com.hk/citations?user=rvic5IoAAAAJ&hl=zh-CN" },
      { name: "GitHub", href: "https://github.com/ShawnBIT" },
      { name: "Zhihu", href: "https://www.zhihu.com/people/hellowangshushu" },
      { name: "Email", href: "mailto:wangshen@pku.edu.cn" },
    ],
  },
  sectionTitles: {
    education: "Education",
    experience: "Work & Internship",
    research: "Research",
    researchSub: "From Google Scholar",
    projects: "Projects (Vibe Coding)",
    projectsSub: "Small products built with AI-assisted development. Data from content/data/projects.json.",
    competitions: "Competitions",
    competitionsSub: "",
    books: "Books",
    booksSub: "",
    life: "Life & Gallery",
    lifeSub: "",
  },
  labels: {
    lab: "Lab",
    advisor: "Advisor",
    researchDirections: "Research directions",
    mentor: "Mentor",
    coFirst: "† Co-first author",
    experienceEmpty: "No entries yet. Add content in content/data/experience.ts.",
    booksEmpty: "No books yet. Add content in content/data/books.ts.",
  },
  education: [
    {
      school: "Peking University",
      institute: "Academy for Advanced Interdisciplinary Studies",
      logo: "/education/pku.png",
      degree: "M.S. in Data Science",
      period: "2017.09 — 2020.07",
      advisor: "Yizhou Wang",
      advisorUrl: "https://cfcs.pku.edu.cn/wangyizhou/",
      researchDirections: ["Semantic segmentation", "Object detection", "Medical image analysis"],
    },
    {
      school: "Peking University",
      institute: "National School of Development",
      logo: "/education/pku.png",
      degree: "Undergraduate Double Degree in Economics",
      period: "2015.09 — 2018.07",
      gpa: "GPA: 3.09/4.0",
    },
    {
      school: "Beijing Institute of Technology",
      institute: "School of Mathematics and Statistics",
      logo: "/education/bit.svg",
      degree: "B.S. in Statistics",
      period: "2013.09 — 2017.07",
      gpa: "GPA: 90.56/100 (Rank 3/44)",
    },
  ],
  experience: [
    {
      company: "Kuaishou Tech, Recommendation Model Dept",
      logo: "/experience/kuaishiou.png",
      role: "Lead for generative recommendation & ranking (live-streaming)",
      period: "2021.08 — Present",
      type: "Full-time",
      description: [
        "Mentored 4 full-time and 3 interns; led end-to-end launch of OneLive and LARM for live-streaming.",
        "Strong impact: 5× company LR awards, champion in Good Anchor modeling contest, multiple KDD papers.",
        "Familiar with live and short-video recommendation; experience across ranking, recall, multimodal, and generative models; multiple pipeline iterations for consumption and revenue.",
        {
          text: "Representative work: OneLive (first generative live-streaming recommendation), LARM (first U2I-based multimodal alignment), FARM (frequency-aware cross-domain fusion).",
          highlight: ["OneLive", "LARM", "FARM"],
        },
      ],
    },
    {
      company: "Kuaishou Tech, Y-tech Silicon Valley Lab",
      logo: "/experience/kuaishiou.png",
      role: "Computer Vision Researcher (generative models & face stylization)",
      period: "2020.05 — 2021.07",
      type: "Full-time",
      mentor: "Huayan Wang",
      mentorUrl: "https://scholar.google.com.hk/citations?user=XunnVQoAAAAJ&hl=zh-CN",
      description: [
        "Led StyleGAN fusion and few-shot face stylization; shipped WA, classical and other styles with 100 unpaired image pairs; owned data, training, and inference optimization.",
        "Contributed to hand-drawn face stylization with StyleGAN-based augmentation and 3D-pose-based dynamic cropping to fix large-angle misses.",
        {
          text: "Awards: Outstanding Project, Best Newcomer.",
          highlight: "Awards: Outstanding Project, Best Newcomer.",
        },
      ],
    },
    {
      company: "Megvii (Face++)",
      logo: "/experience/face.jpg",
      role: "CV Engineer, Detection Group (object detection)",
      period: "2019.06 — 2019.10",
      type: "Intern",
      mentor: "Zhicheng Wang",
      mentorUrl: "https://scholar.google.com.hk/citations?user=0QBBNGoAAAAJ&hl=zh-CN",
      description: [
        {
          text: "COCO 2019 Panoptic Segmentation world champion (team lead). Single model +0.6 mIOU over previous winner; integrated EMANet, OCNet, APCNet; Ohem & Context loss.",
          highlight: "COCO 2019 Panoptic Segmentation world champion",
        },
        "Stack detection: RetinaNet + Focal Loss on 800+ images; density- and scene-aware post-processing to reduce frame jitter.",
      ],
    },
    {
      company: "Deepwise",
      logo: "/experience/deepwise.png",
      role: "Research Intern, Algorithm (semantic segmentation)",
      period: "2018.07 — 2019.04",
      type: "Intern",
      mentor: "Kongming Liang",
      mentorUrl: "https://scholar.google.com.hk/citations?user=dmlkJR4AAAAJ&hl=zh-CN",
      description: [
        "Brain hemorrhage CT segmentation with SEUnet and multi-stream loss; +3% Dice on 2000+ images.",
        "Brain infarction MRI segmentation; +1.3% accuracy on 1600+ images.",
        {
          text: "First segmentation-based brain midline detection (CoordConv + path optimization); leading results; multiple papers at MICCAI, ISBI.",
          highlight: "multiple papers at MICCAI, ISBI",
        },
      ],
    },
  ],
  papers: [], // filled in index from zh to avoid duplication
  competitions: [
    {
      id: "good-anchor",
      name: "Kuaishou Good Anchor Modeling Competition",
      date: "2025.04",
      rank: "Company Champion",
      rankDetail: "1/88",
      teamSize: 5,
      isCaptain: true,
      insights: [
        { title: "Business", content: "Multi-period RFM and AA social features for good-anchor behavior." },
        { title: "Tech", content: "Multi-period and multi-expert models; improved prediction accuracy." },
        { title: "LLM", content: "Multimodal reasoning for COT and world knowledge; better long-tail prediction." },
      ],
      image: "/ceo-photo.jpg",
    },
    {
      id: "coco-panoptic-2019",
      name: "ICCV 2019 Workshop: COCO Panoptic Segmentation",
      date: "2019.10",
      rank: "World Champion",
      rankDetail: "1/13",
      teamSize: 3,
      isCaptain: true,
      insights: [
        { title: "Overview", content: "Model and loss design; single model +0.6 mIOU over prior winner." },
        { title: "Attention & loss", content: "EMANet, OCNet, APCNet; Ohem and Context loss for segmentation." },
      ],
      image: "/coco.jpg",
    },
    {
      id: "ai-challenger-retinal",
      name: "AI Challenger: Retinal Edema Segmentation & Detection",
      date: "2018.10",
      rank: "4th Nationwide",
      rankDetail: "Top 3%",
      roleLabel: "Team lead (solo)",
      insights: [
        { title: "Multi-task & UNet++", content: "Classification head on UNet; UNet++; 0.784 Dice on 15 OCT images." },
        { title: "EL Loss", content: "Exponential-log loss for small lesions; 0.799 Dice." },
        { title: "CA module", content: "Cascaded atrous convolution; 0.807 Dice." },
      ],
      image: "/aic.jpg",
    },
  ],
  life: [
    {
      id: "iceland-2025",
      date: "2025.10.10",
      title: "Goodbye, Iceland 🇮🇸",
      quote:
        "I will still take many detours and be disappointed by many “achievements,” but in the end everything will fulfill its meaning.",
      images: ["/gallery/iceland/1.jpg", "/gallery/iceland/3.jpg", "/gallery/iceland/5.jpg", "/gallery/iceland/6.jpg", "/gallery/iceland/7.jpg", "/gallery/iceland/9.jpg"],
    },
    {
      id: "thirty-birthday-2025",
      date: "2025.09.17",
      title: "Hello, 30 🎂",
      quote:
        "On the road ahead, remind yourself: what matters is not up or down, but moving forward. May we all have slow, grounded lives; from today, care for food, vegetables, and nature.",
      images: ["/gallery/thirty-birthday/1.jpg", "/gallery/thirty-birthday/2.jpg", "/gallery/thirty-birthday/3.jpg", "/gallery/thirty-birthday/4.jpg", "/gallery/thirty-birthday/5.jpg", "/gallery/thirty-birthday/6.jpg"],
    },
    {
      id: "haidian-marathon-2024",
      date: "2024.10.27",
      title: "First marathon 3:35 — Haidian Marathon",
      quote:
        "First Haidian Marathon and my first full marathon. Aimed to follow the 3:30 pacer; from 37 km, side stitch and sore legs made me fall back; finished 3:35. Next target 3:30. Great weather and flat course; the 3:30 pacer group and the crowd showed me that one can run fast alone, but a group can run far. For me, the marathon is a test of body and will; running with others, I felt a vitality I rarely feel in daily life—concrete and intense.",
      images: ["/gallery/fullm/1.jpg", "/gallery/fullm/2.jpg", "/gallery/fullm/3.jpg"],
    },
  ],
  books: [
    {
      title: "Mindset: The New Psychology of Success",
      author: "Carol S. Dweck",
      date: "2026.02",
      cover: "/books/growth-mindset.jpg",
      note: {
        text: "Fixed vs growth mindset: we constantly toggle between the two. Fixed: talent is static, fear of judgment, effort as shame. Growth: ability can be developed, embrace challenge, failure as a step up. The book gave me the courage to tolerate failure—not just how to succeed, but how to face an imperfect self with calm and hope. Either succeed or grow; that idea keeps me challenging myself, trying newer tech and harder problems.",
        highlight: "Growth: ability can be developed, embrace challenge, failure as a step up.",
      },
    },
    {
      title: "What I Talk About When I Talk About Running",
      author: "Haruki Murakami (Japan)",
      date: "2024.02",
      cover: "/books/running.jpg",
      note: {
        text: "As runners we all know the struggle of hitting the wall and the freedom after the breakthrough. Murakami captures it perfectly: \"Pain is inevitable. Suffering is optional.\" For me the marathon isn't just 42.195 km—it's a practice of self-confirmation. \"For me, the most important thing was to have beaten my previous self, even if only by a little.\" If you've ever run alone through the morning streets, searching for the edge of your will in the sound of your heartbeat, this book is fuel. It tells you why we have to run.",
        highlight: "For me, the most important thing was to have beaten my previous self, even if only by a little.",
      },
    },
    {
      title: "The Distant Savior",
      author: "Dou Dou (Li Xue)",
      date: "2017.04",
      cover: "/books/yaoyuan.jpg",
      note: {
        text: "Core: break the weak-culture mindset, build a strong one. Why can some people see through the game while others drift? Through the character Ding Yuanying, the book reveals “cultural attributes.” There is no savior; redemption comes from awakening your own cognition. So-called “myths” are just outcomes of seeing things as they are. Recommended by Zhilan in university; “see things as they are” became a guiding principle.",
        highlight: "Core: break the weak-culture mindset, build a strong one.",
      },
    },
  ],
};
