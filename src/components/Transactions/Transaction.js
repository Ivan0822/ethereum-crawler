import React from 'react'
import { Tr, Td, Tag } from '@chakra-ui/react'

const Transaction = ({ transaction }) => {

    return (
        <Tr w="100%">
            <Td w="30%">{transaction.hash}</Td>
            <Td w="5%">{transaction.blockNumber}</Td>
            <Td w="20%">{transaction.from}</Td>
            <Td w="20%">{transaction.to}</Td>
            <Td w="10%" isNumeric="true" >
                <Tag variant="solid" colorScheme="blue">
                    {Number(transaction.value / 1000000000000000000).toFixed(3)} ETH
                </Tag>
            </Td>
        </Tr>
    )
}

export default Transaction