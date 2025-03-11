interface Course {
  id: number,
  title: string,
  description: string,
  duration: string,
}

const CourseList: React.FC<{ courses: Course[] }> = ({ courses }) => {
  return (
    <ul>
      <li>
        {
          courses.map ((course) => (
            <li key={course.id}>
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <p>{course.description}</p>
            </li>
          ))  
        }
      </li>
    </ul>
  )
}

export { CourseList }