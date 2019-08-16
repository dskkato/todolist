import React from 'react'

export type Props = {
  readonly active: boolean,
  readonly children: React.ReactNode, // or JSX.Element
  readonly onClick: () => void
}

const Link: React.FC<Props> = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <button
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: '4px',
      }}
    >
      {children}
    </button>
  )
}

export default Link
