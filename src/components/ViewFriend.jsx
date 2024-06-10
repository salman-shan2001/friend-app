import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navebar from './Navebar'

const ViewFriend = () => {
    const [friend,changefriend]=useState([])
    const fetchData=()=>{
        axios.get("https://friendsapi-re5a.onrender.com/view").then(
            (response)=>{
                changefriend(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)

                alert(error.message)
            }
        ).finally()
    }

    useEffect(
        ()=>{fetchData()},[]
    )
  return (
    <div>
      <div className="container">
        <div className="row">
            <Navebar/>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">_id</th>
      <th scope="col">name</th>
      <th scope="col">friendName</th>
      <th scope="col">DescribeYourFriend</th>
    </tr>
  </thead>
  <tbody>
    {
        friend.map(
            (value,index)=>{
                return <tr>
                <th scope="row">{value._id}</th>
                <td>{value.name}</td>
                <td>{value.friendName}</td>
                <td>{value.DescribeYourFriend}</td>
              </tr>
            }
        )
    }
  </tbody>
</table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ViewFriend
