import HeroSection from "@/components/HeroSection";
import CapabilityMap from "@/components/CapabilityMap";
import CaseCard from "@/components/CaseCard";
import ResumeSection from "@/components/ResumeSection";
import FaqDemo from "@/components/FaqDemo";
import { cases } from "@/data/cases";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CapabilityMap />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            代表案例
          </h2>
          <p className="mt-2 text-gray-600">
            聚焦 AI 工作流、AIGC 和搜索推荐等核心领域
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((c) => (
              <CaseCard key={c.slug} caseItem={c} />
            ))}
          </div>
        </div>
      </section>

      <FaqDemo />
      <ResumeSection />
    </>
  );
}
