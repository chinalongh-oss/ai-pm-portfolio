import { resume } from "@/data/resume";

export default function CapabilityMap() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          能力图谱
        </h2>
        <p className="mt-2 text-gray-600">
          覆盖 AI 产品全链路，从技术理解到商业落地
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {resume.skills.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-gray-200 bg-white p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
