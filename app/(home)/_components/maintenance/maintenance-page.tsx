import { Wrench } from "lucide-react";
import { contactInfo } from "@/data/navigation";

const whatsappUrl = `https://wa.me/${contactInfo.phone.replace(/\s/g, "")}`;

export function MaintenancePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-background">
      <div className="max-w-xl text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 mb-8">
          <Wrench className="w-10 h-10 text-primary-600" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Under Maintenance
        </h1>

        <p className="text-lg text-neutral-600 mb-8">
          We&apos;re making some improvements to serve you better. Our website
          will be back online shortly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            Message Us on WhatsApp
          </a>
        </div>

        <p className="text-sm text-neutral-500 mt-12">
          Thank you for your patience.
        </p>
      </div>
    </div>
  );
}
