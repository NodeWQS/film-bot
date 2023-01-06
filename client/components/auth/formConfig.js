export const loginRules = { required: 'this field is required' }
export const passwordRules = { 
    required: 'this field is required', 
    minLength: { 
        value: 8, 
        message: 'Your password must be at least 8 characters long' 
    } 
}
export const regLoginRules = { 
    ...loginRules, 
    minLength: { 
        value: 5, 
        message: 'Your username must be at least 5 characters long' 
    }
 }