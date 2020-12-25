import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const TransactionsForm = ({ setAddress, setStartingBlock, handleTransactions, web3 }) => {

    const [maxBlockNumber, setMaxBlockNumber] = useState(0)


    useEffect(() => {
        web3.eth.getBlockNumber().then(res => {
            setMaxBlockNumber(res);
        })
    }, [])

    const handleSubmit = (e) => {

        e.preventDefault()
        handleTransactions()
    }

    return (

        <Flex
            w="100%"
            m="auto"
            h={{ base: "40vh", md: "8vh" }}
            justifyContent={{ base: "space-evenly", md: "space-between" }}
            alignItems="center"
            boxShadow="0 4px 2px -2px lightgray"
            flexDirection={{ base: "column", md: "row" }}
        >
            <Box>
                <Text
                    textAlign="center"
                    h="100%"
                    ml={{ base: "0rem", md: "2rem" }}
                    mt={{ base: "1rem", md: "0" }}
                    fontWeight="700"
                >
                    Transactions
                </Text>
            </Box>

            <form onSubmit={handleSubmit}>
                <Flex
                    alignItems="center"
                    h="100%"
                    flexDirection={{ base: "column", md: "row" }}
                    justifyContent="space-evenly"
                >
                    <Text
                        htmlFor="address"
                        mr={{ base: "0rem", md: "1rem" }}
                        w="8rem"
                    >Enter address
                </Text>
                    <Input
                        name="address"
                        type="text"
                        placeholder="Address"
                        minLength="42"
                        maxLength="42"
                        onChange={(e) => setAddress(e.target.value)}
                        w={{ base: "100%", md: "50%" }}
                        mr={{ base: "0rem", md: "2rem" }}
                        mt={{ base: "0.5rem", md: "0" }}
                        isRequired="true"
                    />

                    <Text
                        htmlFor="startingBlock"
                        mr="1rem"
                        mt={{ base: "1.5rem", md: "0" }}
                    >Enter Block
                </Text>
                    <Input
                        name="startingBlock"
                        type="number"
                        placeholder="Starting Block"
                        min="0"
                        max={maxBlockNumber}
                        onChange={(e) => setStartingBlock(e.target.value)}
                        w={{ base: "100%", md: "30%" }}
                        mr={{ base: "0rem", md: "1.5rem" }}
                        mt={{ base: "0.5rem", md: "0" }}
                        pb={{ base: "0.5rem", md: "0" }}
                        isRequired="true"
                    />
                    <Button
                        type="submit"
                        colorScheme="blue"
                        w="8rem"
                        mr={{ base: "0", md: "5rem" }}
                        mt={{ base: "1rem", md: "0" }}
                        ml={{ base: "0", md: "2rem" }}
                    >Crawl
                </Button>
                </Flex>
            </form>

        </Flex>
    )
}

export default TransactionsForm