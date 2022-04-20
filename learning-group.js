class LearningGroup {
  passedLessons = [];

    constructor(courseName, teacherName, amountOfStudents){
        this.courseName = courseName;
        this.teacherName = teacherName;
        this.amountOfStudents = amountOfStudents;
    }

  doneLesson(title, topics) {
      if(this.passedLessons.some((lesson) => lesson.title === title)){
            return `Lesson with title ${title} already exists.`; 
      }

    this.passedLessons.push(new Lesson(title, topics));
  }
}
