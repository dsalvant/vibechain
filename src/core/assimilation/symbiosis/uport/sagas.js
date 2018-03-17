/* ------------------------- External Dependencies -------------------------- */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import ERC20 from 'contracts/EIP20ABI.json'
/* ------------------------- Internal Dependencies -------------------------- */
import uPortConnection from 'logic/services/uPort';
import {
  UPORT_GET_WEB3_REQUEST,
  UPORT_GET_PROVIDER_REQUEST,
  UPORT_GET_CREDENTIALS_REQUEST,
  UPORT_GET_ADDRESS_REQUEST,
  UPORT_GET_ATTEST_CREDENTIALS_REQUEST,
  UPORT_INIT_CONTRACT_REQUEST,
  UPORT_SEND_TRANSACTION_REQUEST,
  UPORT_ADD_APP_PARAMETERS_REQUEST,
} from './actions'
import {
  uPortGetWeb3Success,
  uPortGetWeb3Failure,
  uPortGetProviderSuccess,
  uPortGetProviderFailure,
  uPortGetCredentialsSuccess,
  uPortGetCredentialsFailure,
  uPortGetAddressSuccess,
  uPortGetAddressFailure,
  uPortGetAttestCredentialsSuccess,
  uPortGetAttestCredentialsFailure,
  uPortInitContractSuccess,
  uPortInitContractFailure,
  uPortSendTransactionSuccess,
  uPortSendTransactionFailure,
  uPortAddAppParametersSuccess,
  uPortAddAppParametersFailure,
} from './actions'

/*---*--- Get Web3 ---*---*/
function* getWeb3({payload, metadata}) {
  try {

    yield put(uPortGetWeb3Success({
      payload: {}, 
      metadata
    }))
  } catch(e) {
    yield put(uPortGetWeb3Failure({payload: e, metadata}))
  }
}


/*---*--- Get Provider ---*---*/
function* getProvider({payload, metadata}) {
  try {

    yield put(uPortGetProviderSuccess({
      payload: {}, 
      metadata
    }))
  } catch(e) {
    yield put(uPortGetProviderFailure({payload: e, metadata}))
  }
}


/*---*--- Get Credentials ---*---*/
function* getCredentials({payload, metadata}) {
  try {
    const requestedCredentials = payload
    const credentials = yield uPortConnection.requestCredentials(requestedCredentials)
    yield put(uPortGetCredentialsSuccess({
      payload: credentials, 
      metadata
    }))
  } catch(e) {
    yield put(uPortGetCredentialsFailure({payload: e, metadata}))
  }
}


/*---*--- Get Address ---*---*/
function* getAddress({payload, metadata}) {
  try {
    const { uriHandler } = payload
    const address = yield uPortConnection.requestAddress(uriHandler)
    yield put(uPortGetAddressSuccess({
      payload: address, 
      metadata
    }))
  } catch(e) {
    yield put(uPortGetAddressFailure({payload: e, metadata}))
  }
}


/*---*--- Get Attest Credentials ---*---*/
function* getAttestCredentials({payload, metadata}) {
  try {
    
    const { credentials, uriHandler } = payload
    const address = yield uPortConnection.attestCredentials(payload, uriHandler)
    yield put(uPortGetAttestCredentialsSuccess({
      payload: payload.claim, 
      metadata
    }))
  } catch(e) {
    yield put(uPortGetAttestCredentialsFailure({payload: e, metadata}))
  }
}


/*---*--- Init Contract ---*---*/
function* initContract({payload, metadata}) {
  try {
    const { abi } = payload
    const { delta } = metadata
    const uPortContractObject = yield uPortConnection.contract(abi)
    window.uport.contracts[delta] = uPortContractObject
    yield put(uPortInitContractSuccess({
      payload: {}, 
      metadata
    }))
  } catch(e) {
    e
    yield put(uPortInitContractFailure({payload: e, metadata}))
  }
}


/*---*--- Send Transaction ---*---*/
function* sendTransaction({payload, metadata}) {
  try {
    const { transaction } = payload
     
    const contractInstance = uPortConnection.contract(ERC20)
    const contract = contractInstance.at('0x21221cc41249e565d9c824535064c374a152e251')
    console.log(contract)
    // const txobject = {
    //   from: '0xb934ebcbcfee3d492e47d8f702546ef1a8aa9d87',
    //   to: '0x21221cc41249e565d9c824535064c374a152e251',
    //   function: contract.transfer('0x33A464CdA2CA86710b6d37F20DB92192E4595DCE', 500),
    // }
    // console.log(two)
    contract.transfer('0xbbD63Bae82A8c720583aa491ad875564Bc4B393f', 500);
    // const transactionId = yield uPortConnection.sendTransaction(txobject)

    yield put(uPortSendTransactionSuccess({
      payload: '', 
      metadata
    }))
  } catch(e) {
    console.log(e)
    yield put(uPortSendTransactionFailure({payload: e, metadata}))
  }
}


/*---*--- Add App Parameters ---*---*/
function* addAppParameters({payload, metadata}) {
  try {

    yield put(uPortAddAppParametersSuccess({
      payload: {}, 
      metadata
    }))
  } catch(e) {
    yield put(uPortAddAppParametersFailure({payload: e, metadata}))
  }
}

export default function* rxdbRootSaga() {
  yield [
   takeEvery(UPORT_GET_WEB3_REQUEST, getWeb3),
   takeEvery(UPORT_GET_PROVIDER_REQUEST, getProvider),
   takeEvery(UPORT_GET_CREDENTIALS_REQUEST, getCredentials),
   takeEvery(UPORT_GET_ADDRESS_REQUEST, getAddress),
   takeEvery(UPORT_GET_ATTEST_CREDENTIALS_REQUEST, getAttestCredentials),
   takeEvery(UPORT_INIT_CONTRACT_REQUEST, initContract),
   takeEvery(UPORT_SEND_TRANSACTION_REQUEST, sendTransaction),
   takeEvery(UPORT_ADD_APP_PARAMETERS_REQUEST, addAppParameters),
  ];
}