import React from 'react'
import '../App.css';
import {Box,styled} from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledEditor} from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

const Heading = styled(Box)`
background:#1d1e22;
display:flex;
padding: 9px 12px;
`
const Header = styled(Box)`
display: flex;
    justify-content: space-between;
    background: #060606;
    color: #AAAEBC;
    font-weight: 700;
`


const Editor = () => {
  return (
    <Box>
      <Header>
        <Heading  >
          <Box component="span"
          style={{
            background:'red',
            height:20,
            width:20,
            display:'flex',
            placeContent:'center',
            borderRadius:5,
            marginRight:5,
            paddingBottom:2
          }}
          >/</Box>
        HTML
        </Heading>
        <CloseFullscreenIcon/>
      </Header>
      <ControlledEditor
      className='controlled-editor'
      options={{
        theme:'material',
        lineNumbers:true
      }}
      />
    </Box>
  )
}

export default Editor