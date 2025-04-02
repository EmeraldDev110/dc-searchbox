// Generic debounce utility to limit how often a function is called
// Useful for performance-sensitive inputs like search fields

export function debounce<Args extends unknown[]>(
  fn: (...args: Args) => void,  // Function to debounce
  delay: number                 // Delay in ms before invoking `fn`
): (...args: Args) => void {
  let timeoutId: ReturnType<typeof setTimeout>

  return (...args: Args) => {
    // Clear any pending invocation
    clearTimeout(timeoutId)

    // Schedule a new call after the specified delay
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}