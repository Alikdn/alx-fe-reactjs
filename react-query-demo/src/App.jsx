import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent'; // Import the new component
import './App.css';

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <h1>React Query Demo</h1>
        </header>
        <main>
          <PostsComponent /> {/* Render the PostsComponent */}
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;