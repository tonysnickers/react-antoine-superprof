import { User } from "models/user";
import React, { createContext, useContext, useState } from "react";

const defaultUser: User = {
  membershipValidUntil: "",
  isMembershipValid: false,
  isLogged: false,
};

type IUserContext = {
  user: User;
  login: (user: Partial<User>) => void;
  logout: () => void;
};

export const UserContext = createContext<IUserContext>({
  user: defaultUser,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: (_: User) => null,
  logout: () => null,
});

interface IProps {
  children: React.ReactNode;
}

export default function UserStore({ children }: IProps) {
  const [user, setUser] = useState<User>(defaultUser);
  const logout = () => setUser(defaultUser);
  const login = (user: Partial<User>) => {
    setUser({
      membershipValidUntil: user.membershipValidUntil,
      isMembershipValid: new Date() < new Date(user.membershipValidUntil),
      isLogged: true,
    });
  };
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
