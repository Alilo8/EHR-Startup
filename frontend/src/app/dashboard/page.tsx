'use client'
import React from 'react'

const dashboard = () => {
  const item = localStorage.getItem('UserData')
  console.log(JSON.parse(item!))
  return (
    <div>dashboard</div>
  )
}

export default dashboard