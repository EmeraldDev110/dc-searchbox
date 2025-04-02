"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTag } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"

interface TagProps {
  label: string               // Label text (e.g. "Languages")
  active?: boolean            // Indicates if this tag is currently selected
  onClick?: () => void        // Triggered when tag is clicked
}

export default function Tag({ label, active = false, onClick }: TagProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        // Base styles: pill-shaped button with spacing and transitions
        "flex items-center gap-[10px] px-4 h-[32px] rounded-full text-sm font-medium cursor-pointer transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",

        // Visual states: primary background when active, hover color otherwise
        active
          ? "bg-primary text-white"
          : "bg-gray text-primary hover:bg-[#865CFF] hover:text-white"
      )}
    >
      {/* Tag icon shown alongside label */}
      <FontAwesomeIcon icon={faTag} className="w-4 h-4" />
      {label}
    </button>
  )
}
