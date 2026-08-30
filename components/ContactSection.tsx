"use client";

import { useActionState, useRef, useEffect } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { sendContactMessage, type ContactFormState } from "@/app/actions";

const initialState: ContactFormState = { status: "idle" };

export default function ContactSection() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <section id="contact" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Let&apos;s Build the Future Together
          </p>
          <h2 className="mt-2 max-w-sm text-2xl font-bold text-brand-dark sm:text-3xl">
            Ready to create impact? Let&apos;s connect.
          </h2>
          <p className="max-w-sm mt-4 text-sm text-neutral-600">
            Tell us about your goals and challenges. Our team will reach out
            to explore how 28 Dimensions can help.
          </p>

          <div className="mt-6 flex flex-col gap-3 text-sm text-neutral-700">
            <a href="mailto:info@28dimensions.com" className="flex items-center gap-3">
              <Mail size={18} className="text-brand-orange" />
              info@28dimensions.com
            </a>
          </div>
        </div>

        <form ref={formRef} action={formAction} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              required
              name="fullName"
              placeholder="Full Name *"
              className="rounded-md border border-neutral-300 px-4 py-3 text-sm placeholder:text-neutral-400 focus:border-brand-orange focus:outline-none"
            />
            <input
              required
              name="company"
              placeholder="Company / Organization *"
              className="rounded-md border border-neutral-300 px-4 py-3 text-sm placeholder:text-neutral-400 focus:border-brand-orange focus:outline-none"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email Address *"
              className="rounded-md border border-neutral-300 px-4 py-3 text-sm placeholder:text-neutral-400 focus:border-brand-orange focus:outline-none"
            />
            <input
              name="phone"
              placeholder="Phone Number"
              className="rounded-md border border-neutral-300 px-4 py-3 text-sm placeholder:text-neutral-400 focus:border-brand-orange focus:outline-none"
            />
          </div>

          <textarea
            required
            name="message"
            rows={4}
            placeholder="Message *"
            className="rounded-md border border-neutral-300 px-4 py-3 text-sm placeholder:text-neutral-400 focus:border-brand-orange focus:outline-none"
          />

          <div className="flex flex-wrap items-center justify-between gap-4">
            <label className="flex items-start gap-2 text-xs text-neutral-600">
              <input required type="checkbox" name="agree" className="mt-0.5" />
              <span>
                I agree to the{" "}
                <a href="#" className="text-brand-orange underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-brand-orange underline">
                  Terms of Use.
                </a>
              </span>
            </label>

            <button
              type="submit"
              disabled={pending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-orange-dark disabled:opacity-60 sm:w-auto"
            >
              {pending ? "Sending..." : state.status === "success" ? "Message Sent" : "Send Message"}
              <ArrowRight size={16} />
            </button>
          </div>

          {state.status === "error" && state.message && (
            <p className="text-sm text-red-600">{state.message}</p>
          )}
          {state.status === "success" && (
            <p className="text-sm text-green-600">
              Thanks for reaching out! We&apos;ll be in touch soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
