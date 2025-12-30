import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function AnimatedSection({ children, className = "" }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className={`min-h-screen ${className}`}
        >
            {children}
        </motion.section>
    );
}
