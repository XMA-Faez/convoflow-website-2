"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Client } from "@/data/clients";
import { scaleIn } from "@/lib/animations";

interface ClientLogoCardProps {
  client: Client;
  index: number;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function ClientLogoCard({ client, index }: ClientLogoCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.a
      href={client.website}
      target="_blank"
      rel="noopener noreferrer"
      variants={scaleIn}
      custom={index}
      className="group relative aspect-[4/3] sm:aspect-3/2 bg-white rounded-xl border border-neutral-200
                 flex items-center justify-center p-4 sm:p-6
                 hover:border-primary-300 hover:shadow-lg
                 transition-[border-color,box-shadow] duration-300 cursor-pointer"
      aria-label={`Visit ${client.name} website`}
    >
      {!isLoaded && !imageError && (
        <div className="absolute inset-3 sm:inset-4 bg-neutral-100 animate-pulse rounded-lg" />
      )}

      <div className="flex flex-col items-center gap-2 sm:gap-3 w-full h-full">
        {!imageError ? (
          <div className="relative w-full flex-1 min-h-[60px] sm:min-h-0">
            <Image
              src={client.logo}
              alt={`${client.name} logo`}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
              className="object-contain"
              onLoad={() => setIsLoaded(true)}
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-bold text-neutral-300
                            group-hover:text-primary-500 transition-colors duration-300">
              {getInitials(client.name)}
            </span>
          </div>
        )}
        <span className="text-xs sm:text-sm text-neutral-600 text-center font-medium leading-tight">
          {client.name}
        </span>
      </div>
    </motion.a>
  );
}
