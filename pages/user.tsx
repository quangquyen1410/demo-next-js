import React from 'react'
import Head from 'next/head'
import Images from '../assets/banner-menu.png'
export default function user() {
    return (
        <>
            <Head>
                <title>User</title>
            </Head>
            <div>
                <img src={Images} />
            </div>

        </>
    )
}

