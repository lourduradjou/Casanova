import React, { useEffect, useState } from 'react'
import Accordian from '../components/Accordian'
import axios from 'axios'
import { IoMdCloseCircleOutline } from 'react-icons/io'

const HomePage = () => {
	const [username, setUsername] = useState('')
	const [showWelcome, setShowWelcome] = useState(true) // State to control visibility of the div

	useEffect(() => {
		const fetchUser = async () => {
			try {
				// Call the API and get the username
				const response = await axios.get(
					'http://localhost:5000/api/auth/profile',
					{
						withCredentials: true, // Include cookies
					}
				)
				setUsername(response.data.username)

				//avoid the rerendering of the welcome div
				const hasDismissedWelcome = localStorage.getItem(
					'hasDismissedWelcome'
				)
				if (hasDismissedWelcome) {
					setShowWelcome(false)
				}
			} catch (error) {
				console.error('Error fetching user:', error.message)
			}
		}

		fetchUser()
	}, [])

	const handleIntro = () => {
		setShowWelcome(false) // Hide the welcome div
		localStorage.setItem('hasDismissedWelcome', true)
	}

	return (
		<div>
			{showWelcome && username && (
				<div className='w-full p-2 bg-orange-200 flex items-center justify-between text-black mt-2'>
					<div className='text-center flex-1 text-2xl space-x-2'>
						<span>Welcome </span>
						<span className='font-bold capitalize'>
							{username || 'Guest!'}
						</span>
					</div>
					<button
						onClick={handleIntro}
						className='flex-none mr-4 transform transition-transform active:scale-90 hover:opacity-75'
					>
						<IoMdCloseCircleOutline size={40} />
					</button>
				</div>
			)}

			<Accordian />
		</div>
	)
}

export default HomePage
