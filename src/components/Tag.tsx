"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

interface TagProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export default function Tag({ label, active = false, onClick }: TagProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center gap-[10px] px-4 h-[32px] rounded-full text-sm font-medium cursor-pointer transition-colors duration-200",
        active
          ? "bg-primary text-white"
          : "bg-gray text-primary hover:bg-[#865CFF] hover:text-white"
      )}
    >
      <FontAwesomeIcon icon={faTag} className="w-4 h-4" />
      {label}
    </button>
  );
}
