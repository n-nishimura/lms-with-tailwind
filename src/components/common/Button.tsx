import React from "react"
//propsの型定義していない
export const Button = (props) => {
  
  console.log(props)
  const {children} = props ;
  return (
  <div className='bg-red-700 text-white inline-block p-10 rounded-lg font-bold m-10'>{children}</div>
  )
};
//ctl + spaceで補完
