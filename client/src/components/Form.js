import { connect } from 'react-redux'
import React, { useState } from 'react'
import { addUser, addCount } from '../redux/actions'


function Form(props) {

    const [name, setName] = useState({first: '', last: ''})

    const HandleSubmit = (e)=> {
        e.preventDefault()

        const user = {
            name: name.first,
            lastName: name.last
        }
        props.addUser(user)

        setName({first: '', last: ''})
    }

    const changeNameHandler = (e)=> {
        setName({...name, first: e.target.value})
    }

    const changeLastNameHandler = (e)=> {
        setName({...name, last: e.target.value})
    }


    return (
        <div className="form">
            <h2> {props.count} </h2>
            <button onClick={()=> props.addCount()}>addCount</button>
            <form >
            <label>
            Your name<h3> - {name.first}</h3> Your last name  <h3> - {name.last} </h3>
            </label>
                <div className="label">
                    <label>name</label>
                    <input type="text" value={name.first} onChange={changeNameHandler} />
                </div>
                <div className="label">
                    <label>last name</label>
                    <input type="text" value={name.last} onChange={changeLastNameHandler} />
                </div>
                <div>
                    <button type="submit" onClick={HandleSubmit} >submit</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state)=> {
    return {
        name: state.users.map(user => {
            return (user.name)
        }),
        lastName: state.users.map(user => {
            return (user.lastName)
        }),
        count: state.count
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        addUser: (user)=> dispatch(addUser(user)),
        addCount: ()=> dispatch(addCount())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Form)
