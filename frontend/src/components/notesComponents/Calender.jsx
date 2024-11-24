import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const MyCalendar = () => {
	const [date, setDate] = useState(new Date())
	const [markedDates, setMarkedDates] = useState([])

	// Mark a date when clicked
	const handleDateClick = (selectedDate) => {
		const selectedDateISO = selectedDate.toISOString().split('T')[0] // Use ISO format for consistency
		if (!markedDates.includes(selectedDateISO)) {
			// Add date if not already marked
			setMarkedDates([...markedDates, selectedDateISO])
		}
	}

	return (
		<div className='flex flex-col items-center bg-gray-50 p-8 rounded-lg shadow-lg max-w-lg mx-auto'>
			<h1 className='text-2xl font-bold mb-6 text-blue-600'>Calendar</h1>
			<Calendar
				onChange={setDate}
				value={date}
				tileClassName={({ date, view }) => {
					if (view !== 'month') return '' // Only style month view

					const dateISO = date.toISOString().split('T')[0]
					const todayISO = new Date().toISOString().split('T')[0]
					const isCurrentDate = dateISO === todayISO
					const isMarked = markedDates.includes(dateISO)
					const isSaturday = date.getDay() === 6
					const isSunday = date.getDay() === 0

					// Determine class based on conditions
					if (isCurrentDate) {
						return 'bg-green-500 text-black font-bold rounded-lg'
					}
					if (isMarked) {
						return 'bg-blue-400 text-black font-bold rounded-lg'
					}
					if (isSaturday) {
						return 'bg-yellow-300 text-black font-semibold rounded-lg'
					}
					if (isSunday) {
						return 'bg-red-300 text-black font-semibold rounded-lg'
					}
					return 'text-black hover:bg-gray-200 transition duration-150 rounded-lg'
				}}
				onClickDay={handleDateClick}
				className='w-full bg-white rounded-md shadow-lg border border-gray-200'
			/>
		</div>
	)
}

export default MyCalendar
