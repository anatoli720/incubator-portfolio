import React from "react";
import { Logo } from "../../components/logo/logo";
import { DesctopMenu } from "./headerMenu/desctopMenu/DesctopMenu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";
import { S } from "./Header_Styles";


export const Header: React.FC<{menuIcons: Array<string>, menuItems: Array<string>}>= (props: {
  menuIcons: Array<string>, menuItems: Array<string>}) => {
  
      const [width, setWidth] = React.useState(window.innerWidth);
      const breakpoint = 768;
      React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
    
        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
      }, []);
   
  return (
    <S.Header>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
        <Logo />
        {width > breakpoint ? <DesctopMenu menuItems={props.menuItems} menuIcons={props.menuIcons} /> : <MobileMenu  menuItems={props.menuItems}/>}
        </FlexWrapper>       
      </Container>
    </S.Header>
  );
}


