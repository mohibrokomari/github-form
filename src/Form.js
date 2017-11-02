import React from 'react';
let Ajv = require('ajv');
// import axios from 'axios';


class Form extends React.Component {

    state = {
        file: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.file)

        let ajv = new Ajv({ allErrors: true });
        let validate = ajv.compile(
            {
                "properties": {
                    "foo": { "type": "string" },
                    "bar": { "type": "number", "maximum": 3 }
                }
            }
        );

        let valid = validate(this.state.file);

        if (valid) {
            console.log('Valid!');
        } else {
            console.log('Invalid: ' + ajv.errorsText(validate.errors));
        }
    }

    // Using FileReader
    handleFile = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = (event) => {
            console.log(event.target.result);
            this.setState({
                file: event.target.result
            });
        }

        reader.readAsText(file)
    }
    

    //Using FormData
    /*
    handleFile = (e) => {
        let formData = new FormData();
        let file = e.target.files[0];

        formData.append("m_file", file);

        axios.post('http://192.168.11.205:1034/up', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                // 'Access-Control-Allow-Origin': 'http://localhost:3000'
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    */
    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="file" onChange={this.handleFile}/>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form;