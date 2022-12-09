# AI Image Generator

### This project is composed of **Nodejs** and **OpenAI**. This repo generates images based on the prompt given and also stores the data fields form coming from the client side, this project uses a well known AI API which is **OPEN-AI**.

#

## Installation

### Run npm install (Install All packages)

```
npm install
```

## Note:-
### To Run the repository you will to get your own OpenAI api key and create a file key.js and paste the credentials.

```
path: root/config/keys.js

module.exports = {
  OPEN_AI_KEY: "YOUR_OPEN_AI_KEY",
};

```


## Folder Structure

```

- config
  - key.js
- controllers
  - image.controller.js
- db
 - db.js
- models
  - image.model.js
- public
  - css
  - js
  - index.ejs
- routes
  - image.route.js
- server.js

```


## Endpoint: ***/*** Request-Type: ***GET***
```

app.use(express.static(path.join(__dirname, "public")));
# Renders the HTML

```


## Endpoint: ***/openai/generate-image*** Request-Type: ***POST***
```
    const response = await openai.createImage({ 
      prompt: prompt,
      n: 1,
      size: imageSize,
    });

    const imageUrl = response.data.data[0].url;

    # Request to OPEN-AI for Image-URL    

    await model.create({            
      prompt,
      size,
      imageUrl,
    });

    # Store Data to Local-DB

```


## Endpoint: ***/openai/get-images*** Request-Type: ***GET***
```

  const data = await model.find();      # Get All Images

```

## 🚀 About Me

**Swaraj Kumar Singh** - Android, IOS & Flutter Developer, Full Stack Web developer, Also interested in AI models, Machine Learning and WEB 3.0.


## 🛠 Skills
Javascript, HTML, CSS, REACT, ANGULAR, BOOTSTRAP, TAILWIND, TYPESCRIPT, PHP, NODEJS, DJANGO, EXPRESSJS, MONGODB, FIREBASE, REDIS, WORDPRESS, DYNAMODB, AWS, PYTHON, WEB SCRAPING, SOCKET.IO, JAVA, KOTLIN, DART, FLUTTER, PYTORCH