import {
  connectToDatabase
} from "../../../models/tabloo";

export default async (req, res) => {
  const {
    db
  } = await connectToDatabase();

  const tabloos = await db
    .collection("tabloos")
    .find({})
    .sort({
      metacritic: -1
    })
    .limit(20)
    .toArray();
  const tablooList = tabloos.map(tabloo => tabloo.text);
  res.json(tablooList);
};
