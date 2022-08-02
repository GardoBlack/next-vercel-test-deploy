

import { FC } from 'react'

export const DarkLayout = ({children}) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadiues: '5px',
        padding: '10px'
    }}>

        <h3>Dark Mode</h3>
        <div>
            {children}
        </div>
    </div>
  )
}
