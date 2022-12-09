# AI Image Generator

## This project is composed of nodejs and openAI.

## Installation

### Run npm install (Install All packages)

```
npm install
```

## Folder Structure

```

- models
  - shortUrls.js
- views
  - index.ejs
- server.js

```


## Endpoint: ***/*** Request-Type: ***GET***
```

app.use(express.static(path.join(__dirname, "public")));
# Renders the HTML

```


## Endpoint: ***/openai*** Request-Type: ***POST***
```
    const response = await openai.createImage({ 
      prompt: prompt,
      n: 1,
      size: imageSize,
    });

    const imageUrl = response.data.data[0].url;

    # Request to OPEN-AI for Image-URL    

```

## 🚀 About Me

**Swaraj Kumar Singh** - Android, IOS & Flutter Developer, Full Stack Web developer, Also interested in AI models, Machine Learning and WEB 3.0.


## 🛠 Skills
Javascript, HTML, CSS, REACT, ANGULAR, BOOTSTRAP, TAILWIND, TYPESCRIPT, PHP, NODEJS, DJANGO, EXPRESSJS, MONGODB, FIREBASE, REDIS, WORDPRESS, DYNAMODB, AWS, PYTHON, WEB SCRAPING, SOCKET.IO, JAVA, KOTLIN, DART, FLUTTER, PYTORCH