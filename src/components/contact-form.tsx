"use client";

import { useState } from "react";
import { restaurant } from "@/data/restaurant";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  requestType: string;
  date: string;
  time: string;
  partySize: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
}

const TIME_SLOTS = [
  "11:00", "12:00", "13:00", "14:00", "15:00",
  "16:00", "17:00", "18:00", "19:00", "20:00",
  "21:00", "21:30",
];

const PARTY_SIZES = [
  "1", "2", "3", "4", "5", "6",
  "7", "8", "9", "10", "11", "12", "12+",
];

const REQUEST_TYPES = ["Reservation", "Group event", "Question"];

const inputClass =
  "w-full rounded-lg border border-sand bg-cream-deep px-4 py-2.5 text-ink placeholder:text-ink-soft/50 transition-colors focus:border-turmeric focus:outline-none focus:ring-2 focus:ring-turmeric/30";

const labelClass =
  "mb-1.5 block text-sm font-medium text-ink";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    requestType: "Reservation",
    date: "",
    time: "",
    partySize: "2",
    message: "",
  });

  const today = new Date().toISOString().split("T")[0];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please tell us your name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "We need an email to confirm.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "That email doesn't look right.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error("Submission failed");
      } else {
        const subject = encodeURIComponent(
          `${formData.requestType} — ${formData.name}`,
        );
        const body = encodeURIComponent(
          [
            `Name: ${formData.name}`,
            `Email: ${formData.email}`,
            `Phone: ${formData.phone || "N/A"}`,
            `Request Type: ${formData.requestType}`,
            `Date: ${formData.date || "N/A"}`,
            `Time: ${formData.time || "N/A"}`,
            `Party Size: ${formData.partySize}`,
            `Message: ${formData.message || "N/A"}`,
          ].join("\n"),
        );
        // mailto: fallback when no form endpoint is configured. The ESLint
        // rule targets relative internal navigation; this is an absolute
        // mailto URI, so the warning is a false positive.
        // eslint-disable-next-line @next/next/no-location-assign-relative-destination
        window.location.href = `${restaurant.contact.emailHref}?subject=${subject}&body=${body}`;
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      requestType: "Reservation",
      date: "",
      time: "",
      partySize: "2",
      message: "",
    });
    setErrors({});
    setStatus("idle");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col gap-4 rounded-2xl border border-sand bg-cream-deep p-8">
        <h3 className="font-display text-2xl font-semibold text-ink">
          Terima kasih, {formData.name}!
        </h3>
        <p className="text-base leading-relaxed text-ink-soft">
          We&apos;ve noted your request for{" "}
          <span className="font-medium text-ink">
            {formData.date || "your visit"}
          </span>{" "}
          at{" "}
          <span className="font-medium text-ink">
            {formData.time || "your preferred time"}
          </span>
          . We&apos;ll confirm shortly.
        </p>
        <p className="text-sm text-ink-soft">
          Prefer instant confirmation?{" "}
          <a
            href={restaurant.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-chili underline-offset-2 hover:underline"
          >
            WhatsApp us
          </a>
          .
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-2 self-start rounded-full border border-ink/30 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-ink/5"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {status === "error" && (
        <div
          role="alert"
          className="rounded-lg border border-chili/30 bg-chili/5 px-4 py-3 text-sm text-chili"
        >
          Something went wrong sending your request. Please try again or
          WhatsApp us directly.
        </div>
      )}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className={labelClass}>
          Name <span className="text-chili">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={cn(inputClass, errors.name && "border-chili")}
          placeholder="Your full name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="text-sm text-chili">
            {errors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className={labelClass}>
          Email <span className="text-chili">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={cn(inputClass, errors.email && "border-chili")}
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="text-sm text-chili">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className={labelClass}>
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className={inputClass}
          placeholder="+62 812 0000 0000"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="requestType" className={labelClass}>
            Request type
          </label>
          <select
            id="requestType"
            value={formData.requestType}
            onChange={(e) => handleChange("requestType", e.target.value)}
            className={inputClass}
          >
            {REQUEST_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="partySize" className={labelClass}>
            Party size
          </label>
          <select
            id="partySize"
            value={formData.partySize}
            onChange={(e) => handleChange("partySize", e.target.value)}
            className={inputClass}
          >
            {PARTY_SIZES.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="date" className={labelClass}>
            Date
          </label>
          <input
            id="date"
            type="date"
            min={today}
            value={formData.date}
            onChange={(e) => handleChange("date", e.target.value)}
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="time" className={labelClass}>
            Time
          </label>
          <select
            id="time"
            value={formData.time}
            onChange={(e) => handleChange("time", e.target.value)}
            className={inputClass}
          >
            <option value="">Select a time</option>
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={cn(inputClass, "resize-y")}
          placeholder="Any special requests, allergies, or celebrations?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-chili px-6 py-3 font-semibold text-rice transition-colors hover:bg-chili/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send request"}
      </button>
    </form>
  );
}