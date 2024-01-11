import { useFormik } from 'formik';

import {
    Button,
    Checkbox,
    Label,
} from 'flowbite-react';

function FormikYoutub() {

    const formik = useFormik({
        initialValues: {
            name: '',
            eamil: '',
            channel: ''
        }
    })

    console.log(formik);

    return (
        <section className='w-full h-screen grid place-items-center'>
            <form className="flex max-w-md flex-col gap-4 w-[600px]" >


                <div className='flex flex-col'>
                    <label htmlFor="name" >username</label>
                    <input type="text" id='name' value={formik.values.name} onChange={formik.handleChange} />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="eamil" >username</label>
                    <input type="text" id='eamil' value={formik.values.email} onChange={formik.handleChange} />
                </div>


                <div className='flex flex-col'>
                    <label htmlFor="channel" >username</label>
                    <input type="text" id='channel' value={formik.values.channel} onChange={formik.handleChange} />
                </div>
                
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </section>
    );
}


export default FormikYoutub
