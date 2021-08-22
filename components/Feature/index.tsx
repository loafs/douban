import React from 'react'

import { Box, Grommet, Tab, Tabs } from 'grommet'
import Usage from './Usage'
import About from './About'

const boxStyle = { maxWidth: 800, marginTop: 20 }
const Features = () => (
  <Grommet>
    <Tabs justify="start" alignControls="start">
      <Tab title="使用">
        <Box style={boxStyle}>
          <Usage />
        </Box>
      </Tab>
      {/* <Tab title="更新日志">
        <Box style={boxStyle}></Box>
      </Tab> */}
      <Tab title="关于">
        <Box style={boxStyle}>
          <About />
        </Box>
      </Tab>
    </Tabs>
  </Grommet>
)

export default Features
