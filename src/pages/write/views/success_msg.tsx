import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SuccessMsg = () => {
  return (
    <>
      <div className="flex h-svh flex-col items-center space-y-2 p-4 text-foreground">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Check className="size-16 text-primary" />
        </motion.div>

        <motion.h2
          className="text-2xl font-semibold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Blog was created successfully
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <Link to="/">
            <Button className="mt-6 bg-primary px-8 font-medium" size="lg">
              Blogs List
            </Button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default SuccessMsg;
