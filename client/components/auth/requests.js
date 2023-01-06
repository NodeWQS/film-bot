import axios from "axios";

export const loginRequest = async body => {
    try {
        const user = await axios.post('http://localhost:5000/user/signin', body)
        localStorage.setItem('token', user.data.token)
        return { access: true }
    } catch (error) {
        return { access: false, msg: 'username or password not correct.' }        
    }
}

export const registrationRequest = async body => {
    try {
        const user = await axios.post('http://localhost:5000/user/signup', body)
        localStorage.setItem('token', user.data.accessToken)
        return { access: true }
    } catch (error) {
        return { access: false, msg: 'username is used.' }        
    }
}

export const verificationRequest = async () => {
    try {
        const token = localStorage.getItem('token')
        const user = await axios.post('http://localhost:5000/user/verification', { token })
    
        return { username: user.data.username, access: true }
    } catch (error) {
        return { access: false }
    }
}