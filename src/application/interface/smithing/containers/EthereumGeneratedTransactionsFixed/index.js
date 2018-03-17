/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { compose } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import Render from './component';
/* ------------------------ Initialize Dependencies ------------------------- */
import { fromEthers } from 'assimilation/symbiosis/selectors'
/* ---------------------------- Module Package ------------------------------ */
const mapStateToProps = (state, props) => ({
  transactions: fromEthers.getDeltaData(state, 'transaction|batch'),
  transactionsStatus: fromEthers.getDeltaStatus(state, 'transaction|batch'),
})
/* --------------------------- Export Default ------------------------------- */
export default compose(
  connect(mapStateToProps),
)(Render);

