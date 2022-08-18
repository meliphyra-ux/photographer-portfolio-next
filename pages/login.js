import React, { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styles from "../components/login/Login.module.scss";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const auth = getAuth();
    auth.operations
      .then(() => {
        auth.currentUser ? router.push("/admin") : null;
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const LogIn = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push("/admin")
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode, errorMessage);
        setError(true);
      });
  };

  

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {!loggedIn && !loading && (
        <div className={styles.loginPage}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              LogIn(email, password);
            }}
            className={styles.login}
          >
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <button>Login</button>
          </form>
        </div>
      )}
    </>
  );
}
