"use client";

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/site-config";

export function WhatsappFloat() {
  return (
    <motion.a
      href={whatsappHref("Hi Think Audio Visual, I'd like to enquire about an event.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="accent-glow fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-background shadow-lg"
    >
      <MessageCircle size={26} />
    </motion.a>
  );
}
