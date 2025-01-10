"use client";

import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 font-mono">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <pre className="text-muted-foreground text-center whitespace-pre-wrap break-words">
            {`
+${'-'.repeat(40)}+
|                                        |
|  © ${currentYear} Made with ❤️ by Ashwani Paras  |
|                                        |
+${'-'.repeat(40)}+

$ exit
> _`}
          </pre>
        </motion.div>
      </div>
    </footer>
  );
}