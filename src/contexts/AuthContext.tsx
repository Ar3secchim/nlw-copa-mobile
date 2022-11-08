import { createContext, ReactNode, useReducer, useState, useEffect } from "react"
import * as Google from  "expo-auth-session/providers/google"
import * as AuthSession from "expo-auth-session"
import * as WebBrowser from "expo-web-browser"

WebBrowser.maybeCompleteAuthSession()

interface UserProps{
  name: String,
  avatarUrl: String,
}

export interface AuthContextDataProps{
  user: UserProps
  isUserLoading: boolean
  signIn: () => Promise<void>
}
interface AuthProviderProps{
  children: ReactNode
}

// armazenar contexto
export const AuthContext = createContext({ } as AuthContextDataProps) /* tipagem do que vai ser compartilhada*/

// compartilha a informação
export function AuthContextProvider({ children }: AuthProviderProps){
  const [ user , setUser ] = useState<UserProps>({} as UserProps)
  const [isUserLoading, setIsUserLoading] = useState( false )

  const [resquest, response, promptAsync] = Google.useAuthRequest({
    clientId: '256776402421-aek3jk52k32vbjirs0a6js5di7bjbsu5.apps.googleusercontent.com',
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    scopes: ['profile', 'email']
  })

  async function signIn() {
    try {
      setIsUserLoading(true)
      await promptAsync()

    } catch (error){
      console.log(error)
      throw error
    } finally{
      setIsUserLoading(false)
    }

  }
  async function signInWithGoogle (access_token: String){
    console.log('TOKEN DE AUTENTICAÇÃO  => ', access_token)
  }

  useEffect(()=> {
    if(response?.type === 'success' && response.authentication?.accessToken){
      signInWithGoogle(response.authentication.accessToken)
    }
  },[response])

  return(
    <AuthContext.Provider value={{
      signIn,
      isUserLoading,
      user
    }}>
      { children }
    </AuthContext.Provider>
  )
}