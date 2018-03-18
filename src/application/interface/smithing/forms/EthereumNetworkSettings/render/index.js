/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import {
  SelectField,
} from 'redux-form-material-ui'
/* ------------------------- Internal Dependencies -------------------------- */
import { Block } from 'particles'
import FormBase from 'workshop/form/FormBase'
import {
  Flex, Box, Button, Heading, Paragraph, ReduxField
} from 'atomic'
import StyleFormDefault from 'static/style/StyleFormDefault'
/* ---------------------------- Form Component ------------------------------ */
Block.defaultProps = {is: 'form'}
export default ({ handleSubmit, isSubmitting, styled, ...props}) => isSubmitting ? null :
<FormBase {...styled}>

  <Flex justify='space-evenly' color='white' >
    <Paragraph level={[3]} f={[2]}>
      <strong>Chain:</strong> { props.ethereumChain }
    </Paragraph>
    <Heading level={[3]} f={[2]}>
      Provider: { props.ethereumProvider }
    </Heading>
    {
      !props.ethereumURL ? null :
      <Heading level={[3]} f={[2]}>
        URL: { props.ethereumURL }
      </Heading>
    }
  </Flex>

  <Box>
    <Field
      name="ethereumChain"
      component={SelectField}
      value={'kovan'}
      floatingLabelText="Select Chain"
      floatingLabelStyle={{
        color: '#FFF'
      }}
      labelStyle={{
        color: '#FFF'
      }}
      fullWidth
    >
      <MenuItem value="homestead" primaryText="Homestead" />
      <MenuItem value="ropsten" primaryText="Ropsten" />
      <MenuItem value="rinkeby" primaryText="Rinkeby" />
      <MenuItem value="kovan" primaryText="Kovan" />
    </Field>
  </Box>
  <Box>
    <Field
      name="ethereumProvider"
      component={SelectField}
      floatingLabelText="Select Provider"
      floatingLabelStyle={{
        color: '#FFF'
      }}
      labelStyle={{
        color: '#FFF'
      }}
      fullWidth
    >
      <MenuItem value="infura" primaryText="Infura" />
      <MenuItem value="etherscan" primaryText="Etherscan" />
      <MenuItem value="jsonrpc" primaryText="JSONRpc" />
    </Field>
  </Box>
  {
    props.providerCurrent != 'jsonrpc' ? null :
    <Box>
      <Field name="ethereumJSONRpcURL" placeholder="URL" component={ReduxField} type="text"
      {...StyleFormDefault}
    />
    </Box>
  }
  <Box mt={10} >
    <Button type="submit" onClick={handleSubmit} gradient='cherry'w={1} >Submit</Button>
  </Box>
</FormBase>
