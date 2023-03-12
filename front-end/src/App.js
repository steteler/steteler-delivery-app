import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';
import Routing from './routes/routing';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={ queryClient }>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={ false } />
    </QueryClientProvider>
  );
}

export default App;
