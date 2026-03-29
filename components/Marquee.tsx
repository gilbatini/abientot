const ITEMS = ['Bwindi Forest', 'Murchison Falls', 'Queen Elizabeth NP', 'Lake Bunyonyi', 'Kibale Forest', 'Rwenzori Mountains', 'Kidepo Valley', 'Lake Victoria']

export default function Marquee() {
  return (
    <div className="bg-[#F5F0E8] border-y border-[#D8E8D0] py-4 overflow-hidden">
      <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-8 font-caps text-[10px] font-medium tracking-[0.22em] uppercase text-brand-dark/60">
            {item}
            <span className="w-1 h-1 rounded-full bg-brand-teal/40 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
