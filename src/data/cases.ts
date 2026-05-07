export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  summary: string;
  coverImage: string;
  duration: string;
  role: string;
  problem: string;
  approach: string;
  solution: string[];
  results: string[];
  metrics: { label: string; value: string }[];
  tools: string[];
}

export const cases: CaseStudy[] = [
  {
    slug: "ai-data-quality-workflow",
    title: "字段/埋点数据质量评估 AI 工作台",
    subtitle: "AI Workflow / Data Intelligence",
    category: "AI Workflow",
    tags: ["AI 诊断流程", "LLM + 规则兜底", "人工确认闭环"],
    summary:
      "设计字段/埋点数据质量评估 AI 工作台，融合 AI 诊断与规则引擎兜底，实现知识增强与人工确认的闭环。",
    coverImage: "/images/case-data-quality.png",
    duration: "",
    role: "AI 产品经理",
    problem: "",
    approach:
      "通过字段画像构建数据资产视图，结合 AI 诊断能力自动识别数据质量问题，辅以规则引擎兜底保障准确率，知识增强提升诊断覆盖率，最终通过人工确认闭环优化。",
    solution: [
      "字段画像：构建字段级数据资产视图，支持数据血缘与质量历史追踪",
      "AI 诊断：基于 LLM 实现字段质量智能诊断，自动识别缺失率、格式异常等常见问题",
      "LLM + 规则引擎兜底：规则引擎覆盖高频质量规则，保障 AI 诊断的准确性与稳定性",
      "知识增强：知识库沉淀历史诊断经验，提升同类问题的诊断效率",
      "人工确认：诊断结果经人工确认后归档，形成持续优化闭环",
      "结果导出：支持多格式导出，便于接入下游数据治理流程",
      "Structured Agent 演进方向：探索 Agent 在复杂数据质量场景的自动化处理能力",
    ],
    results: [],
    metrics: [],
    tools: ["LLM", "规则引擎", "知识图谱", "数据分析平台"],
  },
  {
    slug: "aigc-content-optimization",
    title: "AIGC 房源内容表达优化",
    subtitle: "AIGC / Content Intelligence",
    category: "AIGC",
    tags: ["AIGC 内容优化", "标题/描述/首图", "实验正向验证"],
    summary:
      "通过 AIGC 智能标题和描述优化，提升房源内容的表达质量与用户互动。",
    coverImage: "/images/case-aigc.png",
    duration: "",
    role: "AI 产品经理",
    problem: "",
    approach:
      "构建 AIGC 智能标题生成能力，结合房源数据与用户意图分析，输出高质量标题与描述，通过 AB 实验验证效果并持续迭代。",
    solution: [
      "智能标题生成：基于 AIGC 生成高质量房源标题",
      "意图强化：标题和描述结合用户意图进行强化表达",
      "营销素材优化：自动化营销素材优化，提升内容吸引力",
    ],
    results: [
      "在相关试点中，智能标题采纳率达到 73%；标题推荐带动 link/pv 提升 13.7%；AIGC 标题/描述优化后 link/pv 提升 7.4%。相关数据来自阶段性实验和复盘口径。",
    ],
    metrics: [
      { label: "智能标题采纳率（试点）", value: "73%" },
      { label: "link/pv 提升（标题推荐）", value: "+13.7%" },
      { label: "link/pv 提升（意图强化）", value: "+7.4%" },
      { label: "素材优化点击率提升", value: "+18%" },
    ],
    tools: ["AIGC", "数据分析平台", "AB 测试平台"],
  },
  {
    slug: "search-recommendation-strategy",
    title: "商业地产搜索推荐一体化策略建设",
    subtitle: "Search / Recommendation / Commercialization",
    category: "Search & Recommendation",
    tags: ["搜索推荐一体化", "多通道召回排序", "部分场景经营指标改善"],
    summary:
      "通过搜索推荐一体化策略建设，优化商业地产场景的流量分发与经营效果。",
    coverImage: "/images/case-search.png",
    duration: "",
    role: "AI 产品经理",
    problem: "",
    approach:
      "在商业地产场景构建搜索与推荐联动的一体化策略，打通搜索意图与推荐内容的匹配链路，通过精选内容策略提升流量分发效率。",
    solution: [
      "写字楼精选策略：基于写字楼质量评估体系，提升优质房源曝光",
      "商铺精选策略：商铺房源质量分级，差异化流量分配",
      "厂房精选策略：厂房场景特殊需求挖掘，专项策略优化",
      "搜索场景优化：搜索意图理解与结果排序策略升级",
    ],
    results: [
      "在商业地产搜索推荐相关实验中，部分业务线、部分场景的最高 cash/uv 提升 107.68%，最高 link/uv 提升 47.97%。该数据为具体场景下的阶段性实验结果，不代表全站整体平均提升。",
    ],
    metrics: [
      { label: "部分搜索场景最高 cash/uv", value: "+107.68%" },
      { label: "部分搜索场景最高 link/uv", value: "+47.97%" },
    ],
    tools: ["搜索平台", "推荐系统", "数据分析平台", "AB 测试平台"],
  },
];
