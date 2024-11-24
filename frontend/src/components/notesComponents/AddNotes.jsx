import React, { useState } from 'react'

const AddNotes = () => {
	const [tags, setTags] = useState([])
	const [newTag, setNewTag] = useState('')
	const [dueDate, setDueDate] = useState('')

	const handleAddTag = () => {
		if (newTag.trim()) {
			setTags([...tags, newTag.trim()])
			setNewTag('')
		}
	}

	const handleRemoveTag = (tagToRemove) => {
		setTags(tags.filter((tag) => tag !== tagToRemove))
	}

	return (
		<div className='w-full m-2 p-4 space-y-4 flex items-center flex-col'>
			{/* Text Area */}
			<textarea
				placeholder='Write a note!'
				className='textarea textarea-bordered h-[200px] w-full'
			></textarea>

			<div className='space-y-4 w-full'>
				{/* Due Date */}
				<div className='flex justify-center w-full items-center space-x-4'>
					<input
						type='date'
						className='input input-bordered w-full select-none'
						value={dueDate}
						onChange={(e) => setDueDate(e.target.value)}
					/>
				</div>

				{/* Add Tags */}
				<div>
					<div className='flex space-x-4 items-center'>
						<input
							type='text'
							placeholder='Add a tag (e.g., Important)'
							className='input input-bordered w-full'
							value={newTag}
							onChange={(e) => setNewTag(e.target.value)}
						/>
						<button
							className='btn btn-primary'
							onClick={handleAddTag}
						>
							Add Tag
						</button>
					</div>

					{/* Display Tags */}
					<div className='mt-4 flex flex-wrap gap-3 max-h-[120px] overflow-y-auto border border-gray-200 rounded-md p-3 bg-gray-50 h-16'>
						{tags.length === 0 ? (
							<p>Tags</p>
						) : (
							tags.map((tag, index) => (
								<div
									key={index}
									className='bg-indigo-700 text-white flex items-center space-x-3 px-4 py-2 shadow-md rounded-lg hover:bg-blue-800 transition-all duration-200'
								>
									<span className='rounded-md font-medium'>
										{tag}
									</span>
									<button
										className='flex items-center justify-center w-6 h-6 bg-red-600 text-white text-lg font-bold rounded-full border-none outline-none'
										onClick={() => handleRemoveTag(tag)}
									>
										&times;
									</button>
								</div>
							))
						)}
					</div>
				</div>

				{/* Add Button */}
				<button className='btn btn-primary flex w-full justify-center items-center text-lg font-sans'>
					Add
				</button>
			</div>
		</div>
	)
}

export default AddNotes
