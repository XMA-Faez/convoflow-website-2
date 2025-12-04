import Image from "next/image";
import { Container } from "./container";
import { Link } from "@/components/primitives";
import { navLinks, whatsappUrl, contactInfo } from "@/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 text-neutral-600 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image
              src="/logo.png"
              alt="BookedByAI"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-sm text-neutral-500 text-center md:text-left">
              AI-powered lead qualification and booking automation.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="font-semibold text-neutral-800">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-neutral-500">
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="hover:text-neutral-900 transition-colors"
              >
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:text-neutral-900 transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="font-semibold text-neutral-800">Location</h4>
            <div className="text-sm text-neutral-500 text-center md:text-left">
              <p>{contactInfo.address.line1}</p>
              <p>{contactInfo.address.line2}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                variant="muted"
                size="sm"
                className="text-neutral-500 hover:text-neutral-900"
              >
                {link.label}
              </Link>
            ))}
            {whatsappUrl !== "#" && (
              <Link
                href={whatsappUrl}
                external
                variant="muted"
                size="sm"
                className="text-neutral-500 hover:text-neutral-900"
              >
                WhatsApp
              </Link>
            )}
          </nav>
          <p className="text-sm text-neutral-400">
            &copy; {currentYear} BookedByAI. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
