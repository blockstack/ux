import { validateTxId } from '@common/utils';
import { useMemo } from 'react';
import { useParams } from 'react-router';

export function useParseTxid() {
  const { txid } = useParams();
  return useMemo(() => ({ txid, isValidTxid: validateTxId(txid) }), [txid]);
}
