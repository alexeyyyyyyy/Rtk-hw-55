import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { useState } from "react"
import ChangeUser from "./ChangeUser"
import { deleteToken } from "../../features/slices/tokenSlice"
import { deleteUser } from "../../features/slices/userSlice"
import ChangePassword from "./ChangePassword"

const User = () => {
  const user = useAppSelector(store => store.user.data!)
  const [updateAction, setUpdateAction] = useState("Profile")
  const dispatch = useAppDispatch();

  switch (updateAction) {
    case"changeUser":
      return <ChangeUser setUpdateAction={setUpdateAction}/>;
    case"changePassword":
      return <ChangePassword setUpdateAction={setUpdateAction}></ChangePassword>;
  }
  const handleClickLogOut = () => {
    dispatch(deleteToken());
    dispatch(deleteUser());
  }

  return (
    <div>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.login}</p>
      <p>{user.roles}</p>
      <button onClick={() => setUpdateAction("changeUser")}>Change User</button>
      <button onClick={() => setUpdateAction("changePassword")}>Change Password</button>
      <button onClick={handleClickLogOut}>LogOut</button>
    </div>
  )
}

export default User