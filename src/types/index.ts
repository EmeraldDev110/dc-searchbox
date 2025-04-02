// Represents a single searchable technology/tool item returned by the API
export interface Tool {
  title: string        // Display name of the tool (e.g., "Flutter")
  description: string  // Short summary of what the tool does
  image: string        // Public URL to the logo/image of the tool
  url: string          // External link to the tool’s official page
  category: string     // Category label (e.g., "Languages", "Cloud")
}