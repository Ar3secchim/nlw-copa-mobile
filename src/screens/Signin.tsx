import { Center, Text, Icon } from "native-base";
import { Fontisto } from "@expo/vector-icons"
import { useAuth } from "../hooks/useAth";

import { Button } from "../components/Button";
import Logo from "../assets/logo.svg"

export function Singin(){
  const { signIn, user } = useAuth();

  return(
    <Center flex={1} bg="gray.900" p={7} >
      <Text color="white" fontSize={24} fontFamily="heading">
        <Logo width={212} height={40}/>
      </Text>

      <Button
        type='SECONDARY'
        leftIcon={ <Icon as={Fontisto} name='google' color='white' size='md' /> }
        title=" ENTRAR COM O GOOGLE"
        mt={12}
        onPress={ signIn }
      />

      <Text color="white" fontSize={14} textAlign="center" mt={4}>
        Não utilizamos nenhuma informação além {'\n'}
        do seu e-mail para criação de sua conta.
      </Text>
    </Center>
  )
}