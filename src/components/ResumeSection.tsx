import { resume } from "@/data/resume";
import Timeline from "./Timeline";

export default function ResumeSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          职业经历
        </h2>
        <p className="mt-2 text-gray-600">
          从 用户体验 到 商业策略 到 AI 产品，持续深耕技术驱动型产品
        </p>

        <div className="mt-10">
          <Timeline items={resume.experience} />
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              教育背景
            </h3>
            {resume.education.map((edu, i) => (
              <div key={i} className="mt-3">
                <p className="text-sm font-medium text-gray-900">
                  {edu.school}
                </p>
                <p className="text-sm text-gray-500">
                  {edu.degree} · {edu.major}
                </p>
                <p className="text-xs text-gray-400">{edu.period}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              认证资质
            </h3>
            <ul className="mt-3 space-y-1">
              {resume.certifications.map((cert, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-600">
                  <span className="text-brand-500">✓</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
