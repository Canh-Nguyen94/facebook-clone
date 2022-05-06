import '../styles/globals.scss'
import Layout from '../components/Layout'
function MyApp({ Component, pageProps }) {
  if(Component.getLayout){
    return <Component/>
  }
  return (<>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </>)
  
}

export default MyApp
