/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { compose, lifecycle, withProps, withState, renderComponent } from 'recompose'
import { reduxForm, reset } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import ERC20ABI from 'contracts/ERC20ABI.json'
import Render from './render';
/*--- Form Validation ---*/
import { createValidator, required } from 'logic/forms/validation'

/* ------------------------ Initialize Dependencies ------------------------- */
import ethers from 'assimilation/symbiosis/ethers/actions'
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
    }
  }
})

const mapDispatchToProps = (dispatch, props) => ({
  
})

/* -------------------------- Form Configuration ---------------------------- */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  switch (data.ethereumSmartContractSelection) {
    case 'erc20':
        data.ethereumSmartContractAbi = ERC20ABI
      break;
  
    default:
      break;
  }
  dispatch(ethers.contractCreate("REQUEST")(
   data,
   {
     delta: 'tokenContract',
     network: {
        provider: 'infura'
     }
   }
  ))

})

const config = {
  form: 'EthereumNonceRequest',
  fields: [
    'ethereumPublicAddress',
    'ethereumNonceStart',
  ],
  destroyOnUnmount: true,
  onSubmit,
}

/* --------------------------- Export Default ------------------------------- */
export default compose(
  defaultProps,
  connect(null, mapDispatchToProps),
  reduxForm(config),
  queryLifecycle,
)(Render);

