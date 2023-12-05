import SideNav from './SideNav';
import './index.css';

const SignUpType = () => {
    return (
        <div className='partner-signup container mt-5'>
            <div className='row mt-5 pt-5'>
                <SideNav />
                <div className='col-lg-6 col-md-8 col-10 ms-2'>
                    <h2 className='d-flex justify-content-start fw-light lh-lg'>Restaurant Type & Timings</h2>
                    <div className='my-3'>
                        <form onSubmit={''} className='container'>
                            <div className='form-group shadow p-3 my-3 row'>
                                <h6 className='text-start'>Establishment type</h6>
                                <p className='fw-light text-start m-0'>Select most relevant category for your restaurant type</p>
                                <div className='col-12 my-3 mb-md-1 px-3 text-start'>
                                    <input className='form-check-input me-3' type='radio' name='establishment-type' id='check-both' />
                                    <label className='form-check-label d-inline' for='check-both'>
                                        <h6 className='text-start d-inline-block mb-0'>Both, delivery and dine-in available</h6>
                                        <p className='fw-light text-start checkbox-content'>Select this option when you have a place for customers to dine-in and also want to activate online ordering for your restaurant</p>
                                    </label>
                                </div>
                                <div className='col-12 my-3 mb-md-1 px-3 text-start'>
                                    <input className='form-check-input me-3' type='radio' name='establishment-type' id='check-dine' />
                                    <label className='form-check-label d-inline' for='check-dine'>
                                        <h6 className='text-start d-inline-block mb-0'>Dine-in only</h6>
                                        <p className='fw-light text-start checkbox-content'>Select when you don't want to register for online ordering</p>
                                    </label>
                                </div>
                                <div className='col-12 my-3 mb-md-1 px-3 text-start'>
                                    <input className='form-check-input me-3' type='radio' name='establishment-type' id='check-delivery' />
                                    <label className='form-check-label d-inline' for='check-delivery'>
                                        <h6 className='text-start d-inline-block mb-0'>Delivery only</h6>
                                        <p className='fw-light text-start checkbox-content'>Select when you don't have a facility for customers to dine-in (like delivery kitchens)</p>
                                    </label>
                                </div>
                                <div className='col-12 my-3 mb-md-1 px-3 text-start row'>
                                    <h6 className='text-start'>Select options which best describe your outlet</h6>
                                    <div className='col-4 my-3 mb-md-1 px-3 text-start'>
                                        <input className='form-check-input me-3' type='checkbox' value='' id='check-bakery' />
                                        <label className='form-check-label' for='check-bakery'>
                                            Bakery
                                        </label>
                                    </div>
                                    <div className='col-4 my-3 mb-md-1 px-3 text-start'>
                                        <input className='form-check-input me-3' type='checkbox' value='' id='check-beverage-shop' />
                                        <label className='form-check-label' for='check-beverage-shop'>
                                            Beverage Shop
                                        </label>
                                    </div>
                                    <div className='col-4 my-3 mb-md-1 px-3 text-start'>
                                        <input className='form-check-input me-3' type='checkbox' value='' id='check-Café' />
                                        <label className='form-check-label' for='check-Café'>
                                            Café
                                        </label>
                                    </div>
                                    <div className='col-4 my-3 mb-md-1 px-3 text-start'>
                                        <input className='form-check-input me-3' type='checkbox' value='' id='check-casual-dining' />
                                        <label className='form-check-label' for='check-casual-dining'>
                                            Casual Dining
                                        </label>
                                    </div>
                                    <div className='col-4 my-3 mb-md-1 px-3 text-start'>
                                        <input className='form-check-input me-3' type='checkbox' value='' id='check-club' />
                                        <label className='form-check-label' for='check-club'>
                                            Club
                                        </label>
                                    </div>
                                    <div className='col-4 my-3 mb-md-1 px-3 text-start'>
                                        <input className='form-check-input me-3' type='checkbox' value='' id='check-cocktail-bar' />
                                        <label className='form-check-label' for='check-cocktail-bar'>
                                            Cocktail Bar
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className='form-group shadow p-3 my-3 row'>
                                <h6 className='text-start'>Type of cuisines</h6>
                                <p className='fw-light text-start m-0'>Select options which best describe food your serve</p>
                                <div className='col-4 my-3 mb-md-1 px-3 text-start'>
                                    <input className='form-check-input me-3' type='checkbox' value='' id='check-afghan' />
                                    <label className='form-check-label' for='check-afghan'>
                                        Afghan
                                    </label>
                                </div>
                                <div className='col-4 my-3 mb-md-1 px-3 text-start'>
                                    <input className='form-check-input me-3' type='checkbox' value='' id='check-african' />
                                    <label className='form-check-label' for='check-african'>
                                        African
                                    </label>
                                </div>
                                <div className='col-4 my-3 mb-md-1 px-3 text-start'>
                                    <input className='form-check-input me-3' type='checkbox' value='' id='check-american' />
                                    <label className='form-check-label' for='check-american'>
                                        American
                                    </label>
                                </div>
                                <div className='col-4 my-3 mb-md-1 px-3 text-start'>
                                    <input className='form-check-input me-3' type='checkbox' value='' id='check-andhra' />
                                    <label className='form-check-label' for='check-andhra'>
                                        Andhra
                                    </label>
                                </div>
                                <div className='col-4 my-3 mb-md-1 px-3 text-start'>
                                    <input className='form-check-input me-3' type='checkbox' value='' id='check-arabian' />
                                    <label className='form-check-label' for='check-arabian'>
                                        Arabian
                                    </label>
                                </div>
                                <div className='col-4 my-3 mb-md-1 px-3 text-start'>
                                    <input className='form-check-input me-3' type='checkbox' value='' id='check-armenian' />
                                    <label className='form-check-label' for='check-armenian'>
                                        Armenian
                                    </label>
                                </div>
                            </div>

                            <div className='form-group shadow p-3 my-3 row'>
                                <h6 className='text-start'>Restaurant operational hours</h6>
                                <p className='fw-light text-start m-0'>Mark restaurant opening and closing hours</p>
                                <div className='col-4 my-3 mb-md-1 px-3 text-start'>
                                    <label className='form-input-label d-flex justify-content-center py-2' for='opens-at'>
                                        Opens at
                                    </label>
                                    <input
                                        id='opens-at'
                                        type='text'
                                        className='form-control w-100'
                                        value={''}
                                        onChange={''}
                                        placeholder='--:-- --'
                                    />
                                </div>
                                <div className='col-1 mb-md-1 px-3 text-start d-flex align-items-center justify-content-center'>
                                    <span className='mt-5'>to</span>
                                </div>
                                <div className='col-4 my-3 mb-md-1 px-3 text-start'>
                                    <label className='form-input-label d-flex justify-content-center py-2' for='closes-at'>
                                        Closes at
                                    </label>
                                    <input
                                        id='closes-at'
                                        type='text'
                                        className='form-control w-100'
                                        value={''}
                                        onChange={''}
                                        placeholder='--:-- --'
                                    />
                                </div>
                                <div className='my-4 row'>
                                    <h6 className='text-start'>Mark open days</h6>
                                    <p className='fw-light text-start m-0'>Don't forget to uncheck your off-day</p>
                                    <div className='col-4 my-3 mb-md-1 px-3 text-start'>
                                        <input className='form-check-input me-3' type='checkbox' value='' id='check-sunday' />
                                        <label className='form-check-label' for='check-sunday'>
                                            Sunday
                                        </label>
                                    </div>
                                    <div className='col-4 my-3 mb-md-1 px-3 text-start'>
                                        <input className='form-check-input me-3' type='checkbox' value='' id='check-monday' />
                                        <label className='form-check-label' for='check-monday'>
                                            Monday
                                        </label>
                                    </div>
                                    <div className='col-4 my-3 mb-md-1 px-3 text-start'>
                                        <input className='form-check-input me-3' type='checkbox' value='' id='check-tuesday' />
                                        <label className='form-check-label' for='check-tuesday'>
                                            Tuesday
                                        </label>
                                    </div>
                                    <div className='col-4 my-3 mb-md-1 px-3 text-start'>
                                        <input className='form-check-input me-3' type='checkbox' value='' id='check-wednesday' />
                                        <label className='form-check-label' for='check-wednesday'>
                                            Wednesday
                                        </label>
                                    </div>
                                    <div className='col-4 my-3 mb-md-1 px-3 text-start'>
                                        <input className='form-check-input me-3' type='checkbox' value='' id='check-thursday' />
                                        <label className='form-check-label' for='check-thursday'>
                                            Thursday
                                        </label>
                                    </div>
                                    <div className='col-4 my-3 mb-md-1 px-3 text-start'>
                                        <input className='form-check-input me-3' type='checkbox' value='' id='check-friday' />
                                        <label className='form-check-label' for='check-friday'>
                                            Friday
                                        </label>
                                    </div>
                                    <div className='col-4 my-3 mb-md-1 px-3 text-start'>
                                        <input className='form-check-input me-3' type='checkbox' value='' id='check-saturday' />
                                        <label className='form-check-label' for='check-saturday'>
                                            Saturday
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpType;
