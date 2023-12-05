import SideNav from "./SideNav";

const SignUp = () => {
    return (
        <div className='partner-signup container mt-5'>
            <div className='row mt-5 pt-5'>
                <SideNav />
                <div className='col-lg-6 col-md-8 col-10 ms-2'>
                    <h2 className='d-flex justify-content-start fw-light lh-lg'>Restaurant Information</h2>
                    <div className='my-3'>
                        <form onSubmit={''} className='container'>
                            <div className='form-group shadow p-3 my-3 row'>
                                <h6 className='text-start'>Restaurant details</h6>
                                <p className='fw-light text-start m-0'>Name, address and location</p>
                                <div className='col-12 my-3 mb-md-1 px-3'>
                                    <input
                                        id='restaurant-name'
                                        type='text'
                                        className='form-control w-100'
                                        value={''}
                                        onChange={''}
                                        placeholder='Restaurant Name'
                                    />
                                </div>
                                <div className='col-12 my-3 mb-md-1 px-3'>
                                    <input
                                        id='restaurant-address'
                                        type='text'
                                        className='form-control w-100'
                                        value={''}
                                        onChange={''}
                                        placeholder='Restaurant Street Address'
                                    />
                                </div>
                                <div className='col-4 my-3 mb-md-1 px-3'>
                                    <input
                                        id='restaurant-state'
                                        type='text'
                                        className='form-control w-100'
                                        value={''}
                                        onChange={''}
                                        placeholder='State'
                                    />
                                </div>
                                <div className='col-4 my-3 mb-md-1 px-3'>
                                    <input
                                        id='restaurant-city'
                                        type='text'
                                        className='form-control w-100'
                                        value={''}
                                        onChange={''}
                                        placeholder='City'
                                    />
                                </div>
                                <div className='col-4 my-3 mb-md-1 px-3'>
                                    <input
                                        id='restaurant-zip-code'
                                        type='text'
                                        className='form-control w-100'
                                        value={''}
                                        onChange={''}
                                        placeholder='Zip Code'
                                    />
                                </div>
                            </div>

                            <div className='form-group shadow p-3 my-3 row'>
                                <h6 className='text-start'>Contact details</h6>
                                <p className='fw-light text-start m-0'>Your customers will call on this number for general enquiries</p>
                                <div className='col-12 input-group my-3 mb-md-1 px-3'>
                                    <span class='input-group-text' id='basic-addon1'>+1</span>
                                    <input
                                        id='restaurant-number'
                                        type='text'
                                        className='form-control'
                                        value={''}
                                        onChange={''}
                                        placeholder='Restaurant Contact Number'
                                    />
                                </div>
                            </div>

                            <div className='form-group shadow p-3 my-3 row'>
                                <h6 className='text-start'>Restaurant owner details</h6>
                                <p className='fw-light text-start m-0'>These will be used to share revenue related communications</p>
                                <div className='col-12 input-group my-3 mb-md-1 px-3'>
                                    <span class='input-group-text' id='basic-addon1'>+1</span>
                                    <input
                                        id='onwer-contact-number'
                                        type='text'
                                        className='form-control'
                                        value={''}
                                        onChange={''}
                                        placeholder='Owner Contact Number'
                                    />
                                </div>
                                <div className='col-6 my-3 mb-md-1 px-3'>
                                    <input
                                        id='owner-firstname'
                                        type='text'
                                        className='form-control w-100'
                                        value={''}
                                        onChange={''}
                                        placeholder='Owner FisrtName'
                                    />
                                </div>
                                <div className='col-6 my-3 mb-md-1 px-3'>
                                    <input
                                        id='onwer-lastname'
                                        type='text'
                                        className='form-control w-100'
                                        value={''}
                                        onChange={''}
                                        placeholder='Owner LastName'
                                    />
                                </div>
                                <div className='col-12 input-group my-3 mb-md-1 px-3'>
                                    <span class='input-group-text' id='basic-addon2'>@</span>
                                    <input
                                        id='onwer-email-address'
                                        type='email'
                                        className='form-control'
                                        value={''}
                                        onChange={''}
                                        placeholder='Owner Email Address'
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
