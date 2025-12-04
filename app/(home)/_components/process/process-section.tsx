"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { processSteps } from "@/data/process-steps";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="how-we-work" className="relative py-24 px-4 overflow-x-hidden">
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-neutral-900">
            Your BookedByAI System, Installed in 7 Days
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            From first call to an AI engine that turns cold leads into qualified conversations on autopilot.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-primary-400 to-transparent hidden lg:block" />

          <div className="space-y-4 lg:space-y-0">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="w-full lg:w-1/2 px-2 sm:px-4 py-2 lg:py-3">
                    <motion.div
                      onClick={() => setActiveStep(activeStep === index ? null : index)}
                      className={`cursor-pointer relative p-4 sm:p-6 rounded-2xl transition-all duration-300 bg-white border ${
                        activeStep === index
                          ? "border-primary-300 shadow-lg shadow-primary-200/50 bg-primary-50/50"
                          : "border-neutral-200 hover:border-primary-200 hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">
                            Step {step.number}
                          </span>
                          <h3 className="text-xl font-bold text-neutral-900 mt-1">
                            {step.title}
                          </h3>
                          {step.subtitle && (
                            <p className="text-primary-600 font-medium mt-1">
                              {step.subtitle}
                            </p>
                          )}
                        </div>
                        <div className="rounded-full bg-primary-100 p-3">
                          <Icon className="h-5 w-5 text-primary-600" />
                        </div>
                      </div>

                      <p className="text-neutral-600 mb-4">{step.body}</p>

                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: activeStep === index ? "auto" : 0,
                          opacity: activeStep === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        {step.bullets && step.bullets.length > 0 && (
                          <div className="pt-4 border-t border-neutral-100">
                            <h5 className="text-sm font-semibold text-neutral-900 mb-3">Key Activities:</h5>
                            <ul className="space-y-2">
                              {step.bullets.map((bullet, i) => (
                                <li key={i} className="text-sm text-neutral-600 flex items-center rounded-xl p-2 hover:bg-primary-50 transition-all duration-300">
                                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="mt-4 pt-4 border-t border-neutral-100">
                          <p className="text-sm text-primary-700 bg-primary-50 px-4 py-3 rounded-lg font-medium">
                            {step.output}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        activeStep === index
                          ? "bg-primary-500 border-primary-400 text-white shadow-lg shadow-primary-500/50"
                          : "bg-white border-primary-300 text-primary-600"
                      }`}
                    >
                      {step.number}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-neutral-600 mb-6">
            Ready to start your journey with us?
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors duration-300"
          >
            Book Your Demo Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
