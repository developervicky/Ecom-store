import { cn } from "@/lib/utils";
import { FC, MouseEventHandler } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}
const IconButton: FC<IconButtonProps> = ({ className, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group flex items-center justify-center rounded-full border bg-white p-2 shadow-md transition hover:scale-110",
        className,
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
