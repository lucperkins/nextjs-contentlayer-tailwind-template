import { Pass } from "../lib/utils"
import Footer from "./Footer"
import Main from "./Main"
import Navbar from "./Navbar"

const Layout = ({ children }: Pass) => {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout
