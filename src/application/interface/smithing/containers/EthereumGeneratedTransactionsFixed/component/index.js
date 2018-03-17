/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { uiMinimize, uiExpand } from 'assets/icons'
import {
  Absolute, Flex, Box, Fixed, Button,
  Heading, Image, Paragraph, Link, Span, SVG
} from 'atomic'
/* ---------------------------- Form Component ------------------------------ */
export default props => 
<Fixed bottom left right gradient='blue' color='white' py={20} zIndex={100} {...props.layout}  {...props} >
  <Flex justify='space-evenly' >
    {
      !props.minimized ? null :
      <Absolute top right bottom mr={10}  onClick={()=>props.layoutFocus()}>
        <Flex align='center' justify='center' >
          <SVG svg={uiExpand} svgColor='white' w={25} /> Expand
        </Flex>
      </Absolute>
    }
    {
      props.minimized ? null :
      <Absolute top right mr={10}  onClick={()=>props.layoutMinimal()}>
        <Flex align='center' justify='center' >
          <SVG svg={uiMinimize} svgColor='white' w={25} />
        </Flex>
        </Absolute>
    }
    {
    !props.transactionsStatus ? null :
    <Box>
      {
        props.transactions.map(tx=><Box bg='grayLight' color='charcoal' p={15} br={10} boxShadow={1}  mb={15}>
          <a target="_blank" href={`https://rinkeby.etherscan.io/tx/${tx.hash}`}>EtherScan Transaction Link</a>
          <Heading level={[3]} f={[3]}>
            Transaction Hash:{tx.hash}
          </Heading>
        </Box>)
      }
    </Box>
  }
</Fixed>