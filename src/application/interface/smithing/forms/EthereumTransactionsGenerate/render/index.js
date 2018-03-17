/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import EthereumTx from 'ethereumjs-tx'
/* ------------------------- Internal Dependencies -------------------------- */
import { Block } from 'particles'
import FormBase from 'workshop/form/FormBase'
import {
  Flex, Box, 
  Heading, Image, Paragraph, Link, Span, Button,
  BackgroundImage, BackgroundGradient,
  ReduxField
} from 'atomic'
import StyleFormDefault from 'static/style/StyleFormDefault'
/* ---------------------------- Form Component ------------------------------ */
Block.defaultProps = {is: 'form'}
export default ({ handleSubmit, isSubmitting, styled}) => (
<FormBase {...styled}>
  <Box>
    <Field name="ethereumTokenAmount" placeholder="Token Count (Total amount of tokens sent to each address.)" component={ReduxField} type="text"
      height={50}
      {...StyleFormDefault}      
    />
    <Field name="ethereumGasPrice" placeholder="Gas Price" component={ReduxField} type="text"
      {...StyleFormDefault}
    />
    <Field name="ethereumGasLimit" placeholder="Gas Limit" component={ReduxField} type="text"
      {...StyleFormDefault}      
    />
    <Field name="ethereumAddressList" placeholder="Public Address List CSV" component={ReduxField} type="textarea"
      {...StyleFormDefault}      
    />
  </Box>
  <Box mt={10} >
    <Button type="submit" onClick={handleSubmit} gradient='cherry'w={1} >Submit</Button>
  </Box>
</FormBase>
)