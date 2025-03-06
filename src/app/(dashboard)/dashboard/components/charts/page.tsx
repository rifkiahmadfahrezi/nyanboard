import React from 'react'
import { Chart1, Chart2, Chart3 } from '@/examples/charts'

const ChartsExample = () => {
  return (
   <>
   <h1 className="heading-2 mb-5">
      Chart examples
   </h1>
    <div className='grid gap-4 grid-cols-1 md:grid-cols-3'>
      <Chart1 />
      <Chart2 />
      <Chart3 />
    </div>
   <a href="https://ui.shadcn.com/charts" target='_blank'>View more</a>
   </>
  )
}

export default ChartsExample