import Routes from './routes/Routes';
import GlobalStyles from './components/styles/Global';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Routes />
    </QueryClientProvider>
  );
};

export default App;
