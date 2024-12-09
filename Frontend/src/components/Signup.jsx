import React, { useContext, useState, useRef } from "react";
import logo from "../assets/Logo.svg";
import googleLogo from "../assets/Google Icon.svg";
import facebookLogo from "../assets/facebook.png";
import appleLogo from "../assets/apple.svg";
import { MESSAGE_API_CONTEXT, USER_PROFILE_CONTEXT } from "../contexts.js";
import { getProfileApi, loginApi, signUpApi } from "../../libs/user/authApi.js";
import { storeAuth } from "../../libs/util";
import Loading from "../componets-utils/Loading.jsx";
import { useEffect } from "react";
import { API_BASE_URL, GOOGLE_URL } from "@/config";
const SignUpModal = ({ showModal, closeModal, openLoginModal }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const modalRef = useRef(null);
  const messageApi = useContext(MESSAGE_API_CONTEXT);
  useEffect(() => {
    if (modalRef.current & showModal) modalRef.current.focus();
    if (showModal) {
      document.body.style.overflow = "hidden";
      modalRef.current.addEventListener("keypress", (e) => {
        console.log(e.key);
        if (e.key === "Escape") {
          closeModal();
        }
      });
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);
  // userP
  const { setUserProfile } = useContext(USER_PROFILE_CONTEXT);

  if (!showModal) return null; // Don't render if modal is hidden

  const isStrongPassword = (password) => {
    return RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    ).test(password);
  };

  const handleSignUp = async (e) => {
    // Handle sign up logic here

    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!isStrongPassword(password)) {
      setError("Password is too weak. Please choose a stronger password.");
      return;
    }
    const formData = {
      firstName,
      lastName,
      email,
      phoneNumbers: [phone1, phone2],
      password,
    };
    const errorLogger = (error) => {
      console.error(error);
      setError(error);
    };
    const signUp = await signUpApi(formData, (error) => {
      console.error(error);
      setError(error);
    });

    if (!signUp) return;
    const loginData = await loginApi({ email, password }, errorLogger);
    if (!loginData) return;
    const { accessToken, refreshToken, id: userId } = loginData;
    storeAuth(userId, accessToken, refreshToken);
    const userProfile = await getProfileApi(userId, accessToken, errorLogger);
    if (!userProfile) return;
    setUserProfile(userProfile);
    messageApi.success("SignUp Successful");
    closeModal();
  };

  return (
    <div
      className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
      ref={modalRef}
      tabIndex={0}
    >
      <div className="relative bg-white shadow-lg p-4 sm:p-8 rounded-[5%] w-[90%] max-w-md md:max-w-lg lg:max-w-xl">
        <button
          onClick={closeModal}
          className="top-2 right-4 absolute text-3xl text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        <img
          src={logo}
          alt="9ja Markets Logo"
          className="mx-auto mb-2 h-10 md:h-20"
        />
        <h2 className="mb-2 font-bold text-base text-center text-green md:text-2xl">
          Welcome to 9ja Markets
        </h2>
        <form
          className="space-y-4"
          onSubmit={async (e) => {
            setLoading(true);
            await handleSignUp(e).then(() => {
              setLoading(false);
            });
          }}
        >
          <div className="flex justify-between gap-2 wrap">
            <div>
              <label
                htmlFor="firstName"
                className="block font-medium text-gray-700 text-sm"
              >
                First Name
              </label>
              <input
                type="text"
                required
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border-gray-300 p-2 border rounded-lg focus:ring-green w-full focus:outline-none focus:ring-2"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block font-medium text-gray-700 text-sm"
              >
                Last Name
              </label>
              <input
                type="text"
                required
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border-gray-300 p-2 border rounded-lg focus:ring-green w-full focus:outline-none focus:ring-2"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block font-medium text-gray-700 text-sm"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="border-gray-300 p-2 border rounded-lg focus:ring-green w-full focus:outline-none focus:ring-2"
            />
          </div>
          <div className="flex justify-between gap-2 wrap">
            <div>
              <label
                htmlFor="Phone"
                className="block font-medium text-gray-700 text-sm"
              >
                Tel 1:
              </label>
              <input
                type="text"
                id="phone"
                min={10}
                max={11}
                value={phone1}
                onChange={(e) => setPhone1(e.target.value)}
                className="border-gray-300 mt-1 p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green"
              />
            </div>
            <div>
              <label
                htmlFor="Phone"
                className="block font-medium text-gray-700 text-sm"
              >
                Tel 2:
              </label>
              <input
                type="text"
                id="phone"
                min={10}
                max={11}
                value={phone2}
                onChange={(e) => setPhone2(e.target.value)}
                className="border-gray-300 mt-1 p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block font-medium text-gray-700 text-sm"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className={`mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-green ${
                  password ? "border-green-500" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="right-0 absolute inset-y-0 flex items-center pr-3"
              >
                {showPassword ? (
                  // Open eye icon for showing password
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#236C13"
                    className="size-5"
                  >
                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path
                      fillRule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  // Closed eye icon for hiding password
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={password ? "#236C13" : "#9CA3AF"}
                    className="size-5"
                  >
                    <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block font-medium text-gray-700 text-sm"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-green ${
                  confirmPassword ? "border-green-500" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="right-0 absolute inset-y-0 flex items-center pr-3"
              >
                {showConfirmPassword ? (
                  // Open eye icon for showing confirm password
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#236C13"
                    className="size-5"
                  >
                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path
                      fillRule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  // Closed eye icon for hiding confirm password
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={confirmPassword ? "#236C13" : "#9CA3AF"}
                    className="size-5"
                  >
                    <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {error && (
            <p className="font-semibold text-center text-red-500 text-sm">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="bg-green p-2 rounded-lg w-full text-white"
          >
            {loading ? (
              <>
                <Loading />
                Sign Up...
              </>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
        <div className="md:flex items-center hidden my-4 text-center">
          <div className="flex-grow border-gray-300 border-t"></div>
          <span className="px-4 text-gray-700 text-sm">Or</span>
          <div className="flex-grow border-gray-300 border-t"></div>
        </div>
        <p className="mt-2 md:mt-4 text-center text-sm md:text-base">
          Already have an account?{" "}
          <button onClick={openLoginModal} className="font-bold text-green">
            Login
          </button>
        </p>
        <div className="flex justify-center space-x-16 mt-2 md:mt-3">
          <button className="text-lg">
            <a href={GOOGLE_URL} target="_blank">
              <img src={googleLogo} alt="Google Login" className="h-6" />
            </a>
          </button>
          <button className="text-lg">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookLogo} alt="Facebook Login" className="h-6" />
            </a>
          </button>
          <button className="text-lg">
            <a
              href="https://appleid.apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={appleLogo} alt="Apple Login" className="h-6" />
            </a>
          </button>
        </div>
        <p className="mt-4 text-center text-gray-600 text-xs">
          By continuing you agree to the{" "}
          <a href="/" className="font-bold text-green">
            Policy and Rules
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpModal;
