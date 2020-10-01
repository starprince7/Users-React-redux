import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import { getUsers, deleteUser } from '../redux/actions'


function UsersList({users, getUsers, deleteUser}) {

    const tableData = {
        height: '50px',
        margin: '2px 0',
        background: '#2c2b2c',
        padding: '2px 5px',
        'boxSizing': 'borderBox',
        textTransform: 'uppercase'
    }
    const center = {
        marginLeft: '20px'
    }


    useEffect(()=> {
        getUsers()
        console.log('======useEffect is being Called! to fetch List of Users...=========')
    }, [getUsers])

    const handleDelete = (id)=> {
        deleteUser(id)
    }

    const userTable = users.map( user => {
        return (
            <tr key={user._id}>
                <td>
                    <div style={tableData}>
                        <button onClick={()=> handleDelete(user._id)}>Del</button>
                    </div>
                </td>
                <td>
                    <div style={tableData}>{user.name} </div>
                </td>
                <td>
                    <div style={tableData}> {user.lastName} </div>
                </td>
            </tr>
        )
    })


    return (
        <div className="side-bar">
        <div className="side-bar-heading">User Lists</div>
        {
            users.length ? (
                <table>
                    <thead>
                        <tr>
                        <td>ID</td>
                        <td>first name</td>
                        <td>last name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {userTable}
                    </tbody>
                </table>
            ) : <h3 style={center}>There are no user registered!</h3>
        }
        </div>
    )
}


const mapStateToProps = (state)=> {
    return {
        users: state.users,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        getUsers: ()=> dispatch(getUsers()),
        deleteUser: (id)=> dispatch(deleteUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
