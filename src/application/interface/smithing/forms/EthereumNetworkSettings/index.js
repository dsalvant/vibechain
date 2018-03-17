/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { compose, lifecycle, withProps, withState, renderComponent } from 'recompose'
import { reduxForm, formValueSelector, reset } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
/*--- Form Validation ---*/
import { createValidator, required } from 'logic/forms/validation'

import Render from './render';
/* ------------------------ Initialize Dependencies ------------------------- */
import ethers from 'assimilation/symbiosis/ethers/actions'
import { fromEthers } from 'assimilation/symbiosis/selectors'
/* ---------------------------- Module Package ------------------------------ */
/*---*--- Recompose ---*---*/
const defaultProps = withProps({
  onSubmit,
})

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {

  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(this.props.submitting === true) {
      this.props.reset()
      this.props.clearSubmit()
    }
  }
})

const mapStateToProps = (state, props) => ({
  ethereumProvider: fromEthers.getDelta(state, 'provider'),
  ethereumChain: fromEthers.getDelta(state, 'chain'),
  ethereumURL: fromEthers.getDelta(state, 'url'),
  providerCurrent: formValueSelector('EthereumNetworkSettings')(state, 'ethereumProvider')
})
const mapDispatchToProps = (dispatch, props) => ({
  
})

/* -------------------------- Form Configuration ---------------------------- */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  if(data.ethereumProvider) {
    dispatch(ethers.providerChange({
      payload: data.ethereumProvider,
    }))
  }
  if(data.ethereumChain) {
    dispatch(ethers.chainChange({
      payload: data.ethereumChain,
    }))
  }
  if(data.ethereumJSONRpcURL) {
    dispatch(ethers.jsonRpcUrlChange({
      payload: data.ethereumJSONRpcURL,
    }))
  }
})

const config = {
  form: 'EthereumNetworkSettings',
  fields: [
    'ethereumChain',
    'ethereumProvider',
  ],
  destroyOnUnmount: true,
  destroyOnSubmit: true,
  onSubmit,
}

/* --------------------------- Export Default ------------------------------- */
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm(config),
  defaultProps,
  queryLifecycle,
)(Render);

