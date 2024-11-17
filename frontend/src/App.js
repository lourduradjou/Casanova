import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Footer from './components/Footer'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Admin Route (without Navbar and Footer) */}
				<Route path='/admin' element={<Login />} />

				{/* Public Routes (with Navbar and Footer) */}
				<Route
					path='/*'
					element={
						<>
							<Navbar />
							<Footer />
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default App