class MyComponent extends React.PureComponent {
    
    state = {
        user: {
            name: 'John Doe',
            age: 30
        }
    };
  
    updateAgeMutable = () => { // mutable
        const user = this.state.user;
        user.age += 1;
        this.setState({ user });
    };

    updateAgePure = () => { // pure
        this.setState((prevState) => ({
            user: {
                ...prevState
            }
        }));
    };
}