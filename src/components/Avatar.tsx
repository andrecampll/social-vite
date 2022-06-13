import { Image } from "@chakra-ui/react";

type Props = {
  url: string;
  hasBorder?: boolean;
}

export const Avatar = ({ url, hasBorder = true }: Props) => (
  <Image
    src={url}
    w="calc(3rem + 12px)"
    h="calc(3rem + 12px)"
    borderRadius="8"
    border={hasBorder ? "4px solid" : "none"}
    borderColor={hasBorder ? "gray.800" : "none"}
    outline={hasBorder ? "2px solid" : "none"}
    outlineColor={hasBorder ? "green.500" : "none"}
  />
);
