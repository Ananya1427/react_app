import { useState } from "react";

import SideNav from "./SideNav";
import FileUpload from "./FileUpload";
import banner from '../../Assets/add_photos.svg';
import DisplayImgaes from "./DisplayImages";

const SignUpImages = () => {

    const [menuImages, setMenuImages] = useState([]);
    const [restaurantImages, setRestaurantImages] = useState([]);
    const [foodImages, setFoodImages] = useState([]);

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
                                <div className='col-12 my-3 mb-md-1 px-3 text-center shadow-sm py-3 file-upload'>
                                    <div className=''>
                                        <p className='fw-light d-inline'>{'Drag & Drop to upload or '}</p>
                                        <label htmlFor={'add-menu-images-browse'} className='text-decoration-underline'>
                                            {' Browse'}
                                            <FileUpload
                                                id={'add-menu-images-browse'}
                                                setImages={setMenuImages}
                                            />
                                        </label>
                                    </div>
                                    <div className='text-center p-5'>
                                        <DisplayImgaes
                                            images={menuImages}
                                            setImages={setMenuImages}
                                        />
                                        <label htmlFor={'add-menu-images-icon'}>
                                            <img htmlFor={'add-menu-images-icon'} src={banner} alt='add-menu' />
                                            <FileUpload
                                                id={'add-menu-images-icon'}
                                                setImages={setMenuImages}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className='form-group shadow p-3 my-3 row'>
                                <h6 className='text-start'>Restaurant images</h6>
                                <p className='fw-light text-start m-0'>{'Please upload atleast one facade shot (picture of the restaurant front)'}</p>
                                <div className='col-12 my-3 mb-md-1 px-3 text-center shadow-sm py-3 file-upload'>
                                    <div className=''>
                                        <p className='fw-light d-inline'>{'Drag & Drop to upload or '}</p>
                                        <label htmlFor={'add-restaurant-images-browse'} className='text-decoration-underline'>
                                            {' Browse'}
                                            <FileUpload
                                                id={'add-restaurant-images-browse'}
                                                setImages={setRestaurantImages}
                                            />
                                        </label>
                                    </div>
                                    <div className='text-center p-5'>
                                        <DisplayImgaes
                                            images={restaurantImages}
                                            setImages={setRestaurantImages}
                                        />
                                        <label htmlFor={'add-restaurant-images-icon'}>
                                            <img htmlFor={'add-restaurant-images-icon'} src={banner} alt='add-restaurant' />
                                            <FileUpload
                                                id={'add-restaurant-images-icon'}
                                                setImages={setRestaurantImages}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className='form-group shadow p-3 my-3 row'>
                                <h6 className='text-start'>Food images</h6>
                                <p className='fw-light text-start m-0'>{'Please do not put images of raw ingredients'}</p>
                                <div className='col-12 my-3 mb-md-1 px-3 text-center shadow-sm py-3 file-upload'>
                                    <div className=''>
                                        <p className='fw-light d-inline'>{'Drag & Drop to upload or '}</p>
                                        <label htmlFor={'add-food-images-browse'} className='text-decoration-underline'>
                                            {' Browse'}
                                            <FileUpload
                                                id={'add-food-images-browse'}
                                                setImages={setFoodImages}
                                            />
                                        </label>
                                    </div>
                                    <div className='text-center p-5'>
                                        <DisplayImgaes
                                            images={foodImages}
                                            setImages={setFoodImages}
                                        />
                                        <label htmlFor={'add-food-images-icon'}>
                                            <img htmlFor={'add-food-images-icon'} src={banner} alt='add-food' />
                                            <FileUpload
                                                id={'add-food-images-icon'}
                                                setImages={setFoodImages}
                                            />
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

export default SignUpImages;
