import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/theme-provider";
import Layout from "./components/layout";
import "./index.css"

function App() {

  return (
    <BrowserRouter>
     <ThemeProvider defaultTheme="dark">
       <Layout>
         Hello
       </Layout>
     </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
