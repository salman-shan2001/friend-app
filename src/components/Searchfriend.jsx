import React from 'react'
import Navebar from './Navebar'

const Searchfriend = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <Navebar/>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-form">name</label>
                <input type="text" className="form-label" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               <button className="btn btn-primary">SEARCH</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Searchfriend
