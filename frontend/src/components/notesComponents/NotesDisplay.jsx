import React from 'react'
import Accordian from '../Accordian'

const NotesDisplay = () => {
	return (
		<div className='w-full flex flex-col '>
			<h1 className='text-3xl font-bold  text-center text-secondary mt-6 mb-2'>
				Notes
			</h1>
			<div className='w-full max-w-4xl rounded-md overflow-auto h-[calc(70vh-100px)] '>
				<Accordian />
				<Accordian />
				<Accordian />
				<Accordian />
				<Accordian />
			</div>
		</div>
	)
}

export default NotesDisplay
