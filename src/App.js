function App(){
    const title = 'Review Application'
    const body = 'The first paragraph in our code'
    const fellowNames = [
        {id:1, text: 'Deborah Musk'},
        {id:2, text: 'Grace Osaie'},
        {id:3, text: 'Damilola Johnson'},
        {id:4, text: 'Nelly Mark'}
    ]
    return ( 
        <div className='container'>
            <h1>{title}</h1>
            <p>{body}</p>
      

            <div>
                <h3>Fellow Names ({fellowNames.length})</h3>
                <ul>
                    {fellowNames.map((list, index) => (
                        <li key={index}>{list.text}</li>
                    ))}
                </ul>
            </div>
        </div>    
    )
}

export default App


