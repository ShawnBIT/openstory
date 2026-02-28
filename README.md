# Open Story

**What's your open story.** 推荐算法工程师个人站，单页展示教育、经历、论文、比赛、AI 工具推荐、喜欢的书与生活相册。支持中/英切换与深色/浅色主题。

---

## 技术栈

| 类别     | 技术 |
|----------|------|
| 框架     | Next.js 15 (App Router)、React 19 |
| 语言     | TypeScript 5 |
| 样式     | Tailwind CSS 3、CSS 变量（深色/浅色主题） |
| 动效     | Framer Motion 11 |
| 图标     | Lucide React、react-icons (Si*) |
| 字体     | next/font：Inter、JetBrains Mono |
| 工具     | clsx、tailwind-merge、class-variance-authority |

- **主题**：`darkMode: "class"`，通过 ThemeProvider + `html.dark` / `html.light` 切换，首屏前脚本注入避免闪烁。
- **多语言**：LanguageProvider 提供中/英切换，各区块文案来自 `content/locales/zh.ts`、`content/locales/en.ts`，论文与工具数据可配中英字段。
- **开发**：`npm run dev` 使用 Turbopack。

---

## 项目结构

```
openstory/
├── app/                    # App Router
│   ├── layout.tsx         # 根布局、字体、主题脚本、LanguageProvider、Header
│   ├── page.tsx           # 首页各 section 顺序
│   ├── globals.css        # Tailwind + 主题 CSS 变量
│   └── not-found.tsx
├── components/
│   ├── layout/            # Header、Footer
│   ├── sections/          # Hero、VisitCount、Education、Experience、Research、
│   │                      # Projects、Competitions、Tools、Book、LifeGallery
│   ├── providers/         # ThemeProvider、LanguageProvider
│   └── ui/                # DateBadge、Button 等
├── content/
│   ├── data/              # 论文、比赛、教育、经历、生活、书籍、工具等数据（.ts）
│   └── locales/           # 多语言：zh.ts、en.ts、types.ts、index.ts
├── lib/
│   ├── constants.ts       # 站点名、hero 文案与社交链接
│   └── utils.ts           # cn() 等
└── public/                # 静态资源
    ├── education/         # 学校 logo (pku.png, bit.svg)
    ├── experience/        # 公司 logo
    ├── gallery/           # 生活相册 (iceland, thirty-birthday, fullm)
    ├── books/             # 书籍封面
    └── tools/             # AI 工具 logo（如 shandianshuo.png）
```

---

## 首页模块顺序

1. **Hero** — 头像、姓名、标签、Slogan、座右铭、社交图标（Google Scholar、GitHub、知乎、Email）
2. **VisitCount** — 访问计数（可选展示）
3. **Education** — 教育背景（学校、学位、时间、导师、研究方向等），支持学校 logo
4. **Experience** — 工作与实习（公司、职位、时间、类型、Mentor、描述分点/高亮），支持公司 logo
5. **Research** — 论文列表（标题、作者、共同一作 †、venue、年份、PDF/Code 链接）
6. **Projects** — AI 辅助开发项目展示
7. **Competitions** — 比赛经历（名称、时间、名次、洞察、合影）
8. **Tools** — 常用 AI 工具推荐（名称、标题、推荐语、链接、logo，支持中英与推荐语高亮）
9. **Books** — 喜欢的书（封面、书名、作者、推荐日期、推荐语与高亮）
10. **Life** — 生活与相册（日期、标题、引用、照片网格）
11. **Footer**

导航栏锚点：Home、Education、Experience、Research、Projects、Competitions、**Tools**、Books、Life。支持语言切换（中/EN）与主题切换（深/浅色）。

---

## 如何运行

```bash
npm install
npm run dev    # 开发（Turbopack），默认 http://localhost:3000
npm run build
npm run start  # 生产
npm run lint
```

---

## 如何修改内容

- **站点标题、Hero 文案、社交链接**：`lib/constants.ts`
- **多语言区块标题与空状态文案**：`content/locales/zh.ts`、`content/locales/en.ts`
- **论文**：`content/data/papers.ts`（可填 `coFirstCount` 标共同一作）
- **比赛**：`content/data/competitions.ts`
- **教育**：`content/data/education.ts`（可填 `logo`、`advisorUrl`）
- **经历**：`content/data/experience.ts`（可填 `logo`、`mentor`/`mentorUrl`、`description` 分点或高亮）
- **生活相册**：`content/data/life.ts`，图片放 `public/gallery/<子目录>/`
- **喜欢的书**：`content/data/books.ts`，封面放 `public/books/`
- **AI 工具推荐**：`content/data/tools.ts`（名称、中英推荐语、链接、logo、标签、推荐语高亮），logo 放 `public/tools/`

时间展示统一使用 `DateBadge` 组件（圆角描边块，浅色无底、深色微填充）。
