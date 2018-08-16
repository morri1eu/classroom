import React from "react"

const Student= (props) => (
    <div>
        <p className="student">ID: {props.id}</p>
        <p className="student">Name: {props.name}</p>
        <p className="student">Favorite Subject: {props.favoriteSubject}</p>
        <button onClick={()=>props.rollCall(props.name, props.favoriteSubject)}>Roll Call</button>
        <hr/>
    </div>
)

export default Student