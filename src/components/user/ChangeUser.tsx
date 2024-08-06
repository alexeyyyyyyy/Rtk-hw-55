import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { changeUserFetch } from "../../features/actions/accountAction"
interface Props {
  setUpdateAction:(name:string) => void
}

const ChangeUser = ({setUpdateAction}:Props) => {
 const [newFirstName,setNewFirstName] = useState("");
  const [newLastName,setNewLastName] = useState("");
  const dispatch = useAppDispatch();


  function handleClickSave() {
    dispatch(changeUserFetch({
      firstName:newFirstName,
      lastName:newLastName
    }))
    setUpdateAction("Profile")
  }

  function handleClickClear() {
    setNewFirstName("");
    setNewLastName("");
  }

  return (
    <div>
      <label>New firstName:
        <input type={"text"} onChange={e => setNewFirstName(e.target.value.trim())}
               value={newFirstName} />
      </label>
      <label>New lastName:
        <input type={"text"} onChange={e => setNewLastName(e.target.value.trim())}
               value={newLastName} />
      </label>
      <button onClick={handleClickSave}>Save</button>
      <button onClick={handleClickClear}>Clear</button>


    </div>
  )
}

export default ChangeUser