"use client";

import Container from "@/components/layout/Container";
import { cn } from "@super/ui/lib/utils";
import { motion } from "motion/react";
import { CSSProperties } from "react";



interface PageHeaderProps {
  title?: string;
  className?: string;
  style?: CSSProperties
}

const PageHeader = ({ title = "Brass manufacturer and exporter", className = "", style = { backgroundColor: "#1a2845" } }: PageHeaderProps) => {

  return (
    <motion.div className={cn("w-full h-8 min-[1800px]:h-10", className)} style={style}>

      <Container className=" flex h-full justify-between items-center">

        <p className="tracking-wide text-sm  min-[1800px]:text-base">{title}</p>
        <a href="tel:+918141100249" className="tracking-wide text-sm min-[1800px]:text-base">+91 8141100249</a>


      </Container>
    </motion.div>
  );
};

export default PageHeader;