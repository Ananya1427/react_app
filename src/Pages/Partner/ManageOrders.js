import React, { useState } from 'react';

const ManageOrders = () => {
    const [loading, setLoading] = useState('');

    return(
        <div className='row mt-5 pt-5 mx-md-2'>
            <div className='col-lg-8 col-md-12 col-10 offset-lg-2 offset-md-0 offset-1 p-md-4 p-3 text-center shadow'>
                {loading ? <h3 className='text-center m-3'>Loading...</h3> :
                    <form onSubmit={''} className='row px-lg-5 py-lg-3 d-flex justify-content-center'>
                        <h3 className='text-center mb-3'>Manage Orders</h3>
                        <div className='row p-2'>
                            
                        </div>
                    </form>}
            </div>
        </div>
    )
}

export default ManageOrders;
