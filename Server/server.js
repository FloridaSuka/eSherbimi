const express = require("express");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const {
  sequelize,
  User,
  KruWaterBill,
  Payment,
  Kon,
  Confirmation,
  Donation,
  Projektet,
  Participation,
  Prishtina,
  FamilyDoctorRequest,
  ElectronicPassport,
  Policia2,
  Policia3,
  KescoBill,
  Donacioni,
  Verifikimi,
  DokElektronike,
  FaturaPer,
  ApLehonat,
  ApFemije,
  AutoRegjistrim,
  AutoB,
  AutoP,
  CertiFam,
  Deklarimi,
  AdPostare,
  Vula,
} = require("./db");
const app = express();
const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");
const pdf = require("html-pdf");

app.use(cors());
app.use(express.json());

// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API Information",
      contact: {
        name: "Developer",
        email: "developer@example.com",
      },
      servers: [{ url: "http://127.0.0.1:5001" }],
    },
  },
  apis: ["./server.js"], // Files containing Swagger annotations
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Sync the database and create the tables
sequelize
  .sync()
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((error) => {
    console.error("Unable to create tables:", error);
  });

// Signup route
/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - usernameR
 *               - passwordR
 *             properties:
 *               usernameR:
 *                 type: string
 *               passwordR:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Username and password are required
 *       409:
 *         description: Username taken
 *       500:
 *         description: Internal server error
 */
app.post("/signup", async (req, res) => {
  const { usernameR, passwordR } = req.body;

  if (!usernameR || !passwordR) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  try {
    // Check if username is already taken
    const existingUser = await User.findOne({ where: { usernameR } });
    if (existingUser) {
      return res.status(409).json({ message: "Username taken" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(passwordR, 10);

    // Create new user
    const newUser = await User.create({ usernameR, passwordR: hashedPassword });
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Login route
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login a user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - usernameR
 *               - passwordR
 *             properties:
 *               usernameR:
 *                 type: string
 *               passwordR:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid username or password
 *       500:
 *         description: Internal server error
 */
app.post("/login", async (req, res) => {
  const { usernameR, passwordR } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ where: { usernameR } });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(passwordR, user.passwordR);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

/**
 * @swagger
 * /ap-femije:
 *   post:
 *     summary: Create a new ApFemije entry
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: ApFemije
 *         description: ApFemije object
 *         required: true
 *         schema:
 *           $ref: '#/definitions/ApFemije'
 *     responses:
 *       201:
 *         description: Created
 *         schema:
 *           $ref: '#/definitions/ApFemije'
 *       500:
 *         description: Internal Server Error
 *
 *   get:
 *     summary: Get all ApFemije entries
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/ApFemije'
 *       500:
 *         description: Internal Server Error
 *
 * /ap-femije/{id}:
 *   get:
 *     summary: Get a single ApFemije entry by ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the ApFemije entry to retrieve
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           $ref: '#/definitions/ApFemije'
 *       404:
 *         description: ApFemije not found
 *       500:
 *         description: Internal Server Error
 *
 *   put:
 *     summary: Update a ApFemije entry by ID
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the ApFemije entry to update
 *         required: true
 *         type: string
 *       - in: body
 *         name: ApFemije
 *         description: Updated ApFemije object
 *         required: true
 *         schema:
 *           $ref: '#/definitions/ApFemije'
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           $ref: '#/definitions/ApFemije'
 *       404:
 *         description: ApFemije not found
 *       500:
 *         description: Internal Server Error
 *
 *   delete:
 *     summary: Delete a ApFemije entry by ID
 *     produces:
 *       - text/plain
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the ApFemije entry to delete
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: ApFemije deleted
 *       404:
 *         description: ApFemije not found
 *       500:
 *         description: Internal Server Error
 */
app.put("/ap-femije/:id", async (req, res) => {
  const { id } = req.params;
  const {
    firstName,
    lastName,
    email,
    nrPersonal,
    contact,
    adresa,
    nrXhiro,
    gender,
    aprovoj,
    che,
    english,
    maths,
    physics,
    resume,
    url,
    selectedOption,
    about,
  } = req.body;

  try {
    const femije = await ApFemije.findByPk(id);
    if (femije) {
      femije.firstName = firstName;
      femije.lastName = lastName;
      femije.email = email;
      femije.nrPersonal = nrPersonal;
      femije.contact = contact;
      femije.adresa = adresa;
      femije.nrXhiro = nrXhiro;
      femije.gender = gender;
      femije.aprovoj = aprovoj;
      femije.che = che;
      femije.english = english;
      femije.maths = maths;
      femije.physics = physics;
      femije.resume = resume;
      femije.url = url;
      femije.selectedOption = selectedOption;
      femije.about = about;

      await femije.save();
      res.status(200).json(femije);
    } else {
      res.status(404).send("ApFemije not found");
    }
  } catch (error) {
    console.error("Failed to update ApFemije entry:", error);
    res.status(500).send("Internal Server Error");
  }
});

// DELETE endpoint to delete a ApFemije entry by ID
app.delete("/ap-femije/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const femije = await ApFemije.findByPk(id);
    if (femije) {
      await femije.destroy();
      res.status(200).send("ApFemije deleted");
    } else {
      res.status(404).send("ApFemije not found");
    }
  } catch (error) {
    console.error("Failed to delete ApFemije entry:", error);
    res.status(500).send("Internal Server Error");
  }
});

/**
 * @swagger
 * /ap-lehonat:
 *   post:
 *     summary: Create a new ApLehonat entry
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: ApLehonat
 *         description: ApLehonat object
 *         required: true
 *         schema:
 *           $ref: '#/definitions/ApLehonat'
 *     responses:
 *       201:
 *         description: Created
 *         schema:
 *           $ref: '#/definitions/ApLehonat'
 *       500:
 *         description: Internal Server Error
 *
 *   get:
 *     summary: Get all ApLehonat entries
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/ApLehonat'
 *       500:
 *         description: Internal Server Error
 *
 * /ap-lehonat/{id}:
 *   get:
 *     summary: Get a single ApLehonat entry by ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the ApLehonat entry to retrieve
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           $ref: '#/definitions/ApLehonat'
 *       404:
 *         description: ApLehonat not found
 *       500:
 *         description: Internal Server Error
 *
 *   put:
 *     summary: Update an ApLehonat entry by ID
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the ApLehonat entry to update
 *         required: true
 *         type: string
 *       - in: body
 *         name: ApLehonat
 *         description: Updated ApLehonat object
 *         required: true
 *         schema:
 *           $ref: '#/definitions/ApLehonat'
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           $ref: '#/definitions/ApLehonat'
 *       404:
 *         description: ApLehonat not found
 *       500:
 *         description: Internal Server Error
 *
 *   delete:
 *     summary: Delete an ApLehonat entry by ID
 *     produces:
 *       - text/plain
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the ApLehonat entry to delete
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: ApLehonat deleted
 *       404:
 *         description: ApLehonat not found
 *       500:
 *         description: Internal Server Error
 */
app.post("/ap-lehonat", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    nrPersonal,
    contact,
    adresa,
    nrXhiro,
    gender,
    isEmployed,
    aprovoj,
    english,
    maths,
    physics,
    resume,
    nationality,
    about,
  } = req.body;

  try {
    const newApLehonat = await ApLehonat.create({
      firstName,
      lastName,
      email,
      nrPersonal,
      contact,
      adresa,
      nrXhiro,
      gender,
      isEmployed,
      aprovoj,
      english,
      maths,
      physics,
      resume,
      nationality,
      about,
    });
    res.status(201).json(newApLehonat);
  } catch (error) {
    console.error("Failed to create new ApLehonat entry:", error);
    res.status(500).send("Internal Server Error");
  }
});

// GET endpoint to fetch all ApLehonat entries
app.get("/ap-lehonat", async (req, res) => {
  try {
    const lehonatList = await ApLehonat.findAll();
    res.status(200).json(lehonatList);
  } catch (error) {
    console.error("Failed to retrieve ApLehonat entries:", error);
    res.status(500).send("Internal Server Error");
  }
});

// GET endpoint to fetch a single ApLehonat entry by ID
app.get("/ap-lehonat/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const lehonat = await ApLehonat.findByPk(id);
    if (lehonat) {
      res.status(200).json(lehonat);
    } else {
      res.status(404).send("ApLehonat not found");
    }
  } catch (error) {
    console.error("Failed to retrieve ApLehonat entry:", error);
    res.status(500).send("Internal Server Error");
  }
});

// PUT endpoint to update a ApLehonat entry by ID
app.put("/ap-lehonat/:id", async (req, res) => {
  const { id } = req.params;
  const {
    firstName,
    lastName,
    email,
    nrPersonal,
    contact,
    adresa,
    nrXhiro,
    gender,
    isEmployed,
    aprovoj,
    english,
    maths,
    physics,
    resume,
    nationality,
    about,
  } = req.body;

  try {
    const lehonat = await ApLehonat.findByPk(id);
    if (lehonat) {
      lehonat.firstName = firstName;
      lehonat.lastName = lastName;
      lehonat.email = email;
      lehonat.nrPersonal = nrPersonal;
      lehonat.contact = contact;
      lehonat.adresa = adresa;
      lehonat.nrXhiro = nrXhiro;
      lehonat.gender = gender;
      lehonat.isEmployed = isEmployed;
      lehonat.aprovoj = aprovoj;
      lehonat.english = english;
      lehonat.maths = maths;
      lehonat.physics = physics;
      lehonat.resume = resume;
      lehonat.nationality = nationality;
      lehonat.about = about;

      await lehonat.save();
      res.status(200).json(lehonat);
    } else {
      res.status(404).send("ApLehonat not found");
    }
  } catch (error) {
    console.error("Failed to update ApLehonat entry:", error);
    res.status(500).send("Internal Server Error");
  }
});

// DELETE endpoint to delete a ApLehonat entry by ID
app.delete("/ap-lehonat/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const lehonat = await ApLehonat.findByPk(id);
    if (lehonat) {
      await lehonat.destroy();
      res.status(200).send("ApLehonat deleted");
    } else {
      res.status(404).send("ApLehonat not found");
    }
  } catch (error) {
    console.error("Failed to delete ApLehonat entry:", error);
    res.status(500).send("Internal Server Error");
  }
});
/**
 * @swagger
 * /kru-water-bills:
 *   post:
 *     summary: Create a new Kru water bill
 *     tags: [KruWaterBill]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/KruWaterBill'
 *     responses:
 *       201:
 *         description: The Kru water bill was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/KruWaterBill'
 *       500:
 *         description: Some server error
 */
app.post("/kru-water-bills", async (req, res) => {
  try {
    const newBill = await KruWaterBill.create(req.body);
    res.status(201).json(newBill);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});
/**
 * @swagger
 * /kru-water-bills:
 *   get:
 *     summary: Returns the list of all Kru water bills
 *     tags: [KruWaterBill]
 *     responses:
 *       200:
 *         description: The list of Kru water bills
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/KruWaterBill'
 *       500:
 *         description: Some server error
 */
app.get("/kru-water-bills", async (req, res) => {
  try {
    const bills = await KruWaterBill.findAll();
    res.status(200).json(bills);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});
/**
 * @swagger
 * /api/water-bills/{consumerNumber}:
 *   get:
 *     summary: Get the Kru water bill by consumer number
 *     tags: [KruWaterBill]
 *     parameters:
 *       - in: path
 *         name: consumerNumber
 *         schema:
 *           type: string
 *         required: true
 *         description: The consumer number of the Kru water bill
 *     responses:
 *       200:
 *         description: The Kru water bill description by consumer number
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/KruWaterBill'
 *       404:
 *         description: The Kru water bill was not found
 *       500:
 *         description: Some server error
 */
app.get("/api/water-bills/:consumerNumber", async (req, res) => {
  try {
    const { consumerNumber } = req.params;
    console.log(`Received request for consumer number: ${consumerNumber}`);
    const bill = await KruWaterBill.findOne({
      where: { consumer_number: consumerNumber },
    });
    console.log(`Query result: ${JSON.stringify(bill)}`);
    if (bill) {
      res.json(bill);
    } else {
      res.status(404).send("Bill not found");
    }
  } catch (error) {
    console.error("Error fetching the bill:", error);
    res.status(500).send("Server error");
  }
});
/**
 * @swagger
 * /kru-water-bills/{id}:
 *   get:
 *     summary: Get the Kru water bill by id
 *     tags: [KruWaterBill]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The id of the Kru water bill
 *     responses:
 *       200:
 *         description: The Kru water bill description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/KruWaterBill'
 *       404:
 *         description: The Kru water bill was not found
 *       500:
 *         description: Some server error
 */
app.get("/kru-water-bills/:id", async (req, res) => {
  try {
    const bill = await KruWaterBill.findByPk(req.params.id);
    bill ? res.status(200).json(bill) : res.status(404).send("Bill not found");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});
/**
 * @swagger
 * /kru-water-bills/{id}:
 *   put:
 *     summary: Update the Kru water bill by id
 *     tags: [KruWaterBill]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The id of the Kru water bill
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/KruWaterBill'
 *     responses:
 *       200:
 *         description: The Kru water bill was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/KruWaterBill'
 *       404:
 *         description: The Kru water bill was not found
 *       500:
 *         description: Some server error
 */
app.put("/kru-water-bills/:id", async (req, res) => {
  try {
    const bill = await KruWaterBill.findByPk(req.params.id);
    if (bill) {
      await bill.update(req.body);
      res.status(200).json(bill);
    } else {
      res.status(404).send("Bill not found");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});
/**
 * @swagger
 * /kru-water-bills/{id}:
 *   delete:
 *     summary: Remove the Kru water bill by id
 *     tags: [KruWaterBill]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The id of the Kru water bill
 *     responses:
 *       200:
 *         description: The Kru water bill was deleted
 *       404:
 *         description: The Kru water bill was not found
 *       500:
 *         description: Some server error
 */
app.delete("/kru-water-bills/:id", async (req, res) => {
  try {
    const bill = await KruWaterBill.findByPk(req.params.id);
    if (bill) {
      await bill.destroy();
      res.status(200).send("Bill deleted");
    } else {
      res.status(404).send("Bill not found");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});
/**
 * @swagger
 * /kesco-bills:
 *   post:
 *     summary: Create a new Kesco bill
 *     tags: [KescoBill]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/KescoBill'
 *     responses:
 *       201:
 *         description: The Kesco bill was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/KescoBill'
 *       500:
 *         description: Some server error
 */
/**
 * @swagger
 * /kesco-bills:
 *   post:
 *     summary: Create a new Kesco bill
 *     tags: [KescoBill]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/KescoBill'
 *     responses:
 *       201:
 *         description: The Kesco bill was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/KescoBill'
 *       500:
 *         description: Some server error
 */
app.post("/kesco-bills", async (req, res) => {
  try {
    const newBill = await KescoBill.create(req.body);
    res.status(201).json(newBill);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});
/**
 * @swagger
 * /kesco-bills/{id}:
 *   get:
 *     summary: Get the Kesco bill by id
 *     tags: [KescoBill]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The id of the Kesco bill
 *     responses:
 *       200:
 *         description: The Kesco bill description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/KescoBill'
 *       404:
 *         description: The Kesco bill was not found
 *       500:
 *         description: Some server error
 */
app.get("/kesco-bills", async (req, res) => {
  try {
    const bills = await KescoBill.findAll();
    res.status(200).json(bills);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.get("/kesco-bills/:id", async (req, res) => {
  try {
    const bill = await KescoBill.findByPk(req.params.id);
    bill ? res.status(200).json(bill) : res.status(404).send("Bill not found");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});
/**
 * @swagger
 * /kesco-bills/{id}:
 *   put:
 *     summary: Update the Kesco bill by id
 *     tags: [KescoBill]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The id of the Kesco bill
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/KescoBill'
 *     responses:
 *       200:
 *         description: The Kesco bill was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/KescoBill'
 *       404:
 *         description: The Kesco bill was not found
 *       500:
 *         description: Some server error
 */
app.put("/kesco-bills/:id", async (req, res) => {
  try {
    const bill = await KescoBill.findByPk(req.params.id);
    if (bill) {
      await bill.update(req.body);
      res.status(200).json(bill);
    } else {
      res.status(404).send("Bill not found");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});
/**
 * @swagger
 * /kesco-bills/{id}:
 *   delete:
 *     summary: Remove the Kesco bill by id
 *     tags: [KescoBill]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The id of the Kesco bill
 *     responses:
 *       200:
 *         description: The Kesco bill was deleted
 *       404:
 *         description: The Kesco bill was not found
 *       500:
 *         description: Some server error
 */
app.delete("/kesco-bills/:id", async (req, res) => {
  try {
    const bill = await KescoBill.findByPk(req.params.id);
    if (bill) {
      await bill.destroy();
      res.status(200).send("Bill deleted");
    } else {
      res.status(404).send("Bill not found");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

app.use(cors()); // Enable CORS
app.use(express.json());

// Sync the database and create the tables
sequelize
  .sync()
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((error) => {
    console.error("Unable to create tables:", error);
  });

// Signup route
app.post("/signup", async (req, res) => {
  const { usernameR, passwordR } = req.body;

  if (!usernameR || !passwordR) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  try {
    // Check if username is already taken
    const existingUser = await User.findOne({ where: { usernameR } });
    if (existingUser) {
      return res.status(409).json({ message: "Username taken" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(passwordR, 10);

    // Create new user
    const newUser = await User.create({ usernameR, passwordR: hashedPassword });
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { usernameR, passwordR } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ where: { usernameR } });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(passwordR, user.passwordR);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
/**
 * @swagger
 * /api/participations:
 *   post:
 *     summary: Save participation data
 *     tags: [Participation]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - donationAmount
 *             properties:
 *               donationAmount:
 *                 type: number
 *                 format: float
 *                 description: Amount of donation made by the participant
 *     responses:
 *       201:
 *         description: Participation data saved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the newly created participation record
 *                 donationAmount:
 *                   type: number
 *                   format: float
 *       500:
 *         description: Internal server error occurred while creating participation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 details:
 *                   type: string
 */

app.post("/api/participations", async (req, res) => {
  try {
    const { donationAmount, option } = req.body;
    const participation = await Participation.create({
      donationAmount,
      option,
    });
    res.status(201).json(participation);
  } catch (error) {
    console.error("Error creating participation:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/verifikimi", async (req, res) => {
  try {
    const { ref, selectedOption } = req.body;
    const newVerifikimi = await Verifikimi.create({ ref, selectedOption });
    res.status(201).json(newVerifikimi);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post("/donacioni", async (req, res) => {
  try {
    const { amount, reference } = req.body;
    const donation = await Donation.create({ amount, reference });
    res.status(201).send(donation);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET /fines - Merr të gjitha gjobat
// router.get('/fines', async (req, res) => {
//   try {
//     const fines = await Fine.findAll();
//     res.json(fines);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// POST /fines - Krijo një gjobë të re
// router.post('/fines', async (req, res) => {
//   const fine = new Fine({
//     fine_amount: req.body.fine_amount,
//     fine_date: req.body.fine_date,
//     paid: req.body.paid,
//     personal_number: req.body.personal_number
//   });

//   try {
//     const newFine = await fine.save();
//     res.status(201).json(newFine);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// PUT /fines/:id - Modifiko një gjobë
// router.put('/fines/:id', async (req, res) => {
//   try {
//     const fine = await Fine.findByPk(req.params.id);
//     if (fine == null) {
//       return res.status(404).json({ message: 'Gjoba nuk u gjet' });
//     }

//     fine.fine_amount = req.body.fine_amount;
//     fine.fine_date = req.body.fine_date;
//     fine.paid = req.body.paid;
//     fine.personal_number = req.body.personal_number;

//     const updatedFine = await fine.save();
//     res.json(updatedFine);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// DELETE /fines/:id - Fshij një gjobë
// router.delete('/fines/:id', async (req, res) => {
//   try {
//     const fine = await Fine.findByPk(req.params.id);
//     if (fine == null) {
//       return res.status(404).json({ message: 'Gjoba nuk u gjet' });
//     }

//     await fine.destroy();
//     res.json({ message: 'Gjoba u fshi' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Endpoint për të krijuar një aplikacion të ri
// app.post('/applications', async (req, res) => {
//   const { name, email, phone } = req.body;

//   try {
//     const newApplication = await Application.create({
//       name: name,
//       email: email,
//       phone: phone
//     });
//     res.status(201).json(newApplication);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Gabim gjatë krijimit të aplikacionit.');
//   }
// });

/**
 * @swagger
 * /requests:
 *   post:
 *     summary: Create a new request
 *     tags: [Requests]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - selectedOption1
 *               - selectedOption2
 *               - selectedOption3
 *               - aprovoj
 *             properties:
 *               selectedOption1:
 *                 type: string
 *                 description: First selected option
 *               selectedOption2:
 *                 type: string
 *                 description: Second selected option
 *               selectedOption3:
 *                 type: string
 *                 description: Third selected option
 *               aprovoj:
 *                 type: boolean
 *                 description: Approval status
 *     responses:
 *       201:
 *         description: Request created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 selectedOption1:
 *                   type: string
 *                 selectedOption2:
 *                   type: string
 *                 selectedOption3:
 *                   type: string
 *                 aprovoj:
 *                   type: boolean
 *       500:
 *         description: Error creating the request
 */
app.post("/requests", async (req, res) => {
  const { selectedOption1, selectedOption2, selectedOption3, aprovoj } =
    req.body;

  try {
    const newRequest = await Request.create({
      selectedOption1,
      selectedOption2,
      selectedOption3,
      aprovoj,
    });
    res.status(201).json(newRequest);
  } catch (error) {
    console.error(error);
    res.status(500).send("Gabim gjatë krijimit të kërkesës.");
  }
});

// // Endpoint për të krijuar një kërkesë të re për mjekun familjar
// app.post('/family-doctor-requests', async (req, res) => {
//   const { request_type, health_institution, request_reason, family_doctor, consent } = req.body;

//   try {
//     const newRequest = await FamilyDoctorRequest.create({
//       request_type,
//       health_institution,
//       request_reason,
//       family_doctor,
//       consent
//     });
//     res.status(201).json(newRequest);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Gabim gjatë krijimit të kërkesës për mjekun familjar.');
//   }
// });

/**
 * @swagger
 * /consent:
 *   post:
 *     summary: Save user consent status
 *     tags: [Consent]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - consent
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The user ID
 *               consent:
 *                 type: boolean
 *                 description: The consent status
 *     responses:
 *       200:
 *         description: Consent status saved successfully
 *       400:
 *         description: Invalid request parameters
 */

/**
 * @swagger
 * /consent/{userId}:
 *   get:
 *     summary: Check user consent status
 *     tags: [Consent]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID to retrieve consent status for
 *     responses:
 *       200:
 *         description: Returns the consent status of the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 consent:
 *                   type: boolean
 *       404:
 *         description: Consent status not found for the given user
 */

// Array to store consent status for each user
let consentStatus = {};

// Endpoint to save consent status
app.post("/consent", (req, res) => {
  const { userId, consent } = req.body;
  if (typeof userId !== "string" || typeof consent !== "boolean") {
    return res.status(400).send("Invalid request parameters.");
  }
  consentStatus[userId] = consent;
  res.status(200).send("Consent status saved successfully.");
});

// Endpoint to check consent status
app.get("/consent/:userId", (req, res) => {
  const { userId } = req.params;
  const consent = consentStatus[userId];
  if (consent === undefined) {
    res.status(404).send("Consent status not found for the given user.");
  } else {
    res.status(200).json({ consent });
  }
});

/**
 * @swagger
 * /api/payments:
 *   post:
 *     summary: Process a payment
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cardHolderName
 *               - cardNumber
 *               - expiryDate
 *               - cvv
 *             properties:
 *               cardHolderName:
 *                 type: string
 *                 description: Name on the credit/debit card
 *               cardNumber:
 *                 type: string
 *                 description: Credit/debit card number
 *               expiryDate:
 *                 type: string
 *                 format: date
 *                 description: Expiry date of the card (YYYY-MM)
 *               cvv:
 *                 type: string
 *                 description: Card verification value
 *     responses:
 *       201:
 *         description: Payment processed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Payment ID
 *                 cardHolderName:
 *                   type: string
 *                 cardNumber:
 *                   type: string
 *                 expiryDate:
 *                   type: string
 *                   format: date
 *                 cvv:
 *                   type: string
 *       500:
 *         description: Error occurred while processing the payment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message detailing what went wrong
 */
app.post("/api/payments", async (req, res) => {
  try {
    const { cardHolderName, cardNumber, expiryDate, cvv } = req.body;
    const payment = await Payment.create({
      cardHolderName,
      cardNumber,
      expiryDate,
      cvv,
    });
    res.status(201).json(payment);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the payment" });
  }
});

/**
 * @swagger
 * /api/kon:
 *   post:
 *     summary: Save Kon data
 *     tags: [Kon]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - au
 *               - approve
 *             properties:
 *               au:
 *                 type: string
 *                 description: Some data field related to 'au'
 *               approve:
 *                 type: boolean
 *                 description: Approval status
 *     responses:
 *       201:
 *         description: Kon data saved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the created Kon record
 *                 au:
 *                   type: string
 *                 approve:
 *                   type: boolean
 *       500:
 *         description: Error saving Kon data
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 */

/**
 * @swagger
 * /api/kon/{id}:
 *   get:
 *     summary: Retrieve Kon data for a specific ID
 *     tags: [Kon]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the Kon data to retrieve
 *     responses:
 *       200:
 *         description: Returns the requested Kon data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 au:
 *                   type: string
 *                 approve:
 *                   type: boolean
 *       404:
 *         description: Data not found
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *       500:
 *         description: Error fetching Kon data
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 */

app.post("/api/kon", async (req, res) => {
  try {
    const { au, approve } = req.body;
    const newKon = await Kon.create({ au, approve });
    res.status(201).json(newKon);
  } catch (error) {
    console.error("Error saving Kon data:", error);
    res.status(500).send("Server error");
  }
});

// Endpoint to get Kon data for download
app.get("/api/kon/:id", async (req, res) => {
  try {
    const kon = await Kon.findByPk(req.params.id);
    if (!kon) {
      return res.status(404).send("Data not found");
    }
    res.status(200).json(kon);
  } catch (error) {
    console.error("Error fetching Kon data:", error);
    res.status(500).send("Server error");
  }
});

/**
 * @swagger
 * /api/confirmation:
 *   post:
 *     summary: Save confirmation data
 *     tags: [Confirmation]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - selectedOption
 *             properties:
 *               selectedOption:
 *                 type: string
 *                 description: User's selected option for the confirmation
 *     responses:
 *       201:
 *         description: Confirmation data saved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the newly created confirmation record
 *                 reason:
 *                   type: string
 *       500:
 *         description: Error saving confirmation data
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 */
app.post("/api/confirmation", async (req, res) => {
  try {
    const { selectedOption } = req.body;
    // Assuming you have a Confirmation model, otherwise you can save this data in the desired table.
    const newConfirmation = await Confirmation.create({
      reason: selectedOption,
    });
    res.status(201).json(newConfirmation);
  } catch (error) {
    console.error("Error saving confirmation data:", error);
    res.status(500).send("Server error");
  }
});

/**
 * @swagger
 * /api/projektet:
 *   post:
 *     summary: Save data for a new project
 *     tags: [Projektet]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - amount
 *               - paymentMethod
 *             properties:
 *               amount:
 *                 type: number
 *                 format: float
 *                 description: Amount allocated for the project
 *               paymentMethod:
 *                 type: string
 *                 description: Method used for payment
 *     responses:
 *       201:
 *         description: Project data saved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the newly created project record
 *                 amount:
 *                   type: number
 *                   format: float
 *                 paymentMethod:
 *                   type: string
 *       500:
 *         description: Internal server error occurred while saving project data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 details:
 *                   type: string
 */

app.post("/api/projektet", async (req, res) => {
  try {
    const { amount, paymentMethod } = req.body;
    const newProjektet = await Projektet.create({ amount, paymentMethod });
    res.status(201).json(newProjektet);
  } catch (error) {
    console.error("Error saving projektet data:", error);
    res.status(500).json({ error: "Internal Server Error", details: error });
  }
});
/**
 * @swagger
 * /api/participations:
 *   post:
 *     summary: Save participation data
 *     tags: [Participation]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - donationAmount
 *             properties:
 *               donationAmount:
 *                 type: number
 *                 format: float
 *                 description: Amount of donation made by the participant
 *     responses:
 *       201:
 *         description: Participation data saved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the newly created participation record
 *                 donationAmount:
 *                   type: number
 *                   format: float
 *       500:
 *         description: Internal server error occurred while creating participation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 details:
 *                   type: string
 */
app.post("/api/participations", async (req, res) => {
  try {
    const { donationAmount } = req.body;
    const participation = await Participation.create({ donationAmount });
    res.status(201).json(participation);
  } catch (error) {
    console.error("Error creating participation:", error);
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
});
/**
 * @swagger
 * /api/prishtina:
 *   post:
 *     summary: Create a record with a search term for Prishtina
 *     tags: [Prishtina]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - searchTerm
 *             properties:
 *               searchTerm:
 *                 type: string
 *                 description: The search term to be saved for Prishtina
 *     responses:
 *       201:
 *         description: Prishtina record created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the newly created Prishtina record
 *                 searchTerm:
 *                   type: string
 *       500:
 *         description: Internal server error occurred while creating Prishtina record
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 details:
 *                   type: string
 */

app.post("/api/prishtina", async (req, res) => {
  try {
    const { searchTerm } = req.body;
    const prishtina = await Prishtina.create({ searchTerm });
    res.status(201).json(prishtina);
  } catch (error) {
    console.error("Error creating Prishtina record:", error);
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
});
/**
 * @swagger
 * /api/prishtina/search:
 *   post:
 *     summary: Search for a Prishtina record or create it if it does not exist
 *     tags: [Prishtina]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - searchTerm
 *             properties:
 *               searchTerm:
 *                 type: string
 *                 description: The search term used to find or create the Prishtina record
 *     responses:
 *       200:
 *         description: Returns the search results, indicating whether the record was found or a new one was created
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                 - type: object
 *                   properties:
 *                     found:
 *                       type: boolean
 *                       description: A flag indicating if the record was found (true) or not (false)
 *                     record:
 *                       type: object
 *                       description: The existing Prishtina record if found
 *                 - type: object
 *                   properties:
 *                     found:
 *                       type: boolean
 *                       description: A flag indicating if the record was found (false) and a new one was created (true)
 *                     newRecord:
 *                       type: object
 *                       description: The newly created Prishtina record if not found
 *       500:
 *         description: Internal server error occurred while searching or creating the record
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 details:
 *                   type: string
 */

app.post("/api/prishtina/search", async (req, res) => {
  try {
    const { searchTerm } = req.body;
    const record = await Prishtina.findOne({ where: { searchTerm } });
    if (record) {
      res.status(200).json({ found: true, record });
    } else {
      const newRecord = await Prishtina.create({ searchTerm });
      res.status(200).json({ found: false, newRecord });
    }
  } catch (error) {
    console.error("Error searching for Prishtina record:", error);
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
});
/**
 * @swagger
 * /api/family-doctor-requests:
 *   post:
 *     summary: Create a new family doctor request
 *     tags: [Family Doctor Requests]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - request_type
 *               - health_institution
 *               - request_reason
 *               - family_doctor
 *               - consent
 *             properties:
 *               request_type:
 *                 type: string
 *                 description: Type of the request
 *               health_institution:
 *                 type: string
 *                 description: Name of the health institution associated with the request
 *               request_reason:
 *                 type: string
 *                 description: Reason for the family doctor request
 *               family_doctor:
 *                 type: string
 *                 description: Name of the family doctor
 *               consent:
 *                 type: boolean
 *                 description: Consent flag to process the request
 *     responses:
 *       201:
 *         description: Family doctor request created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the newly created request
 *                 request_type:
 *                   type: string
 *                 health_institution:
 *                   type: string
 *                 request_reason:
 *                   type: string
 *                 family_doctor:
 *                   type: string
 *                 consent:
 *                   type: boolean
 *       500:
 *         description: Server error occurred while creating the request
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 */
app.post("/api/family-doctor-requests", async (req, res) => {
  try {
    const {
      request_type,
      health_institution,
      request_reason,
      family_doctor,
      consent,
    } = req.body;
    const newRequest = await FamilyDoctorRequest.create({
      request_type,
      health_institution,
      request_reason,
      family_doctor,
      consent,
    });
    res.status(201).json(newRequest);
  } catch (error) {
    console.error("Error creating Family Doctor Request:", error);
    res.status(500).send("Server error");
  }
});
/**
 * @swagger
 * /api/electronic-passports:
 *   post:
 *     summary: Create an electronic passport request
 *     tags: [Electronic Passports]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - request_type
 *               - health_institution
 *               - request_reason
 *               - family_doctor
 *               - consent
 *             properties:
 *               request_type:
 *                 type: string
 *                 description: Type of the request
 *               health_institution:
 *                 type: string
 *                 description: Name of the health institution involved in the passport request
 *               request_reason:
 *                 type: string
 *                 description: Reason for the passport request
 *               family_doctor:
 *                 type: string
 *                 description: Name of the family doctor associated with the request
 *               consent:
 *                 type: boolean
 *                 description: Consent given by the individual for processing personal data
 *     responses:
 *       201:
 *         description: Electronic passport request created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 request_type:
 *                   type: string
 *                 health_institution:
 *                   type: string
 *                 request_reason:
 *                   type: string
 *                 family_doctor:
 *                   type: string
 *                 consent:
 *                   type: boolean
 *       500:
 *         description: Server error occurred while creating the request
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 */

app.post("/api/electronic-passports", async (req, res) => {
  try {
    const {
      request_type,
      health_institution,
      request_reason,
      family_doctor,
      consent,
    } = req.body;
    const newRequest = await ElectronicPassport.create({
      request_type,
      health_institution,
      request_reason,
      family_doctor,
      consent,
    });
    res.status(201).json(newRequest);
  } catch (error) {
    console.error("Error creating Electronic Passport Request:", error);
    res.status(500).send("Server error");
  }
});

/**
 * @swagger
 * /api/electronic-passports/{id}/download:
 *   get:
 *     summary: Download an electronic passport as PDF
 *     tags: [Electronic Passports]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the electronic passport to download
 *     responses:
 *       200:
 *         description: PDF file of the electronic passport generated and downloaded successfully
 *         content:
 *           application/pdf:
 *             schema:
 *               type: string
 *               format: binary
 *       404:
 *         description: Data not found
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *       500:
 *         description: Error occurred while generating the PDF
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 */

app.get("/api/electronic-passports/:id/download", async (req, res) => {
  try {
    const passport = await ElectronicPassport.findByPk(req.params.id);
    if (!passport) {
      return res.status(404).send("Data not found");
    }

    // Create a simple HTML template for the PDF
    const html = `
      <h1>Electronic Passport</h1>
      <p>Request Type: ${passport.request_type}</p>
      <p>Health Institution: ${passport.health_institution}</p>
      <p>Request Reason: ${passport.request_reason}</p>
      <p>Family Doctor: ${passport.family_doctor}</p>
      <p>Consent: ${passport.consent}</p>
    `;

    pdf.create(html).toStream((err, stream) => {
      if (err) return res.status(500).send(err);
      res.setHeader("Content-type", "application/pdf");
      stream.pipe(res);
    });
  } catch (error) {
    console.error("Error fetching Electronic Passport data:", error);
    res.status(500).send("Server error");
  }
});

/**
 * @swagger
 * /api/policia2:
 *   post:
 *     summary: Create a new Policia2 record
 *     tags: [Policia2]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - searchTerm
 *             properties:
 *               searchTerm:
 *                 type: string
 *                 description: The search term to save in the record
 *     responses:
 *       201:
 *         description: Policia2 record created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the newly created record
 *                 searchTerm:
 *                   type: string
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

app.post("/api/policia2", async (req, res) => {
  try {
    const { searchTerm } = req.body;
    const newRecord = await Policia2.create({ searchTerm });
    res.status(201).json(newRecord);
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
/**
 * @swagger
 * /api/policia2/search:
 *   post:
 *     summary: Search for a Policia2 record by searchTerm
 *     tags: [Policia2]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - searchTerm
 *             properties:
 *               searchTerm:
 *                 type: string
 *                 description: The search term used to find the record
 *     responses:
 *       200:
 *         description: Search result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 found:
 *                   type: boolean
 *                   description: Whether the record was found
 *                 record:
 *                   type: object
 *                   description: The found record (if any)
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
app.post("/api/policia2/search", async (req, res) => {
  try {
    const { searchTerm } = req.body;
    const record = await Policia2.findOne({ where: { searchTerm } });
    if (record) {
      res.status(200).json({ found: true, record });
    } else {
      res.status(200).json({ found: false });
    }
  } catch (error) {
    console.error("Error searching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /api/policia3:
 *   post:
 *     summary: Save Policia3 data
 *     tags: [Policia3]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - personalNumber
 *               - fullName
 *               - city
 *               - phone
 *               - email
 *               - selectedOption
 *               - station
 *               - reason
 *               - dek
 *             properties:
 *               personalNumber:
 *                 type: string
 *                 description: Personal identification number of the individual
 *               fullName:
 *                 type: string
 *                 description: Full name of the individual
 *               city:
 *                 type: string
 *                 description: City of residence
 *               phone:
 *                 type: string
 *                 description: Contact phone number
 *               email:
 *                 type: string
 *                 description: Email address
 *               selectedOption:
 *                 type: string
 *                 description: Selected service option
 *               station:
 *                 type: string
 *                 description: Police station involved
 *               reason:
 *                 type: string
 *                 description: Reason for the service request
 *               dek:
 *                 type: string
 *                 description: Additional details or remarks
 *     responses:
 *       201:
 *         description: Data saved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message
 *                 record:
 *                   type: object
 *                   description: Details of the saved record
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating server issues
 */
app.post("/api/policia3", async (req, res) => {
  try {
    const {
      personalNumber,
      fullName,
      city,
      phone,
      email,
      selectedOption,
      station,
      reason,
      dek,
    } = req.body;
    const newRecord = await Policia3.create({
      personalNumber,
      fullName,
      city,
      phone,
      email,
      selectedOption,
      station,
      reason,
      dek,
    });
    res
      .status(201)
      .json({ message: "Data saved successfully", record: newRecord });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /api/kesco-bills:
 *   post:
 *     summary: Insert data into kesco_bills
 *     tags: [Kesco Bills]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - region
 *               - reference
 *             properties:
 *               region:
 *                 type: string
 *                 description: The region for which the bill is issued
 *               reference:
 *                 type: string
 *                 description: Reference number of the bill
 *     responses:
 *       200:
 *         description: Returns the newly created bill record
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the newly created bill
 *                 region:
 *                   type: string
 *                 reference:
 *                   type: string
 *       500:
 *         description: Error occurred while saving the data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Detailed error message
 */
app.post("/api/kesco-bills", async (req, res) => {
  try {
    const { region, reference } = req.body;
    const newBill = await KescoBill.create({
      region,
      reference,
    });
    res.json(newBill);
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Error saving data" });
  }
});

/**
 * @swagger
 * /api/kesco-bills/search:
 *   post:
 *     summary: Search for a bill in kesco_bills
 *     tags: [Kesco Bills]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - region
 *               - reference
 *             properties:
 *               region:
 *                 type: string
 *                 description: The region associated with the bill
 *               reference:
 *                 type: string
 *                 description: Reference number of the bill to be searched
 *     responses:
 *       200:
 *         description: Search result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 found:
 *                   type: boolean
 *                   description: Indicates if the bill was found
 *                 record:
 *                   type: object
 *                   description: The bill record if found
 *       500:
 *         description: Error occurred while searching the data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Detailed error message
 */
app.post("/api/kesco-bills/search", async (req, res) => {
  try {
    const { region, reference } = req.body;
    console.log("Received search parameters:", { region, reference });
    if (!region || !reference) {
      return res
        .status(400)
        .json({ error: "Region and reference are required" });
    }
    const record = await KescoBill.findOne({ where: { region, reference } });
    if (record) {
      res.json({ found: true, record });
    } else {
      res.json({ found: false });
    }
  } catch (error) {
    console.error("Error searching data:", error);
    res.status(500).json({ error: "Error searching data" });
  }
});
/**
 * @swagger
 * /api/donacioni:
 *   post:
 *     summary: Create a new donation entry
 *     tags: [Donacioni]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - amount
 *               - reference
 *             properties:
 *               amount:
 *                 type: number
 *                 format: float
 *                 description: The amount of the donation
 *               reference:
 *                 type: string
 *                 description: Reference number or identifier for the donation
 *     responses:
 *       201:
 *         description: Donation created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the created donation
 *                 amount:
 *                   type: number
 *                   format: float
 *                 reference:
 *                   type: string
 *       500:
 *         description: Internal server error occurred while saving the donation
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 */
app.post("/api/donacioni", async (req, res) => {
  try {
    const { amount, reference } = req.body;
    const donation = await Donacioni.create({ amount, reference });
    res.status(201).json(donation);
  } catch (error) {
    console.error("Error saving donation:", error);
    res.status(500).send("Internal Server Error");
  }
});
/**
 * @swagger
 * /api/verifikimi/{ref}:
 *   get:
 *     summary: Retrieve verification data by reference
 *     tags: [Verifikimi]
 *     parameters:
 *       - in: path
 *         name: ref
 *         required: true
 *         schema:
 *           type: string
 *         description: The reference identifier of the verification record
 *     responses:
 *       200:
 *         description: Verification data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID of the verification record
 *                 ref:
 *                   type: string
 *                   description: Reference identifier of the record
 *                 details:
 *                   type: object
 *                   description: Additional details of the verification
 *       404:
 *         description: Banderola not found
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *       500:
 *         description: Server error occurred while fetching the data
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 */
app.get("/api/verifikimi/:ref", async (req, res) => {
  try {
    const { ref } = req.params;
    const verifikimi = await Verifikimi.findOne({ where: { ref } });
    if (verifikimi) {
      res.status(200).json(verifikimi);
    } else {
      res.status(404).send("Banderola not found");
    }
  } catch (error) {
    console.error("Error fetching banderola:", error);
    res.status(500).send("Server error");
  }
});

/**
 * @swagger
 * /api/dokElektronike/{ref}:
 *   get:
 *     summary: Retrieve an electronic document by reference number
 *     tags: [DokElektronike]
 *     parameters:
 *       - in: path
 *         name: ref
 *         required: true
 *         schema:
 *           type: string
 *         description: The reference number of the electronic document
 *     responses:
 *       200:
 *         description: Electronic document retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID of the document
 *                 ref:
 *                   type: string
 *                   description: Reference number of the document
 *                 data:
 *                   type: object
 *                   description: Additional details of the document
 *       404:
 *         description: Number not match
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *       500:
 *         description: Server error occurred while fetching the data
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 */
app.get("/api/dokElektronike/:ref", async (req, res) => {
  try {
    const { ref } = req.params;
    const dokElektronike = await DokElektronike.findOne({ where: { ref } });
    if (dokElektronike) {
      res.status(200).json(dokElektronike);
    } else {
      res.status(404).send("Number not match");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Server error");
  }
});

const { FamilyDoctorSelection } = require("./db");
app.post("/registerRequest", (req, res) => {
  console.log("Request received", req.body);
  const {
    selectedOption1: requestType,
    selectedOption2: healthInstitution,
    selectedOption3: familyDoctor,
    aprovoj: approved,
  } = req.body;

  FamilyDoctorSelection.create({
    requestType,
    healthInstitution,
    familyDoctor,
    approved,
  })
    .then((selection) => res.status(201).send(selection))
    .catch((error) => {
      console.error("Error:", error);
      res
        .status(500)
        .json({
          message: "Failed to register the request due to server error.",
        });
    });
});

/**
 * @swagger
 * /api/fatura-per:
 *   post:
 *     summary: Create a new invoice entry for a person
 *     tags: [FaturaPer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - nrPersonal
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: First name of the person
 *               lastName:
 *                 type: string
 *                 description: Last name of the person
 *               nrPersonal:
 *                 type: string
 *                 description: Personal number of the person
 *     responses:
 *       201:
 *         description: Invoice entry created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the newly created invoice entry
 *                 firstName:
 *                   type: string
 *                 lastName:
 *                   type: string
 *                 nrPersonal:
 *                   type: string
 *       500:
 *         description: Internal server error occurred while creating the invoice entry
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 */
app.post("/api/fatura-per", async (req, res) => {
  try {
    const { firstName, lastName, nrPersonal } = req.body;
    const newFaturaPer = await FaturaPer.create({
      firstName,
      lastName,
      nrPersonal,
    });
    res.status(201).json(newFaturaPer);
  } catch (error) {
    console.error("Failed to create new FaturaPer entry:", error);
    res.status(500).send("Internal Server Error");
  }
});

/**
 * @swagger
 * /api/fatura-per/{nrPersonal}:
 *   get:
 *     summary: Retrieve a FaturaPer entry by personal number
 *     tags: [FaturaPer]
 *     parameters:
 *       - in: path
 *         name: nrPersonal
 *         required: true
 *         schema:
 *           type: string
 *         description: The personal number of the individual to fetch the invoice for
 *     responses:
 *       200:
 *         description: FaturaPer entry retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the FaturaPer entry
 *                 firstName:
 *                   type: string
 *                   description: First name of the person
 *                 lastName:
 *                   type: string
 *                   description: Last name of the person
 *                 nrPersonal:
 *                   type: string
 *                   description: Personal number of the person
 *       404:
 *         description: FaturaPer not found
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *       500:
 *         description: Server error occurred while fetching the FaturaPer entry
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 */
app.get("/api/fatura-per/:nrPersonal", async (req, res) => {
  try {
    const { nrPersonal } = req.params;
    const faturaPer = await FaturaPer.findOne({ where: { nrPersonal } });
    if (faturaPer) {
      res.status(200).json(faturaPer);
    } else {
      res.status(404).send("FaturaPer not found");
    }
  } catch (error) {
    console.error("Error fetching FaturaPer:", error);
    res.status(500).send("Server error");
  }
});

/**
 * @swagger
 * /auto-regjistrim:
 *   post:
 *     summary: Submit AutoRegjistrim entry
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AutoRegjistrim'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AutoRegjistrim'
 *       500:
 *         description: Internal Server Error
 */
app.post("/api/auto-regjistrim", async (req, res) => {
  try {
    const {
      autoTipi,
      regjistrimiRi,
      ndryshimiPronarit,
      komuna,
      marka,
      motorCcm,
    } = req.body;
    const newAutoRegjistrim = await AutoRegjistrim.create({
      autoTipi,
      regjistrimiRi,
      ndryshimiPronarit,
      komuna,
      marka,
      motorCcm,
    });

    // Generate PDF
    const doc = new PDFDocument();
    let filename = `AutoRegjistrim-${newAutoRegjistrim.id}.pdf`;
    filename = encodeURIComponent(filename) + ".pdf";

    res.setHeader(
      "Content-disposition",
      'attachment; filename="' + filename + '"',
    );
    res.setHeader("Content-type", "application/pdf");

    doc.text(`Auto Tipi: ${newAutoRegjistrim.autoTipi}`);
    doc.text(`Regjistrimi Ri: ${newAutoRegjistrim.regjistrimiRi}`);
    doc.text(`Ndryshimi Pronarit: ${newAutoRegjistrim.ndryshimiPronarit}`);
    doc.text(`Komuna: ${newAutoRegjistrim.komuna}`);
    doc.text(`Marka: ${newAutoRegjistrim.marka}`);
    doc.text(`Motor CCM: ${newAutoRegjistrim.motorCcm}`);

    doc.pipe(res);
    doc.end();
  } catch (error) {
    console.error(
      "Error saving AutoRegjistrim data and generating PDF:",
      error,
    );
    res.status(500).send("Internal Server Error");
  }
});

// Endpoint to save AutoB form data and generate PDF
app.post("/api/autob", async (req, res) => {
  try {
    const {
      autoType,
      ownerType,
      englishRegistration,
      mathsRegistration,
      personalNumber,
      registrationType,
      municipality,
      marka,
      engineCapacity,
    } = req.body;

    const newAutoB = await AutoB.create({
      autoType,
      ownerType,
      englishRegistration,
      mathsRegistration,
      personalNumber,
      registrationType,
      municipality,
      marka,
      engineCapacity,
    });

    const doc = new PDFDocument();
    const pdfPath = path.join(__dirname, "AutoB_" + personalNumber + ".pdf");
    const stream = fs.createWriteStream(pdfPath);

    doc.pipe(stream);
    doc.text("AutoB Registration Details");
    doc.text(`Auto Type: ${autoType}`);
    doc.text(`Owner Type: ${ownerType}`);
    doc.text(`New Registration: ${englishRegistration}`);
    doc.text(`Owner Change: ${mathsRegistration}`);
    doc.text(`Personal Number: ${personalNumber}`);
    doc.text(`Registration Type: ${registrationType}`);
    doc.text(`Municipality: ${municipality}`);
    doc.text(`Marka: ${marka}`);
    doc.text(`Engine Capacity: ${engineCapacity}`);
    doc.end();

    stream.on("finish", () => {
      res.download(pdfPath, "AutoB_" + personalNumber + ".pdf", (err) => {
        if (err) {
          console.error("Error sending the file:", err);
          res.status(500).send("Error downloading the file");
        }
        fs.unlinkSync(pdfPath); // Remove the file after sending
      });
    });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send("Server Error");
  }
});

app.post("/api/auto-ps", async (req, res) => {
  try {
    const autoPData = req.body;
    const newAutoP = await AutoP.create(autoPData);

    // Generate PDF
    const doc = new PDFDocument();
    const fileName = `AutoP_${newAutoP.personalNumber}.pdf`;
    const filePath = path.join(__dirname, fileName);
    doc.pipe(fs.createWriteStream(filePath));
    doc.text(`Personal Number: ${newAutoP.personalNumber}`);
    doc.text(`Full Name: ${newAutoP.fullName}`);
    doc.text(`City: ${newAutoP.city}`);
    doc.text(`Address: ${newAutoP.address}`);
    doc.text(`Registration Type: ${newAutoP.registrationType}`);
    doc.text(`Expiration Date: ${newAutoP.expirationDate}`);
    doc.text(`Approved: ${newAutoP.approved}`);
    doc.end();

    res.status(201).json({ message: "Data saved and PDF generated", fileName });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/download-pdf/:file", (req, res) => {
  const filePath = path.join(__dirname, req.params.file);
  res.download(filePath, (err) => {
    if (err) {
      console.error("Error downloading file:", err);
      res.status(500).json({ error: "Error downloading file" });
    }
  });
});

//Save data in ApLehonat
app.post("/api/ap_lehonat", async (req, res) => {
  try {
    const newApLehonat = await ApLehonat.create(req.body);
    res
      .status(201)
      .json({ message: "Data saved successfully", data: newApLehonat });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send("Internal Server Error");
  }
});

//Save data for ApFemije
app.post("/api/ap_femije", async (req, res) => {
  try {
    const newApFemije = await ApFemije.create(req.body);
    res
      .status(201)
      .json({ message: "Data saved successfully", data: newApFemije });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Endpoint to save CertiFam data
app.post("/api/certi-fam", async (req, res) => {
  try {
    const { document_type, description } = req.body;
    const newCertiFam = await CertiFam.create({ document_type, description });
    res
      .status(201)
      .json({ message: "Data saved successfully", data: newCertiFam });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Endpoint to save CertiFam data
app.post("/api/certi-fam", async (req, res) => {
  try {
    const { document_type, description } = req.body;
    const newCertiFam = await CertiFam.create({ document_type, description });
    res
      .status(201)
      .json({ message: "Data saved successfully", data: newCertiFam });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/api/certi-fam/:id/download", async (req, res) => {
  try {
    const certiFam = await CertiFam.findByPk(req.params.id);
    if (!certiFam) {
      return res.status(404).send("Data not found");
    }

    const doc = new PDFDocument();
    const filePath = path.join(__dirname, `CertiFam_${certiFam.id}.pdf`);
    doc.pipe(fs.createWriteStream(filePath));
    doc.text(`Document Type: ${certiFam.document_type}`);
    doc.text(`Description: ${certiFam.description}`);
    doc.end();

    doc.on("finish", () => {
      res.download(filePath, (err) => {
        if (err) {
          console.error("Error downloading file:", err);
          res.status(500).send("Error downloading file");
        }
        fs.unlinkSync(filePath);
      });
    });
  } catch (error) {
    console.error("Error fetching data and generating PDF:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/api/adpostare", async (req, res) => {
  try {
    const { Komuna, Vendbanimi, Numri, Rruga, Kodi, selectedOption } = req.body;

    const newAdPostare = await AdPostare.create({
      Komuna,
      Vendbanimi,
      Numri,
      Rruga,
      Kodi,
      selectedOption,
    });

    res
      .status(201)
      .json({ message: "Data saved successfully", data: newAdPostare });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint to save Deklarimi data
app.post("/api/deklarimi", async (req, res) => {
  try {
    const { antarsim, canetaresimin, selectedOption } = req.body;

    const newDeklarimi = await Deklarimi.create({
      antarsim,
      canetaresimin,
      selectedOption,
    });

    res
      .status(201)
      .json({ message: "Data saved successfully", data: newDeklarimi });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

/// Endpoint to save Vula data
app.post("/api/vula", async (req, res) => {
  try {
    const { personalNumber, fullName, city, email } = req.body;
    const newVula = await Vula.create({
      personalNumber,
      fullName,
      city,
      email,
    });
    res.status(201).json({ message: "Data saved successfully", data: newVula });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint to delete Vula data
app.delete("/api/vula", async (req, res) => {
  try {
    const { personalNumber } = req.body;
    const result = await Vula.destroy({ where: { personalNumber } });
    if (result) {
      res.status(200).json({ message: "Data deleted successfully" });
    } else {
      res.status(404).json({ error: "Data not found" });
    }
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
