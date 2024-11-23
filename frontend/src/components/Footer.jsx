import React from 'react'

const Footer = () => {
	return (
		<footer className='w-full flex flex-col footer footer-center  text-base-content p-4'>
			<aside>
				<p>
					Copyright © {new Date().getFullYear()} - All right reserved
				</p>
			</aside>
		</footer>
	)
}

export default Footer
