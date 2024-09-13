import React, { useState } from 'react';
import { EyeOpenIcon, EnvelopeClosedIcon, EyeClosedIcon } from '@radix-ui/react-icons';



const Register: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    password: ''
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  
  const handlePasswordVisibilityToggle = () => {
    setPasswordVisible(!passwordVisible);
};
  const isStep1Valid = formData.firstName && formData.lastName && formData.gender && formData.dateOfBirth;
  const isStep2Valid = formData.email && formData.phoneNumber && formData.password.length >= 8;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (isStep1Valid) {
      setStep(2);
    }
  };

  const handleSubmit = () => {
    if (isStep2Valid) {
      // Handle form submission logic here
    }
  };

  return (
    <main className="kc-container">
      <section className="kc-left-section">
        <div className="overlay">
            <div className="left-container">
                <div className="Content">
                    <img src="/Stars.jpg" alt="Icon" className="kc-icon" />
                    <div className="text">Transform your daily grind with our products.</div>
                    <div className="supporting-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                 </div>
            </div>
        </div>
      </section>
      <section className="kc-right-section">
        <div className="register-right-container"> 
          <div className="register-right-content">
            <div className="logomark">
              <img src="/android-chrome-192x192.png" alt="logo" width="24" height="24" />
            </div>
            <div className="right-text">
                Sign up
            </div>
            <div className="right-supportingtext">
                Welcome! Enter your details
            </div>
            {step === 1 ? (
              <>
                <div className="register-form-group"> 
                  <label htmlFor="firstName">First name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="register-form-group"> 
                  <label htmlFor="lastName">Last name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="register-gender-dob"> 
                  <div className="register-form-group-half"> 
                    <label htmlFor="gender">Gender *</label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="register-form-group-half"> 
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <button
                  className="register-next-button" 
                  onClick={handleNext}
                  disabled={!isStep1Valid}
                >
                  Next
                </button>
                <p className="register-or-complete">or complete with</p> 
                <div className="register-social-icons"> 
                  <img src="/google-icon.png" alt="Google" />
                  <img src="/facebook-icon.png" alt="Facebook" />
                  <img src="/x-icon.png" alt="X"  />
                </div>
                <p className="register-login-link"> 
                  Already have an account? <a href="/Login" className="link-style">Login</a>
                </p>
              </>
            ) : (
              <>
                <div className="register-form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="register-form-group"> 
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="register-form-group"> 
                  <label htmlFor="password">Password</label>
                    <div className="password-container">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                    <span onClick={handlePasswordVisibilityToggle} className="password-toggle">
                        {passwordVisible ? <EyeClosedIcon /> : <EyeOpenIcon />}
                    </span>
                    </div>
                  </div>
                  <small>Must be at least 8 characters</small>
            
                <button
                  className="register-get-started-button" 
                  onClick={handleSubmit}
                  disabled={!isStep2Valid}
                >
                  Get started
                </button>
                <p className="register-login-link"> 
                  Already have an account? <a href="/login" className="link-style">Login</a>
                </p>
              </>
            )}
          </div>
          <footer className="footer">
            <div className="footer-text">
                &copy; Gwayva 2024
            </div>
            <div className="footer-frame"><EnvelopeClosedIcon /> info@gwayva.com</div>
          </footer>
        </div>
      </section>
    </main>
  );
};

export default Register;
