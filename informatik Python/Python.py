from persons import Student, Teacher
# Oprettelse af objekter
s1 = Student("Nikolaj")
s1.setClass("3z")
s2 = Student("Anna")
s2.setClass("2a")
s3 = Student("Caroline")
s3.setClass("1s")
t1 = Teacher("Hans")
t1.addSubject("Informatik")
t1.addSubject("Programmering")
t2 = Teacher("Hanne")
t2.addSubject("Dansk")
def printSubjects(teacher):
    for i in teacher.getSubjects():
        print(i)
# Test af objekter
print(s1.getName())
print(s2.getClass())
print(t1.getName())
printSubjects(t1)
print(t2.getName())
printSubjects(t2)
