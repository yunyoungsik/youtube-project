import React from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import Search from './Search'
import ScrollTo from '../../utils/scrollTo'
import Header from './Header'
import Footer from './Footer'

const Main = (props) => {
    return (
        <HelmetProvider>
            <ScrollTo />
            <Helmet
                titleTemplate="%s | Youtuber Youtube"
                defaultTitle="Youtuber Youtube"
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name='description' content={props.descripttion} />
            </Helmet>
            <Header />
            <main id='main' role='main'>
                <Search />
                {props.children}
            </main>
            <Footer />
        </HelmetProvider>
    )
}

export default Main;