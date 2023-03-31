-- 1. Select employees first name, last name, job_id and salary whose first name starts with alphabet S
SELECT first_name, last_name, job_id, salary
FROM employees
WHERE first_name LIKE 'S%';


-- 2. Write a query to select employee with the highest salary
SELECT *
FROM employees
WHERE salary = (SELECT MAX(salary) FROM employees);

-- 3. Select employee with the second highest salary
SELECT *
FROM employees
WHERE salary = (SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees));

-- 4. Fetch employees with 2nd or 3rd highest salary
SELECT *
FROM employees
WHERE salary = (SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees))
OR salary = (SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees)));

-- 5. Write a query to select employees and their corresponding managers and their salaries
SELECT e.first_name, e.last_name, e.salary, m.first_name AS manager_first_name, m.last_name AS manager_last_name, m.salary AS manager_salary
FROM employees e
JOIN employees m ON e.manager_id = m.employee_id;
-- 6. Write a query to show count of employees under each manager in descending order
SELECT m.first_name, m.last_name, COUNT(*) as num_employees
FROM employees e
JOIN employees m ON e.manager_id = m.employee_id
GROUP BY m.first_name, m.last_name
ORDER BY num_employees DESC;
-- 7. Find the count of employees in each department
SELECT department_id, COUNT(*) as num_employees
FROM employees
GROUP BY department_id;
-- 8. Get the count of employees hired year wise
SELECT EXTRACT(YEAR FROM hire_date) as year, COUNT(*) as num_employees
FROM employees
GROUP BY year;
-- 9. Find the salary range of employees
SELECT MIN(salary) as min_salary, MAX(salary) as max_salary
FROM employees;
-- 10. Write a query to divide people into three groups based on their salaries
SELECT first_name, last_name, salary,
CASE
WHEN salary <= 5000 THEN 'Low'
WHEN salary > 5000 AND salary <= 10000 THEN 'Medium'
ELSE 'High'
END AS salary_group
FROM employees;

-- 11. Select the employees whose first_name contains “an”
SELECT *
FROM employees
WHERE first_name LIKE '%an%';

-- 12. Select employee first name and the corresponding phone number in the format (_ _ _)-(_ _ _)-(_ _ _ _)
SELECT CONCAT('(', SUBSTR(phone_number, 1, 3), ')-', SUBSTR(phone_number, 4, 3), '-', SUBSTR(phone_number, 7, 4)) AS phone_number_formatted, first_name
FROM employees;

-- 13. Find the employees who joined in August, 1994.
SELECT *
FROM employees
WHERE EXTRACT(MONTH FROM hire_date) = 8 AND EXTRACT(YEAR FROM hire_date) = 1994;

-- 14. Write an SQL query to display employees who earn more than the average salary in that company
SELECT *
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- 15. Find the maximum salary from each department.
SELECT department_id, MAX(salary) as max_salary
FROM employees
GROUP BY department_id;

-- 16. Write a SQL query to display the 5 least earning employees
SELECT *
FROM employees
ORDER BY salary ASC
LIMIT 5;
-- 17. Find the employees hired in the 80s
SELECT *
FROM employees
WHERE hire_date >= '1980-01-01' AND hire_date < '1990-01-01';

-- 18. Display the employees first name and the name in reverse order
select concat(first_name, ' ', reverse(last_name)) as name_reverse
from employees;

-- 19. Find the employees who joined the company after 15th of the month
SELECT * FROM employees
WHERE DAY(hire_date) > 15;

-- 20. Display the managers and the reporting employees who work in different departments
SELECT m.first_name AS manager_first_name, m.last_name AS manager_last_name, e.first_name AS employee_first_name, e.last_name AS employee_last_name
FROM employees e
JOIN employees m ON e.manager_id = m.employee_id
WHERE e.department_id != m.department_id;