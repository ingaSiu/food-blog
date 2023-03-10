import { QueryClient, QueryClientProvider } from 'react-query';

import GlobalStyles from './components/styles/Global';
import Routes from './routes/Routes';

export const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Routes />
    </QueryClientProvider>
  );
};

export default App;
