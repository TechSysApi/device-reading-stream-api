var variables={
  "name": "@ch-post-app-atg-logistics/device-reading-stream-api",
  "version": "0.2.1",
  "description": "Device Reading Stream API",
  "scripts": {
    "start": "apikana start src dist",
    "stop": "apikana stop",
    "create-sample": "apikana create-sample",
    "validate-samples": "apikana validate-samples",
    "test": "eslint src --ext .ts && apikana validate-samples",
    "lint": "eslint src --ext .ts",
    "lint-fix": "eslint src --ext .ts --fix",
    "prepublishOnly": "npm test"
  },
  "author": "petersimo",
  "license": "Apache-2.0",
  "dependencies": {},
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^4.13.0",
    "@typescript-eslint/parser": "^4.13.0",
    "apikana": "0.9.34",
    "apikana-defaults": "0.0.94",
    "eslint": "^7.17.0",
    "eslint-config-prettier": "^7.1.0",
    "eslint-plugin-prettier": "^3.3.1",
    "prettier": "^2.2.1",
    "typescript": "^4.1.3"
  },
  "customConfig": {
    "type": "stream-api",
    "domain": "post.ch",
    "author": "petersimo",
    "namespace": "app.atg.logistics.device.reading",
    "shortName": "device-reading",
    "projectName": "device-reading-stream-api",
    "title": "Device Reading Stream API",
    "plugins": [
      "maven",
      "dotnet",
      "readme"
    ],
    "javaPackage": "ch.post.app.atg.logistics.device.reading.v1",
    "mavenGroupId": "ch.post.app.atg.logistics.device.reading",
    "dotnetNamespace": "Ch.Post.App.Atg.Logistics.Device.Reading.V1",
    "dotnetPackageId": "Ch.Post.App.Atg.Logistics.Device.Reading.StreamApi",
    "mqs": "MQTT",
    "avro": {
      "enumAsString": true
    }
  },
  "_": [
    "start",
    "src",
    "dist"
  ]
}