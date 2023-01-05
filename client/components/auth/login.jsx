import { Button, Stack, TextField, Typography } from "@mui/material"
import { useForm, Controller } from "react-hook-form"

export const Login = () => {
    const { handleSubmit, control, reset, setValue } = useForm({
        mode: 'onChange'
    })
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset()
        
    }
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Stack maxWidth={400} sx={{ fontSize: '10px', margin: '150px auto', textAlign: 'center' }}> 
            <Typography variant="h3" sx={{ fontSize: 35, fontWeight: 700, marginBottom: 0.5 }}>Sign in</Typography>
            <Typography sx={{ color: "text.secondary", marginBottom: 2.5 }}>To get access</Typography>
            <Controller 
            rules={{ required: 'this field is required' }}
            control={control}
            name='username'
            defaultValue={''}
            render={({ field, fieldState: { error } }) =>
            <TextField 
                type='name' 
                label='login' 
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
            rules={{ required: 'this field is required', 
            minLength: { value: 8, message: 'min length is 8' } 
            }}
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
            >Sign in</Button>
        </Stack>
    </form>
    )
}