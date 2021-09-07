import React, { useState, useRef } from 'react';
import './App.css';
import Students from './components/Students';
function App() {
  const students = [
    {
      name: 'Karthik',
      age: 19,
      course: 'maths, science, english',
      id: 1,
    },
    {
      name: 'Suman',
      age: 16,
      course: 'maths, science, english, sanskrit',
      id: 2,
    },
    {
      name: 'Janhavi',
      age: 20,
      course: 'maths, science, kannada',
      id: 3,
    },
    {
      name: 'Raghu',
      age: 22,
      course: 'maths, english, hindi',
      id: 4,
    },
  ];
  const text = useRef('');

  const [filteredStudents, setFilteredStudents] = useState(students);

  const onChange = (e) => {
    e.target.value = text.current.value;
    const filterStudents = students.filter((student) =>
      student.name.includes(text.current.value)
    );
    setFilteredStudents(filterStudents);
  };
  return (
    <div id='app'>
      <input
        type='text'
        id='search'
        placeholder='Search for students'
        ref={text}
        onChange={onChange}
      />
      {filteredStudents.length === 0 ? (
        <div className='err'>No Results Found</div>
      ) : (
        <Students students={filteredStudents} />
      )}
    </div>
  );
}

export default App;
