# AI Product Manager Portfolio

我的 AI 产品经理个人作品集网站，用于展示职业经历、项目案例和专业能力。

## 🎯 项目目标

为 AI 产品经理岗位求职提供专业的线上作品集展示，包含：
- 核心能力展示
- 项目案例详情
- 职业经历时间线
- FAQ 问答模块

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 3
- **部署**: Vercel

## 📁 项目结构

```
src/
├── app/                    # Next.js 应用目录
│   ├── page.tsx            # 首页（Hero + 能力地图 + 案例 + FAQ + 职业经历）
│   ├── cases/              # 案例页面
│   │   ├── page.tsx        # 案例列表页
│   │   └── [slug]/page.tsx # 案例详情页
│   ├── resume/             # 简历页面
│   │   └── page.tsx        # 完整简历展示
│   └── layout.tsx          # 全局布局
├── components/             # UI 组件
│   ├── HeroSection.tsx     # 首屏展示区域
│   ├── CapabilityMap.tsx   # 能力地图组件
│   ├── CaseCard.tsx        # 案例卡片组件
│   ├── CaseDetail.tsx      # 案例详情组件
│   ├── FaqDemo.tsx         # FAQ 问答模块
│   ├── ResumeSection.tsx   # 职业经历组件
│   ├── Timeline.tsx        # 时间线组件
│   ├── Navbar.tsx          # 导航栏
│   └── Footer.tsx          # 页脚
└── data/                   # 数据文件
    ├── resume.ts           # 简历数据
    ├── cases.ts            # 案例数据
    └── faq.ts              # FAQ 问答数据
```

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000 查看网站。

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run start
```

## 📱 页面说明

| 页面 | 路径 | 说明 |
|------|------|------|
| 首页 | `/` | 首屏展示、能力地图、案例卡片、FAQ、职业经历 |
| 案例列表 | `/cases` | 所有项目案例列表 |
| 案例详情 | `/cases/[slug]` | 具体案例详细介绍 |
| 简历页 | `/resume` | 完整个人简历 |

## 🎨 设计风格

- **风格**: B2B SaaS 官网风格，专业、克制、清晰
- **配色**: 蓝色主色调，灰色辅助色
- **响应式**: 支持桌面端和移动端

## 🔧 自定义内容

### 修改简历信息
编辑 `src/data/resume.ts` 文件

### 修改案例数据
编辑 `src/data/cases.ts` 文件

### 修改 FAQ 问答
编辑 `src/data/faq.ts` 文件

## 📤 部署

项目已部署在 Vercel:
https://ai-pm-portfolio-9rxlq9q243-chinalongh-oss-projects.vercel.app

### 更新部署
每次推送到 `main` 分支，Vercel 会自动重新部署。

```bash
git add .
git commit -m "更新内容"
git push origin main
```

## 📄 License

MIT
