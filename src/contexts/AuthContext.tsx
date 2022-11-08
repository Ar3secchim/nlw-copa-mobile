import { createContext, ReactNode } from "react";

interface UserProps{
  name: String,
  avatarUrl: String
}

export interface AuthContextDataProps{
  user: UserProps
  signIn: () => Promise<void>
}
interface AuthProviderProps{
  children: ReactNode
}

// armazenar contexto
export const AuthContext = createContext({ } as AuthContextDataProps) /* tipagem do que vai ser compartilhada*/

// cpmpartilha a informação
export function AuthContextProvider({ children }: AuthProviderProps){

  async function signIn() {
    console.log('vamos logar')
  }

  return(
    <AuthContext.Provider value={{
      signIn,
      user:{
        name: "Renara",
        avatarUrl: "https://github.com/ar3secchim.png"
      }
    }}>
      { children }
    </AuthContext.Provider>
  )
}