"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/booking/date-picker";
import { whatsappHref } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const EVENT_TYPES = [
  "Corporate / Conference",
  "Festival / Live Performance",
  "Wedding",
  "Brand Activation",
  "Other",
];

const SERVICE_OPTIONS = ["Sound", "Lighting", "Stage & Rigging", "Audio Visual"];

const TIME_SLOTS = [
  "08:00",
  "10:00",
  "12:00",
  "14:00",
  "16:00",
  "18:00",
];

export function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [eventType, setEventType] = useState(EVENT_TYPES[0]);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [services, setServices] = useState<string[]>([]);
  const [venue, setVenue] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function toggleService(service: string) {
    setServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      setError("Please fill in your name and phone number so we can get back to you.");
      return;
    }
    setError("");

    const lines = [
      "Hi Think Audio Visual, I'd like to book an event:",
      `Name: ${name}`,
      `Phone: ${phone}`,
    ];
    if (email) lines.push(`Email: ${email}`);
    lines.push(`Event Type: ${eventType}`);
    if (date) {
      const dateLabel = date.toLocaleDateString("en-ZA", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      lines.push(`Event Date: ${dateLabel}${time ? ` at ${time}` : ""}`);
    }
    if (services.length) lines.push(`Services Needed: ${services.join(", ")}`);
    if (venue) lines.push(`Venue: ${venue}`);
    if (message) lines.push(`Details: ${message}`);

    window.open(whatsappHref(lines.join("\n")), "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border/70 bg-card p-8">
      <div className="text-sm font-medium uppercase tracking-widest text-primary">
        Booking Enquiry
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs text-muted-foreground">
            Full Name
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="mt-1.5 w-full rounded-lg border border-border/70 bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-xs text-muted-foreground">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+27 XX XXX XXXX"
            className="mt-1.5 w-full rounded-lg border border-border/70 bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className="text-xs text-muted-foreground">
          Email (optional)
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="mt-1.5 w-full rounded-lg border border-border/70 bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="event-type" className="text-xs text-muted-foreground">
          Event Type
        </label>
        <select
          id="event-type"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-border/70 bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
        >
          {EVENT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6">
        <span className="text-xs text-muted-foreground">Event Date &amp; Time</span>
        <div className="mt-2 grid gap-4 sm:grid-cols-[auto_1fr]">
          <DatePicker value={date} onChange={setDate} />
          <div className="grid grid-cols-3 gap-2 self-start sm:grid-cols-2">
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setTime(slot)}
                className={cn(
                  "rounded-lg border px-3 py-2 text-sm transition-colors",
                  time === slot
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border/70 text-foreground/80 hover:bg-foreground/5"
                )}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
        {date && (
          <p className="mt-2 text-xs text-muted-foreground">
            Selected:{" "}
            {date.toLocaleDateString("en-ZA", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}
            {time ? ` at ${time}` : ""}
          </p>
        )}
      </div>

      <div className="mt-6">
        <span className="text-xs text-muted-foreground">Services Needed</span>
        <div className="mt-2 flex flex-wrap gap-2">
          {SERVICE_OPTIONS.map((service) => (
            <button
              key={service}
              type="button"
              onClick={() => toggleService(service)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-colors",
                services.includes(service)
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-border/70 text-foreground/80 hover:bg-foreground/5"
              )}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="venue" className="text-xs text-muted-foreground">
          Venue / Location
        </label>
        <input
          id="venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          placeholder="Venue name, suburb"
          className="mt-1.5 w-full rounded-lg border border-border/70 bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-xs text-muted-foreground">
          Tell Us About Your Event
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Guest count, timing, anything else we should know"
          rows={4}
          className="mt-1.5 w-full resize-none rounded-lg border border-border/70 bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>

      {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

      <Button type="submit" variant="whatsapp" size="lg" className="mt-6 w-full">
        Send Booking to WhatsApp
      </Button>
      <p className="mt-3 text-xs text-muted-foreground">
        This opens WhatsApp with your details pre-filled — nothing is sent
        until you press Send there. In line with POPIA, we only use your
        information to respond to this enquiry.
      </p>
    </form>
  );
}
