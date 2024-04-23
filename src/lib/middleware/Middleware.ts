import Store, { IStore } from "../models/store.model";

export const checkUserStore = async (
  req: { userId: string },
  res: {
    status: (arg0: number) => { json: (arg0: { message: string }) => void };
  },
  next: () => void
): Promise<void> => {
  try {
    // Check if the user has a store based on clerkUserId
    const store = await Store.find({ clerkUserId: req.userId });
    if (store) {
      // User has a store, proceed to the next middleware/route handler
      next();
    } else {
      // User does not have a store, send a response
      res.status(403).json({
        message: "User does not have a store. Please create a store first.",
      });
    }
  } catch (error) {
    console.error("Error checking user store:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
