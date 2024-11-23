import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Footer from './components/Footer'
import SuperAdmin from './components/superAdmin'
import HomePage from './Pages/HomePage'

function App() {
	return (
		<BrowserRouter
			future={{
				v7_startTransition: true, // Opt into startTransition
				v7_relativeSplatPath: true, // Opt into relative splat path behavior
			}}
		>
			<Routes>
				{/* Admin Route (without Navbar and Footer) */}
				<Route path='/admin' element={<Login />} />
				<Route path='/superadmin' element={<SuperAdmin />} />

				{/* Public Routes (with Navbar and Footer) */}
				<Route
					path='/'
					element={
						<>
							<Navbar />
							<HomePage />
							<Footer />
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
