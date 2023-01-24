import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

export default function Contact() {
    const schema = yup.object().shape({
        fullName: yup.string().required(),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(18).required(),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Password don't match").required()
    })

    const {register, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="fullName" {...register('fullName')}/>
        <input type="text" placeholder="email" {...register('email')}/>
        <input type="number" placeholder="age" {...register('age')}/>
        <input type="password" placeholder="password" {...register('password')}/>
        <input type="password" placeholder="confirmPassword" {...register('confirmPassword')}/>
        <input type="submit" />
    </form>
    )
}