import { useState } from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm'; // Controlled Components
import FormikForm from './components/FormikForm'; // Formik Integration

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Form Handling with React and Formik</h1>
        
        {/* Controlled Components Form */}
        <section>
          <h2>Controlled Components</h2>
          <RegistrationForm />
        </section>
        
        {/* Formik Integration Form */}
        <section>
          <h2>Formik Integration</h2>
          <FormikForm />
        </section>
      </header>
    </div>
  );
}

export default App;