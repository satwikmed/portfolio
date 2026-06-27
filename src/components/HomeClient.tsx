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
const MODE_EASE = [0.21, 0.47, 0.32, 0.98] as const;

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
        <div className="mode-viewport grid [&>*]:col-start-1 [&>*]:row-start-1 [&>*]:w-full">
          <AnimatePresence initial={false}>
            {mode === "recruiter" ? (
              <motion.div
                key="recruiter"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: MODE_EASE }}
              >
                <RecruiterBrief />
              </motion.div>
            ) : (
              <motion.div
                key="explorer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: MODE_EASE }}
              >
                <ExplorerView />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}
