import express, { Request, Response } from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.user_man}:${process.env.user_Password}@sajjadjim15.ac97xgz.mongodb.net/?retryWrites=true&w=majority&appName=SajjadJim15`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let addAiTaskCollection: any;

async function run() {
  try {
    // await client.connect(); // ✅ Step 1: Connect before anything

    // ✅ Step 2: Reference your collection
    addAiTaskCollection = client.db("typescript_db").collection("items");

    // ✅ Step 3: Define all routes here (after connection)

    // POST /items
    app.post("/items", async (req: Request, res: Response) => {
      try {
        const { name, email, ...rest } = req.body;
        const fullRequest = { name, email, ...rest };
        const result = await addAiTaskCollection.insertOne(fullRequest);
        res.status(201).json({ _id: result.insertedId, ...fullRequest });
      } catch (error) {
        res.status(400).json({ error: (error as Error).message });
      }
    });

    // PUT /items/:id
    app.put("/items/:id", async (req: Request, res: Response) => {
      try {
      const { id } = req.params;
      const updateData = req.body;
      const result = await addAiTaskCollection.updateOne(
        { _id: new (require("mongodb").ObjectId)(id) },
        { $set: updateData }
      );
      if (result.matchedCount === 0) {
        return res.status(404).json({ error: "Item not found" });
      }
      res.json({ message: "Item updated successfully" });
      } catch (error) {
      res.status(400).json({ error: (error as Error).message });
      }
    });

    // GET /items
    app.get("/items", async (_req, res) => {
      try {
        const items = await addAiTaskCollection.find().toArray();
        res.json(items);
      } catch (error) {
        res.status(500).json({ error: (error as Error).message });
      }
    });

    // GET /items/user/:email
    app.get("/items/user/:email", async (req, res) => {
      try {
        const email = req.params.email;
        const items = await addAiTaskCollection.find({ email }).toArray();
        res.json(items);
      } catch (error) {
        res.status(500).json({ error: (error as Error).message });
      }
    });

    // console.log("✅ Connected to MongoDB");

    // Start server only after DB is ready
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err);
  }
}

run();

app.get('/', (req, res) => {
    res.send(
        `<html>
      <head>
        <title> Server is ON</title>
        <style>
          body {
            background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
            height: 100vh;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Segoe UI', Arial, sans-serif;
          }
          .container {
            background: #fff;
            padding: 40px 60px;
            border-radius: 18px;
            box-shadow: 0 8px 32px rgba(60, 72, 88, 0.15);
            text-align: center;
          }
          h1 {
            color: #4f46e5;
            margin-bottom: 16px;
            font-size: 2.5rem;
            letter-spacing: 1px;
          }
          p {
            color: #374151;
            font-size: 1.1rem;
            margin: 10px 0;
          }

        </style>
      </head>
      <body>
        <div class="container">
          <h1>Server is Always Ready for Users!</h1>
          <p><strong>server Server Running</strong></p>
          <p>This is a delivery server. Here, users can add and update tasks, and create accounts.</p>
        </div>
      </body>
    </html>`
    )
})
