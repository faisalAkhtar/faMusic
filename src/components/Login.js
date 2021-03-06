import { useEffect, useRef, useState } from 'react'
import { Avatar, Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import PropTypes from 'prop-types'

export default function Login({ setAuthtoken }) {
    const [errors, setErrors] = useState({})
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const screenRef = useRef(null)
    const emailRef = useRef(null)
    const passRef = useRef(null)

    const handleSubmit = e => {
        e.preventDefault()
        if (email.trim() === '') {
            setErrors({ email: 'Email cannot be empty' })
            emailRef.current.focus()
            return
        } else {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (!re.test(String(email).toLowerCase())) {
                setErrors({ email: 'Invalid email' })
                emailRef.current.focus()
                return
            }
        }

        if (pass.trim() === '') {
            setErrors({ pass: 'Passwords cannot be empty' })
            passRef.current.focus()
            return
        } else {
            if (String(pass).length < 8) {
                setErrors({ pass: 'Invalid password' })
                passRef.current.focus()
                return
            }
        }

        setErrors({})
        if (email === 'listen@famusic.com')
            if (pass === 'root1234')
                return setAuthtoken('adab&gh1ekljnbajkdhd3gyudu(dasn182qd')
        alert('Incorrect email/password')
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (screenRef.current)
                screenRef.current.style.height = (window.innerHeight > 450 ? window.innerHeight : 450) + 'px'
        })
    }, [])

    const screenHeight = {
        height: (window.innerHeight > 450 ? window.innerHeight : 450) + 'px'
    }

    return (
        <Grid ref={screenRef} component='main' sx={screenHeight} container>
            <Grid item xs={false} sm={4} md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/collection/2467963)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) => t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />

            <Grid item xs={12} sm={8} md={5} elevation={6} square sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar sx={{ m: 1, height: 75, width: 75 }} src='https://avatars.githubusercontent.com/faisalakhtar?size=75' alt='' />

                    <Typography component='h1' variant='h5'>Sign in</Typography>

                    <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin='normal'
                            label='Email Address'
                            type='email'
                            id='email'
                            name='email'
                            autoComplete='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            error={errors.email !== undefined}
                            helperText={errors.email}
                            inputRef={emailRef}
                            fullWidth
                            required
                            autoFocus
                        />
                        <TextField
                            margin='normal'
                            label='Password'
                            type='password'
                            id='password'
                            name='password'
                            autoComplete='current-password'
                            value={pass}
                            onChange={e => setPass(e.target.value)}
                            error={errors.pass !== undefined}
                            helperText={errors.pass}
                            inputRef={passRef}
                            fullWidth
                            required
                        />
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            sx={{ mt: 3, mb: 2 }}
                        >Sign in
                        </Button>


                        <Grid container>
                            <Grid item xs>
                                <Link href='#' variant='body2'>Forgot password?</Link>
                            </Grid>

                            <Grid item>
                                <Link href='#' variant='body2'>Sign Up</Link>
                            </Grid>
                        </Grid>

                        <Typography sx={{ mt: 5 }} variant='body2' color='text.secondary' align='center'>
                            {'Copyright ?? '}
                            <Link color='inherit' href='https://faisalakhtar.github.io/'>Faisal Akhtar</Link>
                            {' '}
                            {new Date().getFullYear()}
                        </Typography>

                    </Box>

                </Box>
            </Grid>

        </Grid>
    )
}

Login.propTypes = {
    setAuthtoken: PropTypes.func.isRequired
}