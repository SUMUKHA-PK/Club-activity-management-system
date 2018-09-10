**Entities:** 

1. Students  
2. Projects  
3. Clubs  
4. Events

**Attributes:**

* Students  
  
    1. Name (First, Middle, Last)  (NOT NULL) 
    2. Roll Number  (PK)     (NOTNULL)
    3. Age                     (CHECK < 100) TRIGGER
    4. Sex                      (NOT NULL)
    5. Department               (NOT NULL)
    6. SIG                  
    7. Designation in club      (DEFAULT NULL)  
      
* Projects  

    1. Name        (NOT  NULL)
    2. Discipline  (NOT NULL)
    3. Start time  (NOT NULL)
    4. End time       
    5. Number of students working  (>0) 
    6. Project ID  (PK)             
    7. Supervising club         (NOT NULL)
      
* Clubs  
     
    1. Name (PK)  
    2. SIGs  (SIG Head, Number of members)  (NOT NULL)  
    3. Number of people  (>0)
    4. Convenor  (NOT NULL)

* Events  
  
    1. Name of the event  (PK) 
    2. SIG involved         
    3. Talks conducted      (Multivalued)
    4. Workshops conducted  (Multivalued)
    5. Flagship events      (Multivalued)
  
**Relationships:**
  
1. Student **WORKS ON** Project. (Number of hours)  
2. Clubs **CONDUCT** Events.
3. Clubs **MANAGE**s Projects.
4. Student **BELONGS TO** Clubs.

