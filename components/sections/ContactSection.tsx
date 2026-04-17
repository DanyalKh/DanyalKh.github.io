"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const contacts = [
  { icon: "📧", label: "Email", value: "your@email.com" },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/yourprofile" },
  { icon: "🐙", label: "GitHub", value: "github.com/DanyalKh" },
  { icon: "📍", label: "Location", value: "Dubai, UAE" },
  { icon: "🌍", label: "Open to", value: "Relocation · English · German (A1/A2)" },
];

export function ContactSection() {
  const [status, setStatus] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        {
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );
      setStatus("Message sent successfully.");
      event.currentTarget.reset();
    } catch {
      setStatus("Unable to send message right now.");
    }
  }

  return (
    <section id="contact" className="section-shell">
      <div className="text-center">
        <p className="section-badge">✦ OPEN CHANNEL</p>
        <h2 className="mt-4 text-4xl font-bold md:text-5xl"><span>Get In</span> <span className="text-secondary">Touch</span></h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted">Open to senior AI/ML engineering roles, architecture consulting, and GenAI collaborations.</p>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="space-y-3">
          {contacts.map((contact) => (
            <motion.div key={contact.label} whileHover={{ y: -4 }} className="rounded-xl border border-border bg-white/70 p-4 dark:bg-[#121621]">
              <p className="font-semibold">{contact.icon} {contact.label}</p>
              <p className="text-sm text-muted">{contact.value}</p>
            </motion.div>
          ))}
        </div>
        <form onSubmit={onSubmit} className="card-surface space-y-4 bg-[#0b0f19] p-6 font-mono text-white">
          <p className="text-sm">● ● ● contact ~ terminal</p>
          <label className="block text-sm">&gt; name:<input name="name" required className="mt-1 w-full border-b border-white/30 bg-transparent px-1 py-2 outline-none" /></label>
          <label className="block text-sm">&gt; email:<input name="email" type="email" required className="mt-1 w-full border-b border-white/30 bg-transparent px-1 py-2 outline-none" /></label>
          <label className="block text-sm">&gt; message:<textarea name="message" required rows={5} className="mt-1 w-full border border-white/30 bg-transparent px-2 py-2 outline-none" /></label>
          <button type="submit" className="w-full rounded-lg bg-primary py-3 font-semibold text-white">[ Send Message ↵ ]</button>
          {status ? <p className="text-xs text-white/80">{status}</p> : null}
        </form>
      </div>
      <p className="mx-auto mt-10 inline-flex items-center rounded-full border border-border px-4 py-2 text-sm text-muted">
        <span className="mr-2 h-2 w-2 rounded-full bg-green-500" />
        Available for Opportunities · Senior AI Engineer · Dubai / Remote
      </p>
    </section>
  );
}
