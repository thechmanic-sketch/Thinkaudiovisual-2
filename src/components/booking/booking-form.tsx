"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { buildBookingWhatsappMessage, whatsappHref } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

const fields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "phone", label: "Phone", type: "tel", required: true },
  { name: "email", label: "Email", type: "email", required: false },
  { name: "eventType", label: "Event Type", type: "text", required: false },
  { name: "eventDate", label: "Event Date", type: "date", required: false },
  { name: "venue", label: "Venue", type: "text", required: false },
  { name: "services", label: "Services Needed", type: "text", required: false },
] as const;

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = buildBookingWhatsappMessage(values);
    setSubmitted(true);
    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
  };

  if (submitted) {
    return (
      <div className="glass flex flex-col items-center justify-center rounded-3xl p-14 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Check size={26} />
        </div>
        <h3 className="mt-6 text-2xl font-semibold">Sent to WhatsApp</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
          We&rsquo;ve opened WhatsApp with your enquiry pre-filled. Send the
          message and we&rsquo;ll be in touch shortly.
        </p>
        <Button className="mt-8" variant="outline" onClick={() => setSubmitted(false)}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 lg:p-12">
      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className="relative">
            <label
              htmlFor={field.name}
              className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-muted"
            >
              {field.label}
              {field.required && <span className="text-accent"> *</span>}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              value={values[field.name] ?? ""}
              onChange={(e) =>
                setValues((v) => ({ ...v, [field.name]: e.target.value }))
              }
              className="w-full rounded-xl border border-foreground/15 bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
            />
          </div>
        ))}
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-muted"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message ?? ""}
          onChange={(e) =>
            setValues((v) => ({ ...v, message: e.target.value }))
          }
          className="w-full resize-none rounded-xl border border-foreground/15 bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
        />
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        In line with POPIA, information is only used to respond to the
        enquiry.
      </p>

      <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto">
        Send via WhatsApp
      </Button>
    </form>
  );
}
