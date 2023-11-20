import { AnimatePresence, motion, useCycle } from "framer-motion";
import Typography from "./Typography";
import { useEffect } from "react";

const sideVariants = {
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    // opacity: 1,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export default function SlideDown({ detail, title, setItem }) {
  const [open, cycleOpen] = useCycle(false, true);

  useEffect(() => {
    open ? setItem(title) : setItem("");
  }, [open]);

  return (
    <main
      className="flex flex-col w-full md:w-[390px] cursor-pointer mx-auto"
      onMouseLeave={cycleOpen}
    >
      <Typography
        className="border-black border-b-3 pb-4 !text-[40px] "
        onMouseEnter={cycleOpen}
        onMouseLeave={cycleOpen}
      >
        <i>{title}</i>
      </Typography>
      {open && (
        <AnimatePresence>
          <motion.aside
            className="relative shadow-none bg-inherit left-0 py-3 text-lg font-semibold"
            initial={{ height: 0 }}
            animate={{
              height: "auto",
            }}
            exit={{
              height: 0,
              transition: { duration: 0.2 },
            }}
            variants={sideVariants}
          >
            {detail}
          </motion.aside>
        </AnimatePresence>
      )}
    </main>
  );
}
