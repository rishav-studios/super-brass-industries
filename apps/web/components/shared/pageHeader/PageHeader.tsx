"use client";

import Container from "@/components/layout/Container";



interface PageHeaderProps {
  title?: string;
}

const PageHeader = ({ title = "Brass manufacturer and exporter" }: PageHeaderProps) => {

  return (
    <div className="bg-primary w-full h-16">

      <Container className=" flex h-full text-white justify-between items-center">

        <p className="tracking-wide text-lg">{title}</p>
        <a href="tel:+918141100249" className="tracking-wide text-lg">+91 8141100249</a>


      </Container>
    </div>
  );
};

export default PageHeader;