interface Props {
    children: JSX.Element | JSX.Element[];
}

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

interface IUser {
    name: string;
    email: string;
}

interface IAuthContext {
    user: IUser | null;
    token: string | null;
    setUser: (user: IUser) => void;
    setToken: (token: string) => void;
}

interface IHeader {
    where?: undefined | string;
}

type TransferType = 1 | -1;

interface ITransferPage {
    type: TransferType;
}

interface ITransfer {
    title: string;
    value: number;
    type: TransferType;
}

export type {
    ISignIn,
    ISignUp,
    IAuthContext,
    IUser,
    Props,
    IHeader,
    ITransferPage,
    ITransfer,
};
