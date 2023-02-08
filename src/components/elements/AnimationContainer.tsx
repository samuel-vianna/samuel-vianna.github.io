import { motion } from "framer-motion";

export const AnimationContainerComponent = ({
  children,
}: {
  children: any;
}) => (
  <motion.div
    initial={{ opacity: 0,  x: -100 }}
    animate={{ opacity: 1, scale: 1, x: 0 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);
