"use client";

import { useState } from "react";
import { faqItems } from "@/data/faq";

function renderAnswer(text: string) {
  const paragraphs = text.split("\n\n");

  return paragraphs.map((para, idx) => {
    if (para.startsWith("第一，") || para.startsWith("第二，") || para.startsWith("第三，")) {
      const [title, ...rest] = para.split("\n");
      const content = rest.join("\n");
      return (
        <div key={idx} className="mt-4">
          <p className="font-semibold text-gray-800">{title}</p>
          {content && <p className="mt-1 text-gray-600 whitespace-pre-wrap">{content}</p>}
        </div>
      );
    }

    if (para.includes("•")) {
      const lines = para.split("\n");
      return (
        <ul key={idx} className="mt-3 list-none space-y-1">
          {lines.map((line, lineIdx) => (
            <li key={lineIdx} className="flex items-start gap-2 text-gray-600">
              <span className="text-brand-500 mt-1">•</span>
              <span>{line.replace(/^•\s*/, "")}</span>
            </li>
          ))}
        </ul>
      );
    }

    if (para.includes("：") && para.length < 50) {
      return (
        <p key={idx} className="mt-3 font-semibold text-gray-800">
          {para}
        </p>
      );
    }

    return (
      <p key={idx} className="mt-3 text-gray-600 whitespace-pre-wrap">
        {para}
      </p>
    );
  });
}

export default function FaqDemo() {
  const [selectedId, setSelectedId] = useState(faqItems[0]?.id || "");

  const selectedFaq = faqItems.find((f) => f.id === selectedId);

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          AI产品经验FAQ
        </h2>
        <p className="mt-2 text-gray-600">
          通过几个常见问题，快速了解我的 AI 产品能力、项目经验和岗位匹配度。
        </p>

        <div className="mt-8 lg:grid lg:grid-cols-5 lg:gap-8">
          {/* Desktop: Left sidebar with questions */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="space-y-2">
              {faqItems.map((faq) => (
                <button
                  key={faq.id}
                  onClick={() => setSelectedId(faq.id)}
                  className={`w-full text-left rounded-lg px-4 py-3 text-sm transition-all ${
                    selectedId === faq.id
                      ? "bg-white shadow-md"
                      : "hover:bg-white"
                  }`}
                >
                  <span
                    className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-medium ${
                      selectedId === faq.id
                        ? "bg-brand-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {faq.id}
                  </span>
                  <span className="ml-3">{faq.question}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: Right answer card */}
          <div className="lg:col-span-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  Q
                </span>
                <h3 className="text-lg font-semibold text-gray-900">
                  {selectedFaq?.question}
                </h3>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                  A
                </span>
                <div className="flex-1 text-sm">
                  {selectedFaq && renderAnswer(selectedFaq.answer)}
                  {selectedFaq?.tags && selectedFaq.tags.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2 border-t border-gray-100 pt-4">
                      {selectedFaq.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded bg-gray-100 px-2 py-1 text-xs text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Accordion */}
          <div className="lg:hidden space-y-3">
            {faqItems.map((faq) => (
              <div
                key={faq.id}
                className="rounded-lg border border-gray-200 bg-white overflow-hidden"
              >
                <button
                  onClick={() =>
                    setSelectedId(selectedId === faq.id ? "" : faq.id)
                  }
                  className="flex w-full items-center justify-between px-4 py-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-medium ${
                        selectedId === faq.id
                          ? "bg-brand-600 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {faq.id}
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                  <svg
                    className={`h-5 w-5 shrink-0 transition-transform ${
                      selectedId === faq.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {selectedId === faq.id && (
                  <div className="border-t border-gray-100 px-4 pb-4">
                    <div className="pt-4 text-sm">
                      {renderAnswer(faq.answer)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
