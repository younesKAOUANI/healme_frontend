export const TodosList = ({todos, onChange, children})=>{

    return <div className='grid grid-cols-5 gap-3'>
        {todos.map(todo => (
                    <TodoItem todo={todo} onChange={onChange}  key={todo.id}/>
                ))}
    </div>
}

export const TodoItem = ({todo, onChange}) =>{
    return <div  className='space-y-2 border text-black border-blue-600 h-64 rounded shadow'>
    {/* <input name={todo.id} value={todo.title} onChange={onChange} className='h-full' /> */}
    <h3>{todo.title}</h3>
    <p><input type="radio" checked={todo.completed} /></p>
    </div>
}
