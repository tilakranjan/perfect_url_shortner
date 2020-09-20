# perfect_url_shortner

Express application to create and share short url. Great from internal projects.

## Requirement

```
node js
mongoDB
```

## Installation

```bash
git clone https://github.com/tilakranjan/perfect_url_shortner.git
cd perfect_url_shortner
npm i
node server.js
```


## Update lib/config:
This file contains the following default settings. You can configure this as per your need.

```
server_port: 3001,
baseUrl: "http://localhost:3001",
dbUrl: 'mongodb://localhost:27017/shortUrl',
shortUrlCodeLength: 6
```

## Postman collection
```
https://www.getpostman.com/collections/4fa95e37adb553ee4c17
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to add and update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)