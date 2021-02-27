import "../styles/globals.css";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";

const App = ({ Component, pageProps }) => {
  return (
    <div className="content">
      <Navbar />
      <Component {...pageProps}></Component>
      <Footer />
    </div>
  );
};

export default App;
