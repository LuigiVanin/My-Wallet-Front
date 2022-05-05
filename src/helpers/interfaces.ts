interface ISignIn {
    email: string;
    password: string;
}

interface ISignUp {
    name: string;
    email: string;
    password: string;
    password2: string;
}

export type { ISignIn, ISignUp };
