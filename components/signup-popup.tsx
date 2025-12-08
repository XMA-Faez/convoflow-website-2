"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Input } from "@/components/primitives";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "signup_popup_shown";
const SCROLL_THRESHOLD = 0.3;

type CommunicationMode = "call" | "whatsapp" | null;

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  communicationMode: CommunicationMode;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  phone?: string;
  communicationMode?: string;
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

function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function SignupPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    communicationMode: null,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [countdown, setCountdown] = useState(60);

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

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\d\s\-+()]{8,}$/;
    return phoneRegex.test(phone);
  };

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
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.communicationMode) {
      newErrors.communicationMode =
        "Please select how you'd like to be contacted";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSuccess(true);
    setCountdown(60);
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

  const handleModeSelect = (mode: CommunicationMode) => {
    setFormData((prev) => ({ ...prev, communicationMode: mode }));
    if (errors.communicationMode) {
      setErrors((prev) => ({ ...prev, communicationMode: undefined }));
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
                    {formData.communicationMode === "call"
                      ? "Sara will give you a call within:"
                      : "We'll reach out to you on WhatsApp shortly."}
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

                    <Input
                      type="tel"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      error={errors.phone}
                      disabled={isSubmitting}
                    />

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-neutral-700">
                        How would you like us to contact you?
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => handleModeSelect("call")}
                          disabled={isSubmitting}
                          className={cn(
                            "flex items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all duration-200",
                            formData.communicationMode === "call"
                              ? "border-primary-500 bg-primary-50 text-primary-700"
                              : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300",
                          )}
                        >
                          <PhoneIcon className="w-5 h-5" />
                          <span className="text-sm font-medium">
                            Call from Sara
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleModeSelect("whatsapp")}
                          disabled={isSubmitting}
                          className={cn(
                            "flex items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all duration-200",
                            formData.communicationMode === "whatsapp"
                              ? "border-success-600 bg-success-50 text-success-700"
                              : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300",
                          )}
                        >
                          <WhatsAppIcon className="w-5 h-5" />
                          <span className="text-sm font-medium">WhatsApp</span>
                        </button>
                      </div>
                      {errors.communicationMode && (
                        <span className="text-sm text-error-600">
                          {errors.communicationMode}
                        </span>
                      )}
                    </div>

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
