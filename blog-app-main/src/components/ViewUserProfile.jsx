import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card, CardBody, CardFooter, Col, Container, Row, Table } from 'reactstrap'
import { getCurrentUserDetail, isLoggedIn } from '../auth'
const ViewUserProfile = ({ user, updateProfileClick }) => {


    const [currentUser, setCurrentUser] = useState(null)
    const [login, setLogin] = useState(false)
    useEffect(() => {
        setCurrentUser(getCurrentUserDetail())
        setLogin(isLoggedIn())
    }, [])
    return (
        <Card className='mt-5 border-0 rounded-0 shadow-sm'>
            <CardBody>
                <h3 className='text-center'>USER INFORMATION</h3>

                <Container className='text-center'>
                    <img style={{ maxWidth: '150px', maxHeight: '150px' }} src={user.image ? user.image : 'https://th.bing.com/th/id/OIP.OlnxO753VRgHKDLLDzCKoAHaHw?w=185&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7'} alt="user profile picture" className='img-fluid  rounded-circle' />
                </Container>
                <Table responsive striped hover bordered={true} className='text-center mt-4'>
                    <tbody>
                        <tr>
                            <td >
                                BLOGIFY ID
                            </td>
                            <td>
                                BLOGIFY{user.id}
                            </td>
                        </tr>
                        <tr>
                            <td >
                                USER NAME
                            </td>
                            <td>
                                {user.name}
                            </td>
                        </tr>
                        <tr>
                            <td >
                                USER EMAIL
                            </td>
                            <td>
                                {user.email}
                            </td>
                        </tr>
                        <tr>
                            <td >
                                ABOUT
                            </td>
                            <td>
                                {user.about}
                            </td>

                        </tr>
                        <tr>
                            <td>
                                ROLE
                            </td>
                            <td>
                                {user.roles.map((role) => {
                                    return (
                                        <div key={role.id}>{role.name}</div>
                                    )
                                })}
                            </td>
                        </tr>
                    </tbody>
                </Table>

                {/* {currentUser ? (currentUser.id == user.id) ? (
                    <CardFooter className='text-center'>
                        <Button onClick={updateProfileClick} color='warning' >Update Profile</Button>
                    </CardFooter>
                ) : '' : ''} */}

            </CardBody>
        </Card>

    )
}

export default ViewUserProfile