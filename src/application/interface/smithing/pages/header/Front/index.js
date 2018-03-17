/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { music } from 'assets/images'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Section {...props} px={[20,40]} py={[20, 40]} color='white' textAlign='center' pos='relative' >
  <BackgroundImage src={music} o={0.35} />
  <Flex direction={['column']}  mh={['70vh']}justify={['center']} >
    <Box w={1} color="white" >
      <Heading fontSize={[6,7]} level={3} fontWeight={[300]} mb={10} textShadow='darkHazy' >
        VibeChain
      </Heading>
      <Paragraph f={[4]} textShadow='lightHazy' >
        A Blockchain Party - BlockParty
      </Paragraph>
    </Box>
  </Flex>
</Section>
