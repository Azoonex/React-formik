import { useFormik } from 'formik';

import {
    Button,
    Checkbox,
    Label,
} from 'flowbite-react';

function FormikYoutub() {


    const initialValues = {
        name: '',
        email: '',
        channel: ''
    }

    const onSubmit = () => {
        console.log("form submit:", values);
    }

    const validate = values => {
        let errors = {}

        if (!values.name) {
            errors.name = 'Required'
        }
        if (!values.email) {
            errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email format'
        }
        if (!values.channel) {
            errors.channel = 'Required'
        }

        return errors
    }


    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
        

    })

    console.log(formik);

    return (
        <section className='w-full h-screen grid place-items-center'>
            <form className="flex max-w-md flex-col gap-4 w-[600px]" >


                <div className='flex flex-col'>
                    <label htmlFor="name" >UserName</label>
                    <input type="text" id='name' value={formik.values.name} onChange={formik.handleChange} />
                </div>
                {formik.errors.name ? (
                    <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                        <span className="font-medium">{formik.errors.name}</span> Change a few things up and try submitting again.
                    </div>
                ) : null}

                <div className='flex flex-col'>
                    <label htmlFor="email" >Email</label>
                    <input type="email" id='email' value={formik.values.email} onChange={formik.handleChange} />
                </div>
                {formik.errors.email ? (
                    <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                        <span className="font-medium">{formik.errors.email}</span> Change a few things up and try submitting again.
                    </div>
                ) : null}

                <div className='flex flex-col'>
                    <label htmlFor="channel" >Channel</label>
                    <input type="text" id='channel' value={formik.values.channel} onChange={formik.handleChange} />
                </div>
                {formik.errors.channel ? (
                    <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                        <span className="font-medium">{formik.errors.channel}</span> Change a few things up and try submitting again.
                    </div>
                ) : null}
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
