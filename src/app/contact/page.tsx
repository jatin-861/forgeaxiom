'use client'

import { PageHeader } from '@/components/layout/PageHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { motion } from 'framer-motion'
import { Mail, Clock, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="LET'S TALK"
        subtitle="Ready to forge your next big project? Reach out below and let's build something extraordinary."
      />

      <div className="section-container !pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="p-10 border-white/5">
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-small uppercase tracking-widest text-white/40 font-medium">Full Name</label>
                  <input type="text" className="glass-input" placeholder="e.g. John Doe" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-small uppercase tracking-widest text-white/40 font-medium">Email Address</label>
                  <input type="email" className="glass-input" placeholder="john@example.com" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-small uppercase tracking-widest text-white/40 font-medium">Project Type</label>
                  <select className="glass-input bg-abyss">
                    <option>Web Application</option>
                    <option>UI/UX Design</option>
                    <option>Full Stack Development</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-small uppercase tracking-widest text-white/40 font-medium">Message</label>
                  <textarea className="glass-input min-h-[150px]" placeholder="Tell us about your project..." />
                </div>

                <MagneticButton className="w-full mt-4">Send Message</MagneticButton>
              </form>
            </GlassCard>
          </motion.div>

          {/* CONTACT INFO / CALENDLY */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-forge/10 flex items-center justify-center">
                  <Mail size={20} className="text-crystal" />
                </div>
                <h4 className="text-white font-display text-lg">Email Us</h4>
                <p className="text-white/40 font-body">hello@forgeaxiom.dev</p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-forge/10 flex items-center justify-center">
                  <Clock size={20} className="text-crystal" />
                </div>
                <h4 className="text-white font-display text-lg">Response Time</h4>
                <p className="text-white/40 font-body">Within 24 hours</p>
              </div>
            </div>

            <div className="glass-card p-8 border-white/5 opacity-80 border-dashed border-2 flex flex-col items-center justify-center h-80 text-center">
              <MessageSquare size={48} className="text-white/10 mb-4" />
              <h4 className="text-white/40 font-display text-xl">Calendly Embed Placeholder</h4>
              <p className="text-white/20 font-body text-sm mt-2">Schedule a 15-min discovery call</p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
