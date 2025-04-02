// Manually control Font Awesome CSS injection to avoid duplication
import { config } from '@fortawesome/fontawesome-svg-core'

// Import the core Font Awesome styles once globally
import '@fortawesome/fontawesome-svg-core/styles.css'

// Prevent Font Awesome from automatically adding <style> tags to <head>
// This avoids conflicts when using Next.js + custom CSS loading
config.autoAddCss = false
