import logo from './logo.svg';
import './App.css';
import Header from './components/pages/Header_Footer/Header';
import Footer from './components/pages/Header_Footer/Footer';
import {Route , Routes,} from 'react-router-dom';
import HomePage from './components/pages/Home/home'
import AuthorPage from './components/pages/Author/author'
import ProductPage from './components/pages/Product/Product';
import BbstTechPage from './components/pages/bbstTech/bbstTech';
function App() {
  return (
   <div>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/product' element={<ProductPage/>}></Route>
          <Route path='/bbstTech' element={<BbstTechPage/>}></Route>
          <Route path='/author' element={<AuthorPage/>}></Route>
        </Routes>
      <Footer/>
   </div>
  );
}

export default App;
