import { useLocation } from "react-router-dom"
import Layout from "../components/Layout"

const RespectivePage = () => {
  const { state } = useLocation()
  console.log(state)
  return (
    <Layout>
 
        {
          state.subjects.map((item, id) => {
            return (
              <div key={id}> 
             <li>{item}</li>
              </div>
            )
          })
        }
    </Layout>
  )
}

export default RespectivePage
