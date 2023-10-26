import Feed from '@components/Feed';
import React from 'react'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
            Discover & Share 
            <br className='max-md:hidden'/>
            <span className='orange_gradient text-center'> AI-powered prompts</span>
        </h1>
        <p className='desc text-center'>
            Promptopie is a open-source AI prompting tool for
            modern world discovery, creation and sharing of 
            creative prompts.
        </p>


        {/* Feed */}
        <Feed />
    </section>
  )
}

export default Home;