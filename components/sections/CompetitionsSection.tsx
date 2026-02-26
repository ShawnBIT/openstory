"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { competitions } from "@/content/data/competitions";

export function CompetitionsSection() {
  return (
    <section id="competitions" className="border-t border-border py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="font-mono text-sm font-medium text-accent-green mb-2">
          Competitions
        </h2>
        <p className="text-2xl font-semibold text-primary">比赛经历</p>
        <ul className="mt-8 space-y-6">
          {competitions.map((comp, i) => (
            <CompetitionCard key={comp.id} competition={comp} index={i} />
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

function CompetitionCard({
  competition,
  index,
}: {
  competition: (typeof competitions)[0];
  index: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-lg border border-border bg-elevated/50 p-5 backdrop-blur-sm md:p-6"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-primary">
              {competition.name}
            </h3>
            <div className="flex flex-nowrap items-center gap-3 whitespace-nowrap">
              {competition.date && (
                <span className="shrink-0 rounded border border-border-accent bg-surface px-2.5 py-1 font-mono text-sm font-medium text-primary">
                  {competition.date}
                </span>
              )}
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded border border-accent-green/50 bg-accent-green/10 px-2.5 py-1 font-mono text-sm font-medium text-accent-green">
                <Trophy className="h-4 w-4" />
                {competition.rank}
              </span>
              {competition.rankDetail && (
                <span className="shrink-0 text-sm text-muted">
                  {competition.teamSize != null
                    ? `${competition.rankDetail} 支队伍`
                    : competition.rankDetail}
                </span>
              )}
              {competition.roleLabel ? (
                <span className="shrink-0 text-sm font-medium text-accent-green">
                  {competition.roleLabel}
                </span>
              ) : (
                competition.teamSize != null && (
                  <span className="shrink-0 text-sm text-secondary">
                    {competition.teamSize} 人团队
                    {competition.isCaptain && (
                      <span className="ml-1.5 font-medium text-accent-green">· 队长</span>
                    )}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="space-y-3">
            {competition.insights.map((item) => (
              <div key={item.title}>
                <p className="text-xs font-medium text-accent-green mb-1">
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed text-secondary">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="shrink-0 md:w-56">
          {competition.image ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-surface">
              <Image
                src={competition.image}
                alt="与 CEO 合影"
                fill
                className="object-cover"
                sizes="224px"
              />
            </div>
          ) : (
            <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-border bg-surface text-xs text-muted">
              合影待添加
            </div>
          )}
        </div>
      </div>
    </motion.li>
  );
}
