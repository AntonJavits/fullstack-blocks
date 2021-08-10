import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return(
    <p>{props.name} {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <>
      {props.parts.map(part =>
        <Part key={part.id} name={part.name} exercises={part.exercises}/>
      )}
    </>
  )
}

const Total = (props) => {
  let total = props.parts.reduce((accumulator, currentValue) => {    
    return accumulator + currentValue.exercises
  }, 0)
  return (
    <p><strong>Total of {total} exercises</strong></p>
  )
}

const Course = ({ course }) => {
  return(
    <div className="courseDiv">
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}

export default Course