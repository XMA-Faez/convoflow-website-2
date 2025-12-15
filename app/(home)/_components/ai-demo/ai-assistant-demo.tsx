"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { User, Zap } from "lucide-react";
import Image from "next/image";

interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: string;
  typing?: boolean;
  actions?: Array<{
    type: "book" | "schedule" | "quote";
    label: string;
  }>;
}

const mockConversations = [
  {
    user: "Hi, I'm getting leads but most of them never respond to my follow-ups",
    ai: "I hear that a lot! Most businesses lose 60-80% of leads to slow or inconsistent follow-up. How quickly are you currently reaching out after a lead comes in?",
    actions: [],
  },
  {
    user: "Usually within a few hours, sometimes the next day if we're busy",
    ai: "That's the gap we fix. Our AI responds in under 60 seconds, 24/7 — and follows up persistently until they book. Want to see how it would work with your leads?",
    actions: [{ type: "book", label: "See Demo" }],
  },
  {
    user: "Yes, that sounds interesting. What industries do you work with?",
    ai: "We specialize in high-ticket services — real estate, automotive, clinics, spas, and aviation. I can show you case studies from your industry. Want me to book a 30-min audit call?",
    actions: [{ type: "schedule", label: "Book Call" }],
  },
  {
    user: "Sure, I'm free Thursday afternoon",
    ai: "Perfect! I've got Thursday at 2:00 PM available. I'll send a calendar invite with a Zoom link. You'll see exactly how we'd turn your cold leads into qualified conversations.",
    actions: [{ type: "schedule", label: "Confirmed" }],
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
                            : "bg-success-600 text-white"
                      }`}
                    >
                      {action.type === "book" && "📅 "}
                      {action.type === "schedule" && "⏰ "}
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
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const playConversation = async () => {
      if (currentStep >= mockConversations.length) {
        setTimeout(() => {
          setMessages([]);
          setCurrentStep(0);
        }, 4000);
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
          };

          setMessages((prev) => [...prev, aiMessage]);
          setCurrentStep((prev) => prev + 1);
        },
        2500 + Math.random() * 1000,
      );
    };

    const timer = setTimeout(playConversation, currentStep === 0 ? 1000 : 4000);
    return () => clearTimeout(timer);
  }, [currentStep]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full h-screen bg-white border border-neutral-200 flex flex-col overflow-hidden rounded-xl">
      <div className="bg-linear-to-r from-primary-500 to-primary-600 text-white p-3 sm:p-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary-100 text-white flex items-center justify-center">
            <Image
              src="/icon.png"
              alt="BookedByAI"
              width={20}
              height={20}
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-semibold">BookedByAI</h2>
            <div className="flex items-center gap-1.5 sm:gap-2 text-primary-100">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm">Active 24/7</span>
            </div>
          </div>
        </div>
      </div>

      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-3 sm:p-4 bg-neutral-50">
        {messages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8 sm:py-12"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-full bg-primary-100 flex items-center justify-center">
              <Image
                src="/icon.png"
                alt="AI"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-neutral-900 mb-1.5 sm:mb-2">
              AI Assistant Ready
            </h3>
            <p className="text-neutral-600 text-xs sm:text-sm px-4">
              Watch how our AI qualifies leads and books appointments
              automatically
            </p>
          </motion.div>
        )}

        {messages.map((message) => (
          <AIMessage
            key={message.id}
            message={message}
            showActions={message.sender === "ai" && !message.typing}
          />
        ))}
      </div>
    </div>
  );
}
