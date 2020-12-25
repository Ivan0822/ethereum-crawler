import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getTransactionsByAddress } from '../../services'
import TransactionsForm from './TransactionsForm'
import TransactionsTable from './TransactionsTable'

const Transactions = ({ web3 }) => {

    const [transactions, setTransactions] = useState([])
    const [address, setAddress] = useState('')
    const [startingBlock, setStartingBlock] = useState(0)
    const [pageCount, setPageCount] = useState(1)
    const [loading, setLoading] = useState('start')


    // const tmpAddress = '0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f'

    const handleTransactions = () => {

        setLoading('loading')
        getTransactionsByAddress(address, startingBlock, pageCount)
            .then(res => {

                if (res.data.message === "OK") {
                    setLoading('done')
                    setTransactions(res.data.result)
                }
                else if (res.data.message === "No transactions found") {
                    setLoading('noTransactions')
                }
                else {
                    setLoading('invalidAddress')
                }

            })
            .catch(err => {
                console.error(err);
            })
    }
    useEffect(() => {

        if (address !== '') {
            handleTransactions()
        }

    }, [pageCount])

    return (

        <Box w="100%">
            <TransactionsForm
                setAddress={setAddress}
                setStartingBlock={setStartingBlock}
                handleTransactions={handleTransactions}
                web3={web3}
            />
            <TransactionsTable
                transactions={transactions}
                loading={loading}
                setPageCount={setPageCount}
                pageCount={pageCount}
            />
        </Box>
    )
}

export default Transactions