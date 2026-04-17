import { PageHeader } from '@/components/layout/PageHeader'

export default function TeamPage() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="THE TEAM"
        subtitle="Two developers. One vision. Zero compromise. Meet the minds behind ForgeAxiom."
      />

      <div className="section-container !pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Saral Banker */}
          <div className="flex flex-col items-center text-center">
            <div className="w-64 h-64 glass-card rounded-3xl mb-8 flex items-center justify-center border-blue-500/20">
              <span className="text-white/20 italic">Saral Banker</span>
            </div>
            <h3 className="text-3xl font-display font-medium mb-2">Saral Banker</h3>
            <p className="text-crystal/60 uppercase tracking-widest text-small mb-4 font-medium">Full Stack Developer</p>
            <p className="text-white/60 max-w-sm mb-6">Master of logic and architecture, specializing in Node.js, Next.js, and complex system designs.</p>
          </div>

          {/* Jatin Basantani */}
          <div className="flex flex-col items-center text-center">
            <div className="w-64 h-64 glass-card rounded-3xl mb-8 flex items-center justify-center border-purple-500/20">
              <span className="text-white/20 italic">Jatin Basantani</span>
            </div>
            <h3 className="text-3xl font-display font-medium mb-2">Jatin Basantani</h3>
            <p className="text-crystal/60 uppercase tracking-widest text-small mb-4 font-medium">UI-UX + Frontend Developer</p>
            <p className="text-white/60 max-w-sm mb-6">Aesthetic architect, crafting high-fidelity interfaces and cinematic motion experiences with Three.js and GSAP.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
