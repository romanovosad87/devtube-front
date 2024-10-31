import { Amplify } from "aws-amplify"

Amplify.configure({
    Auth: {
        Cognito: {
            userPoolId: "eu-west-3_P9k0OW0Pv",
            userPoolClientId: "7gtgmf8lik3pr3t153umrs98f5",
            identityPoolId: "<your-cognito-identity-pool-id>",
            loginWith: {
                email: true,
            },
            signUpVerificationMethod: "code",
            userAttributes: {
                email: {
                    required: true,
                },
            },
            allowGuestAccess: true,
            passwordFormat: {
                minLength: 8,
                requireLowercase: true,
                requireUppercase: true,
                requireNumbers: true,
                requireSpecialCharacters: true,
            },
        },
    },
})