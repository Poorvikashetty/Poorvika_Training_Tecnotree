CREATE TABLE employees_1 (
emp_Id INT PRIMARY KEY,
name TEXT NOT NULL,
dept TEXT NOT NULL
);
-- Create an index on the dept column
CREATE INDEX dept_index ON employees_1 (dept);

-- Insert some sample data into the EMPLOYEE table
INSERT INTO employees_1 (emp_Id, name, dept) VALUES
(1, 'John Doe', 'Sales'),
(2, 'Jane Smith', 'Marketing'),
(3, 'Bob Johnson', 'Sales'),
(4, 'Sarah Lee', 'HR'),
(5, 'Mike Brown', 'IT');
-- Fetch data from the EMPLOYEE table
SELECT * FROM employees_1;