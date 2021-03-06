import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './App.css'

function App() {
    const initialValues = {}
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({...formValues, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }

    useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        if (!values.username) {
            errors.username = 'Username is required!'
        }
        if (!values.email) {
            errors.email = 'Email is required!'
        } else if (!regex.test(values.email)) {
            errors.email = 'This is not a valid email format!'
        }
        if (!values.password) {
            errors.password = 'Password is required'
        } else if (values.password.length < 4) {
            errors.password = 'Password must be more than 4 characters'
        } else if (values.password.length > 10) {
            errors.password = 'Password cannot exceed more than 10 characters'
        }
        return errors
    }

    return ( <
        div className = "container" > {
            Object.keys(formErrors).length === 0 && isSubmit ? ( <
                div className = "ui message success" > Signed in successfully < /div>
            ) : ( <
                pre > { JSON.stringify(formValues, undefined, 2) } < /pre>
            )
        }

        <
        form onSubmit = { handleSubmit } >
        <
        center >
        <
        h1 > Form Validation < /h1> <
        div className = "ui divider" > < /div> <
        div className = "ui form" >
        <
        div className = "field" >
        <
        input type = "text"
        name = "Associate_name"
        placeholder = "Associate Name"
        value = { formValues.associatename }
        onChange = { handleChange }
        /> <
        /div> <
        p > { formErrors.associatename } < /p> <
        div className = "field" >
        <
        input type = "text"
        name = "associate_id"
        placeholder = "Associate Id"
        value = { formValues.associateid }
        onChange = { handleChange }
        /> <
        /div> <
        p > { formErrors.associateid } < /p> <
        div className = "field" >
        <
        input type = "text"
        name = "projectid"
        placeholder = "Project_Id"
        value = { formValues.projectid }
        onChange = { handleChange }
        /> <
        /div> <
        div className = "field" >
        <
        div className = "radio" >
        <
        label >
        <
        input type = "radio"
        value = "Male"
        checked = { this.state.selectedOption === 'Male' }
        onChange = { this.onValueChange }
        />
        Male <
        /label> <
        /div> <
        div className = "radio" >
        <
        label >
        <
        input type = "radio"
        value = "Female"
        checked = { this.state.selectedOption === 'Female' }
        onChange = { this.onValueChange }
        />
        Female <
        /label> <
        /div> <
        div className = "radio" >
        <
        label >
        <
        input type = "radio"
        value = "Other"
        checked = { this.state.selectedOption === 'Other' }
        onChange = { this.onValueChange }
        />
        Other <
        /label> <
        /div> <
        /div> <
        div className = "field" >
        <
        select name = "location" >
        <
        option > Select Option1 < /option> <
        option > Select Option1 < /option> <
        /select> <
        /div> <
        div className = "field" >
        <
        input type = "text"
        name = "projectid"
        placeholder = "Project_Id"
        value = { formValues.password }
        onChange = { handleChange }
        /> <
        /div> <
        div className = "field" >
        <
        input type = "password"
        name = "projectid"
        placeholder = "Project_Id"
        value = { formValues.password }
        onChange = { handleChange }
        /> <
        /div>

        <
        p > { formErrors.password } < /p> <
        button className = "fluid ui button blue" > Submit < /button> <
        /div> <
        /center> <
        /form> <
        /div>
    )
}

export default App