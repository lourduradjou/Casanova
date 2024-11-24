import React from 'react'

const Accordian = () => {
	return (
		<div className='w-full flex justify-center items-center'>
			<div className='w-full flex justify-center mt-2 items-center'>
				<div className=' w-full ml-6 mr-2'>
					<div className='collapse collapse-arrow bg-slate-200 mb-1'>
						<input
							type='radio'
							name='my-accordion-2'
							defaultChecked
						/>
						<div className='collapse-title text-lg font-medium flex justify-between'>
							<div className='font-sans text-secondary ml-4'>
								Finish the C# Assignment
							</div>
							{/* <div className='space-x-4 hidden md:block'>
								<button className='btn btn-info font-mono '>
									Edit
								</button>
								<button className='btn btn-error font-mono '>
									Delete
								</button>
							</div> */}
						</div>
						<div className='collapse-content'>
							<p className='text-sm md:text-md'>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Sed magni veniam earum omnis.
								Exercitationem officiis expedita ipsum eligendi
								fuga, similique magnam nobis doloremque
								accusantium laboriosam, ea eveniet rerum,
								laborum possimus!
							</p>
							<div className='flex justify-between w-full items-center bg-gray-100 text-black px-3 py-3 rounded-md my-4'>
								<div>
									<p className='font-sans '>
										<span className='text-md font-semibold'>
											Created On:{' '}
										</span>
										<span className=''> 24/8/2024</span>
									</p>
									<p className='font-sans'>
										<span className='font-semibold mr-4'>
											Posted By:
										</span>
										Pandey
									</p>
								</div>
								{/* <div className='flex flex-col justify-end space-y-4 ml-2 md:hidden'>
									<button className='px-4 py-2 text-black bg-blue-400 rounded-lg font-mono '>
										Edit
									</button>
									<button className='bg-red-400 px-4 py-2 rounded-lg btn-error font-mono '>
										Delete
									</button>
								</div> */}
							</div>

							{/* Specialized Tags */}
							<div>
								{/* imp */}
								{/* not imp */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Accordian
