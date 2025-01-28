# Input

In this ToDo list app, users enter information via a text input box where they can write a task's description. When the user taps the "Add Task" button, this input is recorded and handled. The user can additionally eliminate tasks by selecting the "Delete" button linked to each task in the list.

# Procedure

When "Add Task" is clicked, the application triggers a function that modifies the state by creating a unique ID and saving it with the task content. The task is subsequently included in the current list of tasks. When a user intends to remove a task, a function runs to isolate the chosen task using its unique identifier, guaranteeing that the task is eliminated from the list.

# Output

The application actively refreshes the shown list of tasks based on user actions. Whenever a task is added or removed, the user instantly sees the updated status of their ToDo list.