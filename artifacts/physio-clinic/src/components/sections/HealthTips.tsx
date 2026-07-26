import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";

const tips = [
  {
    id: 1,
    title: "5 Ergonomic Tips for Desk Workers",
    excerpt: "Prevent neck and back pain with these simple adjustments to your home office setup.",
    category: "Prevention"
  },
  {
    id: 2,
    title: "Understanding Sciatica vs. Lower Back Pain",
    excerpt: "Learn the difference and know when it's time to see a physiotherapist.",
    category: "Education"
  },
  {
    id: 3,
    title: "Post-Surgery Recovery: What to Expect",
    excerpt: "A timeline of the physical therapy journey after a major orthopedic surgery.",
    category: "Recovery"
  }
];

export function HealthTips() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
            >
              Latest Health Insights
            </motion.h2>
            <p className="text-muted-foreground max-w-xl">
              Stay informed with expert advice on injury prevention, recovery strategies, and maintaining a healthy lifestyle.
            </p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All Articles <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-8 rounded-3xl group cursor-pointer border-t-4 border-t-transparent hover:border-t-emerald-500"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                  {tip.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {tip.title}
              </h3>
              
              <p className="text-muted-foreground mb-8 line-clamp-3">
                {tip.excerpt}
              </p>
              
              <div className="flex items-center text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-auto">
                <BookOpen className="w-4 h-4 mr-2" />
                Read Article
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
