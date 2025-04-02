"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import Tag from "./Tag";
import ResultList from "./ResultList";
import { useSearch } from "@/hooks/useSearch";
import StatusBar from "./StatusBar";

// Static category tags shown as filters
const TAGS = ["Languages", "Build", "Design", "Cloud"];

export default function SearchBox() {
  // Current search input value
  const [searchTerm, setSearchTerm] = useState("");

  // Currently selected tag (null when no tag is selected)
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Hook to fetch search results from API based on input
  const { data, loading, error } = useSearch(searchTerm);

  // Handle search input changes (debounced from child)
  const handleSearch = (term: string) => {
    setSearchTerm(term);

    // Clear active tag if the input was manually changed
    if (term !== activeTag) setActiveTag(null);
  };

  // Handle tag click — updates both the tag state and input
  const handleTagClick = (tag: string) => {
    setActiveTag(tag);
    setSearchTerm(tag);
  };

  return (
    <div className="w-full max-w-[690px] space-y-5 rounded-[20px] bg-white pt-6 px-0 pb-0 shadow-[0px_8px_30px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[0px_12px_40px_rgba(0,0,0,0.14)] mx-auto">
      {/* Top section: Search bar, tags, and results */}
      <div className="px-4 sm:px-6 space-y-5">
        {/* Search input field */}
        <SearchBar
          value={searchTerm}
          onSearch={handleSearch}
          status={error ? "error" : loading ? "loading" : "default"}
        />

        {/* Tag filter buttons */}
        <div className="flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <Tag
              key={tag}
              label={tag}
              active={tag === activeTag}
              onClick={() => handleTagClick(tag)}
            />
          ))}
        </div>

        {/* List of results (with loading/empty/error states) */}
        <ResultList data={data} loading={loading} error={error} />
      </div>

      {/* Footer: status message (e.g. "Searching...", "3 results", etc.) */}
      <StatusBar loading={loading} error={error} resultCount={data.length} />
    </div>
  );
}
