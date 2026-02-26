export type EducationEntry = {
  school: string;
  /** 学校 Logo 路径，如 /education/pku.png */
  logo?: string;
  degree: string;
  major?: string;
  period: string;
  /** GPA 或成绩说明 */
  gpa?: string;
  /** 实验室 */
  lab?: string;
  /** 导师 */
  advisor?: string;
  /** 导师个人页链接 */
  advisorUrl?: string;
  /** 研究方向，多个用数组 */
  researchDirections?: string[];
  description?: string;
};

export const educationEntries: EducationEntry[] = [
  {
    school: "北京大学",
    logo: "/education/pku.png",
    degree: "数据科学理学硕士",
    period: "2017.09 — 2020.07",
    advisor: "王亦洲",
    advisorUrl: "https://cfcs.pku.edu.cn/wangyizhou/",
    researchDirections: ["语义分割", "目标检测", "医学图像分析"],
  },
  {
    school: "北京大学",
    logo: "/education/pku.png",
    degree: "经济学双学位",
    period: "2015.09 — 2018.07",
    gpa: "GPA：3.09/4.0",
  },
  {
    school: "北京理工大学",
    logo: "/education/bit.svg",
    degree: "统计学理学学士",
    period: "2013.09 — 2017.07",
    gpa: "GPA：90.56/100（专业排名：3/44）",
  },
];
