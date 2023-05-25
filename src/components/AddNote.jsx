import React from 'react';
// Import Formik and Yup
import { Formik, Form , Field , ErrorMessage} from 'formik';
import * as Yup from 'yup';

const AddNote = (props) => {

  // add form logic here

  const {AddNote} = props;

  const validationSchema = Yup.object({
    title: Yup.string().required('Add title note'),
    content: Yup.string().required('Add description note')
  });

  const initialValues = {
    title: '',
    content: ''
  };

  const handleSubmit = (values) => {
    console.log(values)
    AddNote({
      title: values.title,
      content: values.content

    });

    values.title = '';
    values.content = '';

  };

  return (
    <div className="p-6 w-[61%] bg-white rounded" id="form-box">
     <Formik
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={handleSubmit}
     >
      <Form className="p-3 flex flex-col gap-5 ">

        <Field 
          type="text"
          name="title"
          placeholder="Enter the title"
          className="w-full p-3 border-2 rounded outline-none"
          />

        <ErrorMessage name="title" component="div" className="border-l-4 border-[#cf3d3d] p-4 text-sm text-[#cf3d3d] shadow rounded"/>
         
         <Field 
          as="textarea"
          name="content"
          placeholder="Enter the description"
          className="w-full p-3 border-2 rounded outline-none"
         />

        <ErrorMessage name="content" component="div" className="border-l-4 border-[#cf3d3d] p-4 text-sm text-[#cf3d3d] shadow rounded"/>
         <button type="submit" className="p-3 bg-yellow-500 rounded-lg text-white hover:bg-yellow-500">Add Note</button>
      </Form>

     </Formik>
    </div>
  );
};

export default AddNote;