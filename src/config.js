const config = {
  s3: {
    REGION: "us-west-1",
    BUCKET: "notes-api-shehbaj",
  },
  apiGateway: {
    REGION: "us-west-1",
    URL: "https://ab61b0441e.execute-api.us-west-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-west-1",
    USER_POOL_ID: "us-west-1_6H6JbP5vE",
    APP_CLIENT_ID: "33p8bgnn02so56fodb80nmtv36",
    IDENTITY_POOL_ID: "us-west-1:c2a40137-0eea-4b2b-8189-8474a5ddc847",
  },
  MAX_ATTACHMENT_SIZE: 5000000, //5 MiB
};

export default config;
