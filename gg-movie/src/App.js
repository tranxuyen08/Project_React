import logo from './logo.svg';
import './App.css';
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
import Admin from './components/admin/Admin';
import Users from './components/admin/User/Users';
import HistoryProducts from './components/admin/HistoryProducts/HistoryProducts';
import ProductManager from './components/admin/ProductsManager/ProductManager';
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
      <Route path='/admin' element={<Admin/>}>
        <Route path='user-managerment' element={<Users/>}/>
        <Route path='history-order' element={<HistoryProducts/>}/>
        <Route path='products-manager' element={<ProductManager/>}/>
      </Route>
    </Routes>
  );
}

export default App;
