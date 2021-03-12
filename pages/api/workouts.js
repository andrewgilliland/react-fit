import db from '@/lib/firebase-admin';

export default async (_, res) => {
  const snapshot = await db.collection('workouts').get();
  let workouts = [];

  snapshot.forEach(doc => {
      workouts.push({id: doc.id, ...doc.data()})

      console.log(doc.id, '=>', doc.data())
  })

  res.status(200).json({ workouts });
};
