import React from 'react'

function P({name, id,bio,year,gender,info}) {
  return (
    <div>
        <p className="student_name">Name: {name} </p>
        
        <p className="student_id">Student ID:{id}</p>

        <p className="student_bio">General Information: {bio}</p>

        <p className="student_year">Year: {year}</p>

        <p className="student_gender">Gender: {gender}</p>

        <p className="student_info">Info: {info}</p>
        
    </div>
  )
}

export default P