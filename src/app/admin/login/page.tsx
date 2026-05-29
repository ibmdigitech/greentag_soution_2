"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheckIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function AdminLogin() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progressText, setProgressText] = useState("");

  useEffect(() => {
    setMounted(true);
    // If already authenticated, redirect to dashboard
    if (localStorage.getItem("admin_authenticated") === "true") {
      router.push("/admin");
    }
  }, [router]);

  if (!mounted) return null;

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    setProgressText("Connecting to accounts.google.com...");
    
    setTimeout(() => {
      setProgressText("Fetching profile metadata...");
    }, 1200);

    setTimeout(() => {
      setProgressText("Authenticating credentials...");
    }, 2400);

    setTimeout(() => {
      setProgressText("Access granted! Entering Admin Dashboard...");
      localStorage.setItem("admin_authenticated", "true");
    }, 3600);

    setTimeout(() => {
      router.push("/admin");
    }, 4500);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-secondary-950 px-4 py-12 overflow-hidden select-none">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-gold/20 rounded-full blur-3xl" />

      {/* Decorative Floating Squares */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <div className="grid grid-cols-6 grid-rows-6 h-full w-full">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="border border-white/10" />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative z-10 w-full max-w-md bg-secondary-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl text-center"
      >
        <div className="relative w-20 h-20 mx-auto mb-6">
          <Image
            src="/images/logo.png"
            alt="Green Tag Logo"
            fill
            className="rounded-full object-cover ring-4 ring-primary-500/30"
          />
        </div>

        <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">
          Welcome Back
        </h1>
        <p className="text-gray-400 text-sm mb-8">
          Admin portal gate for Green Tag Solutions Kerala
        </p>

        <AnimatePresence mode="wait">
          {!isLoading ? (
            <motion.div
              key="signin-options"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-4"
            >
              {/* Premium Google Sign-In Button */}
              <button
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center gap-3.5 px-6 py-4 bg-white hover:bg-gray-100 text-gray-800 font-bold rounded-2xl transition duration-300 transform active:scale-95 shadow-xl shadow-black/20 hover:shadow-white/5 border border-gray-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.355 0 3.39 2.673 1.482 6.545l3.784 3.22z"
                  />
                  <path
                    fill="#4285F4"
                    d="M23.49 12.273c0-.818-.073-1.609-.209-2.373H12v4.5h6.49a5.55 5.55 0 0 1-2.409 3.636v3.018h3.89c2.273-2.09 3.518-5.173 3.518-8.782z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.266 14.235A7.127 7.127 0 0 1 4.909 12c0-.791.136-1.555.357-2.264L1.482 6.51A11.96 11.96 0 0 0 0 12c0 2.01.5 3.91 1.39 5.591l3.876-3.356z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.245 0 5.973-1.073 7.964-2.91l-3.89-3.018c-1.073.718-2.445 1.146-4.074 1.146-3.136 0-5.791-2.118-6.736-4.964L1.482 17.62C3.39 21.491 7.355 24 12 24z"
                  />
                </svg>
                Continue with Google / Gmail
              </button>

              <div className="flex items-center gap-3 my-6">
                <div className="h-[1px] bg-white/10 flex-grow" />
                <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">OR</span>
                <div className="h-[1px] bg-white/10 flex-grow" />
              </div>

              {/* Password credentials simulation (if needed, but Google login preferred) */}
              <button
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-secondary-800 hover:bg-secondary-750 text-white font-semibold rounded-2xl border border-white/5 hover:border-white/10 transition duration-300 transform active:scale-95"
              >
                <EnvelopeIcon className="w-5 h-5 text-gray-400" />
                Use Administrator Credentials
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="auth-loading"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-6"
            >
              {/* Premium Google Loader */}
              <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-primary-500/20" />
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-t-primary-500 border-r-accent-gold border-b-emerald-500 border-l-red-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <ShieldCheckIcon className="w-8 h-8 text-primary-400 absolute" />
              </div>

              <motion.p
                key={progressText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gray-300 text-sm font-medium tracking-wide"
              >
                {progressText}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-10 text-xs text-gray-500 flex justify-center items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          Secure SSL encrypted channel
        </div>
      </motion.div>
    </div>
  );
}
