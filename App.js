const heading = React.createElement('h1',{id:"root"},"Hello World from React");

const parent = React.createElement('div',{id:'parent'},
    [
        React.createElement('div',{id:'child1'},
            [
                React.createElement('h1',{},"I am an h1 tag of child 1"),
                React.createElement('h2',{},'I am an h2 tag of child 1')
            ]
        ),
        React.createElement('div',{id:'child2'},
            [
                React.createElement('h1',{},"I am an h1 tag of child2"),
                React .createElement('h2',{},"I am an h2 tag of child 2")
            ]
        )
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);