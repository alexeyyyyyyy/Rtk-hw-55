import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { registerFetch } from "../../features/actions/accountAction"
import type { UserRequest } from "../../utils/interfaces"
import { putToken } from "../../features/slices/tokenSlice"
import { encryptedToken } from "../../utils/constants"

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useAppDispatch();

    const handleClickRegister = () => {
        const user:UserRequest = {
            firstName,
            lastName,
            password,
            login:email
        }
        const token = encryptedToken(email, password)
        dispatch(registerFetch(user))
          .then(() => dispatch(putToken(token)))
        setPassword("")
        setEmail("")
        setLastName("")
        setFirstName("")
    }

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="mb-5">
                        <h3>Register</h3>
                    </div>
                </div>
            </div>
            <div className="row gy-3 overflow-hidden">
                <div className="col-12">
                    <div className="form-floating mb-1">
                        <input type="text"
                               onChange={e => setFirstName(e.target.value.trim())}
                               className="form-control border-2" name="name" id="name"
                               placeholder="First Name" required/>
                        <label form="name" className="user form-label">First Name</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating mb-1">
                        <input type="text" onChange={e => setLastName(e.target.value.trim())}
                               className="form-control border-2" name="lastname" id="lastname"
                               placeholder="name@example.com" required/>
                        <label form="lastname" className="user form-label">Last name</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating mb-1">
                        <input type="email" onChange={e => setEmail(e.target.value.trim())}
                               className="form-control border-2" name="email" id="email"
                               placeholder="name@example.com" required/>
                        <label form="email" className="email form-label">Email</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating mb-1">
                        <input type="password"
                               minLength={4} maxLength={16}
                               onChange={e => setPassword(e.target.value.trim())}
                               className="password form-control border-2" name="password" id="password"
                               defaultValue=""
                               placeholder="Password" required/>
                        <label htmlFor="password" className="pass form-label">Password</label>
                    </div>
                </div>

                <div className="col-12">
                    <div className="d-grid">
                        <button onClick={handleClickRegister} className="btn bsb-btn-3xl btn-primary py-3"
                                type="submit">Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register