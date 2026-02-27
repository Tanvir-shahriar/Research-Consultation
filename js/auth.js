// js/auth.js

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from './firebase-config.js';

// DOM Elements
const loginPage = document.getElementById('login-page');
const blogPage = document.getElementById('blog-page');
const authForm = document.getElementById('auth-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const logoutBtn = document.getElementById('logout-btn');
const userEmail = document.getElementById('user-email');
const loadingScreen = document.getElementById('loading-screen');

// Listen for authentication state changes
onAuthStateChanged(auth, user => {
  loadingScreen.classList.add('hidden');
  if (user) {
    // User is signed in
    loginPage.classList.add('hidden');
    blogPage.classList.remove('hidden');
    userEmail.textContent = user.email;
  } else {
    // User is signed out
    loginPage.classList.remove('hidden');
    blogPage.classList.add('hidden');
  }
});

// Handle form submission for login/signup
authForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  const isSignUp = document.getElementById('auth-title').textContent.includes('Sign Up');

  try {
    if (isSignUp) {
      await createUserWithEmailAndPassword(auth, email, password);
    } else {
      await signInWithEmailAndPassword(auth, email, password);
    }
  } catch (error) {
    console.error("Authentication Error: ", error);
    alert(error.message); // Simple error display
  }
});

// Handle logout
logoutBtn.addEventListener('click', async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error: ", error);
  }
});

// Toggle between Login and Sign Up modes
const toggleModeBtn = document.getElementById('toggle-mode');
const authTitle = document.getElementById('auth-title');
const authSubtitle = document.getElementById('auth-subtitle');
const submitText = document.getElementById('submit-text');
const toggleText = document.getElementById('toggle-text');

toggleModeBtn.addEventListener('click', () => {
    const isSignIn = toggleModeBtn.textContent.includes('Sign Up');
    authTitle.textContent = isSignIn ? 'Create an Account' : 'Welcome Back';
    authSubtitle.textContent = isSignIn ? 'Get started with a new account' : 'Sign in to your account to continue';
    submitText.textContent = isSignIn ? 'Sign Up' : 'Sign In';
    toggleText.textContent = isSignIn ? 'Already have an account?' : "Don't have an account?";
    toggleModeBtn.textContent = isSignIn ? 'Sign In' : 'Sign Up';
});