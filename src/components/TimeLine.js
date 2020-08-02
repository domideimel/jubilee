import React from 'react'
import '../assets/timeline.scss'
const TimeLine = ({ items }) => {
  return (
    <ul className={'timeline my-md-5 my-3'}>
      {items.map(item => (
        <li key={item.title + '-' + item.subtitle}>
          <span className={'mr-2'}>{item.subtitle}</span>
          <span>{item.title}</span>
          {item.content !== '' && <p>{item.content}</p>}
        </li>
      ))}
    </ul>
  )
}

export default TimeLine
