import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import NotesDisplay from './NotesDisplay'
import AddNotes from './AddNotes'
import Calender from './Calender'

const MainContent = () => {
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
		<div className='w-full'>
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
			<div className='w-full flex justify-center mt-10'>
				<div className='max-w-[1440px] w-full grid md:grid-cols-3 gap-14 '>
					<div className='flex justify-center  bg-primary rounded-xl'>
						<NotesDisplay />
					</div>
					<div className='flex justify-center bg-secondary rounded-xl'>
						<AddNotes />
					</div>

					<Calender />
				</div>
			</div>
		</div>
	)
}

export default MainContent
