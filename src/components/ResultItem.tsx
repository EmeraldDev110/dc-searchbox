'use client'

import Image from 'next/image'
import { Tool } from '@/types'

interface ResultItemProps {
  tool: Tool
}

export default function ResultItem({ tool }: ResultItemProps) {
  return (
    <div
      tabIndex={0}
      role="button"
      className="flex items-center justify-between w-full h-[100px] p-3 pr-5 gap-5 rounded-[12px] cursor-pointer hover:bg-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary group transition"
    >
      {/* Tool logo (fixed size, responsive inside container) */}
      <div className="relative w-[76px] h-[76px] rounded-md overflow-hidden shrink-0">
        <Image
          src={tool.image}
          alt={tool.title}
          fill
          className="object-contain p-1"
          sizes="76px"
        />
      </div>

      {/* Title and description text content */}
      <div className="flex-1 overflow-hidden">
        <h3 className="font-medium text-[20px] leading-[26px] text-title">
          {tool.title}
        </h3>
        <p className="text-paragraph text-[16px] leading-[20px] font-normal tracking-[0.75px] truncate">
          {tool.description}
        </p>
      </div>

      {/* External link icon (only visible on hover or keyboard focus) */}
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[26px] h-[26px] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:ring-2 focus-visible:ring-primary rounded transition-opacity"
      >
        <Image
          src="/icons/external-link.svg"
          alt="Open"
          width={26}
          height={26}
        />
      </a>
    </div>
  )
}
