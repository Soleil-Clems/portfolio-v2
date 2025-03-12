import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from "@/provider/theme-provider";
import Home from "@/pages/Home";
import { Toaster } from "@/components/ui/toaster";


function App() {

  return (
    <Router>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Toaster />
        <Home />
      </ThemeProvider>
    </Router>
  );
}

export default App;
