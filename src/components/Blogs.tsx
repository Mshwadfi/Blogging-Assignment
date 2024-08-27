import Cookies from 'js-cookie'
import React from 'react'

const Blogs = () => {
  const sess = Cookies.get('token');
  console.log(sess, 'session')
  return (
    <div>
      
    </div>
  )
}

export default Blogs
