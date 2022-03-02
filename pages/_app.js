import '../styles/globals.css'
import Layouts from '../components/layouts'
import "bootstrap/dist/css/bootstrap.css";
import "../public/assets/css/style.css"
function MyApp({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}

export default MyApp
