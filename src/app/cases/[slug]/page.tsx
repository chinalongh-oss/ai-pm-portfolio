import { notFound } from "next/navigation";
import { cases } from "@/data/cases";
import CaseDetail from "@/components/CaseDetail";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const caseItem = cases.find((c) => c.slug === params.slug);
  if (!caseItem) return { title: "未找到案例" };
  return {
    title: `${caseItem.title} · 龙慧`,
    description: caseItem.summary,
  };
}

export default function CaseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const caseItem = cases.find((c) => c.slug === params.slug);
  if (!caseItem) notFound();

  return (
    <div className="px-6 py-16">
      <CaseDetail caseItem={caseItem} />
    </div>
  );
}
