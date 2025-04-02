"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import Tag from "./Tag";
import ResultList from "./ResultList";
import { useSearch } from "@/hooks/useSearch";
import StatusBar from "./StatusBar";

const TAGS = ["Languages", "Build", "Design", "Cloud"];

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const { data, loading, error } = useSearch(searchTerm);

  // Called by SearchBar (debounced if user types)
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term !== activeTag) setActiveTag(null);
  };

  // Tag click triggers immediate search
  const handleTagClick = (tag: string) => {
    setActiveTag(tag);
    setSearchTerm(tag); // Triggers useSearch immediately
  };

  return (
    <div className="w-[690px] max-h-[651px] space-y-5 rounded-[20px] bg-white pt-6 px-0 pb-0 shadow-[0px_8px_30px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[0px_12px_40px_rgba(0,0,0,0.14)]">
      {/* Search Bar */}
      <div className="px-6 space-y-5">
        <SearchBar
          value={searchTerm}
          onSearch={handleSearch}
          status={error ? "error" : loading ? "loading" : "default"}
        />

        {/* Tags */}
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

        {/* Results */}
        <ResultList data={data} loading={loading} error={error} />
      </div>

      {/* Footer / Status */}
      <StatusBar loading={loading} error={error} resultCount={data.length} />
    </div>
  );
}
