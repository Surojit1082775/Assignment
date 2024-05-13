import React from 'react'

const main = () => {
    return (
        <>
            <div className='main-content'>

                <div className='main-text'>
                    <div>
                        <h1>CODELOGI<span className='main-text-bg'>CX</span></h1>
                        <h3>Product Engineering</h3>
                    </div>
                    <div className='main-btn'>
                        <button>Get Started</button>
                        <h2>COMPANY</h2>
                    </div>
                </div>
                <div className='main-side'>
                    <div className='first'>
                        <img src='./images/video.png' alt='video' />
                    </div>
                    <div className='second'>
                        <img src='./images/image_1.png' alt='profile1' />
                    </div>
                </div>
            </div>
            <div className='main-footer'>
                <div>
                    <div class='backgroud'>
                        <img src='./images/background.png' alt='backgroud' />
                    </div>
                    <div className='background-cover'>
                        <img src='./images/image_2.png' alt='backgroud' />
                    </div>
                </div>
                <div>
                    <div className='footer-images'>
                        <div className='image1'>
                            <img src='./images/image_3.png' alt='profile' />
                        </div>
                        <div className='image2'>
                            <img src='./images/image_4.png' alt='profile' />
                        </div>
                        <div className='image3'>
                            <img src='./images/image_5.png' alt='profile' />
                        </div>
                        <button>Excellent 100+ Reviews</button>
                    </div>
                    
                </div>
            </div>

        </>
    )
}

export default main;