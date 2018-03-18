/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import {
  SelectField,
} from 'redux-form-material-ui'
/* ------------------------- Internal Dependencies -------------------------- */
import FormBase from 'workshop/form/FormBase'
import { Flex, Box, Button, Heading, Paragraph, ReduxField } from 'atomic'
import StyleFormDefault from 'static/style/StyleFormDefault'
/* ---------------------------- Form Component ------------------------------ */
export default ({ handleSubmit, isSubmitting, styled}) => (
<FormBase {...styled}>
  <Field
      name="ethereumSmartContractSelection"
      component={SelectField}
      floatingLabelText="Select Token Specification"
      fullWidth
    >
      <MenuItem value="erc20" primaryText="ERC20" />
    </Field>
  <Field name="ethereumSmartContractAddress" placeholder="Smart Contract Address" component={ReduxField} type="text" {...StyleFormDefault} />
  <Field name="ethereumPrivateKey" placeholder="Wallet Private Key" component={ReduxField} type="password" {...StyleFormDefault}/>
  <Box mt={10} >
    <Button type="submit" onClick={handleSubmit} gradient='cherry'w={1} >Initialize Contract Communication</Button>
  </Box>
</FormBase>
)