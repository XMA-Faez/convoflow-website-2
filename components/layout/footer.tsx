import Image from "next/image";
import { Container } from "./container";
import { Link } from "@/components/primitives";
import type { LayoutContent, NavigationContent } from "@/lib/sanity/types";

interface FooterProps {
  content?: LayoutContent["footer"] | null;
  navigation?: NavigationContent | null;
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer({ content, navigation }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const navLinks = navigation?.navLinks || [];
  const contactInfo = navigation?.contactInfo;
  const socialLinks = navigation?.socialLinks;
  const whatsappNumber = navigation?.whatsappNumber;
  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`
    : null;

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
              {content?.tagline || "AI-powered lead qualification and booking automation."}
            </p>
            {socialLinks && (
              <div className="flex gap-4">
                {socialLinks.instagram && (
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-900 transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-900 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon />
                  </a>
                )}
                {socialLinks.twitter && (
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-900 transition-colors"
                    aria-label="Twitter"
                  >
                    <TwitterIcon />
                  </a>
                )}
              </div>
            )}
          </div>

          {contactInfo && (
            <div className="flex flex-col items-center md:items-start gap-3">
              <h4 className="font-semibold text-neutral-800">
                {content?.contactSectionTitle || "Contact"}
              </h4>
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
          )}

          {contactInfo?.address && (
            <div className="flex flex-col items-center md:items-start gap-3">
              <h4 className="font-semibold text-neutral-800">
                {content?.locationSectionTitle || "Location"}
              </h4>
              <div className="text-sm text-neutral-500 text-center md:text-left">
                <p>{contactInfo.address.line1}</p>
                <p>{contactInfo.address.line2}</p>
              </div>
            </div>
          )}
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
            {whatsappUrl && (
              <Link
                href={whatsappUrl}
                external
                variant="muted"
                size="sm"
                className="text-neutral-500 hover:text-neutral-900"
              >
                {content?.whatsappLinkText || "WhatsApp"}
              </Link>
            )}
          </nav>
          <p className="text-sm text-neutral-400">
            &copy; {currentYear} {content?.copyrightText || "ConvoFlow. All rights reserved."}
          </p>
        </div>
      </Container>
    </footer>
  );
}
