import React from 'react'

const Accordian = () => {
	return (
		<div className='min-h-[100vh]'>
			<div className='w-full flex items-center justify-center min-h-[90vh]'>
				<div className='w-[50%]'>
					<div className='collapse collapse-arrow bg-base-200 mb-4'>
						<input
							type='radio'
							name='my-accordion-2'
							defaultChecked
						/>
						<div className='collapse-title text-xl font-medium flex justify-between'>
							<div>Finish the C# Assignment</div>
							<div className='space-x-4'>
								<button className='btn btn-info '>Edit</button>
								<button className='btn btn-error'>
									Delete
								</button>
							</div>
						</div>
						<div className='collapse-content'>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Sed magni veniam earum omnis.
								Exercitationem officiis expedita ipsum eligendi
								fuga, similique magnam nobis doloremque
								accusantium laboriosam, ea eveniet rerum,
								laborum possimus!
							</p>
							<div>
								<p className='mt-2'>Created On: 24/8/2024</p>
								<p>Posted By: Pandey</p>
							</div>
							{/* Specialized Tags */}
							<div>
								{/* imp */}
								{/* not imp */}
							</div>
						</div>
					</div>
					<div className='collapse collapse-arrow bg-base-200 mb-4'>
						<input type='radio' name='my-accordion-2' />
						<div className='collapse-title text-xl font-medium'>
							Click to open this one and close others
						</div>
						<div className='collapse-content'>
							<p>hello</p>
						</div>
					</div>
					<div className='collapse collapse-arrow bg-base-200 mb-4'>
						<input type='radio' name='my-accordion-2' />
						<div className='collapse-title text-xl font-medium'>
							Click to open this one and close others
						</div>
						<div className='collapse-content'>
							<p>hello</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Accordian
