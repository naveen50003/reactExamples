import React from 'react';
import { Link } from 'react-router';

const LinkView	= ({filter,children,changeVisibility}) => (

	<Link
	    to={filter === 'all' ? '' : filter}
	    activeStyle={{
	      textDecoration: 'none',
	      color: 'black'
	    }}
		onClick	={()=>changeVisibility(filter)}
	  >
  	{children}
  </Link>
)
export default LinkView
