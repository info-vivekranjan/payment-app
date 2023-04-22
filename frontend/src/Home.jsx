import React from 'react'
import { Box, Stack } from "@chakra-ui/react"
import Card from './Card'
import axios from "axios";


const Home = () => {

    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

        const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "VR GROUP",
            description: "Test of RazorPay",
            image: "https://avatars.githubusercontent.com/u/75258584?v=4",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Vivek Ranjan",
                email: "infovivek.ranjan@gmail.com",
                contact: "9156022914"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "B9EDDD"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

    return (
        <Box>

            <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>
                <Card img={"https://www.clio.com/wp-content/uploads/2021/10/lawyer-payment-methods.png"} checkoutHandler={checkoutHandler} />
            </Stack>
        </Box>
    )
}

export default Home