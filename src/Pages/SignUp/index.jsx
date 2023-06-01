import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'

import {
    LoginContainer,
    DisplayContent,
    DisplayImg,
    LoginContent,
    LoginTitle,
    InputArea
} from './styles'

import { TextField, Button } from '@mui/material'

import calendar from '../../assets/calendar.svg'

const SignUp = () => {

    const navigate = useNavigate()

    const { handleRegister } = useContext(UserContext) 

    const [email, setEmail] = useState('');
    const [confirmedEmail, setConfirmedEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
        setEmailError(confirmedEmail !== value);
    };

    const handleConfirmedEmailChange = (event) => {
        const value = event.target.value;
        setConfirmedEmail(value);
        setEmailError(email !== value);
    };

    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
        setPasswordError(confirmedPassword !== value);
    };

    const handleConfirmedPasswordChange = (event) => {
        const value = event.target.value;
        setConfirmedPassword(value);
        setPasswordError(password !== value);
    };

    return (
        <>
            <LoginContainer>

                <DisplayContent>
                    <DisplayImg src={calendar} />
                </DisplayContent>

                <LoginContent>

                    <LoginTitle>Faça o seu cadastro</LoginTitle>

                    <InputArea>
                        <TextField
                            sx={{ width: '30rem', marginTop: '15px' }}
                            placeholder='Digite o seu e-mail'
                            type='email'
                            onChange={handleEmailChange}
                            value={email}
                            error={emailError}
                        />
                        <TextField
                            sx={{ width: '30rem', marginTop: '15px' }}
                            placeholder='Confirme o seu e-mail'
                            type='email'
                            onChange={handleConfirmedEmailChange}
                            value={confirmedEmail}
                            error={emailError}
                            helperText={
                                passwordError ? "Por favor, verifique se os e-mails digitados são iguais" : null
                            }
                        />
                        <TextField
                            sx={{ width: '30rem', marginTop: '15px' }}
                            placeholder='Escolha uma boa senha...'
                            type='password'
                            onChange={handlePasswordChange}
                            value={password}
                            error={passwordError}
                        />
                        <TextField
                            sx={{ width: '30rem', marginTop: '15px' }}
                            placeholder='Confirme a sua senha...'
                            type='password'
                            onChange={handleConfirmedPasswordChange}
                            value={confirmedPassword}
                            error={passwordError}
                            helperText={
                                passwordError ? "Por favor, verifique se as senhas estão iguais" : null
                            }
                        />
                    </InputArea>

                    <Button
                        sx={{ width: '30rem', height: '3rem', marginTop: '15px' }}
                        variant='contained'
                        onClick={() => handleRegister(email, password)/* Função autenticar login */}
                    >
                        CADASTRAR
                    </Button>

                </LoginContent>

            </LoginContainer>
        </>
    )
}

export default SignUp

// fiz merda