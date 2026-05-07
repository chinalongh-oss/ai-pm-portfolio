import { resume } from "@/data/resume";
import Timeline from "@/components/Timeline";

export const metadata = {
  title: "简历 · 龙慧",
  description: "商业策略产品经理职业经历与技能",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">简历</h1>
      <p className="mt-2 text-lg text-gray-600">{resume.summary}</p>

      <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
              邮箱
            </p>
            <p className="mt-1 text-sm text-gray-900">{resume.contact.email}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
              电话
            </p>
            <p className="mt-1 text-sm text-gray-900">{resume.contact.phone}</p>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900">工作经历</h2>
        <div className="mt-6">
          <Timeline items={resume.experience} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900">技能</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {resume.skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
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
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900">教育背景</h2>
        <div className="mt-6 space-y-4">
          {resume.education.map((edu, i) => (
            <div key={i}>
              <p className="text-sm font-medium text-gray-900">{edu.school}</p>
              <p className="text-sm text-gray-500">
                {edu.degree} · {edu.major}
              </p>
              <p className="text-xs text-gray-400">{edu.period}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900">认证资质</h2>
        <ul className="mt-6 space-y-2">
          {resume.certifications.map((cert, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-600">
              <span className="text-brand-500">✓</span>
              {cert}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
