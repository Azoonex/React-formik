import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from "yup";
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

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string()
            .email('invalid email format')
            .required('Required'),
        chnnael: Yup.string().required('Required')
    })

    return (
        <Formik className='w-full h-screen grid place-items-center'
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form className="flex max-w-md flex-col gap-4 w-[600px]" >


                <div className='flex flex-col'>
                    <label htmlFor="name" >UserName</label>
                    <Field type="text" id='name' name='name' />
                    <ErrorMessage name='name' />
                </div>


                <div className='flex flex-col'>
                    <label htmlFor="email" >Email</label>
                    <Field type="email" id='email' name='email' />
                    <ErrorMessage name='email' />
                </div>


                <div className='flex flex-col'>
                    <label htmlFor="channel" >Channel</label>
                    <Field type="text" id='channel' name='channel' />
                    <ErrorMessage name='channel' />
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <div>
                    <label htmlFor='comentes' >Comentes</label>
                    <Field component='texterea' id='comentes' name='comentes' />
                </div>
                <Button type="submit">Submit</Button>
            </Form>
        </Formik>
    );
}


export default FormikYoutub
