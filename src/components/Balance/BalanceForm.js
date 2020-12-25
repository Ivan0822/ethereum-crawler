import React from 'react'
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import moment from 'moment'


const BalanceForm = ({ setAddress, setDate, date, handleBalance }) => {

    const todayDate = moment().utc().format("YYYY-MM-DD")

    return (
        <Flex
            w="100%"
            m="auto"
            h={{ base: "40vh", md: "8vh" }}
            justifyContent={{ base: "space-evenly", md: "space-between" }}
            alignItems="center"
            flexDirection={{ base: "column", md: "row" }}
            boxShadow="0 4px 2px -2px lightgray"
        >
            <Box>
                <Text
                    textAlign="center"
                    h="100%"
                    ml={{ base: "0rem", md: "2rem" }}
                    mt={{ base: "1rem", md: "0" }}
                    fontWeight="800"
                >
                    Account Balance
                </Text>
            </Box>

            <form onSubmit={handleBalance}>
                <Flex
                    alignItems="center"
                    h="100%"
                    flexDirection={{ base: "column", md: "row" }}
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
                        htmlFor="date"
                        mr="1rem"
                        mt={{ base: "1.5rem", md: "0" }}
                        mb={{ base: "0.5rem", md: "0" }}
                    >Date
                </Text>
                    <input
                        className="date-picker"
                        type="date"
                        value={date}
                        onChange={date => setDate(date.target.value)}
                        min="2015-07-30"
                        max={todayDate}
                        required
                    />
                    <Button
                        type="submit"
                        colorScheme="blue"
                        mr={{ base: "0", md: "5rem" }}
                        mt={{ base: "1rem", md: "0" }}
                        ml={{ base: "0", md: "2rem" }}
                    >Get Balance
                </Button>
                </Flex>
            </form>

        </Flex>
    )
}

export default BalanceForm