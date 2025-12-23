"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Input, PhoneInput } from "@/components/primitives";
import { fadeInUp } from "@/lib/animations";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  language: "en" | "ar";
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  phone?: string;
}

const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/NiZDx1EdWj2vIGRJkg5Z/webhook-trigger/17746e45-e7dd-404d-acae-ec4d71d6f70c";


export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    language: "en",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(60);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [phoneValidationError, setPhoneValidationError] = useState<string>();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!isPhoneValid) {
      newErrors.phone = phoneValidationError || "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handlePhoneChange = (fullNumber: string, isValid: boolean, validationError?: string) => {
    setFormData((prev) => ({ ...prev, phone: fullNumber }));
    setIsPhoneValid(isValid);
    setPhoneValidationError(validationError);
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          language: formData.language,
          communicationMode: "call",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSuccess(true);
      setCountdown(60);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!isSuccess) return;

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [isSuccess]);

  const handleReset = () => {
    setIsSuccess(false);
    setSubmitError(null);
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      language: "en",
    });
    setIsPhoneValid(false);
    setPhoneValidationError(undefined);
    setCountdown(60);
  };

  return (
    <AnimatePresence mode="wait">
      {isSuccess ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="text-center py-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 rounded-full bg-success-100 flex items-center justify-center mx-auto mb-6"
          >
            <svg
              className="w-10 h-10 text-success-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>
          <h3 className="text-2xl font-bold text-neutral-900 mb-2">
            Thank You, {formData.firstName}!
          </h3>
          <p className="text-neutral-600 mb-4">
            Sara will give you a call within:
          </p>
          <div className="flex flex-col items-center gap-2 mb-6">
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20 transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    fill="none"
                    stroke="oklch(0.925 0.026 54.57)"
                    strokeWidth="4"
                  />
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="36"
                    fill="none"
                    stroke="var(--color-primary-200)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 1 }}
                    animate={{ pathLength: countdown / 60 }}
                    transition={{ duration: 1, ease: "linear" }}
                    style={{
                      strokeDasharray: "226.19",
                      strokeDashoffset: 0,
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-600">
                    {countdown}
                  </span>
                </div>
              </div>
            </div>
          <Button intent="secondary" onClick={handleReset}>
            Send Another Message
          </Button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp}>
              <Input
                name="firstName"
                label="First Name"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                error={errors.firstName}
                disabled={isSubmitting}
                required
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Input
                name="lastName"
                label="Last Name"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                error={errors.lastName}
                disabled={isSubmitting}
                required
              />
            </motion.div>
          </div>

          <motion.div variants={fadeInUp}>
            <PhoneInput
              name="phone"
              label="Phone Number"
              onChange={handlePhoneChange}
              error={errors.phone}
              disabled={isSubmitting}
              required
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <label
              htmlFor="language"
              className="block text-sm font-medium text-neutral-700 mb-2"
            >
              Preferred Language
            </label>
            <select
              id="language"
              value={formData.language}
              onChange={(e) =>
                handleInputChange("language", e.target.value as "en" | "ar")
              }
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 bg-white text-neutral-900 transition-all duration-200 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-200 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="en">English</option>
              <option value="ar">Arabic</option>
            </select>
          </motion.div>

          {submitError && (
            <motion.div
              variants={fadeInUp}
              className="p-3 rounded-lg bg-error-50 border border-error-100"
            >
              <p className="text-sm text-error-600 text-center">{submitError}</p>
            </motion.div>
          )}

          <motion.div variants={fadeInUp}>
            <Button
              type="submit"
              size="lg"
              fullWidth
              disabled={isSubmitting}
              className="relative"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Book a 30 Min Audit Call"
              )}
            </Button>
          </motion.div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
