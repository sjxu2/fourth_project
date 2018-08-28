import React, {Component} from 'react';
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions/index";

class PostsNew extends Component
{
    renderField(field)
    {
        const {meta:{error,touched}} = field;
        const className =`form-group ${touched&&error?'has-danger':''}`;

        return(
            <div className={className}>
                <label>{field.label}</label>
                <input className='form-control' 
                type='text' 
                {...field.input} >
                </input>
                <div className='text-help'>
                    {touched?error:''}
                </div>
            </div>
        )
    }

    onSubmit(values)
    {
        
        this.props.createPost(values,()=>
        {
            this.props.history.push('/');
        });
    }

    render()
    {

        const {handleSubmit}= this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                name='title' 
                label='TITLE'
                component={this.renderField}>
                </Field>

                <Field 
                name='categories'
                label='CATEGORIES'
                component={this.renderField}>
                </Field>

                <Field 
                name='content'
                label='POST CONTENT'
                component={this.renderField}>
                </Field>

                <button type='submit' className='btn btn-primary'>
                    SUBMIT
                </button>
                <Link to='/' className='btn btn-danger'>CANCEL
                </Link>
            </form>
        );
    }
}

function validate(values)
{
    const errors={};

    if(!values.title)
    {
        errors.title='Please give a title';
    }

    if(!values.categories)
    {
        errors.categories='Please give a category';
    }

    if(!values.content)
    {
        errors.content='Please give some content';
    }

    return errors;
}

export default reduxForm({
    validate,
    form:'PostsNewForm'
})(
   connect(null,{createPost}) (PostsNew)
);