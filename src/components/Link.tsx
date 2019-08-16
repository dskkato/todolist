import React from 'react'

export type Props = {
  active: boolean,
  children: React.ReactNode, // or JSX.Element
  onClick: () => void
}

const Link: React.FC<Props> = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

export default Link
