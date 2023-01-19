# Klasser og underklasser for et skolesystem

# Superklasse til en bruger
class Person:
      def __init__(self, name):
        # Variable til repræsentation af en person
        self.name = name
    # Læsemetode til at returnere personens navn
    def getName(self):
        return self.name

# Underklasse til en elev
class Student(Person):
    # Konstruktør til at oprette en elev
    def __init__(self, name):
        super().__init__(name)
    # Skrivemetode til at sætte eleven i en klasse
    def setClass(self, studentsClass):
        self.studentsClass = studentsClass
    # Læsemetode til at returnere klassen for en elev
    def getClass(self):
        return self.studentsClass

# Underklasse til en lærer
class Teacher(Person):
    # Konstruktør til at oprette en lærer
    def __init__(self, name):
        super().__init__(name)
        self.subjects = []
    # Skrivemetode til at tilføje et fag til en lærer
    def addSubject(self, subject):
        self.subjects.append(subject)
    # Læsemetode til at vise en lærers fag
    def getSubjects(self):
        return self.subjects
