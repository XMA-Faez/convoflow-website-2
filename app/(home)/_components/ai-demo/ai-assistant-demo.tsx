"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Zap, Phone, Play, X } from "lucide-react";
import Image from "next/image";

interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: string;
  typing?: boolean;
  actions?: Array<{
    type: "book" | "schedule" | "quote" | "phone";
    label: string;
  }>;
  showPhoneInput?: boolean;
}

type ActionType = "book" | "schedule" | "quote" | "phone";

const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/NiZDx1EdWj2vIGRJkg5Z/webhook-trigger/17746e45-e7dd-404d-acae-ec4d71d6f70c";

const mockConversations: Array<{
  user: string;
  ai: string;
  actions: Array<{ type: ActionType; label: string }>;
  showPhoneInput?: boolean;
}> = [
  {
    user: "Hi, I'm getting leads but most of them never respond to my follow-ups",
    ai: "I hear that a lot! Most businesses lose 60-80% of leads to slow or inconsistent follow-up. How quickly are you currently reaching out after a lead comes in?",
    actions: [],
  },
  {
    user: "Usually within a few hours, sometimes the next day if we're busy",
    ai: "That's the gap we fix. Our AI responds in under 60 seconds, 24/7 — and follows up persistently until they book. Would you like to try it right now?",
    actions: [],
  },
  {
    user: "Yes, I'd love to try it!",
    ai: "Great! Can I have your phone number? Sarah will call you in under 60 seconds so you can experience it firsthand.",
    actions: [],
    showPhoneInput: true,
  },
];

function AIMessage({
  message,
  showActions = false,
}: {
  message: ChatMessage;
  showActions?: boolean;
}) {
  const isAI = message.sender === "ai";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-2 sm:gap-3 mb-4 sm:mb-6 ${isAI ? "" : "flex-row-reverse"}`}
    >
      <div
        className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          isAI
            ? "bg-gradient-to-br bg-primary-100 text-white"
            : "bg-gradient-to-br from-neutral-400 to-neutral-500 text-white"
        }`}
      >
        {isAI ? (
          <Image
            src="/icon.png"
            alt="AI"
            width={16}
            height={16}
            className="w-3 h-3 sm:w-4 sm:h-4"
          />
        ) : (
          <User className="w-3 h-3 sm:w-4 sm:h-4" />
        )}
      </div>

      <div className={`flex-1 ${isAI ? "" : "flex flex-col items-end"}`}>
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className={`inline-block max-w-[85%] sm:max-w-sm p-2.5 sm:p-3 rounded-2xl ${
            isAI
              ? "bg-primary-50 text-neutral-900 border border-primary-200 rounded-tl-sm"
              : "bg-neutral-200 border border-neutral-300 rounded-tr-sm"
          }`}
        >
          {message.typing ? (
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5 sm:gap-1">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full animate-bounce" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full animate-bounce [animation-delay:100ms]" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full animate-bounce [animation-delay:200ms]" />
              </div>
              <span className="text-xs sm:text-sm text-primary-600">
                AI thinking...
              </span>
            </div>
          ) : (
            <>
              <p className="text-xs sm:text-sm leading-relaxed">
                {message.text}
              </p>

              {showActions && message.actions && message.actions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2"
                >
                  {message.actions.map((action, index) => (
                    <motion.span
                      key={index}
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-xs font-medium ${
                        action.type === "book"
                          ? "bg-primary-500 text-white"
                          : action.type === "schedule"
                            ? "bg-primary-600 text-white"
                            : action.type === "phone"
                              ? "bg-success-600 text-white"
                              : "bg-success-600 text-white"
                      }`}
                    >
                      {action.type === "book" && "📅 "}
                      {action.type === "schedule" && "⏰ "}
                      {action.type === "phone" && "📞 "}
                      {action.label}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </>
          )}
        </motion.div>

        <div
          className={`text-[10px] sm:text-xs text-neutral-500 mt-0.5 sm:mt-1 ${
            isAI ? "text-left" : "text-right"
          }`}
        >
          {message.timestamp}
          {isAI && (
            <span className="ml-1 sm:ml-2 inline-flex items-center gap-0.5 sm:gap-1">
              <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary-500" />
              <span className="text-primary-500">AI</span>
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function AIAssistantDemo() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [countdown, setCountdown] = useState(60);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\d\s\-+()]{8,}$/;
    return phoneRegex.test(phone);
  };

  const handlePhoneSubmit = async () => {
    if (!phoneNumber.trim()) {
      setPhoneError("Please enter your phone number");
      return;
    }
    if (!validatePhone(phoneNumber)) {
      setPhoneError("Please enter a valid phone number");
      return;
    }

    setIsSubmitting(true);
    setPhoneError("");

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: phoneNumber,
          communicationMode: "call",
          source: "ai-demo",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setIsSuccess(true);
      setCountdown(60);
    } catch {
      setPhoneError("Something went wrong. Please try again.");
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

  const resetDemo = () => {
    setIsChatOpen(false);
    setMessages([]);
    setCurrentStep(0);
    setShowPhoneInput(false);
    setPhoneNumber("");
    setIsSuccess(false);
    setPhoneError("");
    setCountdown(60);
  };

  const openChat = () => {
    setIsChatOpen(true);
  };

  const closeChat = () => {
    resetDemo();
  };

  useEffect(() => {
    if (!isChatOpen) return;

    const playConversation = async () => {
      if (showPhoneInput || isSuccess) return;

      if (currentStep >= mockConversations.length) {
        setTimeout(resetDemo, 8000);
        return;
      }

      const conversation = mockConversations[currentStep];

      const userMessage: ChatMessage = {
        id: `user-${currentStep}`,
        text: conversation.user,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, userMessage]);

      setTimeout(() => {
        const typingMessage: ChatMessage = {
          id: `typing-${currentStep}`,
          text: "",
          sender: "ai",
          timestamp: "",
          typing: true,
        };
        setMessages((prev) => [...prev, typingMessage]);
      }, 1000);

      setTimeout(
        () => {
          setMessages((prev) => prev.filter((msg) => !msg.typing));

          const aiMessage: ChatMessage = {
            id: `ai-${currentStep}`,
            text: conversation.ai,
            sender: "ai",
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            actions: conversation.actions,
            showPhoneInput: conversation.showPhoneInput,
          };

          setMessages((prev) => [...prev, aiMessage]);

          if (conversation.showPhoneInput) {
            setTimeout(() => {
              setShowPhoneInput(true);
              setTimeout(() => phoneInputRef.current?.focus(), 100);
            }, 500);
          }

          setCurrentStep((prev) => prev + 1);
        },
        2500 + Math.random() * 1000,
      );
    };

    const timer = setTimeout(playConversation, currentStep === 0 ? 1000 : 4000);
    return () => clearTimeout(timer);
  }, [currentStep, showPhoneInput, isSuccess, isChatOpen]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {!isChatOpen ? (
          <motion.div
            key="cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center"
          >
            <motion.button
              onClick={openChat}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-500 text-white font-semibold rounded-xl shadow-lg hover:bg-primary-600 transition-colors text-base sm:text-lg"
            >
              <Play className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />
              Try It Now
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="chat"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-neutral-200 rounded-2xl flex flex-col h-[500px] sm:h-[600px]"
          >
            <div className="bg-neutral-50 border-b border-neutral-200 p-3 sm:p-4 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <Image
                      src="/icon.png"
                      alt="BookedByAI"
                      width={20}
                      height={20}
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-semibold text-neutral-900">
                      BookedByAI
                    </h2>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs text-neutral-500">
                        Active 24/7
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeChat}
                  className="p-2 rounded-lg hover:bg-neutral-200 transition-colors"
                >
                  <X className="w-5 h-5 text-neutral-500" />
                </button>
              </div>
            </div>

            <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-3 sm:p-4 bg-neutral-50">
              {messages.map((message) => (
                <AIMessage
                  key={message.id}
                  message={message}
                  showActions={message.sender === "ai" && !message.typing}
                />
              ))}

              <AnimatePresence>
                {showPhoneInput && !isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="mt-4 sm:mt-6"
                  >
                    <div className="bg-white border-2 border-primary-200 rounded-2xl p-4 sm:p-6 shadow-lg">
                      <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary-100 flex items-center justify-center">
                          <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-semibold text-neutral-900">
                            Enter your phone number
                          </h4>
                          <p className="text-xs text-neutral-500">
                            Sarah will call you in under 60 seconds
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <input
                            ref={phoneInputRef}
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => {
                              setPhoneNumber(e.target.value);
                              if (phoneError) setPhoneError("");
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") handlePhoneSubmit();
                            }}
                            placeholder="+971 50 123 4567"
                            disabled={isSubmitting}
                            className={`w-full px-4 py-3 text-base rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                              phoneError
                                ? "border-error-600 focus:ring-error-100"
                                : "border-neutral-200 focus:border-primary-400 focus:ring-primary-200"
                            }`}
                          />
                          {phoneError && (
                            <p className="text-xs text-error-600 mt-1">{phoneError}</p>
                          )}
                        </div>

                        <button
                          onClick={handlePhoneSubmit}
                          disabled={isSubmitting}
                          className="w-full py-3 px-4 rounded-xl bg-primary-500 text-white font-medium text-sm sm:text-base transition-all duration-200 hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
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
                              Requesting call...
                            </>
                          ) : (
                            <>
                              <Phone className="w-4 h-4" />
                              Call Me Now
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-4 sm:mt-6"
                  >
                    <div className="bg-success-50 border-2 border-success-200 rounded-2xl p-4 sm:p-6 text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-success-100 flex items-center justify-center mx-auto mb-3 sm:mb-4"
                      >
                        <svg
                          className="w-7 h-7 sm:w-8 sm:h-8 text-success-600"
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

                      <h4 className="text-base sm:text-lg font-semibold text-neutral-900 mb-1">
                        Sarah is calling you!
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-600 mb-4">
                        Pick up your phone to experience our AI in action
                      </p>

                      <div className="flex flex-col items-center gap-2">
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                          <svg className="w-16 h-16 sm:w-20 sm:h-20 transform -rotate-90">
                            <circle
                              cx="32"
                              cy="32"
                              r="28"
                              fill="none"
                              stroke="oklch(0.925 0.026 54.57)"
                              strokeWidth="4"
                              className="sm:hidden"
                            />
                            <circle
                              cx="40"
                              cy="40"
                              r="36"
                              fill="none"
                              stroke="oklch(0.925 0.026 54.57)"
                              strokeWidth="4"
                              className="hidden sm:block"
                            />
                            <motion.circle
                              cx="32"
                              cy="32"
                              r="28"
                              fill="none"
                              stroke="var(--color-success-600)"
                              strokeWidth="4"
                              strokeLinecap="round"
                              initial={{ pathLength: 1 }}
                              animate={{ pathLength: countdown / 60 }}
                              transition={{ duration: 1, ease: "linear" }}
                              className="sm:hidden"
                            />
                            <motion.circle
                              cx="40"
                              cy="40"
                              r="36"
                              fill="none"
                              stroke="var(--color-success-600)"
                              strokeWidth="4"
                              strokeLinecap="round"
                              initial={{ pathLength: 1 }}
                              animate={{ pathLength: countdown / 60 }}
                              transition={{ duration: 1, ease: "linear" }}
                              className="hidden sm:block"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xl sm:text-2xl font-bold text-success-600">
                              {countdown}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs text-neutral-500">
                          seconds remaining
                        </span>
                      </div>

                      <button
                        onClick={resetDemo}
                        className="mt-4 text-xs sm:text-sm text-neutral-500 hover:text-neutral-700 underline underline-offset-2"
                      >
                        Close
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
