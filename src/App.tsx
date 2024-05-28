import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Router } from './router';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
