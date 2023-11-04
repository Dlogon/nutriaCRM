function Button({text, clickHandler}){
    return (
        <>
            <button className="inline-flex bg-blue-700 items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150" onClick={clickHandler}> 
                {text}
            </button>
        </>
    )
}

export default Button;