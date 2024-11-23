import React, { useState } from 'react' // Import useState
import { Link } from 'react-router-dom'
import title from '../assets/title.svg'

const Navbar = () => {
	const [openHamburger, setOpenHamburger] = useState(false) // useState defined

	const handleHamburger = () => {
		setOpenHamburger(!openHamburger) // Toggle state
	}

	return (
		<div className='flex justify-center w-full pt-4'>
			<div className='max-w-[1440px] navbar flex justify-between items-center rounded-full bg-base-200 px-4  md:mx-4'>
				<div className=''>
					<a href='/' className='ml-12'>
						{/* Add responsive utilities here */}
						<img
							src={title}
							alt='casanova'
							className='max-w-[170px] md:max-w-[180px] lg:max-w-[200px] transition-all duration-300 ease-in-out'
						/>
					</a>
				</div>
				<div>
					<div className='mr-6'>
						<div className='form-control'>
							<Link to={'/admin'}>
								<button className='btn btn-outline  btn-secondary'>
									Admin
								</button>
							</Link>
						</div>
					</div>
					<div className='mr-12'>
						<div className='form-control'>
							<button className='btn btn-outline  btn-error'>
								Logout
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
