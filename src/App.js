import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Homepage from './pages/home/Homepage';
import Transporters from './pages/marketplace/Transporters';
import Distributors from './pages/marketplace/Distributors';
import Inland from './pages/ourservice/Inland';
import Freight from './pages/ourservice/Freight';
import RailCargo from './pages/ourservice/RailCargo';
import Company from './pages/company/Company';
import BlogPost from './pages/blog/BlogPost';
import BlogPostContent from './pages/blog/BlogPostContent';
import { useEffect } from 'react';
import Crossborder from './pages/ourservice/Crossborder';
import blogimage from './assests/IMG-20250311-WA0001.jpg';
import Privacy from './pages/privacy/Privacy';
import Terms from './pages/terms/Terms';
import Cookies from './pages/cookies/Cookies';
import Enterprises from './pages/marketplace/Enterprises';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  // const { data } = useFetch("http://localhost:1337/api/blogs?populate=*");

  const data = {
    data: [
      {
        id: 1,
        attributes: {
          blogTitle:
            'Building the Bridge: How Unity and Connectivity Can Empower Africa and Its Diaspora',
          blogSummary:
            "Hage Technologies aims to empower Africa by enhancing connectivity, trade, and logistics, learning from North America and Europe’s success to strengthen ties with the diaspora and unlock Africa's potential.",
          author: 'Olamilekan Omotosho',
          publishedDate: '11 March 2025',
          readTime: '10 min read',
          coverImage: {
            data: {
              attributes: {
                url: blogimage,
              },
            },
          },
          blogContent: ` `,
        },
      },
    ],
  };

  return (
    <Router>
      <ScrollToTop />

      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route
            path="/marketplace/enterprises"
            element={<Enterprises />}
          />

          <Route path="/marketplace/transporters" element={<Transporters />} />
          <Route path="/marketplace/distributors" element={<Distributors />} />

          <Route path="/service/inland" element={<Inland />} />

          <Route path="/service/cross-border" element={<Crossborder />} />

          <Route path="/service/freight" element={<Freight />} />

          <Route path="/service/railcargo" element={<RailCargo />} />

          <Route path="/company" element={<Company />} />

          <Route path="/blog" element={<BlogPost posts={data} />} />

          <Route
            path="/blogpost/:id"
            element={<BlogPostContent posts={data} />}
          />

          <Route path="/privacy" element={<Privacy />} />

          <Route path="/terms" element={<Terms />} />

          <Route path="/cookies" element={<Cookies />} />

          <Route path="*" element={<Homepage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
