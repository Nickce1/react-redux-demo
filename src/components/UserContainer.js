import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { connect } from 'react-redux'
import { fetchUsers } from '../redux/index'

function UserContainer() {
  const userData = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <>
      {
        userData.loading
          ? <h2>Loading...</h2>
          : userData.error
            ? <h2>{userData.error}</h2>
            : (
              <>
                <h2>User List: </h2>
                <div>
                  {
                    userData
                    && userData.users
                    && userData.users.map(user => <p key={user.id}>{user.name}</p>)
                  }
                </div>
              </>
            )
      }
    </>
  )
}

// const mapStateToProps = state => ({
//   userData: state.user
// })

// const mapDispatchToProps = dispatch => ({
//   fetchUsers: () => dispatch(fetchUsers())
// })

// export default connect(mapStateToProps, mapDispatchToProps) (UserContainer)
export default UserContainer
