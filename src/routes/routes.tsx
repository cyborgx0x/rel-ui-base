import { HashRouter as Router, Routes , Route } from 'react-router-dom';

import AuthGuard from '../components/Auth/AuthGuard';
import GuestGuard from '../components/Auth/GuestGuard';
import { Layout } from '../components/Layout';
import PricingService from '../pages/Pricing/PricingService';
import SearchDetail from '../pages/search/SearchDetail';


const ListRouter = () => {
  return (
    <Router>
      <Routes >
        <Route
          key="erp"
          path="/"
          Component={() => (
            <GuestGuard>
              <Layout>
                <SearchDetail />
              </Layout>
            </GuestGuard>
          )}
        />
        <Route
          key="full_search"
          path="/full_search"
          
          Component={() => (
            <GuestGuard>
              <Layout>
                <SearchDetail />
              </Layout>
            </GuestGuard>
          )}
        />
        <Route
          key="pricing"
          path="/pricing"
          
          Component={() => (
            <AuthGuard>
              <Layout>
                <PricingService />
              </Layout>
            </AuthGuard>
          )}
        />
      </Routes >
    </Router>
  );
};

export default ListRouter;
