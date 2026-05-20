import { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AuthContext from "./context/AuthProvider";
import { Link, useNavigate } from 'react-router-dom';
import axios from './client/client';

// Define the regular expressions for username and password validation
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const LOGIN_URL = '/login';

// Define the validation schema using Yup
const validationSchema = Yup.object({
    username: Yup.string()
        .matches(USER_REGEX, 'Invalid username format')
        .required('Username is required'),
    password: Yup.string()
        .matches(PWD_REGEX, 'Invalid password format')
        .required('Password is required')
});

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const { setIsLoggedIn } = useContext(AuthContext);

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            const response = await axios.post(LOGIN_URL, {
                usernameR: values.username,
                passwordR: values.password
            });
            console.log(response.data);
            setAuth(true);
            setIsLoggedIn(true); // Assuming setAuth updates authentication state
            navigate('/Sherbime'); // Redirect to the home page after successful login
        } catch (err) {
            if (!err.response) {
                setErrors({ api: 'No Server Response' });
            } else if (err.response.status === 409) {
                setErrors({ username: 'Username Taken' });
            } else {
                setErrors({ api: 'Login Failed' });
            }
        }
        setSubmitting(false);
    };

    return (
        <section>
            <h1 className="login">Login</h1>
            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, errors }) => (
                    <Form>
                        {errors.api && <p className="errmsg" aria-live="assertive">{errors.api}</p>}
                        <label htmlFor="username">Username:</label>
                        <Field
                            type="text"
                            id="username"
                            name="username"
                            autoComplete="off"
                        />
                        <ErrorMessage name="username" component="p" className="errmsg" />

                        <label htmlFor="password">Password:</label>
                        <Field
                            type="password"
                            id="password"
                            name="password"
                        />
                        <ErrorMessage name="password" component="p" className="errmsg" />

                        <button type="submit" disabled={isSubmitting}>Login</button>
                    </Form>
                )}
            </Formik>
            <p>
                <Link to="/Kryesore">Go to Home</Link>
            </p>
        </section>
    );
};

export default Login;
