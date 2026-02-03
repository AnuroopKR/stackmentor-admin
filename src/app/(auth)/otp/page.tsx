"use client";

import { useState, useRef } from "react";

export default function OtpPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const inputs = useRef<HTMLInputElement[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && inputs.current[index + 1]) {
      inputs.current[index + 1].focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length !== 6) return;

    setLoading(true);

    // call OTP verification API here
    await new Promise((r) => setTimeout(r, 1000));

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f6fbf7] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10 border border-green-100">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-2">
          OTP Verification
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Enter the 6-digit code sent to your email
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex justify-between gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  if (el) {
                    inputs.current[index] = el;
                  }
                }}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                maxLength={1}
                className="
                  w-12 h-14 text-xl text-center
                  rounded-xl border border-green-200
                  focus:outline-none focus:ring-4 focus:ring-green-200
                  transition
                "
              />
            ))}
          </div>

          <button
            disabled={loading}
            className="
              w-full h-14 rounded-xl text-lg font-semibold
              bg-green-600 text-white
              hover:bg-green-700
              active:scale-[0.98]
              transition
              disabled:opacity-50
            "
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Didn’t receive the code?{" "}
          <button className="text-green-600 font-medium">Resend OTP</button>
        </p>
      </div>
    </div>
  );
}
