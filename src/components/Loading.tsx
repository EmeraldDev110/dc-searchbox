import Image from 'next/image'

// Simple loading indicator using a spinning SVG icon
export default function Loading() {
  return (
    <div className="flex justify-center items-center py-10 w-10 h-10">
      {/* Spinner icon with rotation animation */}
      <Image
        src="/icons/loading.svg"
        alt="Loading..."
        width={40}
        height={40}
        className="animate-spin"
      />
    </div>
  )
}
