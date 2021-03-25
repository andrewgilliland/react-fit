import firebase from './firebase';
import 'firebase/firestore';

import getStripe from '@/lib/stripe';

const firestore = firebase.firestore();
const app = firebase.app();

export function createUser(uid, data) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}

export const createCheckoutSession = async (uid) => {
  const checkoutSessionRef = await firestore
    .collection('users')
    .doc(uid)
    .collection('checkout_sessions')
    .add({
      price: 'price_1IWNpGKOxlmL0QgLktFANjlV',
      success_url: `${window.location.origin}/account`,
      cancel_url: `${window.location.origin}/account`
    });

  checkoutSessionRef.onSnapshot(async (snap) => {
    const { sessionId } = snap.data();
    if (sessionId) {
      const stripe = await getStripe();
      stripe.redirectToCheckout({ sessionId });
    }
  });
};

export async function goToBillingPortal() {
  const functionRef = app
    .functions('us-central1')
    .httpsCallable('ext-firestore-stripe-subscriptions-createPortalLink');
  const { data } = await functionRef({
    returnUrl: `${window.location.origin}/account`
  });

  window.location.assign(data.url);
}
