import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "mongodb",
  url: process.env.DB_URI! as string,
});

export const initialize = async () => {
  if (AppDataSource.isInitialized === false) {
    try {
      await AppDataSource.initialize();
      console.log("Database initialized successfully.");
    } catch (err) {
      console.error("Failed to initialize the database:", err);
    }
  }
};
