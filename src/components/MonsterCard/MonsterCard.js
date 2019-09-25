import React from 'react';
import MeleeBasic from '../../img/melee-basic.png';
import { CardWrapper, TitleBlock, MonsterName, MonsterRole, MonsterType, ExperiencePoints, StatBlock, HitPoints, Initiative, Defenses, Senses, Movement, ExtraSenses, SavingThrows, Label, ActionBlock, ActionTitle, ActionNameBlock, ActionName, ActionIcon } from './style';

class MonsterCard extends React.Component {
    render() {
        return (
            <>
                <CardWrapper>
                    <TitleBlock>
                        <MonsterName>Silk Wyrm Elder</MonsterName>
                        <MonsterRole>Level 14 Skirmisher</MonsterRole>
                        <MonsterType>Large natural magical beast (reptile)</MonsterType>
                        <ExperiencePoints>XP 200</ExperiencePoints>
                    </TitleBlock>
                    <StatBlock>
                        <HitPoints>
                            <Label>HP</Label> 56;&nbsp;
                            <Label>Bloodied</Label> 28
                        </HitPoints>
                        <Initiative>
                            <Label>Initiative</Label> +16
                        </Initiative>
                        <Defenses>
                            <Label>AC</Label> 28;&nbsp;
                            <Label>Fortitude</Label> 26;&nbsp;
                            <Label>Reflex</Label> 28;&nbsp;
                            <Label>Will</Label> 25
                        </Defenses>
                        <Senses>
                            <Label>Perception</Label> +17
                        </Senses>
                        <Movement>
                            <Label>Speed</Label> 6, fly 8 (clumsy)
                        </Movement>
                        <ExtraSenses>
                            Low-light vision
                        </ExtraSenses>
                        <SavingThrows>
                            <Label>Saving Throws</Label> +5 against immobilized or slowed
                        </SavingThrows>
                    </StatBlock>
                    <ActionBlock>
                        <ActionTitle>
                            Traits
                        </ActionTitle>
                        <ActionNameBlock>
                            <ActionIcon>
                                <img src={MeleeBasic} alt={MeleeBasic} />    
                            </ActionIcon> 
                            <ActionName>
                                <Label>Bite</Label> (poison) ♦ <Label>At-Will</Label>
                            </ActionName>
                        </ActionNameBlock>
                    </ActionBlock>
                </CardWrapper>
            </>
        );
    }
}

export default MonsterCard;