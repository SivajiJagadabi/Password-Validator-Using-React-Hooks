// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  PasswordValidContainer,
  PasswordValidatorHeading,
  PasswordValidDescription,
  PasswordInput,
  PasswordErrMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangeName = event => {
    setPassword(event.target.value)
  }

  return (
    <AppContainer>
      <PasswordValidContainer>
        <PasswordValidatorHeading>Password Validator</PasswordValidatorHeading>

        <PasswordValidDescription>
          Check how strong and secure is your password
        </PasswordValidDescription>
        <PasswordInput
          type="password"
          value={password}
          onChange={onChangeName}
        />
        {password.length <= 8 && (
          <PasswordErrMsg>
            Your password must be at least 8 characters
          </PasswordErrMsg>
        )}
      </PasswordValidContainer>
    </AppContainer>
  )
}

export default PasswordValidator
