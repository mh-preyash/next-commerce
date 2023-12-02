import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { useEffect } from 'react';
import Typography from './Typography';

const sideVariants = {
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    // opacity: 1,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};

interface ISlideDown {
  detail?: string;
  title?: string;
  setItem?: () => void;
}

export default function SlideDown({ detail, title, setItem }: ISlideDown) {
  const [open, cycleOpen] = useCycle(false, true);

  useEffect(() => {
    open ? setItem(title) : setItem('');
  }, [open]);

  return (
    <main
      className="mx-auto flex w-full cursor-pointer flex-col md:w-[390px]"
      onMouseLeave={cycleOpen}
    >
      <Typography
        className="border-b-3 border-primary pb-4 !text-[40px] "
        onMouseEnter={cycleOpen}
        onMouseLeave={cycleOpen}
      >
        <i>{title}</i>
      </Typography>
      {open && (
        <AnimatePresence>
          <motion.aside
            className="relative left-0 bg-inherit py-3 text-lg font-semibold shadow-none"
            initial={{ height: 0 }}
            animate={{
              height: 'auto'
            }}
            exit={{
              height: 0,
              transition: { duration: 0.2 }
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
