import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-5xl px-6 py-24 lg:py-32">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          商业策略 × AI 工作流 × 数据智能
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          长期负责搜索推荐、商业化、定价策略、资源治理和实验评估，现在重点关注 AI 工作流、Agent
          产品和数据智能在业务场景中的落地。
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/cases"
            className="inline-flex items-center rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
          >
            查看项目案例
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-colors"
          >
            下载简历
          </Link>
        </div>
      </div>
    </section>
  );
}
