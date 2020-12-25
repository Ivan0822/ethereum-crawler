import axios from 'axios'

const apiKey = "FNQ82BWE25ZEYHXH8R1GQS9ASVETSST9U1"

export const getTransactionsByAddress = (address, startingBlock, pageCount) => {
    return axios.get(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=${startingBlock}&endblock=99999999&page=${pageCount}&offset=20&sort=desc&apikey=${apiKey}`)
}