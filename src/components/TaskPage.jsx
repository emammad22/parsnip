import TaskList from "./TaskList";

function TaskPage(props) {

    const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];
    const { tasks } = props;

    function renderTasks() {
        return TASK_STATUSES.map((status) => {
            const statusTask = tasks.filter(task => task.status === status);
            return <TaskList key={status} status={status} tasks={statusTask} />
        })
    }

    return (
        <>
            <div className="tasks">
                <div className="task-lists">
                    {renderTasks()}
                </div>
            </div>
        </>
    );
}

export default TaskPage;