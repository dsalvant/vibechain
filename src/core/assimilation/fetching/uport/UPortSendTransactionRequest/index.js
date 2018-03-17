/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import { fromUport } from 'assimilation/symbiosis/selectors'
import { uPortSendTransactionRequest } from 'assimilation/symbiosis/actions'
import UPortSendTransaction from 'assimilation/display/uport/UPortSendTransaction'
/* ---------------------------- Module Package ------------------------------ */

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
    data: fromUport.getDeltaData(state, `credentials`),
    status: fromUport.getDeltaStatus(state, `credentials`)
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  sendTransactionRequest: ()=>dispatch(uPortSendTransactionRequest({
    payload: {},
    metadata: {
      delta: 'transaction|request'
    }
  })),
})


export default connect(mapStateToProps, mapDispatchToProps)(UPortSendTransaction);