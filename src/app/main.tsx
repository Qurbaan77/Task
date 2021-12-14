import React from "react";
import Dashboard from "./components/dashboard/index";
import { QueryClient, QueryClientProvider } from "react-query";
interface IProps {}
const queryClient = new QueryClient();
export const App: React.FC<IProps> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Dashboard />
      </div>
    </QueryClientProvider>
  );
};

export default App;
