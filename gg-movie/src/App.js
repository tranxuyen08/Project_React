import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import SelectionMovie from './components/selectionMovie/SelectionMovie';
import Event from './components/event/Event';
import Footer from './components/footer/Footer';
import HomePages from './pages/home/HomePages';
import { Route, Routes } from 'react-router-dom';
import MoviePlaying from './pages/movePlaying/MoviePlaying';
import CommingSoon from './pages/movie/CommingSoon';
import DetailProduct from './components/detailProduct/DetailProduct';
import Register from './components/register/Register';
import Login from './components/login/Login';
import ComponentsChild from './components/ComponentsChild';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callProductsAPI } from './redux/reducer/ProductsSlice';
import Booking from './components/booking/Booking';
import CheckOut from './components/checkout/CheckOut';
import UploadImage from './components/uploadimage/UploadImage';
import { handleCallLocation } from './redux/reducer/LocaltionSlice';

function App() {
  const dispatch = useDispatch()
  const [renderNameMOvie, setRenderNameMovie] = useState('')
  const products = useSelector(state => state.products)
  useEffect(() => {
    const getProduct = async () => {
      await dispatch(callProductsAPI()).unwrap()
    }
    getProduct()
  }, [])
  useEffect(() =>{
    const getLocation = async () => {
      await dispatch(handleCallLocation()).unwrap()
    }
    getLocation()
  },[])
  return (
    <Routes>
      <Route path='/' index element={<HomePages><ComponentsChild /></HomePages>} />
      <Route path='/phim-dang-chieu' element={<HomePages><MoviePlaying /></HomePages>} />
      <Route path='/phim-sap-chieu' element={<HomePages><CommingSoon /></HomePages>} />
      <Route path='/detail-product/:id' element={<HomePages><DetailProduct /></HomePages>} />
      <Route path='/register' element={<HomePages><Register /></HomePages>} />
      <Route path='/login' element={<HomePages><Login /></HomePages>} />
      <Route path='/booking-tickets' element={<HomePages><Booking/></HomePages>} />
      <Route path='/checkout' element={<HomePages><CheckOut/></HomePages>} />
      <Route path='/upload-image' element={<UploadImage/>}/>
    </Routes>
  );
}

export default App;
