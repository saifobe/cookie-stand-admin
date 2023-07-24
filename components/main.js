import React from 'react'
import Form from './form'
import Table from './table'

const Main = (props) => {
    
    return (
        <main className="flex flex-col items-center justify-center">
            <Form handler={props.submitHandler} />
            <Table formData={props.formData}/>
        </main>
    )
}

export default Main