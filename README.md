# File Converter

File converter is a API to deal with file conversion

## Instalation

Go to the source folder of the project and run one of the following commands

- ```npm install```
- ```yarn```

### Requirements

Make sure you have one of the following libraries installed
- NodeJS
- Yarn (optional)

## Usage

### Development

Go to the source folder of the project and run one of the following commands

- ```npm run dev```
- ```yarn dev```

Then checkout the [swagger documentation](http://localhost:3000/v1/docs)

### Production

If you want to serve the application directly just run one of the following commands

- ```npm run prod```
- ```yarn prod```

If you want to serve the application inside a container run the following commands

```bash
$ docker build . -t file-converter
$ docker-compose up
```