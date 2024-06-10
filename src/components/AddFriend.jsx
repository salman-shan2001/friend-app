import React, { useState } from 'react'
import Navebar from './Navebar'
import { configure } from '@testing-library/react'
import axios from 'axios'

const AddFriend = () => {
    const [friend, changefriend] = useState(
        {

            "name": "",
            "friendName": "",
            "friendNickName": "",
            "DescribeYourFriend": ""

        }

    )

    const inputhandler = (event) => {
        changefriend({ ...friend, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(friend)
        axios.post("https://friendsapi-re5a.onrender.com/adddata", friend).then(
            (response) => {
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("friend data added")
                    
                } else {
                    alert("error")
                }
        }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        )
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <Navebar />
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label" >name</label>
                                <input type="text" className="form-control" name='name' value={friend.name} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label" >friendName</label>
                                <input type="text" className="form-control" name='friendName' value={friend.friendName} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label" >friendNickName</label>
                                <input type="text" className="form-control" name='friendNickName' value={friend.friendNickName} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">DescribeYourFriend</label>
                                <input type="text" className="form-control" name='DescribeYourFriend' value={friend.DescribeYourFriend} onChange={inputhandler} />
                            </div>
                            <center>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-success" onClick={readValue}>ADD</button>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddFriend
