import { USER_REQUEST, USER_SUCCESS, USER_FAILURE} from './userTypes'
import axios from 'axios'

export const userRequest = () => ({
  type: USER_REQUEST
})

export const userSuccess = (users) => ({
  type: USER_SUCCESS,
  payload: users
})

export const userFailure = (error) => ({
  type: USER_FAILURE,
  payload: error
})

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(userRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => dispatch(userSuccess(response.data)))
      .catch(error => dispatch(userFailure(error.message)))
  }
}