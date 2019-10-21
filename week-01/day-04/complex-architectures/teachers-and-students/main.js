class student {
  learn() {
    console.log(`student is learning something new`);
  }
  question(teacher) {
    this.teacher = teacher;
    this.teacher.answer();
  }
}

class teacher {
  teach(student) {
    this.student = student;
    this.student.learn();
  }
  answer() {
    console.log(`the teacher is answering a question`);
  }
}

const stu = new student();
const tea = new teacher();
stu.question(tea);
tea.teach(stu);
