import { BrowserRouter as Router } from "react-router-dom";
import { AppContent } from "@/AppContent";
import { Auth0ProviderWithNavigate } from "@/components/auth/Auth0ProviderWithNavigate.tsx";

function App() {
  return (
    // <div className="App flex grow flex-col">
      <Router>
        <Auth0ProviderWithNavigate>
          <AppContent />
        </Auth0ProviderWithNavigate>
      </Router>
    // </div>
  );
}

export default App;
