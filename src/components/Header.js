import { Button, Flex, Text, Icon } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BiCube } from 'react-icons/bi'

const Header = () => {

    return (
        <Flex
            w="100%"
            m="auto"
            h="9vh"
            justifyContent="space-between"
            alignItems="center"
            borderBottom="1px solid"
            bg="primary.200"
            color="white"
        >
            <Flex
                p={{ base: "1rem", md: "3rem" }}
                h="100%"
                justifyContent="center"
                alignItems="center"
            >
                <Icon
                    as={BiCube}
                    w={10}
                    h={10}
                />
                <Text
                    textAlign="center"
                    ml="0.5rem"
                    fontSize={{ base: "16px", md: "26px" }}
                    fontWeight="700"
                >
                    ETHEREUM CRAWLER
                </Text>
            </Flex>

            <Flex alignItems="center">
                <Link to="/balance">
                    <Button
                        colorScheme="white"
                        fontSize={{ base: "12px", md: "16px" }}
                        mr={{ base: "0.5rem", md: "2rem" }}
                        variant="link"
                    >
                        Check Balance
                    </Button>
                </Link>
                <Link to="/transactions">
                    <Button
                        colorScheme="white"
                        fontSize={{ base: "12px", md: "16px" }}
                        mr={{ base: "0.5rem", md: "2rem" }}
                        variant="link"
                    >
                        List Transactions
                        </Button>
                </Link>
            </Flex>
        </Flex>
    )
}

export default Header