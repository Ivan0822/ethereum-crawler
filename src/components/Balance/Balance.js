import React, { useState } from 'react'
import Web3 from 'web3'
import BalanceContainer from './BalanceContainer'
import BalanceForm from './BalanceForm'
import moment from 'moment'
import EthDater from 'ethereum-block-by-date'
import { Flex, Heading } from '@chakra-ui/react'

const Balance = () => {

    const [address, setAddress] = useState('')
    const [balance, setBalance] = useState(0)
    const [date, setDate] = useState(moment().utc().format("YYYY-MM-DD"))
    const [loading, setLoading] = useState('start')


    const url = 'https://mainnet.infura.io/v3/e020c80fc2044f7c86295e4c6adaba93'

    const web3 = new Web3(new Web3.providers.HttpProvider(url))

    // const tmpAddress = '0xd7B9A9b2F665849C4071Ad5af77d8c76aa30fb32'

    const dater = new EthDater(
        web3
    );

    let block = dater.getDate(
        date,
        true
    );

    const handleBalance = async (e) => {

        e.preventDefault()

        web3.eth.getBalance(address, (await block).block).then(res => {
            setBalance((res / 1000000000000000000))
            setLoading('done')
        })
    }

    return (

        <>
            <BalanceForm
                setAddress={setAddress}
                date={date}
                setDate={setDate}
                setBalance={setBalance}
                handleBalance={handleBalance}
            />
            {
                loading === 'start' ?
                    <Flex h="100vh" w="100%" justifyContent="center">
                        <Heading mt="3rem">Start checking</Heading>
                    </Flex>
                    :
                    <BalanceContainer
                        balance={balance}
                        address={address}
                        date={date}
                    />
            }

        </>
    )
}

export default Balance