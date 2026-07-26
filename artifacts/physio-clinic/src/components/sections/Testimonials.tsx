import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    name: "Michael R.",
    initials: "MR",
    text: "After months of chronic back pain, Dr. Ayesha Jamshed helped me get my life back. Her manual therapy techniques are incredible. I'm completely pain-free now."
  },
  {
    id: 2,
    name: "Sarah J.",
    initials: "SJ",
    text: "The sports rehab program was perfectly tailored to my needs. I recovered from my ACL tear much faster than expected and I'm back on the court."
  },
  {
    id: 3,
    name: "David H.",
    initials: "DH",
    text: "Very professional and clean clinic. The staff really listens to you. The dry needling sessions provided immediate relief for my tension headaches."
  },
  {
    id: 4,
    name: "Emma W.",
    initials: "EW",
    text: "I took my daughter here for pediatric physio. The care and patience they showed was wonderful. She looked forward to every session."
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  useEffect(() => {
    if (emblaApi) {
      // Auto play simple implementation
      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);
      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-400/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            >
              Patient Success Stories
            </motion.h2>
            <p className="text-primary-foreground/80 max-w-xl">
              Don't just take our word for it. Read what our patients have to say about their recovery journey.
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" size="icon" onClick={scrollPrev} className="rounded-full border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={scrollNext} className="rounded-full border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-4 md:-ml-6">
            {reviews.map((review) => (
              <div key={review.id} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4 md:pl-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl h-full flex flex-col">
                  <div className="flex text-amber-400 mb-6">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-lg leading-relaxed mb-8 flex-grow">
                    "{review.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <Avatar className="w-12 h-12 border-2 border-primary-foreground/20">
                      <AvatarFallback className="bg-primary/20 text-primary-foreground font-bold">
                        {review.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">{review.name}</h4>
                      <p className="text-primary-foreground/60 text-sm">Verified Patient</p>
                    </div>
                  </div>
                  
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-white/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
