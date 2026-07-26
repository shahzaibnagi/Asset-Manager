import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Users, Award, TrendingUp, Activity } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const Counter = ({ from, to, duration = 2, suffix = "" }: { from: number, to: number, duration?: number, suffix?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });
  
  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const current = Math.floor(progress * (to - from) + from);
      
      if (nodeRef.current) {
        nodeRef.current.textContent = current + suffix;
      }
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, from, to, duration, suffix]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
};

export function Stats() {
  const { t } = useLanguage();
  
  const stats = [
    { id: 1, icon: Users, value: 5000, suffix: "+", label: t("stats.patients"), color: "text-primary", bg: "bg-primary/10" },
    { id: 2, icon: Award, value: 10, suffix: "+", label: t("stats.experience"), color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { id: 3, icon: TrendingUp, value: 98, suffix: "%", label: t("stats.success"), color: "text-primary", bg: "bg-primary/10" },
    { id: 4, icon: Activity, value: 20, suffix: "+", label: t("stats.conditions"), color: "text-emerald-500", bg: "bg-emerald-500/10" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`w-16 h-16 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-bold tracking-tight text-foreground mb-2 font-mono">
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
