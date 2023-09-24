

const SimpleForm = () => {

    const handleSubmit = e =>{
        e.preventDefault();  // joto din form submit korbo todin amader lagbe e. default value er jonno

        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
        console.log('form submitted');
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"/>
                <br />
                <input type="email" name="email"/>
                <br />
                <input type="password" name="password"/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;