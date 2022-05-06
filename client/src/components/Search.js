import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
// const Form = () => {
//   const [formValues, setFormValues] = useState(defaultValues);
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });
//   };
//   const handleSliderChange = (name) => (e, value) => {
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formValues);
//   };

// export default function TextInputField() {
//     return (
//         <form onSubmit={handleSubmit}>
//             <TextField
//                 id='input'
//                 name='search'
//                 label='Search'
//                 type='text'
//                 value={value}
//                 onChange={handleInputChange}
//             />
//             <Button variant='contained' color='primary' type='submit'>
//                 Submit
//             </Button>
//         </form>
//     );
// }

export default function Search({ onSubmit }) {
    const [searchText, setSearchText] = useState('');

    return (
        <div>
            <label>Search:</label>
            <input
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    onSubmit(searchText);
                }}>
                Search
            </button>
        </div>
    );
}
