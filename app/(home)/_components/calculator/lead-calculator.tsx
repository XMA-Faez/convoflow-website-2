"use client";

import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Users,
  MessageCircle,
  ArrowRight,
  Info,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/primitives";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import { useSignupPopup } from "@/lib/signup-popup-context";
import type { CalculatorContent } from "@/lib/sanity/types";

interface LeadCalculatorProps {
  content: CalculatorContent | null;
}

const defaults = {
  sectionTitle: "Calculate Your",
  titleHighlight: "Revenue Impact",
  description: "See exactly how much additional revenue our system could generate for your UAE business",
  inputsHeading: "Your Current Metrics",
  resultsHeading: "Your ROI Projection",
  inputFields: {
    leads: { label: "Leads per Month", suffix: "leads", tooltip: "Average number of leads you receive monthly" },
    conversionRate: { label: "Current Conversion Rate", suffix: "%", tooltip: "Percentage of leads that become paying customers" },
    averageValue: { label: "Average Customer Value", suffix: "AED", tooltip: "Average revenue per customer or project" },
    responseTime: { label: "Average Response Time", suffix: "hours", tooltip: "How long it takes to respond to new leads" },
  },
  resultLabels: {
    additionalRevenue: "Additional Monthly Revenue",
    annualSuffix: "/ year",
    leadsRecovered: "Leads Recovered",
    timeSaved: "Time Saved",
    revenueComparison: "Revenue Comparison",
    currentRevenue: "Current Revenue",
    withOurSystem: "With Our System",
    increase: "Increase",
  },
  placeholderText: 'Adjust your metrics and click "Calculate My ROI" to see your potential revenue increase',
  calculateButtonText: "Calculate My ROI",
  calculatingText: "Calculating ROI...",
  showDetailsText: "Show calculation details",
  hideDetailsText: "Hide calculation details",
  assumptions: [
    "60% improvement in conversion rate with AI chatbot",
    "15-25% more leads captured with faster response times",
    "50% reduction in manual response time",
    "Based on industry averages for UAE service businesses",
  ],
  ctaText: "Get Started Now",
  validationErrors: {
    leadCount: "Lead count must be between 5 and 500",
    conversionRate: "Conversion rate must be between 5% and 50%",
    averageValue: "Average value must be between 100 and 10,000 AED",
    responseTime: "Response time must be between 0.5 and 24 hours",
    genericError: "An error occurred during calculation. Please try again.",
    fixIssues: "Please fix the following issues:",
  },
};

const sanitizeNumericInput = (
  value: number,
  min: number,
  max: number
): number => {
  if (isNaN(value) || !isFinite(value)) return min;
  return Math.max(min, Math.min(max, value));
};

interface ROIMetrics {
  currentLeads: number;
  conversionRate: number;
  averageValue: number;
  responseTime: number;
}

interface ROIResults {
  monthlyRevenue: number;
  improvedRevenue: number;
  additionalRevenue: number;
  annualIncrease: number;
  timesSaved: number;
  leadsRecovered: number;
}

function LeadCostCalculator({ content }: LeadCalculatorProps) {
  const { openPopup } = useSignupPopup();
  const c = content || defaults;
  const inputFields = c.inputFields || defaults.inputFields;
  const resultLabels = c.resultLabels || defaults.resultLabels;
  const validationErrors = c.validationErrors || defaults.validationErrors;
  const assumptions = c.assumptions || defaults.assumptions;

  const [metrics, setMetrics] = useState<ROIMetrics>({
    currentLeads: 50,
    conversionRate: 15,
    averageValue: 500,
    responseTime: 4,
  });

  const [results, setResults] = useState<ROIResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const validateROIMetrics = useCallback(
    (m: ROIMetrics): { isValid: boolean; errors: string[] } => {
      const errs: string[] = [];

      if (m.currentLeads < 5 || m.currentLeads > 500) {
        errs.push(validationErrors.leadCount);
      }

      if (m.conversionRate < 5 || m.conversionRate > 50) {
        errs.push(validationErrors.conversionRate);
      }

      if (m.averageValue < 100 || m.averageValue > 10000) {
        errs.push(validationErrors.averageValue);
      }

      if (m.responseTime < 0.5 || m.responseTime > 24) {
        errs.push(validationErrors.responseTime);
      }

      return { isValid: errs.length === 0, errors: errs };
    },
    [validationErrors]
  );

  const validation = useMemo(() => validateROIMetrics(metrics), [metrics, validateROIMetrics]);

  const calculateROI = useCallback(() => {
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors([]);
    setIsCalculating(true);

    setTimeout(() => {
      try {
        const sanitizedMetrics = {
          currentLeads: sanitizeNumericInput(metrics.currentLeads, 5, 500),
          conversionRate: sanitizeNumericInput(metrics.conversionRate, 5, 50),
          averageValue: sanitizeNumericInput(metrics.averageValue, 100, 10000),
          responseTime: sanitizeNumericInput(metrics.responseTime, 0.5, 24),
        };

        const currentMonthlyRevenue =
          sanitizedMetrics.currentLeads *
          (sanitizedMetrics.conversionRate / 100) *
          sanitizedMetrics.averageValue;

        const improvedConversionRate = Math.min(
          sanitizedMetrics.conversionRate * 1.6,
          45
        );
        const additionalLeads =
          sanitizedMetrics.responseTime > 2
            ? sanitizedMetrics.currentLeads * 0.25
            : sanitizedMetrics.currentLeads * 0.15;
        const totalImprovedLeads =
          sanitizedMetrics.currentLeads + additionalLeads;

        const improvedMonthlyRevenue =
          totalImprovedLeads *
          (improvedConversionRate / 100) *
          sanitizedMetrics.averageValue;
        const additionalRevenue =
          improvedMonthlyRevenue - currentMonthlyRevenue;
        const annualIncrease = additionalRevenue * 12;

        const timesSaved =
          sanitizedMetrics.currentLeads *
          (sanitizedMetrics.responseTime * 0.5) *
          4;
        const leadsRecovered = Math.floor(additionalLeads);

        setResults({
          monthlyRevenue: currentMonthlyRevenue,
          improvedRevenue: improvedMonthlyRevenue,
          additionalRevenue,
          annualIncrease,
          timesSaved,
          leadsRecovered,
        });
      } catch (error) {
        console.error("ROI calculation error:", error);
        setErrors([validationErrors.genericError]);
      } finally {
        setIsCalculating(false);
      }
    }, 1500);
  }, [metrics, validation, validationErrors.genericError]);

  const handleInputChange = useCallback(
    (field: keyof ROIMetrics, value: number) => {
      setMetrics((prev) => ({ ...prev, [field]: value }));
      setResults(null);
      setErrors([]);
    },
    []
  );

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-AE", {
      style: "currency",
      currency: "AED",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const fieldConfigs = [
    {
      key: "currentLeads" as keyof ROIMetrics,
      config: inputFields.leads,
      min: 5,
      max: 500,
      step: 5,
      icon: <Users className="w-4 h-4" />,
    },
    {
      key: "conversionRate" as keyof ROIMetrics,
      config: inputFields.conversionRate,
      min: 5,
      max: 50,
      step: 1,
      icon: <TrendingUp className="w-4 h-4" />,
    },
    {
      key: "averageValue" as keyof ROIMetrics,
      config: inputFields.averageValue,
      min: 100,
      max: 10000,
      step: 50,
      icon: <DollarSign className="w-4 h-4" />,
    },
    {
      key: "responseTime" as keyof ROIMetrics,
      config: inputFields.responseTime,
      min: 0.5,
      max: 24,
      step: 0.5,
      icon: <MessageCircle className="w-4 h-4" />,
    },
  ];

  return (
    <Section id="calculator" background="default">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-neutral-900"
          >
            {c.sectionTitle || defaults.sectionTitle}
            {(c.titleHighlight || defaults.titleHighlight) && (
              <span className="text-primary-500"> {c.titleHighlight || defaults.titleHighlight}</span>
            )}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            {c.description || defaults.description}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="space-y-6"
          >
            <h3
              className="text-2xl font-bold mb-6 text-neutral-900"
              id="roi-inputs-heading"
            >
              {c.inputsHeading || defaults.inputsHeading}
            </h3>

            {errors.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-error-100 border border-error-600/20 rounded-xl"
                role="alert"
                aria-live="polite"
              >
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-error-600" />
                  <h4 className="text-error-600 font-semibold">
                    {validationErrors.fixIssues}
                  </h4>
                </div>
                <ul className="text-error-600 text-sm space-y-1">
                  {errors.map((error, index) => (
                    <li key={index}>• {error}</li>
                  ))}
                </ul>
              </motion.div>
            )}

            {fieldConfigs.map((field, index) => (
              <motion.div
                key={field.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-primary-500" aria-hidden="true">
                      {field.icon}
                    </span>
                    <label
                      htmlFor={`roi-input-${field.key}`}
                      className="font-medium text-neutral-700"
                    >
                      {field.config?.label || defaults.inputFields[field.key === "currentLeads" ? "leads" : field.key]?.label}
                    </label>
                    <div className="group relative">
                      <button
                        type="button"
                        className="text-neutral-500 hover:text-neutral-700 focus:outline-none focus:text-neutral-700"
                        aria-label={`More information about ${field.config?.label}`}
                      >
                        <Info className="w-4 h-4" />
                      </button>
                      <div
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-white border border-neutral-200 rounded-lg text-sm text-neutral-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 w-64 z-10 shadow-lg"
                        role="tooltip"
                      >
                        {field.config?.tooltip}
                      </div>
                    </div>
                  </div>
                  <span
                    className="text-neutral-900 font-bold"
                    aria-live="polite"
                  >
                    {metrics[field.key]}
                    {field.config?.suffix}
                  </span>
                </div>

                <div className="relative">
                  <input
                    id={`roi-input-${field.key}`}
                    type="range"
                    min={field.min}
                    max={field.max}
                    step={field.step}
                    value={metrics[field.key]}
                    onChange={(e) =>
                      handleInputChange(field.key, parseFloat(e.target.value))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                        e.preventDefault();
                        const increment =
                          e.key === "ArrowRight" ? field.step : -field.step;
                        const newValue = metrics[field.key] + increment;
                        handleInputChange(field.key, newValue);
                      }
                    }}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer slider focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white roi-slider"
                    aria-describedby={`roi-input-${field.key}-desc`}
                    aria-valuemin={field.min}
                    aria-valuemax={field.max}
                    aria-valuenow={metrics[field.key]}
                    aria-valuetext={`${metrics[field.key]} ${field.config?.suffix}`}
                    style={
                      {
                        "--progress": `${((metrics[field.key] - field.min) / (field.max - field.min)) * 100}%`,
                      } as React.CSSProperties
                    }
                  />
                  <style jsx>{`
                    .roi-slider {
                      background: linear-gradient(
                        to right,
                        var(--color-primary-300) 0%,
                        var(--color-primary-300) var(--progress),
                        var(--color-primary-100) var(--progress),
                        var(--color-primary-100) 100%
                      );
                    }

                    .roi-slider::-webkit-slider-runnable-track {
                      background: transparent;
                    }

                    .roi-slider::-moz-range-track {
                      background: transparent;
                    }

                    .slider::-webkit-slider-thumb {
                      -webkit-appearance: none;
                      appearance: none;
                      height: 18px;
                      width: 18px;
                      border-radius: 50%;
                      background: var(--color-neutral-50);
                      border: 3px solid var(--color-primary-400);
                      cursor: pointer;
                      box-shadow: 0 2px 6px var(--color-primary-500 / 0.2);
                      transition: transform 0.15s ease, box-shadow 0.15s ease;
                    }
                    .slider::-webkit-slider-thumb:hover {
                      transform: scale(1.1);
                      box-shadow: 0 3px 8px var(--color-primary-500 / 0.3);
                    }
                    .slider::-moz-range-thumb {
                      height: 18px;
                      width: 18px;
                      border-radius: 50%;
                      background: var(--color-neutral-50);
                      border: 3px solid var(--color-primary-400);
                      cursor: pointer;
                      box-shadow: 0 2px 6px var(--color-primary-500 / 0.2);
                    }
                  `}</style>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <Button
                onClick={calculateROI}
                intent="secondary"
                disabled={isCalculating || !validation.isValid}
                fullWidth
                size="lg"
                aria-describedby={
                  errors.length > 0 ? "validation-errors" : undefined
                }
              >
                {isCalculating ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {c.calculatingText || defaults.calculatingText}
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    {c.calculateButtonText || defaults.calculateButtonText}
                  </div>
                )}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="relative"
          >
            <div className="lg:sticky lg:top-8">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">
                {c.resultsHeading || defaults.resultsHeading}
              </h3>

              <AnimatePresence mode="wait">
                {!results ? (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 rounded-3xl bg-neutral-50 border-2 border-dashed border-neutral-300 text-center"
                  >
                    <Calculator className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                    <p className="text-neutral-500">
                      {c.placeholderText || defaults.placeholderText}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    <div className="p-6 rounded-3xl bg-gradient-to-br from-primary-500/20 to-primary-400/10 backdrop-blur-xl border border-primary-500/20">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary-500 mb-2">
                          {formatCurrency(results.additionalRevenue)}
                        </div>
                        <div className="text-neutral-600 mb-4">
                          {resultLabels.additionalRevenue}
                        </div>
                        <div className="text-2xl font-semibold text-success-600">
                          {formatCurrency(results.annualIncrease)} {resultLabels.annualSuffix}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-white border border-neutral-200 text-center">
                        <div className="text-2xl font-bold text-primary-500">
                          +{results.leadsRecovered}
                        </div>
                        <div className="text-sm text-neutral-500">
                          {resultLabels.leadsRecovered}
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-white border border-neutral-200 text-center">
                        <div className="text-2xl font-bold text-primary-500">
                          {Math.round(results.timesSaved)}h
                        </div>
                        <div className="text-sm text-neutral-500">
                          {resultLabels.timeSaved}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-white border border-neutral-200">
                      <h4 className="font-semibold mb-4 flex items-center gap-2 text-neutral-900">
                        <TrendingUp className="w-5 h-5 text-primary-500" />
                        {resultLabels.revenueComparison}
                      </h4>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-neutral-500">
                            {resultLabels.currentRevenue}
                          </span>
                          <span className="font-semibold text-neutral-900">
                            {formatCurrency(results.monthlyRevenue)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-neutral-500">
                            {resultLabels.withOurSystem}
                          </span>
                          <span className="font-semibold text-primary-500">
                            {formatCurrency(results.improvedRevenue)}
                          </span>
                        </div>
                        <div className="h-px bg-neutral-200 my-2" />
                        <div className="flex justify-between items-center text-lg">
                          <span className="text-success-600 font-semibold">
                            {resultLabels.increase}
                          </span>
                          <span className="font-bold text-success-600">
                            +
                            {Math.round(
                              ((results.improvedRevenue -
                                results.monthlyRevenue) /
                                results.monthlyRevenue) *
                                100
                            )}
                            %
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-center pt-4">
                      <button
                        onClick={() => setShowDetails(!showDetails)}
                        className="text-primary-500 hover:text-primary-400 text-sm mb-4 flex items-center gap-1 mx-auto"
                      >
                        {showDetails
                          ? c.hideDetailsText || defaults.hideDetailsText
                          : c.showDetailsText || defaults.showDetailsText}
                        <ArrowRight
                          className={`w-4 h-4 transition-transform ${showDetails ? "rotate-90" : ""}`}
                        />
                      </button>

                      <AnimatePresence>
                        {showDetails && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-xs text-neutral-600 bg-neutral-100 p-4 rounded-lg mb-4 text-left"
                          >
                            <p className="mb-2">
                              <strong>Assumptions:</strong>
                            </p>
                            {assumptions.map((assumption, index) => (
                              <p key={index}>• {assumption}</p>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <Button size="lg" fullWidth onClick={openPopup}>
                        <div className="flex items-center gap-2">
                          {c.ctaText || defaults.ctaText}
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

export default LeadCostCalculator;
