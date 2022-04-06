import React from 'react'
import { useState } from 'react'
import { Field, reduxForm } from 'redux-form'


const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
    /*const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
    const minValue = min => value =>
      value && value < min ? `Must be at least ${min}` : undefined
    */

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)



const FieldLevelValidationForm = (props) => {
	const [shore, setShore] = useState('')
    const { handleSubmit, pristine, reset, submitting } = props
    return ( 
    <form onSubmit = { handleSubmit } >
        <Field name = "associateName"
			type = "text"
			label = "Associate name"
			component = { renderField }
			validate = {[required]}
        /> 
        <Field name = "associateId"
			type = "text"
			label = "Associate Id"
			component = { renderField }
			validate = {[required]}
        /> 
        <Field name = "projectId"
			type = "text"
			label = "Project Id"
			component = { renderField }
			validate = {[required]}
        /> 
        <div> 
			{['OnShore', 'OffShore'].map(type => (
			 <label className="form-check-label">
              <Field
              onClick={() => {
					setShore(type);
					this.setState((prevState) => {
						return {isChecked: !prevState.isChecked};
					});
					
			 }
			}
                name="shore"
                component="input"
                type="radio"
                value={type}
              />
              {' '}
              {type}
            </label>
			))}
        </div>
        <div >
        <
        Field name = "location"
        type = "select"
        label = "Select location"
        component = "select"
        validate = {
            [required]
        } >
        <
        option > Select Location < /option> <
        option value = "ff0000" > Red < /option> <
        option value = "00ff00" > Green < /option> <
        option value = "0000ff" > Blue < /option> < /
        Field > <
        /div> <
        div >
        <
        label >
        <
        Field name = "employed"
        id = "employed"
        component = "input"
        type = "checkbox" /
        >
        { ' ' }
        OnShore <
        /label> <
        label >
        <
        Field name = "employed"
        id = "employed"
        component = "input"
        type = "checkbox" /
        >
        { ' ' }
        OnShore <
        /label> <
        label >
        <
        Field name = "employed"
        id = "employed"
        component = "input"
        type = "checkbox" /
        >
        { ' ' }
        OnShore <
        /label>

        <
        /div> <
        div >
        <
        button type = "submit"
        disabled = { submitting } > Submit < /button> <
        button type = "button"
        disabled = { pristine || submitting }
        onClick = { reset } > Reset < /button> < /
        div > <
        /form>
    )
}

export default reduxForm({
    form: 'fieldLevelValidation' // a unique identifier for this form
})(FieldLevelValidationForm)
