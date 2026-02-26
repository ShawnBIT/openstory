# Open Story

**What's your open story.** 推荐算法工程师个人站，单页展示教育、经历、论文、比赛、喜欢的书与生活相册。

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
- **开发**：`npm run dev` 使用 Turbopack。

---

## 项目结构

```
openstory/
├── app/                    # App Router
│   ├── layout.tsx         # 根布局、字体、主题脚本、Header
│   ├── page.tsx           # 首页各 section 顺序
│   └── globals.css        # Tailwind + 主题 CSS 变量
├── components/
│   ├── layout/            # Header、Footer
│   ├── sections/          # Hero、Education、Experience、Research、Projects、Competitions、Book、Life、Footer
│   ├── providers/         # ThemeProvider
│   └── ui/                # DateBadge、Button 等
├── content/
│   └── data/              # 论文、比赛、教育、经历、生活、书籍等数据（.ts）
├── lib/
│   ├── constants.ts       # 站点名、hero 文案与社交链接
│   └── utils.ts           # cn() 等
└── public/                # 图片：头像、教育/经历 logo、相册、书籍封面
    ├── education/         # 学校 logo (pku.png, bit.svg)
    ├── experience/        # 公司 logo (deepwise, face, kuaishiou)
    ├── gallery/           # 生活相册 (iceland, thirty-birthday, fullm)
    └── books/             # 书籍封面
```

---

## 首页模块顺序

1. **Hero** — 头像、姓名、标签、Slogan、座右铭、社交图标（Google Scholar、GitHub、知乎）
2. **Education** — 教育背景（学校、学位、时间、导师、研究方向等），支持学校 logo
3. **Experience** — 工作与实习（公司、职位、时间、类型、Mentor、描述分点/高亮），支持公司 logo
4. **Research** — 论文列表（标题、作者、共同一作 †、venue、年份、PDF/Code 链接）
5. **Projects** — 占位
6. **Competitions** — 比赛经历（名称、时间、名次、洞察、合影）
7. **Books** — 喜欢的书（封面、书名、作者、推荐日期、推荐语）
8. **Life** — 生活与相册（日期、标题、引用、照片网格）
9. **Footer**

导航栏居中，锚点跳转：Home、Education、Experience、Research、Projects、Competitions、Books、Life。

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
- **论文**：`content/data/papers.ts`（可填 `coFirstCount` 标共同一作）
- **比赛**：`content/data/competitions.ts`
- **教育**：`content/data/education.ts`（可填 `logo`、`advisorUrl`）
- **经历**：`content/data/experience.ts`（可填 `logo`、`mentor`/`mentorUrl`、`description` 分点或高亮）
- **生活相册**：`content/data/life.ts`，图片放 `public/gallery/<子目录>/`
- **喜欢的书**：`content/data/books.ts`，封面放 `public/books/`

时间展示统一使用 `DateBadge` 组件（圆角描边块，浅色无底、深色微填充）。
