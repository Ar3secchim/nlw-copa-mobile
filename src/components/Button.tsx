import { Button as ButtonNativeBase, Text, IButtonProps } from "native-base"

interface Props extends IButtonProps{
  title: string,
  type?:'PRIMARY'| 'SENCODARY'
}


export function Button({title, type = "PRIMARY", ...rest }: Props){
  return(
    <ButtonNativeBase
      w='full'
      h = {14}
      rounded="sm"
      fontSize="md"
      textTransform="uppercase"
      bg={type === 'SENCODARY' ? "red.500" : "yellow.500"}
      _pressed={{
        bg: type === 'SENCODARY' ? "red.600" : "yellow.600"
      }}
      _loading={{
        _spinner:{color: 'black'}
      }}
      {...rest}
    >
      <Text
        fontSize='sm'
        color= {
          type === 'SENCODARY'? 'white' : 'black'
        }
      >
        {title}
      </Text>
    </ButtonNativeBase>
  )
}