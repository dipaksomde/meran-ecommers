import { Cart, Checkout, Details, Home, Login, OrderFail, OrderSuccess, PublicLayout, Register } from './public'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Account, Orders, Profile, Settings, UserLayout } from './user'
import { AdminLayout, AdminOrders, AdminProducts, AdminSettings, AdminUsers, Dashboard } from './admin'
import Protected from './user/Protected'

const App = () => {
  return <div className='bg-light'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="/product-detail/:productId" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* protected */}
          <Route path="/checkout" element={<Protected compo={<Checkout />} />} />
          <Route path="/payment-success" element={<Protected compo={<OrderSuccess />} />} />
          <Route path="/payment-fail" element={<Protected compo={<OrderFail />} />} />
        </Route>

        {/* protected */}
        <Route path="/user" element={<Protected compo={<UserLayout />} />}>
          <Route index element={<Account />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
        </Route>


        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='orders' element={<AdminOrders />} />
          <Route path='products' element={<AdminProducts />} />
          <Route path='settings' element={<AdminSettings />} />
          <Route path='users' element={<AdminUsers />} />
        </Route>

        <Route path="*" element={<h1>Page Not Found</h1>} />

      </Routes>
    </BrowserRouter >
  </div >
}

export default App