"use client";
import PreviewModal from "@/components/PreviewModal";
import React, { useEffect, useState } from "react";

const ModalProvider = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  
  return (
    <>
      <PreviewModal />
    </>
  );
};

export default ModalProvider;
