import React, { useState,useEffect } from 'react'
import { Box,styled } from '@mui/material'
import { useContext } from 'react'
import{DataContext} from '../context/DataProvider'

const Container = styled (Box)`
height:41vh;
`

const Result = () => {

  const[src,setSrc] = useState('');

  const {html,css,js} = useContext(DataContext);

  useEffect(() => {
    const timeout = setTimeout(()=>{
      setSrc(srcCode);
    },1000)

    return () => clearTimeout(timeout);
  },[html,css,js]);


  const srcCode = `
  <html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
  </html>
  `

  return (
    <Container>
      <iframe srcDoc={src} frameborder="0"
      title='Output'
      sandbox='allow-scripts'
      width='100%'
      height='100%'
      ></iframe>
    </Container>
  )
}

export default Result