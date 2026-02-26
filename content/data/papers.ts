/**
 * 论文列表，按时间倒序（新年份在前）
 * 来源: https://scholar.google.com.hk/citations?user=rvic5IoAAAAJ&hl=zh-CN
 */
export type Paper = {
  title: string;
  venue: string;
  year: string;
  citations: number;
  authors?: string;
  /** 前 N 位为共同一作，如 3 表示前三人共同一作 */
  coFirstCount?: number;
  abstract?: string;
  pdf?: string;
  code?: string;
  scholar?: string;
};

export const papers: Paper[] = [
  {
    title:
      "OneLive: Dynamically Unified Generative Framework for Live-Streaming Recommendation",
    venue: "arXiv preprint",
    year: "2026",
    citations: 0,
    authors: "S Wang, Y Huang, R Yang, S Wen, P Xu, J Cao, Y Liu, K Cai, C Guo, et al.",
    coFirstCount: 5,
    abstract:
      "A dynamically unified generative framework for live-streaming recommendation.",
    pdf: "https://arxiv.org/abs/2602.08612",
  },
  {
    title:
      "QARM V2: Quantitative Alignment Multi-Modal Recommendation for Reasoning User Sequence Modeling",
    venue: "arXiv preprint",
    year: "2026",
    citations: 0,
    authors: "T Xia, J Zhang, Y Liu, H Dou, T Yin, J Cao, X Liang, T Xie, L Liu, X Chen, et al.",
    pdf: "https://arxiv.org/abs/2602.08559",
  },
  {
    title: "LARM: LLM-Alignment Live-Streaming Recommendation",
    venue: "arXiv preprint",
    year: "2025",
    citations: 10,
    authors: "Y Liu, J Cao, S Wang, S Wen, X Chen, X Wu, S Yang, Z Liu, K Gai, G Zhou",
    coFirstCount: 3,
    abstract:
      "LLM-aligned live-streaming recommendation framework leveraging large language models for user intent and sequence modeling.",
    pdf: "https://arxiv.org/abs/2504.05217",
  },
  {
    title:
      "FARM: Frequency-Aware Model for Cross-Domain Live-Streaming Recommendation",
    venue: "KDD",
    year: "2025",
    citations: 5,
    authors: "X Li, R Yang, S Wen, S Wang, Y Liu, G Wang, W Hu, Q Luo, J Sheng, et al.",
    abstract:
      "Frequency-aware model for cross-domain live-streaming recommendation, modeling user behavior in the frequency domain.",
  },
  {
    title:
      "Moment&Cross: Next-Generation Real-Time Cross-Domain CTR Prediction for Live-Streaming Recommendation at Kuaishou",
    venue: "arXiv preprint",
    year: "2024",
    citations: 12,
    authors: "J Cao, S Wang, Y Li, S Wang, J Tang, S Wang, S Yang, Z Liu, G Zhou",
    abstract:
      "Real-time cross-domain CTR prediction for live-streaming recommendation, addressing the challenge of capturing moment-level and cross-domain user interests.",
    pdf: "https://arxiv.org/abs/2408.05709",
  },
  {
    title: "A Unified Framework for Cross-Domain Recommendation",
    venue: "arXiv preprint",
    year: "2024",
    citations: 2,
    authors: "J Cao, S Wang, G Chen, R Huang, S Yang, Z Liu, G Zhou",
    abstract:
      "A unified framework for cross-domain recommendation that generalizes across domains and tasks.",
    pdf: "https://arxiv.org/abs/2409.04540",
  },
  {
    title: "Fine-grained control of artistic styles in image generation",
    venue: "arXiv preprint",
    year: "2021",
    citations: 1,
    authors: "X Miao, H Wang, J Fu, J Liu, S Wang, Z Liao",
    abstract:
      "Fine-grained control of artistic styles for image generation and style transfer.",
    pdf: "https://arxiv.org/abs/2110.10278",
  },
  {
    title:
      "Segmentation-based method combined with dynamic programming for brain midline delineation",
    venue: "IEEE ISBI",
    year: "2020",
    citations: 11,
    authors: "S Wang, K Liang, C Pan, C Ye, X Li, F Liu, Y Yu, Y Wang",
    abstract:
      "A segmentation-based approach with dynamic programming for accurate brain midline delineation in medical imaging.",
    pdf: "https://ieeexplore.ieee.org/document/9098532",
  },
  {
    title:
      "Context-aware refinement network incorporating structural connectivity prior for brain midline delineation",
    venue: "MICCAI",
    year: "2020",
    citations: 10,
    authors: "S Wang, K Liang, Y Li, Y Yu, Y Wang",
    abstract:
      "Context-aware refinement network that incorporates structural connectivity prior for robust brain midline delineation in medical images.",
    pdf: "https://link.springer.com/chapter/10.1007/978-3-030-59719-1_6",
  },
  {
    title:
      "Joint COCO and Mapillary Workshop at ICCV 2019: Panoptic Segmentation Challenge Track Technical Report",
    venue: "ICCV Workshop",
    year: "2019",
    citations: 3,
    authors: "S Wang, T Liu, H Liu, Y Ma, Z Li, Z Wang, X Zhou, G Yu, E Zhou, X Zhang, et al.",
    coFirstCount: 3,
    abstract:
      "Technical report on panoptic segmentation exploring context relation for the COCO and Mapillary workshop at ICCV 2019.",
  },
];
