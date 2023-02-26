import "./App.css";
import "../src/main.css";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Categories from "./components/Categories";
import DemoCarousel from "./components/DemoCarousel";
import Classifiedlist from "./components/Classifiedlist";
import ProductList from "./components/Productlist";
import Recommendlist from "./components/Recommendlist";
import FlashComponent from "./components/FlashComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="Tbar">
        <Topbar />
      </div>
      <Header />
      <div className="categoriesandbanner">
        <Categories />
        <DemoCarousel />
      </div>
      <ProductList />
      <Classifiedlist />
      <Recommendlist />
      <FlashComponent/>
      <Footer/>

    </div>
  );
}

export default App;
