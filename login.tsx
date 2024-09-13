import React, { useState } from "react";
import { EyeOpenIcon, EnvelopeClosedIcon, EyeClosedIcon } from '@radix-ui/react-icons';

export default function Login() {
    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [isVerificationCode, setIsVerificationCode] = useState(false);
    const [isChangePassword, setIsChangePassword] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [newPasswordError, setNewPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handlePasswordVisibilityToggle = () => {
        setPasswordVisible(!passwordVisible);
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setEmailError("Invalid email");
        } else {
            setIsLoginButtonDisabled(true);
            const formElement = e.target as HTMLFormElement;
            formElement.submit();   
        }
    };

    const handleForgotPasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setEmailError("Invalid email");
        } else {
            setEmailError("");
            setIsLoginButtonDisabled(true);
            // Simulate sending code and display verification code form
            setIsVerificationCode(true);
            setIsForgotPassword(false);
        }
    };

    const handleVerificationCodeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoginButtonDisabled(true);
        // Here you would handle verification of the code
        setIsChangePassword(true);
        setIsVerificationCode(false);
    };

    const handleChangePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would handle the password reset
        const formElement = e.target as HTMLFormElement;
        formElement.submit();
    };

    const validateNewPassword = (password: string) => {
        if (password.length < 8) {
            setNewPasswordError("Password must be at least 8 characters");
        } else {
            setNewPasswordError("");
        }
        setNewPassword(password);
    };

    const validateConfirmPassword = (password: string) => {
        if (password !== newPassword) {
            setConfirmPasswordError("Passwords do not match");
        } else {
            setConfirmPasswordError("");
        }
        setConfirmPassword(password);
    };

    return (
        <main className="flex flex-row w-full h-screen items-center bg-base-white overflow-hidden">
            <section className="hidden md:flex flex-1 bg-[url('/gwayvaauth.png')] bg-no-repeat bg-fixed bg-contain min-w-[50%] h-screen items-center">
            <div className="w-full h-full opacity-80 bg-gradient-to-br from-gwayva-blue to-estore-blue">
                    <div className="flex flex-col justify-center items-center gap-8 p-30 max-w-full box-border">
                        <div className="flex flex-col items-start gap-12 max-w-[672px]">
                            <img src="/Stars.jpg" alt="Icon" className="w-20 h-20" />
                            <div className="text-base-white  text-[60px] font-bold leading-[72px] tracking-[-1.2px] text-left">Transform your daily grind with our products.</div>
                            <div className="text-[#FDEFEC]  text-[20px] font-medium leading-[30px] text-left">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col justify-center items-center flex-1 w-full max-w-full h-screen box-border py-16 md:py-5 md:px-5">
                <div className="flex flex-col justify-between items-center h-screen p-5 w-full max-w-[400px] box-border">
                    <div className="flex flex-col items-start w-full box-border">
                        <div className="rounded-lg p-2 shadow-[0px_1.5px_4.5px_rgba(16,24,40,0.1),_0px_1.5px_3px_rgba(16,24,40,0.06)]">
                        <img src="/android-chrome-192x192.png" alt="logo" className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col items-start gap-3 w-full">
                            <div className="text-gray-800  text-2xl font-bold leading-[38px] pt-5">
                                {isChangePassword
                                    ? "Change Password"
                                    : isVerificationCode
                                    ? "Enter Verification Code"
                                    : isForgotPassword
                                    ? "Forgot Password"
                                    : "Log in"}
                            </div>
                            <div className="text-gray-600  text-base font-normal leading-6">
                                {isChangePassword
                                    ? "Enter your new password"
                                    : isVerificationCode
                                    ? `Enter the verification code sent to ${email} to reset your password.`
                                    : isForgotPassword
                                    ? "A verification code to reset your password will be sent to your email address."
                                    : "Welcome Back! Enter your details"}
                            </div>
                        </div>
                        <div>
                            {isChangePassword ? (
                                <form onSubmit={handleChangePasswordSubmit} action="/change-password" method="post">
                                    <div className="flex flex-col items-start gap-2.5 w-full pt-5">
                                        <label htmlFor="newPassword">New Password <span>*</span></label>
                                        <div className="relative w-full flex items-center">
                                            <input
                                                className="w-full pr-10 py-3 px-4 rounded-lg border border-gray-300 bg-white shadow-sm box-border"
                                                id="newPassword"
                                                name="newPassword"
                                                type={passwordVisible ? "text" : "password"}
                                                placeholder="Enter new password"
                                                autoComplete="off"
                                                value={newPassword}
                                                onChange={(e) => validateNewPassword(e.target.value)}
                                                required
                                            />
                                            <span onClick={handlePasswordVisibilityToggle} className="absolute right-2.5 cursor-pointer text-xl text-gray-800">
                                                {passwordVisible ? <EyeClosedIcon /> : <EyeOpenIcon />}
                                            </span>
                                        </div>
                                        {newPasswordError && <div className="text-red-500 text-sm mt-1.5">{newPasswordError}</div>}
                                        <div className="subtext">Must be at least 8 characters</div>
                                    </div>
                                    <div className="flex flex-col items-start gap-2.5 w-full pt-5">
                                        <label htmlFor="confirmPassword">Confirm Password <span>*</span></label>
                                        <div className="relative w-full flex items-center">
                                            <input
                                                className="w-full pr-10 py-3 px-4 rounded-lg border border-gray-300 bg-white shadow-sm box-border"
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                type={passwordVisible ? "text" : "password"}
                                                placeholder="Confirm new password"
                                                autoComplete="off"
                                                value={confirmPassword}
                                                onChange={(e) => validateConfirmPassword(e.target.value)}
                                                required
                                            />
                                            <span onClick={handlePasswordVisibilityToggle} className="absolute right-2.5 cursor-pointer text-xl text-gray-800">
                                                {passwordVisible ? <EyeClosedIcon /> : <EyeOpenIcon />}
                                            </span>
                                        </div>
                                        {confirmPasswordError && <div className="text-red-500 text-sm mt-1.5">{confirmPasswordError}</div>}
                                        <div className="subtext">Both passwords must match</div>
                                    </div>
                                    <div className="flex flex-col items-start gap-2.5 w-full pt-5">
                                        <button 
                                            type="submit" 
                                            disabled={newPasswordError !== "" || confirmPasswordError !== "" || newPassword === "" || confirmPassword === ""}
                                        >
                                            Reset Password
                                        </button>
                                    </div>
                                </form>
                            ) : isVerificationCode ? (
                                <form onSubmit={handleVerificationCodeSubmit} action="/verify-code" method="post">
                                    <div className="flex flex-col items-start gap-2.5 w-full pt-5">
                                        <label htmlFor="verificationCode">Code <span>*</span></label>
                                        <input
                                            className="w-full pr-10 py-3 px-4 rounded-lg border border-gray-300 bg-white shadow-sm box-border"
                                            id="verificationCode"
                                            name="verificationCode"
                                            type="text"
                                            placeholder="Enter your verification code"
                                            autoComplete="off"
                                            value={verificationCode}
                                            onChange={(e) => setVerificationCode(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col items-start gap-2.5 w-full pt-5">
                                        <button 
                                            type="submit" 
                                            disabled={verificationCode.trim() === ""}
                                        >
                                            Verify
                                        </button>
                                    </div>
                                </form>
                            ) : isForgotPassword ? (
                                <form onSubmit={handleForgotPasswordSubmit} action="/forgot-password" method="post">
                                    <div className="flex flex-col items-start gap-2.5 w-full pt-5">
                                        <label htmlFor="email">Email <span>*</span></label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="text"
                                            placeholder="Enter your email"
                                            autoComplete="off"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className={`w-full py-3 px-4 rounded-lg border border-gray-300 bg-white shadow-sm box-border ${emailError ? 'input-error' : ''}`}
                                            required
                                        />
                                        {emailError && <div className="text-red-500 text-sm mt-1.5">{emailError}</div>}
                                    </div>
                                    <div className="flex flex-col items-start gap-2.5 w-full pt-5">
                                        <button type="submit" disabled={isLoginButtonDisabled}>
                                            Send Code
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <form onSubmit={handleLoginSubmit} action="/login" method="post">
                                    <div className="flex flex-col items-start gap-2.5 w-full pt-5">
                                        <label htmlFor="email">Email <span>*</span></label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="text"
                                            placeholder="Enter your email"
                                            autoComplete="off"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className={`w-full py-3 px-4 rounded-lg border border-gray-300 bg-white shadow-sm box-border ${emailError ? 'input-error' : ''}`}
                                            required
                                        />
                                        {emailError && <div className="text-red-500 text-sm mt-1.5">{emailError}</div>}
                                    </div>
                                    <div className="flex flex-col items-start gap-2.5 w-full pt-5">
                                        <label htmlFor="password">Password <span>*</span></label>
                                        <div className="relative w-full flex items-center">
                                            <input
                                                className="w-full pr-10 py-3 px-4 rounded-lg border border-gray-300 bg-white shadow-sm box-border"
                                                id="password"
                                                name="password"
                                                type={passwordVisible ? "text" : "password"}
                                                placeholder="Enter your password"
                                                autoComplete="off"
                                                required
                                            />
                                            <span onClick={handlePasswordVisibilityToggle} className="absolute right-2.5 cursor-pointer text-xl text-gray-800">
                                                {passwordVisible ? <EyeClosedIcon /> : <EyeOpenIcon />}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between w-full mt-5 mb-6">
                                        <label className="flex items-center gap-2 text-base text-gray-800 mr-5">
                                            <input type="checkbox" id="rememberMe" />
                                            Remember Me
                                        </label>
                                        <p onClick={() => setIsForgotPassword(true)} className="text-base text-[#044065] no-underline hover:underline" style={{cursor: 'pointer'}}>
                                            Forgot Password?
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-start gap-2.5 w-full pt-5">
                                        <button className="w-full h-12 rounded-lg text-white border border-[#044065] bg-[#044065] shadow-sm cursor-pointer disabled:bg-gray-300" type="submit" disabled={isLoginButtonDisabled}>
                                            Log In
                                        </button>
                                    </div>
                                    <div className="flex justify-center items-start gap-1 text-gray-600 text-base font-normal leading-5 p-2.5">
                                        Don't have an account? <a href="/Register" className=" text-base font-medium text-[#044065] no-underline">Sign up</a>
                                    </div>

                                </form>
                            )}
                        </div>
                    </div>
                    <footer className="flex w-full px-8 py-4 justify-between items-end text-gray-600 text-base font-normal leading-5 mt-auto">
                        <div className="footer-text">
                            &copy; Gwayva 2024
                        </div>
                        <div className="footer-frame"><EnvelopeClosedIcon /> info@gwayva.com</div>
                    </footer>
                </div>
            </section>
        </main>
    );
}
