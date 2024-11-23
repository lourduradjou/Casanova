import React from 'react'

const Loader = () => {
	return (
		<div className='absolute w-full min-h-screen flex justify-center items-center z-30'>
			<span className='loading loading-ring loading-lg'></span>
		</div>
	)
}

export default Loader
