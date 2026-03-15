import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n";

const testimonials = [
  {
    text: "Déligo modernized our supply chain, significantly streamlining local dispatch times. The cloud tracking keeps us connected to our drivers, even in rural areas.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Transitioning our fleet to the Déligo platform was effortless. The mobile interface for drivers requires zero technical training.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sarah Jenkins",
    role: "Fleet Controller",
  },
  {
    text: "The dedicated success team is exceptional. They helped us set up enterprise routing and are always available for ongoing assistance.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Michael Chen",
    role: "Logistics Lead",
  },
  {
    text: "This platform's seamless logistics integration has completely enhanced how we distribute merchandise. Highly recommend their enterprise tier.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Its robust dispatching features and transparent pricing have revolutionized our delivery workflow, making every route more profitable.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Zainab Hussain",
    role: "Fulfillment Manager",
  },
  {
    text: "Déligo exceeded our delivery expectations. It automates proof of delivery, which has dramatically lowered customer disputes.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Aliza Khan",
    role: "Customer Experience",
  },
  {
    text: "Our B2B shipping reliability improved overnight. We get faster drivers and incredible customer feedback across our footprint.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Farhan Siddiqui",
    role: "Supply Chain Director",
  },
  {
    text: "Déligo delivered exactly what they promised—scalable moving and shipping solutions tailored for commercial growth.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sana Sheikh",
    role: "Procurement Manager",
  },
  {
    text: "By pivoting to Déligo's robust network, our e-commerce order fulfillment times plummeted, which boosted our overall sales performance.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Hassan Ali",
    role: "E-commerce Director",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-transparent my-20 py-20 relative overflow-hidden">
      <div className="container z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[600px] mx-auto text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="border border-brand/30 bg-brand/5 text-brand py-1.5 px-4 rounded-full text-sm font-medium tracking-wide">
              {t.testimonials.tag}
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 text-gray-900">
            {t.testimonials.title}
          </h2>
          <p className="text-center mt-4 text-gray-600 text-lg">
            {t.testimonials.desc}
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
