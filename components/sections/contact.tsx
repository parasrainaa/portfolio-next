"use client";

import { motion } from "framer-motion";
import { PatternCard } from "@/components/ui/pattern-card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MailIcon, MessageSquareIcon, SendIcon } from "lucide-react";

export function ContactSection() {
  return (
    <div>
    </div>
    // <section className="py-20 px-4 bg-muted/30">
    //   <div className="max-w-6xl mx-auto">
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       viewport={{ once: true }}
    //       transition={{ duration: 0.8 }}
    //       className="text-center mb-16"
    //     >
    //       <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
    //       <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
    //         Clear communication, structured collaboration. Let's build something extraordinary together.
    //       </p>
    //     </motion.div>

    //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    //       <motion.div
    //         initial={{ opacity: 0, x: -20 }}
    //         whileInView={{ opacity: 1, x: 0 }}
    //         viewport={{ once: true }}
    //         transition={{ duration: 0.8 }}
    //       >
    //         <PatternCard pattern="dots" className="p-8 h-full">
    //           <h3 className="text-2xl font-semibold mb-6">Communication Preferences</h3>
    //           <div className="space-y-6">
    //             <div className="flex items-start gap-4">
    //               <MailIcon className="w-6 h-6 text-primary mt-1" />
    //               <div>
    //                 <h4 className="font-medium mb-1">Email Communication</h4>
    //                 <p className="text-muted-foreground">
    //                   I prefer detailed, well-structured emails that clearly outline project requirements and expectations.
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="flex items-start gap-4">
    //               <MessageSquareIcon className="w-6 h-6 text-primary mt-1" />
    //               <div>
    //                 <h4 className="font-medium mb-1">Response Pattern</h4>
    //                 <p className="text-muted-foreground">
    //                   I respond systematically to messages, typically within 24 hours during weekdays.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </PatternCard>
    //       </motion.div>

    //       <motion.div
    //         initial={{ opacity: 0, x: 20 }}
    //         whileInView={{ opacity: 1, x: 0 }}
    //         viewport={{ once: true }}
    //         transition={{ duration: 0.8 }}
    //       >
    //         <PatternCard pattern="waves" className="p-8">
    //           <form className="space-y-6">
    //             <div className="space-y-2">
    //               <label className="text-sm font-medium">Name</label>
    //               <Input placeholder="Your name" />
    //             </div>
    //             <div className="space-y-2">
    //               <label className="text-sm font-medium">Email</label>
    //               <Input type="email" placeholder="your@email.com" />
    //             </div>
    //             <div className="space-y-2">
    //               <label className="text-sm font-medium">Message</label>
    //               <Textarea
    //                 placeholder="Please be specific about your project requirements..."
    //                 className="min-h-[150px]"
    //               />
    //             </div>
    //             <Button className="w-full">
    //               <SendIcon className="w-4 h-4 mr-2" />
    //               Send Message
    //             </Button>
    //           </form>
    //         </PatternCard>
    //       </motion.div>
    //     </div>
    //   </div>
    // </section>
  );
}