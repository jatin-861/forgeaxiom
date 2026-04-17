import { PageHeader } from '@/components/layout/PageHeader'
import { FeaturedWork } from '@/components/sections/FeaturedWork'

export default function WorkPage() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="OUR WORK"
        subtitle="Exploring the intersection of high-fidelity aesthetics and performance-driven code."
      />

      {/* FeaturedWork component can be reused or expanded here */}
      <FeaturedWork />

      <div className="section-container !pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Additional project placeholders */}
          <div className="glass-card h-96 flex items-center justify-center border-white/5 opacity-30 italic text-white/40">Additional Project Placeholder</div>
          <div className="glass-card h-96 flex items-center justify-center border-white/5 opacity-30 italic text-white/40">Additional Project Placeholder</div>
        </div>
      </div>
    </div>
  )
}
