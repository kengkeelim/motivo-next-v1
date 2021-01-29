// import '../styles/globals.css';
import "tailwindcss/tailwind.css";
import NavBar from "../components/navBar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
