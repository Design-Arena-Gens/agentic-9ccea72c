"use client";

import { useState } from 'react';

export default function Greeting() {
  const [name, setName] = useState("");
  const [greet, setGreet] = useState<string | null>(null);

  function handleGreet() {
    const trimmed = name.trim();
    setGreet(trimmed ? `Nice to meet you, ${trimmed}!` : "?? Hi there!");
  }

  return (
    <div>
      <div className="row">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name"
          aria-label="Your name"
        />
        <button onClick={handleGreet}>Greet</button>
      </div>
      {greet && <p style={{ marginTop: 12 }}>{greet}</p>}
    </div>
  );
}
