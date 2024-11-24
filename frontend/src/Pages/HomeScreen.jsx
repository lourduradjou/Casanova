import React from 'react'
import Navbar from '../components/Navbar'
import MainContent from '../components/notesComponents/MainContent'
import Footer from '../components/Footer'

const HomeScreen = () => {
	return (
		<div className='grid grid-rows-[auto_1fr_auto] min-h-screen w-full'>
			<Navbar />
			<MainContent />
			<Footer />
		</div>
	)
}

export default HomeScreen
