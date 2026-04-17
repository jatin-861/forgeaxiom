import { PageHeader } from '@/components/layout/PageHeader'

export default function BlogPage() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader 
        title="INSIGHTS" 
        subtitle="Articles and thoughts on the future of web development, 3D design, and studio life."
      />
      
      <div className="section-container !pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {/* Blog Post Placeholders */}
           <div className="glass-card h-80 flex flex-col p-8 border-white/5 group hover:border-forge/30 transition-colors">
              <div className="h-40 bg-white/5 rounded-xl mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-forge/20 to-transparent" />
              </div>
              <span className="text-small text-crystal/60 uppercase tracking-widest mb-2 font-medium">Web Development</span>
              <h3 className="text-xl font-display text-white group-hover:text-crystal transition-colors">Building Awwwards-grade websites in 2025</h3>
           </div>
           
           <div className="glass-card h-80 flex flex-col p-8 border-white/5 group hover:border-forge/30 transition-colors opacity-60">
              <div className="h-40 bg-white/5 rounded-xl mb-6 relative overflow-hidden" />
              <span className="text-small text-crystal/60 uppercase tracking-widest mb-2 font-medium">UI/UX</span>
              <h3 className="text-xl font-display text-white">The Power of Liquid Glass Aesthetics</h3>
           </div>

           <div className="glass-card h-80 flex flex-col p-8 border-white/5 group hover:border-forge/30 transition-colors opacity-60">
              <div className="h-40 bg-white/5 rounded-xl mb-6 relative overflow-hidden" />
              <span className="text-small text-crystal/60 uppercase tracking-widest mb-2 font-medium">Three.js</span>
              <h3 className="text-xl font-display text-white">Optimizing 3D Gems for the Web</h3>
           </div>
        </div>
      </div>
    </div>
  )
}
