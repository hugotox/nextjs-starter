import Link from 'next/link'
import React from 'react'

import { useAppDispatch, useAppSelector } from 'modules/app'
import { selectUser, logout } from 'modules/auth'

export const Private = () => {
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div>
      <h3>Private page example</h3>
      User: <pre>{JSON.stringify(user, null, 2)}</pre>
      <br />
      <Link href="/">
        <a href="/">Home</a>
      </Link>
      <br />
      <Link href="/">
        <a href="/" onClick={handleLogout}>
          Logout
        </a>
      </Link>
      <style jsx>{`
        a {
          color: red;
        }
      `}</style>
    </div>
  )
}
