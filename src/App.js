import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemList from "./components/ItemList";

function App() {
  return (
    <>
      <Header />
      <Main />
      <ItemListContainer />
      <ItemList />
      <Footer />
    </>
  );
}

export default App;
