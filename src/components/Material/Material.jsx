import React from 'react'
import PropTypes from 'prop-types'

// import { useDispatch, useSelector } from 'react-redux'

function Material (props) {
  const { material, onClick } = props
  return (
    <div onClick={onClick} className='my-3 flex rounded-md border-4 border-[#f5f2ef] bg-[#f5f2ef] shadow-md'>
      <div style={{
        color: '#7a7676',
        // background: '#f5f2ef',
        // fontWeight: '100'
      }} className='flex w-36 items-center justify-center text-sm text-[#7a7676]'>{material.name}</div>
      <div className=''><img className='h-24 w-24' src={material.materialPreview} /></div>
    </div>
  )
}

Material.propTypes = {}

export default Material
