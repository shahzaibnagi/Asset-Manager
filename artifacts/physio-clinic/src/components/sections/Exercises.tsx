import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, BarChart } from "lucide-react";
import backStretchImg from "@assets/generated_images/back-stretch.jpg";
import neckExerciseImg from "@assets/generated_images/neck-exercise.jpg";
import kneeRehabImg from "@assets/generated_images/knee-rehab.jpg";

const tabs = ["All", "Back", "Neck", "Knee"];

const exercises = [
  {
    id: 1,
    title: "Child's Pose Stretch",
    category: "Back",
    duration: "5 mins",
    difficulty: "Easy",
    desc: "A gentle stretch for the lower back and lats. Great for relieving tension after a long day.",
    img: backStretchImg
  },
  {
    id: 2,
    title: "Cervical Retraction",
    category: "Neck",
    duration: "3 mins",
    difficulty: "Medium",
    desc: "Strengthens deep neck flexors and helps correct forward head posture (tech neck).",
    img: neckExerciseImg
  },
  {
    id: 3,
    title: "Seated Leg Extension",
    category: "Knee",
    duration: "8 mins",
    difficulty: "Hard",
    desc: "Builds quadriceps strength to support the knee joint. Essential for arthritis management.",
    img: kneeRehabImg
  }
];

export function Exercises() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = exercises.filter(
    (ex) => activeTab === "All" || ex.category === activeTab
  );

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
            >
              Exercise Library
            </motion.h2>
            <p className="text-muted-foreground max-w-xl">
              Safe, effective movements you can do at home to speed up your recovery and prevent future injuries.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((ex) => (
              <motion.div
                layout
                key={ex.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img 
                    src={ex.img} 
                    alt={ex.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full backdrop-blur-md ${
                      ex.difficulty === 'Easy' ? 'bg-emerald-500/20 text-emerald-100 border border-emerald-500/30' :
                      ex.difficulty === 'Medium' ? 'bg-amber-500/20 text-amber-100 border border-amber-500/30' :
                      'bg-rose-500/20 text-rose-100 border border-rose-500/30'
                    }`}>
                      {ex.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {ex.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                    {ex.desc}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm font-medium text-foreground/80 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-primary" />
                      {ex.duration}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BarChart className="w-4 h-4 text-emerald-500" />
                      {ex.category}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
