import React, {useState} from 'react'; 
import {FaArrowUp} from 'react-icons/fa'; 

const ScrollButton = () =>{ 

const [visible, setVisible] = useState(false) 

const toggleVisible = () => { 
	const scrolled = document.documentElement.scrollTop; 
	if (scrolled > 300){ 
	setVisible(true) 
	} 
	else if (scrolled <= 300){ 
	setVisible(false) 
	} 
}; 

const scrollToTop = () =>{ 
	window.scrollTo({ 
	top: 0, 
	behavior: 'smooth'
	/* you can also use 'auto' behaviour 
		in place of 'smooth' */
	}); 
}; 

window.addEventListener('scroll', toggleVisible); 

return ( 
	<button className='bg-blue-600 hover:bg-blue-800 rounded-full p-3 m-3'> 
	<FaArrowUp className='text-4xl  text-white' onClick={scrollToTop} 
	    style={{display: visible ? 'inline' : 'none'}} /> 
	</button> 
); 
} 

export default ScrollButton; 
