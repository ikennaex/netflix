import React from 'react'
import "./PlansScreen.css"

const PlansScreen = () => {
    const plans = [
        {
            id: 1,
            productName: "Premium",
            productdesc: "4k + HDR"
        },
        
        {
            id: 2,
            productName: "Standard",
            productdesc: "1080p"
        },
                
        {
            id: 3,
            productName: "Basic",
            productdesc: "720p"
        },
    ]
  return (
    <div className='plans-screen'>
        {plans.map((plans) => {
            return (
                <div className='plansscreen-plan'>
                <div className='plansscreen-info'>
                <h5>{plans.productName}</h5>
                <h5>{plans.productdesc}</h5>
                </div>

                <button>Subscribe</button>
            </div>
            )

        })}
    </div>
  )
}

export default PlansScreen