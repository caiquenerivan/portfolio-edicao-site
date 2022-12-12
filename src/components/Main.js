import React from "react";
import { NavBar, Menu, Sociais, Ul, Li, Ponto, Principal, LogoSocial } from "../styles/mainStyle";
import { Box, Title, A } from "../styles/styles";
import behance from '../imgs/behance-144.png';
import linkedin from '../imgs/linkedin-240.png';
import github from '../imgs/github-384.png';
import instagram from '../imgs/instagram-384.png';
import artstation from '../imgs/artstation.svg';

export default function Main(){

    return(
        <Box>
            <NavBar>
                <Title>
                    CN<Ponto>.</Ponto>
                </Title>
                <Menu>
                    <Ul>
                        <Li><A href='#'>Home</A></Li>
                        <Li><A href='#'>Skills</A></Li>
                        <Li><A href='#'>Portfolio</A></Li>
                        <Li><A href='#'>Sobre</A></Li>
                        <Li><A href='#'>Contato</A></Li>
                    </Ul>
                </Menu>
                <Sociais>
                    <Ul>
                        <Li>
                            <A href="https://www.linkedin.com/in/caiquenerivan/" target="_blank">
                                <LogoSocial src={linkedin} alt="linkedin"/>
                            </A>
                        </Li>
                        
                        <Li>
                            <A href="https://github.com/caiquenerivan" target="_blank">
                                <LogoSocial src={github} alt="github"/>
                            </A>
                        </Li>
                        
                        <Li>
                            <A href="https://www.behance.net/caiquenerivan" target="_blank">
                                <LogoSocial src={behance} alt="behance"/>
                            </A>
                        </Li>
                        
                        <Li>
                            <A href="https://www.instagram.com/craquenerivan/" target="_blank">
                                <LogoSocial src={instagram} alt="instagram"/>
                            </A>
                        </Li>

                        <Li>
                            <A href="https://www.artstation.com/caiquenerivan" target="_blank">
                                <LogoSocial src={artstation} alt="artstation"/>
                            </A>
                        </Li>
                    </Ul>
                </Sociais>
            </NavBar>
            <Principal>

            </Principal>
        </Box>
    );

} 