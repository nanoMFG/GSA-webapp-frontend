import React, {useContext} from 'react'
import {GlobalContext} from "../pages/App";

const Furnace = ({
                   idx,
                   id,
                   tubeDiameter,
                   crossSectionalArea,
                   tubeLength,
                   lengthOfHeatedRegion,
                   isAddedToFilter,
                   isFilter
                 }) => {
  const {dispatch} = useContext(GlobalContext)

  const displayTubeDiameter =
    tubeDiameter
      ? <span className='md:w-1/2'>{tubeDiameter} mm</span>
      : <span className='md:w-1/2'>-</span>

  const displayCrossSectionalArea =
    crossSectionalArea
      ? <span className='md:w-1/2'>{crossSectionalArea} mm&sup2;</span>
      : <span className='md:w-1/2'>-</span>

  const displayTubeLength =
    tubeLength
      ? <span className='md:w-1/2'>{tubeLength} mm</span>
      : <span className='md:w-1/2'>-</span>

  const displayLengthOfHeatedRegion =
    lengthOfHeatedRegion
      ? <span className='md:w-1/2'>{lengthOfHeatedRegion} TODO:UNIT?</span>
      : <span className='md:w-1/2'>-</span>

  let btn = null
  if (isFilter) {
    btn = (
      <button
        className='w-9 h-9 text-center bg-red-500 hover:bg-red-700 text-white text-3xl font-bold rounded focus:outline-none focus:shadow-outline'
        type='button'
        onClick={() => {
          dispatch({type: 'DEL_FURNACE_FILTER', payload: {idx: idx}})
        }}
      >
        -
      </button>
    )
  } else if (isAddedToFilter) {
    btn = (
      <button
        disabled
        className='cursor-default px-2 h-9 text-center bg-purple-500 text-white text-xl font-bold rounded focus:outline-none focus:shadow-outline'
      >
        Added
      </button>
    )
  } else {
    btn = (
      <button
        className='w-9 h-9 text-center bg-green-500 hover:bg-green-700 text-white text-3xl font-bold rounded focus:outline-none focus:shadow-outline'
        type='button'
        onClick={() => {
          dispatch({type: 'ADD_FURNACE_FILTER', payload: {idx: idx}})
        }}
      >
        +
      </button>
    )
  }
  return (
    <div className='flex flex-col py-2 px-4 mb-2 border'>
      <div className='flex justify-between'>
        <h6 className='font-bold ml-3'> Furnace #{id}</h6>
        {btn}
      </div>
      <hr className='my-1'/>
      <div className='w-full md:flex md:items-center mb-1'>
        <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Tube Diameter :</span>
        {displayTubeDiameter}
      </div>
      <div className='w-full md:flex md:items-center mb-1'>
        <span
          className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Cross Sectional Area :</span>
        {displayCrossSectionalArea}
      </div>
      <div className='w-full md:flex md:items-center mb-1'>
        <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Tube Length :</span>
        {displayTubeLength}
      </div>
      <div className='w-full md:flex md:items-center mb-1'>
        <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Length of Heated Region :</span>
        {displayLengthOfHeatedRegion}
      </div>
    </div>
  )
}

export default Furnace
