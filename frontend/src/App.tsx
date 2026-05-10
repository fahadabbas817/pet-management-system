import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ProtectedRoute } from "./components/guards/ProtectedRoute";
import { PublicRoute } from "./components/guards/PublicRoute";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import ContactInfo from "./pages/ContactInfo";
import LocationInfo from "./pages/LocationInfo";
import DogInfo from "./pages/DogInfo";
import YardInfo from "./pages/YardInfo";
import Cleanup from "./pages/Cleanup";
import Subscriptions from "./pages/Subscriptions";
import Invoices from "./pages/Invoices";
import Payments from "./pages/Payments";
import PaymentMethods from "./pages/PaymentMethods";
import AdditionalServices from "./pages/AdditionalServices";
import NotificationSettings from "./pages/NotificationSettings";
import ChangePassword from "./pages/ChangePassword";
import ChangeEmail from "./pages/ChangeEmail";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Profile */}
            <Route path="/profile/contact" element={<ContactInfo />} />
            <Route path="/profile/location" element={<LocationInfo />} />
            <Route path="/profile/dog" element={<DogInfo />} />
            <Route path="/profile/yard" element={<YardInfo />} />

            {/* Cleanup */}
            <Route path="/cleanup" element={<Cleanup />} />

            {/* Billing */}
            <Route path="/billing/subscriptions" element={<Subscriptions />} />
            <Route path="/billing/invoices" element={<Invoices />} />
            <Route path="/billing/payments" element={<Payments />} />
            <Route path="/billing/payment-methods" element={<PaymentMethods />} />

            {/* Additional Services */}
            <Route path="/additional-services" element={<AdditionalServices />} />

            {/* Settings */}
            <Route path="/settings/notification" element={<NotificationSettings />} />
            <Route path="/settings/change-password" element={<ChangePassword />} />
            <Route path="/settings/change-email" element={<ChangeEmail />} />
            </Route>
          </Route>

          {/* Auth Layout */}
          <Route element={<PublicRoute />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
