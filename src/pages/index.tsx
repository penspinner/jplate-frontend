import Head from 'next/head'

const Index = () => {
  return (
    <div>
      <Head>
        <title>JPlate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="mx-auto prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
          <h1 className="text-center">J Plate</h1>
        </div>
      </main>
    </div>
  )
}

export default Index
