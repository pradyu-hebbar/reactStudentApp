import PropTypes from 'prop-types';
import Student from './Student';
const Students = ({ students }) => {
  return (
    <div className='students'>
      {students.map((student) => (
        <Student key={student.id} student={student} />
      ))}
    </div>
  );
};

Students.propTypes = {
  students: PropTypes.array.isRequired,
};

export default Students;
