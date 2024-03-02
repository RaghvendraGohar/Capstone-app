import React from 'react'

function Register() {
    return (
        <div className='Register'>
            <img id='reg_background_img' height={'100%'} width={'50%'} src="src\assets\image_13.png" alt="background_img" />
            <h1 style={{
                color: '#FFFFFF',
                width: '695px',
                height: '143px',
                fontFamily: 'Roboto',
                fontSize: '55px',
                fontWeight: '900',
                lineHeight: '78px',
                letterSpacing: '0.02em',
                textAlign: 'left',
                position: 'absolute',
                marginLeft: '30px',
                marginTop: '34%'
            }}>Discover new things on Superapp</h1>

            <div className='form'>
                <h1 style={{ color: '#72DB73', fontFamily: 'Single Day', fontWeight: 400, fontSize: '67px', lineHeight: '93.59px', margin: 0, padding: 0 }}>Super app</h1>
                <h3 id='createAccount' style={{ color: '#FFFFFF', margin: 0, padding: 0 }}>Create your new account</h3>
                <input type="text" id="input" placeholder="Name" />
                <input type="text" id="input" placeholder="UserName" />
                <input type="email" id="input" placeholder="Email" />
                <input type="tel" id="input" placeholder="Mobile" />
                <div className="checkbox-container" style={{ display: 'flex' }}>
                    <input type="checkbox" id="inpu" />
                    <p style={{ color: '#7C7C7C', fontFamily: 'DM Sans', marginLeft: '15px' }}>Share my registration data with Superapp</p>
                </div>
                <button style={{
                    width: '400px',
                    height: '55px',
                    borderRadius: '28px',
                    fontFamily: 'Roboto', // Font family
                    fontSize: '20px', // Font size
                    fontWeight: '600', // Font weight
                    lineHeight: '32px', // Line height
                    letterSpacing: '0.02em', // Letter spacing
                    background: '#72DB73', // Background color
                    color: '#FFFFFF', // Text color
                }}>SIGN UP</button>

                <p style={{ color: '#7C7C7C' }} id='terms'>
                    By clicking on Sign up. you agree to Superapp <span style={{ color: '#72DB73', margin: '0' }}>Terms and Conditions of Use</span>
                </p>
                <p style={{ color: '#7C7C7C' }} id='terms'>
                    To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span style={{ color: '#72DB73', margin: '0' }}>Privacy Policy</span>
                </p>
            </div>
        </div>


    )
}

export default Register