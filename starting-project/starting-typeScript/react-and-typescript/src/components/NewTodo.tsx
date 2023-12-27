const NewTodo = () => {
    return(
        <form>
            <label htmlFor="text">Todo text</label>
            <input type='text' id='text'/>
            <button>Add Todo</button>
        </form>
    )
};

export default NewTodo;
