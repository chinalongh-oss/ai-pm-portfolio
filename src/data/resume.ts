export interface TimelineItem {
  period: string;
  title: string;
  company: string;
  description: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  period: string;
  school: string;
  degree: string;
  major: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
  experience: TimelineItem[];
  skills: SkillCategory[];
  education: Education[];
  certifications: string[];
}

export const resume: ResumeData = {
  name: "龙慧",
  title: "商业策略产品经理 / AI 产品经理方向",
  summary:
    "长期负责搜索推荐、商业化、定价策略、资源治理和实验评估，正在将复杂策略产品能力迁移到 AI 工作流、数据智能和商业化 AI 场景。",
  contact: {
    email: "285220911@qq.com",
    phone: "19945719912",
    location: "",
    linkedin: "",
    github: "",
  },
  experience: [
    {
      period: "2022.07 - 至今",
      title: "商业策略产品经理 / AI 产品经理方向",
      company: "58同城｜房产事业部｜商业生态与产品",
      description:
        "围绕二手房用户需求识别、AIGC 内容优化、搜索推荐策略、商业地产信息分发、平台资源配置与数据智能工作流等复杂场景，负责业务问题拆解、AI/策略方案设计、实验评估、数据复盘和跨团队推进。",
      highlights: [
        "负责冷启动推荐、区域画像、高相关小区与价格段、推荐理由、AIGC 标题生成、房源描述生成、首图优选、POI 信息强化等策略与 AI 内容能力建设，推动房源信息表达从人工维护向策略化、智能化升级",
        "参与商业地产搜索推荐一体化从 0 到 1 建设，覆盖 query 改写、意图识别、多通道召回、综合排序、标题飘红、推荐理由和创意展示联动，提升搜索/推荐场景的信息匹配与商业转化效率",
        "围绕字段/埋点/数据质量评估场景，设计轻量化 AI 工作流工具，支持字段画像、风险判断、知识增强、LLM + 规则兜底、人工确认和结果沉淀，验证 AI 在数据智能场景中的可控落地方式",
        "参与平台级资源配置与生态治理建设，围绕 ROI 动态监控、异常主体识别、DSP 预算分配、选房选人和自动置顶形成产品化链路，推动流量分配从经验规则向数据驱动机制演进",
      ],
    },
    {
      period: "2021.10 - 2022.03",
      title: "商业策略产品经理",
      company: "百度｜MEG事业部｜百度问一问",
      description:
        "围绕问一问平台用户问答场景中的真实需求挖掘与线索变现，负责线索收集、分发、定价和售卖链路建设。",
      highlights: [
        "从0到1搭建线索中心，打通全平台线索收集、分发和管理通路",
        "结合凤巢、百度站内垂类和市场情况验证线索有效率并制定定价方案",
        "围绕不同行业探索自售、凤巢、站内垂类等不同售卖渠道",
      ],
    },
    {
      period: "2019.08 - 2021.04",
      title: "商业策略产品经理",
      company: "瓜子二手车｜智能平台技术部｜售车定价团队",
      description:
        "围绕库存周转和利润目标，负责二手车定价体系、售卖模式和金融策略相关产品建设。",
      highlights: [
        "参与人工定价、规则引擎、模型定价产品化建设，梳理定价系统与价格流程",
        "探索不同售卖模式下的定价和售卖策略，提升周转和毛利",
        "推动金融策略和返息策略迭代，支持现金流与业务恢复需求",
      ],
    },
    {
      period: "2018.08 - 2019.08",
      title: "商业策略产品经理",
      company: "字节跳动｜懂车帝｜商业化团队",
      description:
        "围绕懂车帝商业化增长目标，负责经销商会员体系、广告投放平台、品牌广告和线索经营等方向建设。",
      highlights: [
        "参与广告投放平台从0到1建设，支持库存管理和广告计划创建",
        "规划并落地竞品拦截广告、品牌专区、留资广告等创新广告产品",
        "推动经销商会员体系和权益建设，自营商家转化会员商家30%+",
      ],
    },
    {
      period: "2017.06 - 2018.08",
      title: "C端产品经理",
      company: "携程旅行网｜机票事业部｜后服务团队",
      description:
        "围绕机票订后服务体验提升，负责改签和退票流程优化及自助化建设。",
      highlights: [
        "推动国内改签退票重订产品建设，支持国内/国际多次改签和改签信息透明化",
        "优化退票流程和临时航变退票上传证明能力，细化流程说明和费用展示",
        "推动改签、退票自助率提升，并获得产品创新奖",
      ],
    },
  ],
  education: [
    {
      period: "2014.09 - 2017.06",
      school: "吉林大学｜通信学院",
      degree: "工学硕士",
      major: "电子与通信工程",
    },
    {
      period: "2010.09 - 2014.06",
      school: "吉林大学｜通信工程学院",
      degree: "工学学士",
      major: "测控技术与仪器(信号处理与仪器)",
    },
  ],
  skills: [
    {
      category: "策略产品",
      skills: [
        "搜索推荐策略",
        "商业化策略",
        "定价策略",
        "资源配置",
        "ROI治理",
        "流量调节",
      ],
    },
    {
      category: "AI产品与数据智能",
      skills: [
        "AI工作流设计",
        "AIGC内容优化",
        "字段画像",
        "数据质量评估",
        "LLM + 规则兜底",
        "人机协同审核",
      ],
    },
    {
      category: "数据分析与实验",
      skills: [
        "指标体系",
        "AB实验",
        "PSM评估",
        "效果复盘",
        "转化分析",
        "商业指标分析",
      ],
    },
    {
      category: "产品建设与推进",
      skills: [
        "0-1产品建设",
        "复杂业务拆解",
        "PRD设计",
        "跨团队协同",
        "阶段目标拆解",
        "产品迭代规划",
      ],
    },
  ],
  certifications: ["发明专利1项", "软件著作权1项", "携程产品创新奖"],
};
