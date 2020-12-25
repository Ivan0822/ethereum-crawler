import { Flex } from '@chakra-ui/react'
import React from 'react'
import Web3 from 'web3'
import Header from './components/Header'
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect
} from "react-router-dom";
import Balance from './components/Balance/Balance'
import Transactions from './components/Transactions/Transactions'

const App = () => {

  const url = 'https://mainnet.infura.io/v3/e020c80fc2044f7c86295e4c6adaba93'
  const web3 = new Web3(new Web3.providers.HttpProvider(url))


  return (


    <BrowserRouter>
      <Switch>
        <Flex
          w={{ base: "100vw", md: "90%", lg: "80%" }}
          m="auto"
          borderLeft="1px solid black"
          borderRight="1px solid black"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          bg="primary.100"
          boxShadow="2px 2px 2px 2px black"
        >

          <Header />
          <Redirect from="*" to="/" />

          <Route path="/balance">
            <Balance />
          </Route>

          <Route exact path={["/transactions", "/"]}>
            <Transactions
              web3={web3}
            />
          </Route>
        </Flex>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
