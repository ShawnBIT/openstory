export type ExperienceEntry = {
  company: string;
  /** 公司 Logo 路径，如 /experience/deepwise.png */
  logo?: string;
  role: string;
  period: string;
  /** 实习 / 全职（中英文均可，locale 使用） */
  type?: "实习" | "全职" | "Intern" | "Full-time";
  /** 描述：字符串为段落；数组为分点，项可为字符串或 { text, highlight } 高亮片段，highlight 可为字符串或字符串数组 */
  description?: string | (string | { text: string; highlight: string | string[] })[];
  /** 公司或团队链接 */
  link?: string;
  /** 导师 / Mentor */
  mentor?: string;
  mentorUrl?: string;
};

export const experienceEntries: ExperienceEntry[] = [
  {
    company: "快手科技 推荐模型部",
    logo: "/experience/kuaishiou.png",
    role: "直播生成式推荐和精排模型子方向负责人",
    period: "2021.08 — 至今",
    type: "全职",
    description: [
      "Mentor 指导 4 名正式员工和 3 名实习生，主导直播 OneLive 和直播 LARM 从 0 到 1 的落地全流程。",
      "业务产出优秀，获得 5 次公司优秀 LR 奖项、公司好主播建模比赛冠军，中稿多篇 KDD。",
      "熟悉直播和短视频推荐系统，模型方面做过精排、粗排、召回、多模态、生成式模型；多次参与链路改造，对于消费型和营收型业务迭代有较多经验。",
      {
        text: "代表作：OneLive（业界首个直播生成式推荐工作）、LARM（首个基于 U2I 的多模态对齐框架）、FARM（频域感知的跨域融合工作）。",
        highlight: ["OneLive", "LARM", "FARM"],
      },
    ],
  },
  {
    company: "快手科技 Y-tech 硅谷实验室",
    logo: "/experience/kuaishiou.png",
    role: "计算机视觉研究员（生成式模型与人脸风格化方向）",
    period: "2020.05 — 2021.07",
    type: "全职",
    mentor: "王华彦",
    mentorUrl: "https://scholar.google.com.hk/citations?user=XunnVQoAAAAJ&hl=zh-CN",
    description: [
      "负责 StyleGAN 融合与少样本人脸风格化项目，仅用 100 对非配对风格化图片，上线 WA 风格、古风等多风格客户端；统筹数据处理、服务端模型训练与推理端优化，主导 StyleGAN 融合管线整合及工具开发。",
      "参与手绘人脸风格化项目，以 StyleGAN 为数据增强手段优化混合风格训练，提升风格化效果；基于 3D 姿态设计动态人脸裁剪掩膜，解决大角度漏检问题。",
      {
        text: "个人及项目成果：荣获部门优秀项目奖、最佳新人奖。",
        highlight: "荣获部门优秀项目奖、最佳新人奖。",
      },
    ],
  },
  {
    company: "旷视科技（Face++）",
    logo: "/experience/face.jpg",
    role: "检测组计算机视觉工程师（目标检测方向）",
    period: "2019.06 — 2019.10",
    type: "实习",
    mentor: "王志成",
    mentorUrl: "https://scholar.google.com.hk/citations?user=0QBBNGoAAAAJ&hl=zh-CN",
    description: [
      {
        text: "COCO 2019 全景分割任务世界冠军，作为队长，负责模型与损失函数设计。单模型在 mIOU 指标上较上届冠军模型高出 0.6。实现 EMANet、OCNet、APCNet 等主流注意力模块；设计 Ohem 损失与 Context 损失，显著提升分割性能。",
        highlight: "COCO 2019 全景分割任务世界冠军",
      },
      "堆垛检测：自动检测箱装、袋装及各类杂货堆垛。实现单阶段检测模型 RetinaNet，并结合 Focal Loss。在 800+ 张图像上训练模型。提出一种基于图像中密度分级和动态场景的后处理策略，可有效解决视频中堆叠物品的帧间抖动问题。",
    ],
  },
  {
    company: "深睿科技（Deepwise）",
    logo: "/experience/deepwise.png",
    role: "算法部研究实习生（语义分割方向）",
    period: "2018.07 — 2019.04",
    type: "实习",
    mentor: "梁孔明",
    mentorUrl: "https://scholar.google.com.hk/citations?user=dmlkJR4AAAAJ&hl=zh-CN",
    description: [
      "负责脑出血 CT 自动分割，设计 SEUnet 与多流损失函数，在 2000+ 张图像上使 Dice 系数提升 3%。",
      "主导脑梗死病灶 MRI 自动分割，融合多网络结构与复合损失函数，在 1600+ 张图像上使精度提升 1.3%。",
      {
        text: "独立提出首个基于分割的脑中线检测框架，通过 CoordConv 与路径寻优，在内部及公开数据集上均取得领先性能，并在 MICCAI、ISBI 等医学影像顶会发表多篇论文。",
        highlight: "在 MICCAI、ISBI 等医学影像顶会发表多篇论文",
      },
    ],
  },
];
