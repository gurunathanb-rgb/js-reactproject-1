
import { themecontext } from './ThemeContext';
import { ParentCompoenent } from './Component/ParentCompoenent';
import { useState } from 'react';

export default function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    // Broadcast the state and function to everything inside
    <themecontext.Provider value={{ theme, toggleTheme }}>
      <div style={{ 
        background: theme === 'light' ? '#1fc23a' : 'yellow ', 
        color: theme === 'light' ? 'yellow' : '#1fc23a',
        padding: '20px',
        minHeight: '100vh'
      }}>
        <h1>App Component (Grandparent)</h1>
        <ParentCompoenent />
      </div>
    </themecontext.Provider>
  );
}
