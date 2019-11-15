import React from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup';

import { TextInput } from '../elements';

const SearchForm = props => {
  const { values, handleSubmit, setFieldValue } = props;

  return (
    <TextInput
      placeholder="Search event..."
      onChangeText={query => setFieldValue('query', query)}
      value={values.query}
      name="query"
      enablesReturnKeyAutomatically
      returnKeyLabel="Search"
      returnKeyType="search"
      onSubmitEditing={handleSubmit}
      onKeyPress={e => {
        if (e.nativeEvent.key === 'Backspace' && values.query.length === 1) {
          handleSubmit();
        }
      }}
    />
  );
};
const enhancer = withFormik({
  mapPropsToValues: () => ({
    query: '',
  }),
  validationSchema: yup.object().shape({
    query: yup.string(),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props.handleSubmit(values);
    setSubmitting(false);
  },
  displayName: 'SearchForm', // helps with React DevTools
});

export default enhancer(SearchForm);
