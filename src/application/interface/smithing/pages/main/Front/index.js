/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { images} from 'assets'
import {
  Absolute, Box, Container, Flex, Fixed,
  Heading, Image, Paragraph, Link, Span, 
  BackgroundImage, BackgroundGradient
} from 'atomic'

import EthereumNetworkSettings from 'smithing/forms/EthereumNetworkSettings'
import EthereumUploadContract from 'smithing/forms/EthereumUploadContract'
import EthereumTransactionsGenerate from 'smithing/forms/EthereumTransactionsGenerate'

import EthereumGeneratedTransaction from 'smithing/containers/EthereumGeneratedTransaction'
import UPortCredentialsRequest from 'assimilation/fetching/uport/UPortCredentialsRequest'
import UPortSendTransactionRequest from 'assimilation/fetching/uport/UPortSendTransactionRequest'

/* ------------------------------- Component -------------------------------- */
export default props =>
<Box>
  <Flex align='center' justify='center' py={50} >
      <Container w={[620]} py={50} px={50} >
        <Heading level={[3]} f={[3,4]} color='blue' mb={25} ta='center' >
          VibeChain - Make The Blockchain a Party
        </Heading>
        <UPortCredentialsRequest text= />
        <br/>
        <br/>
        <UPortSendTransactionRequest text={'RSVP to Party'} />
      </Container>
    </Flex>
</Box>