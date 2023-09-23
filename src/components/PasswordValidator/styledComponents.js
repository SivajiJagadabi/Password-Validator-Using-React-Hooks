// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #24263c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`

export const PasswordValidContainer = styled.div`
  width: 80%;
  background-color: #383a4e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  @media screen and (min-width: 786px) {
    width: 480px;
  }
`

export const PasswordValidatorHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 38px;
  color: #edeeff;
`
export const PasswordValidDescription = styled.p`
  font-size: 13px;
  color: #f8fafc;
  margin-top: 5px;
`

export const PasswordInput = styled.input`
  height:38px;
  border-radius:3px;
  width:80%;
  border:none:
  outline:none;
  background-color: #edeeff;
  margin-top:34px;
  

`

export const PasswordErrMsg = styled.p`
  font-size: 14px;
  color: #ef4444;
  margin-top: 17px;
`
