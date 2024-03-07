import React from 'react'
import { Outlet } from 'react-router-dom'
import DeducNav from '../../components/navbar/DeducNav'

export default function Deduction() {
  return (
    <>
    <DeducNav/>
    <Outlet/>
    </>
  )
}
