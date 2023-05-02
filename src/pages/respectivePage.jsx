import { useLocation } from "react-router-dom"
import Layout from "../components/Layout"

const RespectivePage = () => {
  const { state } = useLocation()
  console.log(state)
  return (
    <Layout>
      <table>
        <tr>
          <th>Subjects</th>
          <th>Credit</th>
          <th>Notes</th>
        </tr>
        {
          state.subjects.map((item, id) => {
            return (
              <div key={id}>
                <tr>
                  <td>{item}</td>
                </tr>

              </div>
            )
          })
        }
      </table>
    </Layout>
  )
}

export default RespectivePage
