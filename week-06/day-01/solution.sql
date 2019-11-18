CREATE TABLE IF NOT EXISTS tasks (
  taskId INTEGER PRIMARY KEY,
  taskName text
);

INSERT INTO tasks (taskId, taskName) VALUES (1, 'Do some work');
UPDATE tasks
SET taskName = 'Feed the monkey'
WHERE taskId = 1;

DROP TABLE tasks;
CREATE TABLE IF NOT EXISTS tasks (
  taskId INTEGER PRIMARY KEY,
  taskName text,
  taskstatus INTEGER
);

INSERT INTO tasks (taskId, taskName, taskstatus) VALUES (1, 'Do some work',0);
UPDATE tasks
SET taskstatus = 1
WHERE taskId = 1;

DELETE FROM tasks
WHERE taskId = 1;