import { Button, Stack, TextField, Typography } from "@mui/material"
import Link from "next/link"
import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { ADD_DATA } from "../../store/reducers/signin"
import { loginRules, passwordRules } from "./formConfig"
import { loginRequest } from "./requests"

export const Login = () => {
    const [msg, setMsg]  = useState('')
    const { handleSubmit, control, resetField, setValue } = useForm({ mode: 'onChange' })
    const dispatch = useDispatch()
    const onSubmit = async data => {
        resetField('password')
        const login = await loginRequest(data)
        if (login.access) {
            dispatch(ADD_DATA({ username: data.username }))
        }else {
            setMsg(login.msg)
        }
        
    }
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Stack maxWidth={400} sx={{ fontSize: '10px', margin: '150px auto', textAlign: 'center' }}> 
            <Typography variant="h3" sx={{ fontSize: 35, fontWeight: 700, marginBottom: 0.5 }}>Sign in</Typography>
            <Typography sx={{ color: "text.secondary", marginBottom: 1 }}>To get access</Typography>
            <Typography sx={{ color: "red", marginBottom: 2.5, fontSize: 17 }}>{msg}</Typography>
            <Controller 
            rules={loginRules}
            control={control}
            name='username'
            defaultValue={''}
            render={({ field, fieldState: { error } }) =>
            <TextField 
                type='name' 
                label='username' 
                size="small"              
                onChange={e => field.onChange(e)} 
                value={ field.value }
                inputRef={field.ref}
                helperText={error? error.message: ''}
                error={error? error.message: ''}
            />}
            />
            <Controller 
            defaultValue={''}
            control={control}
            rules={passwordRules}
            name='password'
            render={({ field, fieldState: { error } }) => 
            <TextField 
            type='password' 
            label='password' 
            size="small" 
            onChange={e => field.onChange(e)} 
            value={ field.value }
            helperText={error? error.message: ''}
            error={error? error.message: ''}
            sx={{ margin: '25px 0' }} 
            />}
            />
            <Button 
            type='submit' 
            variant='contained'
            sx={{ marginBottom: 1 }} 
            >Sign in</Button>
            <Typography sx={{ color: "text.secondary", marginTop: 2.5, fontSize: 21 }}>
                Do you have account: <Link href='/registration'>sign up</Link>
            </Typography>
        </Stack>
    </form>
    )
}