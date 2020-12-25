import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

const BalanceContainer = ({ balance, address, date }) => {

    return (
        <Flex w="100%" h="85vh" justifyContent="center">
            <Flex
                bg="primary.100"
                w={{ base: "80%", md: "40%" }}
                h={{ base: "50%", md: "40%" }}
                borderRadius="lg"
                mt="2rem"
                boxShadow="1px 1px 1px 2px lightgray"
                flexDirection="column"
                justifyContent="space-evenly"
                p="2rem"
            >
                <Box>
                    <Text fontWeight="700">Address:</Text>
                    <Text>{address}</Text>
                </Box>

                <Box>
                    <Text mt="1rem" fontWeight="700">Balance:</Text>
                    <Text>{balance} ETH</Text>
                </Box>

                <Box>
                    <Text mt="1rem" fontWeight="700">Date:</Text>
                    <Text>{date}</Text>
                </Box>
            </Flex>
        </Flex>
    )
}

export default BalanceContainer