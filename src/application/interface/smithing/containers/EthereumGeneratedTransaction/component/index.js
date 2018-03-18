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
<Box>
  {
    !props.transactionsStatus ? null :
    <Box>
      {
        props.transactions.map(tx=><Box bg='grayLight' color='charcoal' p={15} br={10} boxShadow={1}  mb={15}>
          <a href={`https://rinkeby.etherscan.io/tx/${tx.hash}`} target="_blank" rel="noopener noreferrer" >EtherScan Transaction Link</a>
          <Heading level={[3]} f={[3]}>
            Transaction Hash:{tx.hash}
          </Heading>
        </Box>)
      }
    </Box>
  }
</Box>