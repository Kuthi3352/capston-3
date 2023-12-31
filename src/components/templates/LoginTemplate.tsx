import { zodResolver } from '@hookform/resolvers/zod'
import { Input, Button } from 'components'
import { useForm, SubmitHandler } from 'react-hook-form'
import { LoginSchema, LoginSchemaType } from 'schema'


export const LoginTemplate = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<LoginSchemaType>({
        mode: 'onChange',
        resolver: zodResolver(LoginSchema),
    })

    const onSubmit: SubmitHandler<LoginSchemaType> = (value) =>{
console.log('value', value);

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="font-600 text-30 text-white">Đăng nhập</h2>
            <Input
                className="mt-16 text-white"
                label="Tài khoản"
                placeholder="Tài khoản"
                id="taiKhoan"
                name="taiKhoan"
                error={errors?.taiKhoan?.message}
                register={register}
            />
            <Input
                className="mt-16 text-white"
                label="Mật khẩu"
                placeholder="Mật khẩu"
                id="matKhau"
                name="matKhau"
                type='password'
                error={errors?.matKhau?.message}
                register={register}
            />
           <Button className='!w-full !h-[48px] !mt-20' htmlType='submit' type='primary' danger >Đăng nhập</Button>
        </form>

    )
}
