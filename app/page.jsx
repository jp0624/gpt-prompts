import Feed from '@components/Feed'

const Home = () => {
	return (
		<>
			<section className='w-full flex-center flex-col'>
				<h1 className='head_text text-center'>
					GPT Prompts
					<br className='max-md:hidden' />
					<span className='orange_gradient text-center'>
						AI-Powered Prompt Generator
					</span>
				</h1>
				<p className='desc text-center'>
					Prompt Generator that uses OpenAI&apos;s GPT-3 to generate prompts.
				</p>
				<Feed />
			</section>
		</>
	)
}

export default Home
