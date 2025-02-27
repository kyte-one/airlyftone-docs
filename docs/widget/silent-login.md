---
sidebar_position: 2
---

# Silent Login

Silent Login allows seamless authentication for users without requiring manual login steps. This integration enhances the user experience by enabling automatic authentication via their wallet signature.

## API Endpoint

To initiate the Silent Login process, make requests to the following API endpoint:

```
https://fuel.airlyft.one/graphql
```

Include the API key in the request header:

```
api-key: 'your secret key'
```

## Steps to Implement Silent Login

### Step 1: Request Signing Message

The first step is to request a signing message that the user will sign with their wallet.

#### Query:

```
query SigningMessage($projectId: ID!, $walletAddress: ID!) {
    signingMessage(projectId: $projectId, walletAddress: $walletAddress)
}
```

### Step 2: Send User’s Signature to Get Auth Token

Once the user signs the message, send the signature to obtain an authentication token.

#### Mutation:

```
mutation EvmLogin($projectId: ID!, $authDto: EvmBlockchainAuthDto!) {
    evmLogin(projectId: $projectId, authDto: $authDto) {
        token
    }
}
```

### Step 3: Pass Auth Token to the Widget Instance

Once the auth token is retrieved, pass it to the AirLyft Widget for authentication.

#### Implementation:

```
<script src="https://assets.airlyft.one/widget/widget.js"></script>
<script>
  (async () => {
      try {
          const widget = await window.AirlyftWidget("YOUR-WIDGET-ID");
          const instance = await widget.createModal({});
          widget.authWithToken(
            instance,
            "USER-AUTH-TOKEN"
          );
      } catch (err) {
          console.error(err)
      }
    })();
</script>
```

This setup allows users to authenticate seamlessly through their wallets, improving accessibility and engagement.
