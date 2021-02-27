-- Drop Tables
DROP TABLE year_2_tuition;
DROP TABLE year_4_tuition;
DROP TABLE year_2_enrollment;
DROP TABLE year_4_enrollment;
DROP TABLE unemployment;
DROP TABLE employment;



-- Create Tables
CREATE TABLE year_2_tuition (
  tuition_2_id INT PRIMARY KEY,
  start_year INT,
  end_year INT,
  public_tuition INT,
  private_tuition INT
);

CREATE TABLE year_4_tuition (
  tuition_4_id INT PRIMARY KEY,
  start_year INT,
  end_year INT,
  public_tuition INT,
  private_tuition INT
);

CREATE TABLE year_2_enrollment (
  enrollment_2_id INT PRIMARY KEY,
  year INT,
  public_enrollment INT,
  private_enrollment INT,
  total_enrollment INT
);

CREATE TABLE year_4_enrollment (
  enrollment_4_id INT PRIMARY KEY,
  year INT,
  public_enrollment INT,
  private_enrollment INT,
  total_enrollment INT
);

CREATE TABLE unemployment (
  unemployment_id INT PRIMARY KEY,
  year INT,
  less_hs INT,
  less_hs_un_rate varchar(10),
  hs_no_college INT,
  hs_no_college_un_rate varchar(10),
  some_college_no_degree INT,
  some_college_no_degree_un_rate varchar(10),
  associates_degree INT,
  associates_degree_un_rate	varchar(10),
  bachelors_advanced INT,
  bachelors_advanced_un_rate varchar(10)
  );


CREATE TABLE employment (
  employment_id INT PRIMARY KEY,
  year INT,
  less_hs INT,
  hs_no_college INT,
  some_college_no_degree INT,
  associates_degree INT,
  bachelors_advanced INT
  );
