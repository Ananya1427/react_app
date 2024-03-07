import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ManageUsers = () => {
    const { users } = useSelector(state => ({...state}));
    const [loading, setLoading] = useState(false);
    const [usersDet, setUsersDet] = useState('');

    useEffect(() => {
        setLoading(true);
        if ( users) {
            setUsersDet(users);
            setLoading(false);
        }
    }, [users])

    return (
        <div className='row mt-5 pt-5 mx-md-2 d-flex justify-content-center'>
            <div className='col-lg-8 col-10 px-md-4 px-3 shadow'>
                {
                    loading ? <h3 className='text-center mb-3'>Loading...</h3> :
                        <form className='row px-lg-3 py-lg-3 d-flex justify-content-center'>
                            <h3 className='text-center mb-3'>{'Manage Users'}</h3>
                            <div className='row p-3'>
                                {usersDet?.length > 0 && usersDet?.map(user =>
                                    <ul className='list-group p-5 my-2 d-flex flex-row shadow'>
                                        <li className='list-group-item border-0 p-0 m-0 w-100'>
                                            <ul className='list-group p-0 m-0'>
                                                <li className='list-group-item p-0 m-0 border-0 w-100 text-start'>
                                                    <label className='col-form-label text-start fw-bold fs-5'>{user?.firstName?.concat(' ', user?.lastName)}</label>
                                                </li>
                                                <li className='list-group-item p-0 m-0 border-0 w-100 text-start'>
                                                    <label className='col-form-label text-start fw-bold fs-6'>Contact:</label>
                                                    <span className='ps-2'>
                                                        {user?.contact}
                                                    </span>
                                                </li>
                                                <li className='list-group-item p-0 m-0 border-0 w-100 text-start'>
                                                    <label className='col-form-label text-start fw-bold fs-6'>Email:</label>
                                                    <span className='ps-2'>
                                                        {user?.email}
                                                    </span>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='list-group-item border-0 p-0 m-0 w-100'>
                                            <ul className='list-group p-0 m-0'>
                                                <li className='list-group-item p-0 m-0 border-0 w-100 text-start'>
                                                    <label className='col-form-label text-start fw-bold fs-6'>Date of Birth:</label>
                                                    <span className='ps-2'>
                                                        {user?.dob}
                                                    </span>
                                                </li>
                                                <li className='list-group-item p-0 m-0 border-0 w-100 text-start'>
                                                    <label className='col-form-label text-start fw-bold fs-6'>Role:</label>
                                                    <span className='ps-2'>
                                                        {user?.role}
                                                    </span>
                                                </li>
                                                <li className='list-group-item p-0 m-0 border-0 w-100 text-start'>
                                                    <label className='col-form-label text-start fw-bold fs-6'>Address:</label>
                                                    <span className='ps-2'>
                                                        {user?.address?.concat(', ', user?.city, ', ', user?.state, ', ', user?.zipCode)}
                                                    </span>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </form>
                }
            </div>
        </div>
    )
}

export default ManageUsers;
