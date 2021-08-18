import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'


const store = createStore(reducer)

const StatisticLine = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = () => {
  let count = store.getState().good + store.getState().ok + store.getState().bad
  let average = (store.getState().good - store.getState().bad) / count
  let positive = store.getState().good / count * 100
  if (count === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <StatisticLine text="good" value={store.getState().good} />
      <StatisticLine text="neutral" value={store.getState().ok} />
      <StatisticLine text="bad" value={store.getState().bad} />
      <StatisticLine text="all" value={count} />
      <StatisticLine text="average" value={average.toFixed(2)} />
      <StatisticLine text="positive" value={positive.toFixed(2) + ' %'} />
    </table>
  )
}

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  const ok = () => {
    store.dispatch({
      type: 'OK'
    })
  }  
  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }
  const zero = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  return (
    <div>
      <button onClick={good}>good</button> 
      <button onClick={ok}>neutral</button> 
      <button onClick={bad}>bad</button>
      <button onClick={zero}>reset stats</button>
      <Statistics />
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)