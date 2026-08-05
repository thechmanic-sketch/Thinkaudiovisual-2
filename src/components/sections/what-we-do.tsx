import { AudioLines, Lightbulb, Layers, MonitorPlay } from "lucide-react";
import { Reveal } from "./reveal";

const disciplines = [
  {
    n: "01",
    icon: AudioLines,
    title: "Sound",
    copy: "Professional Sound Systems — PA systems, live performance audio, backline, DJ'ing and conference microphones tuned to the room.",
  },
  {
    n: "02",
    icon: Lightbulb,
    title: "Lighting",
    copy: "Lighting Design — Stage lighting, uplighting and décor lighting, designed to set the tone of your event from entrance to exit.",
  },
  {
    n: "03",
    icon: Layers,
    title: "Stage",
    copy: "Stage & Rigging — Performance stages, trussing and podium builds engineered for safety and built to spec.",
  },
  {
    n: "04",
    icon: MonitorPlay,
    title: "AV",
    copy: "Audio Visual — LED screens, projection, presentation aids and live streaming for conferences and activations.",
  },
];

export function WhatWeDo() {
  return (
    <section className="relative bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            What We Do
          </span>
          <h2 className="mt-5 max-w-2xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Four disciplines. One production crew.
          </h2>
          <p className="mt-6 max-w-xl text-balance leading-relaxed text-muted">
            From the screen to the speaker stack to the light rig above the
            stage, we handle the full technical build so your event runs
            without a hitch.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08}>
              <div className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-surface lg:p-10">
                <span className="text-xs font-mono text-muted">{d.n}</span>
                <d.icon
                  size={28}
                  strokeWidth={1.5}
                  className="mt-6 text-accent transition-transform duration-500 group-hover:-translate-y-1"
                />
                <h3 className="mt-6 text-xl font-semibold">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {d.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
