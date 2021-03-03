# React-Fit 🦾


*React-Fit* is a subscription application to efficiently deliver effective workouts for people.

## Why 🤖


There are many exercise workout platforms out there, but they are bogged down with advertising. 

You just want your workout delivered right to you without cluttered websites.

And since fitness should be accessible to all, the standard tier is for free.

## Features 🐳


### Landing Page + Signup/Login 🌶️

The landing page of the website will have a signup/login form prompting the user.

Upon signup the user will be prompted to select the service tier.

### Tiers 🦅

- Standard - Free - access to 3 workouts a week
- Warrior - $X/month - access to 5 workouts a week + articles
- Elite - $XX/month - access to 6 workouts a week + articles + programs

### Workouts Page 🔫

If the user is returning or just signed up, they will be routed to the workouts page. Users will be able to view all workouts on the workouts page, with an indicator if the workout is in the next tier. If a workout is selected outside their tier, there will be a prompt to upgrade their subscription.

### Articles Page 🦉

The articles page will contain content accessible only by premium users. If a standard user routes to this page, there will be a prompt to upgrade their subscription

### Programs Page 🌵

The articles page will contain content accessible only by elite users. If a standard/warrior user routes to this page, there will be a prompt to upgrade their subscription

### Dashboard 🦐

The dashboard will be available to all subscribers. User information will be able to updated here. Users will be able to upgrade/cancel subscriptions as well. Certain features will only be assessible to premium (Warrior and Elite) users. Premium user will allow users to add workouts to their dashboard and show the amount of times completed. Premium users will have data showing the amount of workouts completed. Elite users will be able to add programs to their dashboard and show current progress and amount of times completed.

## Implementation 🛸


*React-Fit* will be implemented on the client with React and Next.js for building the user interface. Secure user management and authentication will done with Firebase Authentication. The user can signup/login with third party login providers (Google and Github) and email as well. All user data will be stored in Firebase Firestore. Payments for subscriptions will be handled with Stripe. The application will utilize TailwindCSS for design. The production application will be hosted and deployed on Vercel.
