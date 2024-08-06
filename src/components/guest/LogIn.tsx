import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { encryptedToken } from "../../utils/constants"
import { logInFetch } from "../../features/actions/accountAction"
import { putToken } from "../../features/slices/tokenSlice"

const LogIn = () => {
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const dispatch = useAppDispatch()

  const handleClickLogin = () => {
    const token = encryptedToken(username, password)
    dispatch(logInFetch(token))
      .then(() => dispatch(putToken(token)))

    setPassword("")
    setUsername("")
  }

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="mb-5">
            <h3>Log in</h3>
          </div>
        </div>
      </div>
      <div className="row gy-3 overflow-hidden">
        <div className="col-12">
          <div className="form-floating mb-1">
            <input type="email" className="form-control  border-2 " name="email" id="email"
                   placeholder="name@example.com" required value={username}
                   onChange={(e) => setUsername(e.target.value.trim())} />
            <label form="email" className="email form-label">Email</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating mb-1">
            <input
              minLength={4} maxLength={16}
              type="password" className="password form-control border-2" name="password" id="password"
              defaultValue=""
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value.trim())}
              value={password} />
            <label htmlFor="password" className="pass form-label">Password</label>
          </div>
        </div>

        <div className="col-12">
          <div className="d-grid">
            <button className="btn bsb-btn-3xl btn-primary py-3" type="submit"
                    onClick={handleClickLogin}>Log in now
            </button>
          </div>
        </div>
        <div className="col-12">
          <div className="d-grid">
            <button className="btn bsb-btn-3xl btn-primary py-3" type="submit">Clear</button>
          </div>
        </div>
      </div>
    </div>


  )
}

export default LogIn