import React from 'react'

const   Icon = () => {
  return (
<>
    <div className="border border-gray-200 p-4   mt-10">
                    <div className="grid grid-cols-3 gap-4 text-gray-700">
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-credit-card"></i>
                            <span>Accepts Credit Cards</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-paw"></i>
                            <span>Pets Friendly</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-tag"></i>
                            <span>Offering a Deal</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-car"></i>
                            <span>Parking</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-wifi"></i>
                            <span>Wireless Internet</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-apple-alt"></i>
                            <span>Apple Pay</span>
                        </div>
                    </div>
                </div>
</>
  )
}

export default Icon