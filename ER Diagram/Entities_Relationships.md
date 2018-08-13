**Entities:** 

1. Students  
2. Projects  
3. Clubs  
4. Group of clubs

**Attributes:**

1. Name, Roll Number, Age, Sex, Department, SIG, Designation in the respective SIG

   **Primary key:** Roll Number

2. Name, Discipline, Start time, End time, Number of people working on it

   **Primary key:** Name 
   
3. Name of the club , SIGs, Number of people,  Talks conducted, workshops conducted, Flagship Events.

   **Primary key:** Name of the Club

**Relationship:**

1. Student **WORKS ON** Project.
2. Club **BELONGS TO** Group of Clubs.
3. Group of clubs **MANAGE**s Projects.
4. Student **BELONGS TO** Group of clubs.

