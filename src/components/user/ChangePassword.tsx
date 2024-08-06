import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { changePasswordFetch } from "../../features/actions/accountAction";

interface Props {
  setUpdateAction: (name: string) => void;
}

const ChangePassword = ({ setUpdateAction }: Props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const validatePassword = (password: string) => {
    const minLength = 4;
    const maxLength = 16;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    if (password.length < minLength || password.length > maxLength) {
      return `Password must be between ${minLength} and ${maxLength} characters.`;
    }
    if (!hasUppercase || !hasLowercase || !hasNumber) {
      return "Password must contain at least one uppercase letter, one lowercase letter, one number";
    }
    return null;
  };

  function handleClickChangePassword() {
    if (newPassword1 !== newPassword2) {
      setError("New passwords do not match.");
      return;
    }

    const passwordError = validatePassword(newPassword1);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (newPassword1 === oldPassword) {
      setError("New password cannot be the same as the old password.");
      return;
    }

    setError(null);
    dispatch(changePasswordFetch({
      oldPassword,
      newPassword: newPassword1
    }));
    setUpdateAction("Profile");
  }

  function handleClickClear() {
    setOldPassword("");
    setNewPassword1("");
    setNewPassword2("");
    setError(null);
  }

  function handleClickBack() {
    setUpdateAction("Profile");
  }

  return (
    <div>
      <label>Old Password
        <input type="password" value={oldPassword} minLength={4} maxLength={16} onChange={e => setOldPassword(e.target.value.trim())} />
      </label>
      <label>New Password
        <input type="password" value={newPassword1} minLength={4} maxLength={16} onChange={e => setNewPassword1(e.target.value.trim())} />
      </label>
      <label>Repeat Password
        <input type="password" minLength={4} maxLength={16} value={newPassword2}
               onChange={e => setNewPassword2(e.target.value.trim())} />
      </label>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button onClick={handleClickChangePassword}>Change Password</button>
      <button onClick={handleClickClear}>Clear</button>
      <button onClick={handleClickBack}>Back</button>
    </div>
  );
};

export default ChangePassword;
