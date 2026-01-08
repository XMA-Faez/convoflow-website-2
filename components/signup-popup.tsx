"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Input, PhoneInput } from "@/components/primitives";
import { cn } from "@/lib/utils";
import { submitLead } from "@/lib/leads";

const STORAGE_KEY = "signup_popup_shown";
const SCROLL_THRESHOLD = 0.3;

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  phone?: string;
}

function CloseIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export function SignupPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(60);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [phoneValidationError, setPhoneValidationError] = useState<string>();

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem(STORAGE_KEY);
    if (hasSeenPopup) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollPercentage =
        scrollPosition / (documentHeight - viewportHeight);

      if (scrollPercentage >= SCROLL_THRESHOLD && !isVisible) {
        setIsVisible(true);
        sessionStorage.setItem(STORAGE_KEY, "true");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

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

    const result = await submitLead({
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      source: "popup",
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      setCountdown(60);
    } else {
      setSubmitError(result.error || "Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    if (!isSuccess) return;

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          setIsVisible(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [isSuccess]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };


  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/50 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn(
              "relative w-full max-w-md bg-white rounded-2xl shadow-2xl",
              "border border-neutral-100 p-6 md:p-8",
            )}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1 text-neutral-400 hover:text-neutral-600 transition-colors"
              aria-label="Close popup"
            >
              <CloseIcon />
            </button>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center text-center py-4"
                >
                  <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-success-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Thank You, {formData.firstName}!
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    Sara will give you a call within:
                  </p>
                  <div className="flex flex-col items-center gap-2">
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
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-2">
                      Let&apos;s Get You Started
                    </h3>
                    <p className="text-neutral-600 text-sm md:text-base">
                      Fill in your details and we&apos;ll reach out to show you
                      how we can help.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <Input
                        type="text"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        error={errors.firstName}
                        disabled={isSubmitting}
                      />
                      <Input
                        type="text"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        error={errors.lastName}
                        disabled={isSubmitting}
                      />
                    </div>

                    <PhoneInput
                      placeholder="50 123 4567"
                      onChange={handlePhoneChange}
                      error={errors.phone}
                      disabled={isSubmitting}
                    />

                    {submitError && (
                      <div className="p-3 rounded-lg bg-error-50 border border-error-100">
                        <p className="text-sm text-error-600 text-center">{submitError}</p>
                      </div>
                    )}

                    <Button type="submit" fullWidth disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg
                            className="animate-spin h-4 w-4"
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
                        "Get Started"
                      )}
                    </Button>
                  </form>

                  <p className="text-xs text-neutral-400 text-center mt-4">
                    We respect your privacy and will never share your
                    information.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
