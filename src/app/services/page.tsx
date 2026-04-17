import { PageHeader } from '@/components/layout/PageHeader'

export default function ServicesPage() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="OUR SERVICES"
        subtitle="We offer premium digital crafting across the full spectrum of modern web and design."
      />

      <div className="section-container !pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for Service Cards */}
          <div className="glass-card h-80 flex items-center justify-center border-white/5 opacity-50 italic text-white/40">Service Card Placeholder</div>
          <div className="glass-card h-80 flex items-center justify-center border-white/5 opacity-50 italic text-white/40">Service Card Placeholder</div>
          <div className="glass-card h-80 flex items-center justify-center border-white/5 opacity-50 italic text-white/40">Service Card Placeholder</div>
        </div>
      </div>
    </div>
  )
}
