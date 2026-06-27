"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { TrustRow } from "@/components/TrustRow";
import { LoadingScreen } from "@/components/LoadingScreen";
import { InquiryProvider } from "@/components/inquiry/InquiryProvider";
import { RecruiterBrief } from "@/components/recruiter/RecruiterBrief";
import { useViewMode } from "@/components/mode/ViewModeProvider";

const LOADED_KEY = "portfolio-loaded";

function ExplorerView() {
  return (
    <InquiryProvider>
      <main>
        <Hero />
        <TrustRow />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </InquiryProvider>
  );
}

export function HomeClient() {
  const { mode } = useViewMode();
  const [ready, setReady] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem(LOADED_KEY);
    if (seen) {
      setReady(true);
      setShowLoader(false);
    }
  }, []);

  const handleLoaded = useCallback(() => {
    sessionStorage.setItem(LOADED_KEY, "1");
    setShowLoader(false);
    setReady(true);
  }, []);

  return (
    <>
      {showLoader && <LoadingScreen onDone={handleLoaded} />}
      {ready && (
        <AnimatePresence mode="wait">
          {mode === "recruiter" ? (
            <motion.div
              key="recruiter"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <RecruiterBrief />
            </motion.div>
          ) : (
            <motion.div
              key="explorer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <ExplorerView />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
