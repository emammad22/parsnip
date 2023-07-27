import Task from "./Task";

function TaskList(props) {
    return (
        <>
            <div className="task-list">
                <div className="task-list-title">{props.status}</div>
            </div>
            {
                props.tasks.map((task) => {
                    return <Task key={task.id} task={task} />
                })
            }
        </>
    );
}

export default TaskList;