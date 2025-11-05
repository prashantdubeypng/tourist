import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import ProtectedRoute from "@/components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import EmergencySOS from "./pages/EmergencySOS";
import ExploreCulture from "./pages/ExploreCulture";
import TouristDashboard from "./pages/TouristDashboard";
import PoliceDashboard from "./pages/PoliceDashboard";
import TransportDashboard from "./pages/TransportDashboard";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Accessibility from "./pages/Accessibility";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/emergency-sos" element={<EmergencySOS />} />
              <Route path="/explore-culture" element={<ExploreCulture />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute allowedRoles={['tourist']}>
                    <TouristDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/police" 
                element={
                  <ProtectedRoute allowedRoles={['police']}>
                    <PoliceDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/transport" 
                element={
                  <ProtectedRoute allowedRoles={['transport']}>
                    <TransportDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/superadmin" 
                element={
                  <ProtectedRoute allowedRoles={['superadmin']}>
                    <SuperAdminDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
