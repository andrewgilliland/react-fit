import React, { useState, useEffect, useContext, createContext } from 'react';

import Router from 'next/router';
// import cookie from 'js-cookie';

import firebase from './firebase';
import { createUser } from './db';

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  const handleUser = async (rawUser) => {
    if (rawUser) {
      const user = await formatUser(rawUser);
      // const { token, ...userWithoutToken } = user;

      // createUser(user.uid, userWithoutToken);
      createUser(user.uid, user);
      setUser(user);

      // cookie.set('fast-feedback-auth', true, {
      //   expires: 1
      // });

      // setLoading(false);
      return user;
    } else {
      setUser(false);
      // cookie.remove('fast-feedback-auth');

      // setLoading(false);
      return false;
    }
  };

  const createWithEmail = (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        handleUser(response.user);
        Router.push('/account');
      });
  };

  const signinWithEmail = (email, password) => {
    //   setLoading(true);
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        handleUser(response.user);
        Router.push('/account');
      });
  };

  const signinWithGitHub = (redirect) => {
    // setLoading(true);

    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        handleUser(response.user);
        Router.push('/account');
        // setUser(response.user);
        // return response.user;

        // if (redirect) {
        //   Router.push(redirect);
        // }
      });
  };

  const signinWithGoogle = (redirect) => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        handleUser(response.user);
        Router.push('/account');
      });
  };

  // const signinWithGoogle = (redirect) => {
  //   setLoading(true);
  //   return firebase
  //     .auth()
  //     .signInWithPopup(new firebase.auth.GoogleAuthProvider())
  //     .then((response) => {
  //       handleUser(response.user);

  //       if (redirect) {
  //         Router.push(redirect);
  //       }
  //     });
  // };

  const signout = () => {
    // Router.push('/');

    return firebase
      .auth()
      .signOut()
      .then(() => {
        // setUser(false)
        handleUser(false);
        Router.push('/');
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(
      handleUser
      // (user) => {
      // if (user) {
      //   setUser(user);
      // } else {
      //   setUser(false);
      // }
      // }
    );

    return () => unsubscribe();
  }, []);

  return {
    user,
    createWithEmail,
    signinWithEmail,
    signinWithGitHub,
    signinWithGoogle,
    signout
    // loading,
  };
}

// const getStripeRole = async () => {
//   await firebase.auth().currentUser.getIdToken(true);
//   const decodedToken = await firebase.auth().currentUser.getIdTokenResult();

//   return decodedToken.claims.stripeRole || 'free';
// };

const formatUser = async (user) => {
  // const token = await user.getIdToken();
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL
    // stripeRole: await getStripeRole(),
    // token
  };
};
