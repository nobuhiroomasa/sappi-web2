// src/components/ContactForm.jsx
import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contact.php', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name, message }),
    });
    const data = await res.json();
    setResult(data.status);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="名前" required />
      <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="メッセージ" required />
      <button type="submit">送信</button>
      {result && <div>結果: {result}</div>}
    </form>
  );
}
