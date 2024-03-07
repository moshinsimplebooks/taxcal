import React from 'react'
import IncNav from '../../components/navbar/IncNav'
import { Outlet } from 'react-router-dom'

export default function Income() {
  return (
    <>
    <IncNav/>
    <Outlet/>
    </>
  )
}
