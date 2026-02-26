import React, { useState } from "react";
import { articles } from "./data";
import HighlightText from "./HighlightText";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter((article) => {
    const term = searchTerm.toLowerCase();
    return (
      article.title.toLowerCase().includes(term) ||
      article.content.toLowerCase().includes(term)
    );
  });

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Search Articles</h1>

      <input
        type="text"
        placeholder="Search articles..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "16px",
          marginBottom: "20px"
        }}
      />

      {filteredArticles.length === 0 && searchTerm && (
        <p>No results found.</p>
      )}

      {filteredArticles.map((article) => (
        <div
          key={article.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "6px"
          }}
        >
          <h3>
            <HighlightText
              text={article.title}
              searchTerm={searchTerm}
            />
          </h3>
          <p>
            <HighlightText
              text={article.content}
              searchTerm={searchTerm}
            />
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;