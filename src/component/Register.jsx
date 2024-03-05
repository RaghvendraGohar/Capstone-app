import React, { useEffect, useState } from 'react'

function Register() {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [shareData, setShareData] = useState(false);
    const [nameError, setNameError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [shareDataError, setShareDataError] = useState('');

    useEffect(() => {
        const storedFormData = JSON.parse(localStorage.getItem('formData'));
        if (storedFormData) {
            setName(storedFormData.name)
            setUsername(storedFormData.username)
            setEmail(storedFormData.email)
            setMobile(storedFormData.mobile)
            setShareData(storedFormData.shareData)
        }
    }, [])

    const handleSubmit = () => {

        setNameError('');
        setUsernameError('');
        setEmailError('');
        setMobileError('');
        setShareDataError('');

        if (!name) {
            setNameError('Name is required');
            return;
        }
        if (!username) {
            setUsernameError('Username is required');
            return;
        }
        if (!email) {
            setEmailError('Email is required');
            return;
        }
        if (!mobile) {
            setMobileError('Mobile is required');
            return;
        }
        // Additional validation for checkbox
        if (!shareData) {
            setShareDataError('Please agree to share your data');
            return;
        }

        // Create an object to hold form data
        const formData = {
            name,
            username,
            email,
            mobile,
            shareData
        };

        const jsonData = JSON.stringify(formData);

        localStorage.setItem('formData', jsonData);
    }
    // Convert the object to a JSON string



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
                <input type="text" id="input" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                {nameError && <div style={{ color: 'red' }}>{nameError}</div>}
                <input type="text" id="input" placeholder="UserName" value={username} onChange={e => setUsername(e.target.value)} />
                {usernameError && <div style={{ color: 'red' }}>{usernameError}</div>}
                <input type="email" id="input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                <input type="tel" id="input" placeholder="Mobile" value={mobile} onChange={e => setMobile(e.target.value)} />
                {mobileError && <div style={{ color: 'red' }}>{mobileError}</div>}
                <div className="checkbox-container" style={{ display: 'flex' }}>
                    <input type="checkbox" id="inpu" value={shareData} onChange={e => setShareData(e.target.value)} />
                    <label htmlFor="input" style={{ color: '#7C7C7C', fontFamily: 'DM Sans', marginLeft: '15px' }}>Share my registration data with Superapp</label>
                    {shareDataError && <div style={{ color: 'red' }}>{shareDataError}</div>}

                </div>
                <button style={{
                    width: '400px',
                    height: '55px',
                    borderRadius: '28px',
                    fontFamily: 'Roboto',
                    fontSize: '20px',
                    fontWeight: '600',
                    lineHeight: '32px',
                    letterSpacing: '0.02em',
                    background: '#72DB73',
                    color: '#FFFFFF',
                }} onClick={handleSubmit}>SIGN UP</button>

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


