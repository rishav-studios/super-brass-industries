import type { Metadata } from "next";
import ContactPageContent from "@/components/pages/contact/ContactPageContent";

export const metadata: Metadata = {
    title: "Contact Us & Request a Quote | Super Brass Industries",
    description:
        "Contact Super Brass Industries in Jamnagar, India. Submit 2D/3D custom drawings for precision CNC turned brass components with guaranteed 24-hour quotation turnaround.",
};

const ContactPage = () => {
    return <ContactPageContent />;
};

export default ContactPage;
