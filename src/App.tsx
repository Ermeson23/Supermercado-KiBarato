import { Provider } from 'react-redux'

import './App.css'
import ProductList from './components/productList/ProductList'
import { store } from './feature/store/store'
import Cart from './components/cart/Cart'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import FavoriteList from './components/favoriteList/FavoriteList'

function App() {
  return (
    <>
      <Header />
      <Provider store={store}>
        <div className="container">
          <ProductList />
          <Cart />
          <FavoriteList />
        </div >
      </Provider>
      <Footer />
    </>
  )
}

export default App
