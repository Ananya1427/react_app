import { useState } from "react";

import SideNav from "./SideNav";
import FileUpload from "./FileUpload";

const SignUpImages = () => {

    const [menuImages, setMenuImages] = useState([]);
    const [restaurantImages, setRestaurantImages] = useState([]);
    const [foodImages, setFoodImages] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        <div className='partner-signup container mt-5'>
            <div className='row mt-5 pt-5'>
                <SideNav />
                <div className='col-lg-6 col-md-8 col-10 ms-2'>
                    <h2 className='d-flex justify-content-start fw-light lh-lg'>Upload images</h2>
                    <div className='my-3'>
                        <form onSubmit={''} className='container'>
                            <div className='form-group shadow p-3 my-3 row'>
                                <h6 className='text-start'>Menu images</h6>
                                <p className='fw-light text-start m-0'>Your menu will be directly visible to customers on Flavor Chronicles</p>
                                <FileUpload
                                    id={'formFile'}
                                    images={menuImages}
                                    setImages={setMenuImages}
                                    setLoading={setLoading}
                                />
                            </div>

                            <div className='form-group shadow p-3 my-3 row'>
                                <h6 className='text-start'>Restaurant images</h6>
                                <p className='fw-light text-start m-0'>{'Please upload atleast one facade shot (picture of the restaurant front)'}</p>
                                <FileUpload
                                    id={'formFile'}
                                    images={restaurantImages}
                                    setImages={setRestaurantImages}
                                    setLoading={setLoading}
                                />
                            </div>

                            <div className='form-group shadow p-3 my-3 row'>
                                <h6 className='text-start'>Food images</h6>
                                <p className='fw-light text-start m-0'>{'Please do not put images of raw ingredients'}</p>
                                <FileUpload
                                    id={'formFile'}
                                    images={foodImages}
                                    setImages={setFoodImages}
                                    setLoading={setLoading}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpImages;
