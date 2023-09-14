
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Routing from "./routes/Routing";


function App() {
  return (
    <>
      <Header />
      <main>
        <Routing />
      </main>
      <Footer />
    </>
  );
}

export default App;
