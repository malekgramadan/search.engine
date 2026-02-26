import React from "react";

const HighlightText = ({ text, searchTerm }) => {
  if (!searchTerm) return text;

  // Escape special regex characters
  const escapedSearch = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const regex = new RegExp(`(${escapedSearch})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <mark key={index}>{part}</mark>
        ) : (
          part
        )
      )}
    </>
  );
};

export default HighlightText;