import React, { useState } from 'react';

const Button = ({ handleClick, buttonTxt }) => <button onClick={handleClick}>{buttonTxt}</button>

const StatisticLine = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({ data }) => {
  let count = data.good + data.neutral + data.bad
  let average = (data.good - data.bad) / count
  let positive = data.good / count * 100
  if (count === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <StatisticLine text="good" value={data.good} />
      <StatisticLine text="neutral" value={data.neutral} />
      <StatisticLine text="bad" value={data.bad} />
      <StatisticLine text="all" value={count} />
      <StatisticLine text="average" value={average.toFixed(2)} />
      <StatisticLine text="positive" value={positive.toFixed(2) + ' %'} />
    </table>
  )
}
  
const App = () => {
  const [statistics, setStatistics] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleVoteGood = () => {
    setStatistics({ ...statistics, good : statistics.good + 1 })
  }
  const handleVoteNeutral = () => {
    setStatistics({ ...statistics, neutral : statistics.neutral + 1 })
  }
  const handleVoteBad = () => {
    setStatistics({ ...statistics, bad : statistics.bad + 1 })
  }
  return (
    <>
      <h1>Give feedback</h1>
      <Button handleClick={() => handleVoteGood()} buttonTxt="Good" />
      <Button handleClick={() => handleVoteNeutral()} buttonTxt="Neutral" />
      <Button handleClick={() => handleVoteBad()} buttonTxt="Bad" />
      <h1>Statistics</h1>
      <Statistics data={statistics} />
    </>
  );
}

export default App;
