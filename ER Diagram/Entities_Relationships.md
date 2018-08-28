**Entities:** 

1. Students  
2. Projects  
3. Clubs  
4. Events

**Attributes:**

* Students  
  
    1. Name (First, Middle, Last)  
    2. Roll Number  (PK)  
    3. Age  
    4. Sex  
    5. Department     
    6. SIG  
    7. Designation in club    
      
* Projects  

    1. Name (PK)  
    2. Discipline  
    3. Start time  
    4. End time  
    5. Number of students working  
    6. Project ID  (PK)
    7. Supervising club   
      
* Clubs  
     
    1. Name (PK)  
    2. SIGs  (SIG Head, Number of members)  
    3. Number of people  
    4. Convenor  

* Events  
  
    1. Name of the event  
    2. SIG involved
    3. Talks conducted  
    4. Workshops conducted  
    5. Flagship events  
  
**Relationships:**
  
1. Student **WORKS ON** Project. (Number of hours)  
2. Clubs **CONDUCT** Events.
3. Clubs **MANAGE**s Projects.
4. Student **BELONGS TO** Clubs.

