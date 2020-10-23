import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Plate from '../components/Plate'
import plates from '../utils/productDummyData'
import Cart from '../components/Cart'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>JPlate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta property="og:title" content="JPlate" />
        <meta property="og:image" content="/pageImage.png" />
        <meta property="og:url" content="http://jplate-frontend.vercel.app/" />
        <meta
          property="og:description"
          content="A mock website that sells plates. Built with React Hooks and Next JS. Styles with TailwindCSS."
        />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header cart={props.cart} handleShowCart={props.handleShowCart} />
        <div className="bg-teal-100 flex flex-wrap flex-grow justify-evenly pt-4">
          {props.showCart ? (
            <Cart
              cart={props.cart}
              handleSetCart={props.handleSetCart}
              handleShowCart={props.handleShowCart}
            />
          ) : (
            ''
          )}
          {props.addedToCart ? (
            <div className="bg-yellow-200 rounded-lg fixed text-lg flex items-center h-4 p-12">
              Added to cart!
            </div>
          ) : (
            ''
          )}
          {plates
            ? plates.map((plate: any) => {
                return (
                  <div key={Math.random()} className="p-4">
                    <Plate
                      cart={props.cart}
                      plate={plate}
                      handleSetCart={props.handleSetCart}
                      handleAddedToCart={props.handleAddedToCart}
                      addedToCart={props.addedToCart}
                    />
                  </div>
                )
              })
            : ''}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Index
