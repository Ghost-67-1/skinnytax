import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

const LoadingComponent = () => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
      <CircularProgress />
    </div>
  )
}

export default LoadingComponent