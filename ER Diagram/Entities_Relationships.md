**Entities:** 

1. Students  
2. Projects  
3. Clubs  

**Attributes:**

1. Name, Roll Number, Age, Sex, Department, SIG, Designation in the respective SIG
   **Primary key:** Roll Number

2. Name, Discipline, Start time, End time, Number of people working on it
   **Primary key:** Name 
   
3. Name of the club , SIGs, Number of people,  Talks conducted, workshops conducted, Flagship Events, Convenor of the Club
   **Primary key:** Name of the Club

**Relationship:**

1. Student **WORKS ON** Project.
2. Project **BELONGS TO** Club.
3. Club **SUPERVISES** Project.
4. Student **MEMBER OF** Club.

