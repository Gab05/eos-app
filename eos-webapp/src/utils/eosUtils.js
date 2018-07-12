import Eos from 'eosjs'

export const getChainId = (httpEndpoint) => {
  return Eos({ httpEndpoint }).getInfo({}).then((res) => res.chain_id).catch(() => '0000000000')
}
