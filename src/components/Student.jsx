import PropTypes from 'prop-types';

const Student = ({ student }) => {
  return (
    <div className='student'>
      <h3 className='name'>Name: {student.name}</h3>
      <p className='age'>Age: {student.age}</p>
      <p className='course'>Subjects: {student.course}</p>
    </div>
  );
};

Student.propTypes = {
  student: PropTypes.object.isRequired,
};

export default Student;
