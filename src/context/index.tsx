import { AuthProvider } from './Providers/AuthContext';
import CombinedProvider from './Providers/CombinedProvider';

const AppProvider = ({ children = null }) => (
  <CombinedProvider components={[AuthProvider]}>{children}</CombinedProvider>
);

export default AppProvider;
