import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Spinner, Box, Flex, Button, Text, Heading } from "@chakra-ui/react"
import Transaction from './Transaction'

const TransactionsTable = ({ transactions, loading, setPageCount, pageCount }) => {


    const handleLoading = () => {

        if (loading === "loading") {
            return (
                <Flex w="100%" h="100vh" justifyContent="center" >
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        size="xl"
                        emptyColor="gray.200"
                        color="blue.500"
                        mt="2rem"
                    />
                </Flex>
            )
        }
        else if (loading === "done") {
            return (
                < Tbody w="100%">
                    {transactions.map(el => <Transaction key={el.hash} transaction={el} />)}
                </Tbody>
            )
        }
        else if (loading === "invalidAddress") {
            return (
                <Flex w="100%" justifyContent="center" mt="4rem">
                    <Heading>Please enter a valid address</Heading>
                </Flex>
            )
        }
        else if (loading === "noTransactions") {
            return (
                <Flex w="100%" justifyContent="center" mt="4rem">
                    <Heading>No transactions found</Heading>
                </Flex>
            )
        }
        else return (
            <Flex w="100%" justifyContent="center" mt="4rem">
                <Heading>Start crawling</Heading>
            </Flex>
        )

    }
    return (

        <Box
            w="100%"
            h={loading === "start" ? "100vh" : "auto"}
        >
            <Flex
                w="100%"
                mt="1.5rem"
                alignItems="center"
                justifyContent="space-between"
            >
                <Text fontWeight="700" fontSize="14px" ml="3rem">Page {pageCount}</Text>
                <Flex mr="3rem">
                    <Button
                        onClick={() => setPageCount(pageCount - 1)}
                        mr="1rem"
                        isDisabled={pageCount === 1 ? true : false}
                    >Prev
                    </Button>
                    <Button
                        onClick={() => setPageCount(pageCount + 1)}
                        isDisabled={loading !== 'done' ? true : false}
                    >Next
                    </Button>
                </Flex>
            </Flex>
            <Table
                w="100%"
                minH="100vh"
                fontSize="10px"
                m="auto"
                mt="1.5rem"
                display="block"
                overflowX="auto"
                whiteSpace="nowrap"

            >
                <Thead w="100%">
                    <Tr>
                        <Th w="30%">Txn Hash</Th>
                        <Th w="5%">Block</Th>
                        <Th w="20%">From</Th>
                        <Th w="20%">To</Th>
                        <Th w="10%">Value</Th>
                    </Tr>
                </Thead>
                {handleLoading()}
            </Table>
        </Box >
    )
}

export default TransactionsTable