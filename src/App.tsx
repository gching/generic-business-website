import React from 'react';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen">
      <header className="py-4 px-6 flex justify-between items-center border-b dark:border-gray-800">
        <h1 className="text-xl font-semibold">Generic Business Website</h1>
        <ThemeToggle />
      </header>
      <main className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-6">Welcome to our website</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          This is a sample website that demonstrates dark mode functionality.
        </p>
      </main>
    </div>
  );
}

export default App;
