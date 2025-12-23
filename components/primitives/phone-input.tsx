"use client";

import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import {
  countryCodes,
  defaultCountry,
  validatePhoneWithMessage,
  stripLeadingZero,
  type CountryCode,
} from "@/data/country-codes";

const phoneInputVariants = cva(
  "w-full rounded-xl border bg-white text-base transition-all duration-200 placeholder:text-neutral-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-1",
  {
    variants: {
      state: {
        default:
          "border-neutral-200 focus-within:border-primary-400 focus-within:ring-primary-200",
        error: "border-error-600 focus-within:border-error-600 focus-within:ring-error-100",
        success:
          "border-success-600 focus-within:border-success-600 focus-within:ring-success-100",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);

export interface PhoneInputProps extends VariantProps<typeof phoneInputVariants> {
  label?: string;
  error?: string;
  value?: string;
  defaultCountryIso?: string;
  onChange?: (fullNumber: string, isValid: boolean, validationError?: string) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  className?: string;
  placeholder?: string;
}

export interface PhoneInputRef {
  focus: () => void;
  getValue: () => string;
  isValid: () => boolean;
}

export const PhoneInput = forwardRef<PhoneInputRef, PhoneInputProps>(
  (
    {
      label,
      error,
      state,
      value,
      defaultCountryIso = "AE",
      onChange,
      disabled,
      required,
      name,
      className,
      placeholder = "50 123 4567",
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<CountryCode>(
      countryCodes.find((c) => c.iso === defaultCountryIso) || defaultCountry
    );
    const [phoneNumber, setPhoneNumber] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const effectiveState = error ? "error" : state;

    useEffect(() => {
      if (value) {
        const country = countryCodes.find((c) => value.startsWith(c.dialCode));
        if (country) {
          setSelectedCountry(country);
          setPhoneNumber(value.replace(country.dialCode, "").trim());
        } else {
          setPhoneNumber(value);
        }
      }
    }, [value]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const getFullNumber = () => {
      const normalized = stripLeadingZero(phoneNumber);
      return normalized ? `${selectedCountry.dialCode}${normalized}` : "";
    };

    const checkIsValid = () => {
      if (!phoneNumber.trim()) return false;
      return validatePhoneWithMessage(phoneNumber, selectedCountry).isValid;
    };

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      getValue: getFullNumber,
      isValid: checkIsValid,
    }));

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value;
      const digitsOnly = input.replace(/\D/g, "");
      setPhoneNumber(digitsOnly);

      const normalized = stripLeadingZero(digitsOnly);
      const fullNumber = normalized ? `${selectedCountry.dialCode}${normalized}` : "";
      const validation = validatePhoneWithMessage(digitsOnly, selectedCountry);
      onChange?.(fullNumber, validation.isValid, validation.error);
    };

    const handleCountrySelect = (country: CountryCode) => {
      setSelectedCountry(country);
      setIsOpen(false);
      inputRef.current?.focus();

      const normalized = stripLeadingZero(phoneNumber);
      const fullNumber = normalized ? `${country.dialCode}${normalized}` : "";
      const validation = phoneNumber
        ? validatePhoneWithMessage(phoneNumber, country)
        : { isValid: false, error: "Phone number is required" };
      onChange?.(fullNumber, validation.isValid, validation.error);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    return (
      <div className={cn("flex flex-col gap-1.5", className)}>
        {label && (
          <label htmlFor={name} className="text-sm font-medium text-neutral-700">
            {label}
            {required && <span className="text-error-600 ml-0.5">*</span>}
          </label>
        )}

        <div
          className={cn(phoneInputVariants({ state: effectiveState }), "flex items-stretch relative")}
          ref={dropdownRef}
        >
          <button
            ref={buttonRef}
            type="button"
            onClick={() => !disabled && setIsOpen(!isOpen)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            className="flex items-center gap-1 px-3 py-3 border-r border-neutral-200 bg-neutral-50 rounded-l-xl hover:bg-neutral-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-lg leading-none">{selectedCountry.flag}</span>
            <span className="text-sm font-medium text-neutral-700">{selectedCountry.dialCode}</span>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-neutral-500 transition-transform",
                isOpen && "rotate-180"
              )}
            />
          </button>

          <input
            ref={inputRef}
            type="tel"
            id={name}
            name={name}
            value={phoneNumber}
            onChange={handlePhoneChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={disabled}
            className="flex-1 px-3 py-3 bg-transparent border-none outline-none text-neutral-900 placeholder:text-neutral-400 disabled:opacity-50 disabled:cursor-not-allowed rounded-r-xl"
          />

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-neutral-200 rounded-xl shadow-lg z-50 max-h-64 overflow-y-auto">
              {countryCodes.map((country) => (
                <button
                  key={country.iso}
                  type="button"
                  onClick={() => handleCountrySelect(country)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-2.5 hover:bg-neutral-50 transition-colors text-left",
                    country.iso === selectedCountry.iso && "bg-primary-50"
                  )}
                >
                  <span className="text-lg">{country.flag}</span>
                  <span className="flex-1 text-sm text-neutral-900">{country.name}</span>
                  <span className="text-sm text-neutral-500">{country.dialCode}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {error && <span className="text-sm text-error-600">{error}</span>}
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";

export { phoneInputVariants };
