"use client";
import { cn } from "@/lib/utils";
import { FC, useEffect, useState } from "react";

interface CurrencyProps {
  value: string | number;
  className?: string;
}

const Currency: FC<CurrencyProps> = ({ value, className }) => {
  const [isMount, setIsMount] = useState<boolean>(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) {
    return null;
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  return (
    <div className={cn("font-semibold", className)}>
      {formatter.format(Number(value))}
    </div>
  );
};

export default Currency;
