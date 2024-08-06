import Guest from "./components/guest"
import "./App.css"
import { useAppSelector } from "./app/hooks"
import User from "./components/user"


const App = () => {
  const user = useAppSelector(store => store.user.data)

  return (
    <div>
      <section className="bg-primary vh-100 p-3 p-md-4 p-xl-5 d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
              <div className="card border-0 shadow-sm rounded-4">
                {user ? <User /> : <Guest />}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default App