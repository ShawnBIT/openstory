export type Competition = {
  id: string;
  name: string;
  /** 比赛时间，如 2025.04 */
  date?: string;
  rank: string;
  rankDetail: string;
  /** 团队人数；若为队长可填 isCaptain: true */
  teamSize?: number;
  isCaptain?: boolean;
  /** 自定义团队角色描述，如「团队负责人（独立完成）」；若有则优先于 teamSize/isCaptain 的默认展示 */
  roleLabel?: string;
  /** 参赛认知：业务 / 技术 / 大模型等 */
  insights: {
    title: string;
    content: string;
  }[];
  /** 合影等配图，放在 public 下即可 */
  image?: string;
};

export const competitions: Competition[] = [
  {
    id: "good-anchor",
    name: "快手好主播识别建模大赛",
    date: "2025.04",
    rank: "公司冠军",
    rankDetail: "1/88",
    teamSize: 5,
    isCaptain: true,
    insights: [
      {
        title: "业务认知",
        content:
          "通过主播的多周期 RFM 主播行为统计特征和 AA 社交关系特征，更准确地捕捉好主播的行为模式。",
      },
      {
        title: "技术创新",
        content:
          "设计了多周期和多专家模型，解决了长周期预估、多类别预估的问题，显著提升了整体的预测精度。",
      },
      {
        title: "大模型应用",
        content:
          "利用多模态推理大模型，进行主播内容 COT 理解和世界知识推理，显著提高了好主播长尾的预测效果。",
      },
    ],
    image: "/ceo-photo.jpg",
  },
  {
    id: "coco-panoptic-2019",
    name: "COCO 2019 全景分割任务",
    date: "2019.10",
    rank: "世界冠军",
    rankDetail: "1/13",
    teamSize: 3,
    isCaptain: true,
    insights: [
      {
        title: "工作概述",
        content:
          "负责模型结构与损失函数设计。单模型在 mIOU 指标上较上届冠军模型高出 0.6。",
      },
      {
        title: "注意力与损失",
        content:
          "实现 EMANet、OCNet、APCNet 等主流注意力模块；设计 Ohem 损失与 Context 损失，显著提升分割效果。",
      },
    ],
    image: "/coco.jpg",
  },
  {
    id: "ai-challenger-retinal",
    name: "AI 挑战赛・眼底水肿病变自动分割与检测",
    date: "2018.10",
    rank: "全国第四名",
    rankDetail: "前 3%",
    roleLabel: "团队负责人（独立完成）",
    insights: [
      {
        title: "多任务框架与 UNet++",
        content:
          "在 UNet 最高语义层加入分类头，实现多任务学习；设计并训练 UNet++ 模型，利用多尺度信息完成病变分割。在 15 张 OCT 验证集上，模型 Dice 系数达到 0.784，较基线提升 1.2%。",
      },
      {
        title: "指数对数损失（EL Loss）",
        content:
          "提出新型损失函数，改善小病灶分割效果。使用 EL Loss 后，验证集 Dice 系数达到 0.799，提升 2.7%。",
      },
      {
        title: "级联空洞卷积模块（CA 模块）",
        content:
          "设计感受野增强模块，提升大病灶分割性能。加入 CA 模块后，UNet++ 在验证集 Dice 系数达到 0.807，提升 3.5%。",
      },
    ],
    image: "/aic.jpg",
  },
];
